import Link from "@docusaurus/Link";

export default function Contact() {
  return (
    <div className="flex flex-col gap-20 px-8 mx-auto my-20 sm:flex-row max-w-screen-2xl lg:px-20 md:px-12">
      <Link
        href="https://intercom.help/harpie/en/"
        className="flex-auto rounded-2xl p-8 text-lg md:text-xl border-2 border-solid border-[#251F2F] hover:no-underline hover:scale-105 transition duration-100 ease-in-out"
      >
        <p className="text-[#E9D4FF] font-normal max-w-56">
          Can’t find what you’re looking for?
        </p>
        <p className="text-[#FF00D6]">Contact us →</p>
      </Link>
      <Link
        href="https://discord.gg/WfBtxZfp85"
        className="flex-auto text-lg md:text-xl p-8 rounded-2xl border-2 border-solid border-[#251F2F] hover:no-underline hover:scale-105 transition duration-100 ease-in-out"
      >
        <p className="text-[#E9D4FF] font-normal max-w-56">
          Stay up-to-date with the latest!
        </p>
        <p className="text-[#FF00D6]">Join the Discord →</p>
      </Link>
    </div>
  );
}
