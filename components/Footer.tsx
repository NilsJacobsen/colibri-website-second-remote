import { Button } from "./ui/button";

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
      label: "Get Started",
      href: "/get-started",
    },
  ];

const Footer = () => {
  return (
    <div className="w-full flex justify-between items-center px-4 py-2">
      <span className="text-sm text-muted-foreground">hello@colibri.com</span>
      <div>
        {navItems.map((item) => (
          <Button key={item.href} variant="ghost" size="sm" className="text-sm text-muted-foreground">
            {item.label}
          </Button>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">© 2026 Colibri</span>
    </div>
  );
};

export default Footer;