"use client";
import Logo from "@/app/_components/Logo";
import { OrganizationSwitcher, useAuth, UserButton } from "@clerk/nextjs";
import React from "react";

function Header() {
  const { orgId } = useAuth();
  console.log(orgId);
  return (
    <div className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 shadow-xl rounded-lg max-w-8xl mx-auto">
      <Logo />
      <OrganizationSwitcher
        afterCreateOrganizationUrl={"/dashboard"}
        afterLeaveOrganizationUrl={"/dashboard"}
      />
      <UserButton />
    </div>
  );
}

export default Header;
