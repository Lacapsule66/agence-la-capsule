
import Image from "next/image";
import First from "./components/First";
import Mission from "./components/Mission";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import LastCreate from "./components/Lastcreate";
import { anim } from "./anim/anim";
import Seo from "./components/Seo";
import Phone from "./components/Phone";
import Techno from "./components/Techo";


export default function Home() {
  return (
    <>
      <First />
      <Mission />
      <Pricing />
      <Seo />
      <LastCreate />
      <Techno />
      <Team />


    </>
  );
}
