import { useEffect, useState } from "react";
import Link from "@docusaurus/Link";

export default function Blogs() {
  const [articles, setArticles] = useState([]);

  // will replace with doc blogs once deployed, rss feed for docusaurus doesn't work locally
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://blog.harpie.io/feed"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items ?? []));
  }, []);

  if (articles.length === 0) return;

  return (
    <div className="px-8 pt-8 mx-auto max-w-screen-2xl lg:px-20 md:px-12">
      <p className="text-2xl font-semibold lg:text-4xl md:text-3xl">
        Browse Blogs
      </p>

      <div className="flex justify-between gap-6 py-5 overflow-scroll scrollbar-hide">
        {articles.slice(0, 3).map((article, idx) => {
          const firstImage = article.description
            .toString()
            .match(/<img[^>]+src="([^">]+)"/)[1];
          return (
            <Link
              key={idx}
              href={article.link}
              className="flex-1 max-w-2xl p-px text-white transition duration-100 ease-in-out bg-gradient-to-tl to-blue-500/30 from-sky-400/30 rounded-xl hover:scale-105 min-w-80"
            >
              <div className="flex flex-col h-full p-3 bg-neutral-950/95 rounded-xl">
                <div className="relative w-full h-56">
                  <img
                    loading="eager"
                    draggable="false"
                    src={firstImage ?? "/images/generic.png"}
                    alt={article.title}
                    className="rounded-md"
                    layout="fill"
                  />
                </div>
                <div
                  className="flex flex-col justify-between flex-grow mx-1 mt-2 font-sans text-lg"
                >
                  <p className="pb-2">{article.title}</p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-7 h-7">
                      <img
                        loading="eager"
                        draggable="false"
                        src="/img/Harpie-Logomark-Orange.svg"
                        alt={article.title}
                        layout="fill"
                      />
                    </div>
                    <p className="font-semibold">{article.author}</p>
                    <p className="text-xs">▫</p>
                    <p>
                      {new Date(article.pubDate).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
