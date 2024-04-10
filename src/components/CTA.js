import Link from "@docusaurus/Link";

export default function CTA() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="my-20 z-0 grid lg:grid-cols-2 border border-sky-300/30 relative mx-8 lg:mx-20 md:mx-12 p-8 md:p-12 lg:p-20 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] to-gray-900/10 from-0 from-cyan-600/90 to-85 text-center rounded-3xl">
        <p className="max-w-md mb-2 text-3xl leading-tight text-left md:text-4xl lg:text-5xl lg:mb-0">
          The end of crypto theft starts here.
        </p>
        <div className="">
          <p className="max-w-2xl pb-4 text-lg font-thin leading-tight text-left md:text-xl lg:text-2xl">
            The most advanced wallet protection to keep your crypto from hacks
            and scams. Harpie monitors for risks, blocks detected threats, and
            recovers stolen assets—all in real time.
          </p>
          <Link
            className="mb-4 px-6 md:px-9 w-max flex xs:flex-nowrap py-2.5 cursor-pointer bg-gradient-to-l to-harpie via-harpie from-orange-400 rounded-3xl hover:shadow-[0px_0px_26px_-1px_#FF8C50CC] duration-150 hover:no-underline"
            href="https://harpie.io/onboarding/basic"
          >
            <span className="flex items-center gap-2 mx-auto text-sm text-white whitespace-nowrap xs:flex-nowrap flex-nowrap md:text-base lg:text-lg">
              GET STARTED FOR FREE
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
