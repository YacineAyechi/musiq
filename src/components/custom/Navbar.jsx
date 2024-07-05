import React from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export default async function Navbar() {
  const { userId } = auth();
  const user = await currentUser();

  return (
    <div className="flex justify-between px-6 py-2">
      <div>
        <img src="./logo.svg" alt="" />
      </div>

      <div>
        <Navigation />
      </div>
      <div>
        {userId ? (
          <div className="flex items-center">
            {/* <span className="mr-3 emailWelcome">
              Welcome, {user.emailAddresses[0].emailAddress}
            </span> */}
            {/* <span className="mr-3">
              Hello, <span className="emailWelcome">{user.firstName}</span>
            </span> */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="cursor-pointer mr-1">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className="capitalize emailWelcome">
                      {user.firstName} {user.lastName}
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <UserButton />
          </div>
        ) : (
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/sign-in" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Sign In
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/sign-up" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Sign Up
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </div>
  );
}
