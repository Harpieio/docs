import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CTA from "@site/src/components/CTA";
import Contact from "@site/src/components/Contact";
import Blogs from "@site/src/components/Blogs";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import SuggestedArticles from "@site/src/components/SuggestedArticles";
import Search from "../theme/SearchBar";

function HomepageHeader() {
  return (
    <header className="[background:linear-gradient(180deg,#25004B_0%,#0E002D_100%)] [border-bottom:2px_solid_#1A1127] grid px-8 py-6 md:grid-cols-2 md:py-8 lg:pb-10 lg:pt-10 lg:px-16 md:px-10">
      <div className="pt-20 pb-16 space-y-10 md:pb-0">
        <h1 className="max-w-md text-4xl font-semibold xs:text-4xl md:max-w-xl lg:text-5xl opacity-85 text-[#F0E2FF]">
          Welcome to Harpie!
        </h1>
        <h2 className="max-w-sm text-base font-light md:max-w-xl md:text-lg lg:text-xl opacity-85 text-[#C4ABDD]">
          The most advanced wallet security tool to protect your crypto from
          hacks and scams.
        </h2>
        <div className="flex flex-col gap-6 sm:gap-10 sm:items-center sm:flex-row button-container">
          <Link
            href="/docs/docs/official-contract-addresses"
            className="flex px-8 text-black py-2.5 cursor-pointer bg-[#D694FF] rounded-sm w-max"
          >
            <span className="flex items-center gap-2 mx-auto text-sm font-semibold whitespace-nowrap flex-nowrap md:text-base lg:text-lg">
              Get Started
            </span>
          </Link>
          <Search />
        </div>
      </div>
      <img
        src="img/hero.png"
        alt="Harpie docs"
        className="hidden w-[90%] h-[95%] md:block"
        draggable="false"
      />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <SuggestedArticles />
        <Blogs />
        <Contact />
        <CTA />
      </main>
    </Layout>
  );
}
