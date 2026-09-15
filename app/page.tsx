import { LocaleProvider } from "./i18n";
import { SiteHeader } from "./components/site-header";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";
import { WorkMethod } from "./components/work-method";
import { TechStack } from "./components/tech-stack";
import { Contact } from "./components/contact";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return (
    <LocaleProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <WorkMethod />
        <TechStack />
        <Contact />
      </main>
      <SiteFooter />
    </LocaleProvider>
  );
}
