import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">KeenKeeper</h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/timeline">Timeline</Link>
          <Link href="/stats">Stats</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
