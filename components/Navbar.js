import Link from "next/link";

import Image from "next/image";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image width={128} height={77} src="/tesla.png" alt="logo" />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/hello">Hello Listing</Link>
    </nav>
  );
}

export default Navbar;
