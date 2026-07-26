import { Dock, Home, Navbar, Welcome } from "#components";
import { Finder, Resume, Safari, Terminal, Text, ImageFile, Contacts, Photos } from "#windows";

import gsap from "gsap";
import { Draggable } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(Draggable, useGSAP);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <ImageFile/>
      <Contacts/>
      <Photos/>
      <Home/>
    </main>
  )
}

export default App