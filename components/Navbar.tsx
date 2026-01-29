import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const navItems = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className= "h-16 w-full flex justify-between items-center px-4">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/colibri_logo.svg" alt="Colibri" width={32} height={32} />
        <span className="text-lg font-semibold">Colibri</span>
      </Link>
      <div className="hidden md:block">
        {navItems.map((item) => (
          <Button key={item.href} variant="ghost" size="sm">
            {item.label}
          </Button>
        ))}
      </div>
      <div>
        <Button size="sm">Get Started</Button>
      </div>
    </div>
  );
};

export default Navbar;