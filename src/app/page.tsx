import Authorcard from "@/app/authorcard/page";
import Features from "@/app/features/page";
import Mega from "@/app/mega/page";
import Contact from "./contact/page";


export default function Home() {
  return (
    <div>
      <Authorcard/>
      <Features/>
      <Mega/>
      <Contact/>
    </div>
  );
}
