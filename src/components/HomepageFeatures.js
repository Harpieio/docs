import clsx from "clsx";
import Heading from "@theme/Heading";

const FeatureList = [
  {
    title: "Protection & Recovery",
    src: require("@site/static/img/shield.png").default,
    description: <>Edit descriptions here</>,
  },
  {
    title: "Wallet 2FA",
    src: require("@site/static/img/connection.png").default,
    description: <>Edit descriptions here</>,
  },
  {
    title: "Background Check API",
    src: require("@site/static/img/lock.png").default,
    description: <>Edit descriptions here</>,
  },
];

function Feature({ src, title, description }) {
  return (
    <div
      className={clsx(
        "flex-auto rounded-3xl border-2 py-8 px-6 border-[#251F2F] border-solid text-[#E9D4FF]"
      )}
    >
      <div className="text--center">
        <img src={src} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="px-8 mx-auto py-14 max-w-screen-2xl lg:px-20 md:px-12">
      <div className="flex flex-col gap-20 md:flex-row">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
