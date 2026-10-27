import Header from "@/components/Header";
import { site } from "@/content/site";
import { Hero, About, Areas, Process, Differentials, FinalCta, Footer } from "@/sections/Sections";
export default function Page() {
  return (<>
    <Header contactHref={site.instagram} />
    <main><Hero /><About /><Areas /><Process /><Differentials /><FinalCta /></main>
    <Footer />
  </>);
}
