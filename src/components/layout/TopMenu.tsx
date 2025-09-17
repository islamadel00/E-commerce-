"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Menu, Search, Heart, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url?: string;
    src?: string;
    alt?: string;
    title?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const TopMenu = ({
  logo = {
    url: "/",
    title: "Exclusive",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "Contact", url: "/reach" },
    { title: "About", url: "/info" },
    { title: "Signup", url: "/register" },
  ],
  auth = {
    login: { title: "Login", url: "/signin" },
    signup: { title: "Sign up", url: "/register" },
  },
}: Navbar1Props) => {
  const { data: session } = useSession();
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Function to clean user name
  const cleanUserName = (name: string | null | undefined) => {
    if (!name) return 'User';
    
    // Remove unwanted text patterns
    const cleanedName = name
      .replace(/bfakjbfakj/g, '')
      .replace(/[^a-zA-Z0-9\s]/g, '') // Remove special characters
      .trim();
    
    // If name is empty after cleaning, return default
    if (!cleanedName) return 'User';
    
    return cleanedName;
  };

  const menuItems = session
    ? menu.filter((item) => item.title !== "Signup")
    : menu;

  return (
    <section className="py-4 px-[135px]">
      <div className="wrapper">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tighter">
                {logo.title}
              </span>
            </a>

            {/* Menu Links */}
            <div className="flex items-center gap-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <a
                    key={item.title}
                    href={item.url}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-muted text-accent-foreground"
                        : "hover:bg-muted hover:text-accent-foreground"
                    }`}
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Input
                type="search"
                placeholder="what are you looking for..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue === "" && (
                <Search className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              )}
            </div>

            <Button asChild variant="ghost" size="icon">
              <a href="/favorites">
                <Heart className="h-6 w-6" />
              </a>
            </Button>

            <Button asChild variant="ghost" size="icon">
              <a href="/basket">
                <ShoppingCart className="h-6 w-6" />
              </a>
            </Button>

            {session && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <User className="h-6 w-6" />
                </Button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <div className="px-4 py-2 text-sm text-gray-700">
                      {cleanUserName(session.user?.name)}
                    </div>
                    <a
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Account
                    </a>
                    <a
                      href="/orders"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Order History
                    </a>
                    <button
                      onClick={() => signOut()}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <Image
                src={logo.src || "/file.svg"}
                width={100}
                height={32}
                className="max-h-8 dark:invert"
                alt={logo.alt || "logo"}
              />
            </a>

            {/* Toggle Button */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-2 rounded-md border border-gray-300"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <div className="mt-4 bg-white rounded-md shadow-lg p-4 space-y-4">
              {/* Menu Items */}
              <div className="flex flex-col gap-3">
                {menuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    className={`text-md font-semibold ${
                      pathname === item.url
                        ? "text-accent-foreground bg-muted px-2 py-1 rounded"
                        : "hover:text-red-500"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>

              {/* Auth Buttons */}
              <div className="flex flex-col gap-3 border-t pt-4">
                {session ? (
                  <>
                    <Button asChild variant="outline">
                      <a href="/profile">My Account</a>
                    </Button>
                    <Button onClick={() => signOut()}>Logout</Button>
                  </>
                ) : (
                  <>
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopMenu;
