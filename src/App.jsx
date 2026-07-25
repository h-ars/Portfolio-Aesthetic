import { Dock, Navbar, Welcome } from "#components";
import { Terminal } from "#windows";

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
    </main>
  )
}

export default App