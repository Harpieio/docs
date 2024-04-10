import Link from "@docusaurus/Link";

export default function SuggestedArticles() {
  return (
    <div className="px-8 pt-8 mx-auto max-w-screen-2xl lg:px-20 md:px-12">
      <p className="text-2xl font-semibold lg:text-4xl md:text-3xl">
        Suggested Articles
      </p>

      <div className="grid gap-2 py-5 text-lg sm:grid-cols-2">
        <Link href="docs/official-contract-addresses" className="flex justify-between text-[#E9D4FF] hover:bg-[#E9D4FF] hover:text-black rounded-md p-4 hover:no-underline">
            <p className="m-0">Official Contract Addresses</p>
            <p className="m-0">›</p>
        </Link>
        <Link href="docs/connecting-to-rpc" className="flex justify-between text-[#E9D4FF] hover:bg-[#E9D4FF] hover:text-black rounded-md p-4 hover:no-underline">
            <p className="m-0">Connecting to the Harpie RPC</p>
            <p className="m-0">›</p>
        </Link>
        <Link href="docs/where-data-is-sourced" className="flex justify-between text-[#E9D4FF] hover:bg-[#E9D4FF] hover:text-black rounded-md p-4 hover:no-underline">
            <p className="m-0">Where data is sourced</p>
            <p className="m-0">›</p>
        </Link>
        <Link href="docs/background-check-api/usage" className="flex justify-between text-[#E9D4FF] hover:bg-[#E9D4FF] hover:text-black rounded-md p-4 hover:no-underline">
            <p className="m-0">Background Check API</p>
            <p className="m-0">›</p>
        </Link>
        <Link href="docs/transaction-scanning/usage" className="flex justify-between text-[#E9D4FF] hover:bg-[#E9D4FF] hover:text-black rounded-md p-4 hover:no-underline">
            <p className="m-0">Transaction Scanning</p>
            <p className="m-0">›</p>
        </Link>
        <Link href="docs/newsfeed-api-example" className="flex justify-between text-[#E9D4FF] hover:bg-[#E9D4FF] hover:text-black rounded-md p-4 hover:no-underline">
            <p className="m-0">Using the Harpie API to add newsfeed info</p>
            <p className="m-0">›</p>
        </Link>
      </div>
    </div>
  );
}
