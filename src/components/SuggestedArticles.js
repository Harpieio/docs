import Link from "@docusaurus/Link";

export default function SuggestedArticles() {
  return (
    <div className="px-8 pt-8 mx-auto max-w-screen-2xl lg:px-20 md:px-12">
      <p className="text-2xl font-semibold lg:text-4xl md:text-3xl">
        Suggested Articles
      </p>

      <div className="grid gap-6 py-5 text-lg sm:grid-cols-2">
        <Link href="docs/official-contract-addresses" className="flex justify-between text-[#E9D4FF]">
            <p>Official Contract Addresses</p>
            <p>›</p>
        </Link>
        <Link href="docs/connecting-to-rpc" className="flex justify-between text-[#E9D4FF]">
            <p>Connecting to the Harpie RPC</p>
            <p>›</p>
        </Link>
        <Link href="docs/where-data-is-sourced" className="flex justify-between text-[#E9D4FF]">
            <p>Where data is sourced</p>
            <p>›</p>
        </Link>
        <Link href="docs/background-check-api/usage" className="flex justify-between text-[#E9D4FF]">
            <p>Background Check API</p>
            <p>›</p>
        </Link>
        <Link href="docs/transaction-scanning/usage" className="flex justify-between text-[#E9D4FF]">
            <p>Transaction Scanning</p>
            <p>›</p>
        </Link>
        <Link href="docs/newsfeed-api-example" className="flex justify-between text-[#E9D4FF]">
            <p>Using the Harpie API to add newsfeed info</p>
            <p>›</p>
        </Link>
      </div>
    </div>
  );
}
