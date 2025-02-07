import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Link href="/docs" className="bg-primary text-primary-foreground px-5 py-3 rounded-lg">Go to the docs</Link>
    </div>
  );
}
