"use client";

import React from "react";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <div className="border-b bg-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">KeenKeeper</h1>

        <div className="flex gap-6">
          <MyNavLink href="/">Home</MyNavLink>
          <MyNavLink href="/timeline">Timeline</MyNavLink>
          <MyNavLink href="/stats">Stats</MyNavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
