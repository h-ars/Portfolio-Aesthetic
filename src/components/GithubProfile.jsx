import { useEffect, useState } from "react";
import { Users, BookMarked, Star, GitFork, ExternalLink } from "lucide-react";

const GITHUB_USERNAME = "h-ars"; // 👈 swap for your actual handle

const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
};

const GithubProfile = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=5`),
        ]);

        if (!profileRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        if (!cancelled) {
          setProfile(profileData);
          setRepos(reposData);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    load();
    return () => { cancelled = true; };
  }, []);

  if (status === "loading") {
    return <div className="github-widget flex-center text-sm opacity-60">Loading profile…</div>;
  }

  if (status === "error") {
    return (
      <div className="github-widget flex-center text-sm opacity-60">
        Couldn't load GitHub profile right now.
      </div>
    );
  }

    return (
    <div className="github-widget">
        <div className="gh-profile-card">
        <img src={profile.avatar_url} alt={profile.login} className="gh-avatar" />
        <div className="flex flex-col gap-1">
            <span className="gh-name">{profile.name || profile.login}</span>
            <span className="gh-handle">@{profile.login}</span>
            {profile.bio && <p className="gh-bio">{profile.bio}</p>}

            <div className="gh-stats">
            <span className="gh-stat-pill">
                <BookMarked className="w-3.5 h-3.5" /> {profile.public_repos} repos
            </span>
            <span className="gh-stat-pill">
                <Users className="w-3.5 h-3.5" /> {profile.followers} followers
            </span>
            </div>
        </div>
        </div>

        <div className="gh-repo-list">
        {repos.map((repo) => (
            <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="gh-repo-item">
            <div className="flex flex-col">
                <span className="gh-repo-name">
                {repo.name}
                <ExternalLink className="w-3 h-3 opacity-50" />
                </span>
                {repo.description && <span className="gh-repo-desc">{repo.description}</span>}
            </div>

            <div className="gh-repo-meta">
                {repo.language && (
                <span className="flex items-center">
                    <span className="gh-lang-dot" style={{ background: LANGUAGE_COLORS[repo.language] || "#999" }} />
                    {repo.language}
                </span>
                )}
                <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {repo.stargazers_count}</span>
                <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {repo.forks_count}</span>
            </div>
            </a>
        ))}
        </div>
    </div>
    );
};

export default GithubProfile;