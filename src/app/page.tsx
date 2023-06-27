import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="font-medium text-2xl	">Home Page!</h1>
      <p>
        <Link href={"/users"}>Users</Link>
      </p>
    </main>
  );
}
