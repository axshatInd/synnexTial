"use client";
import Logo from "@/app/_components/Logo";
import { OrganizationSwitcher, useAuth, UserButton } from "@clerk/nextjs";
import React from "react";

function Header() {
  const { orgId } = useAuth();
  console.log(orgId);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 shadow-xl rounded-b-lg max-w-8xl mx-auto bg-white">
      <Logo />
      <OrganizationSwitcher
        afterCreateOrganizationUrl={"/dashboard"}
        afterLeaveOrganizationUrl={"/dashboard"}
      />
      <UserButton />
    </header>
  );
}

export default Header;
