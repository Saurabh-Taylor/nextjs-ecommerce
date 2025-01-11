type Navlink = {
  href: string;
  label: string;
};

export const links: Navlink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/favourites", label: "Favourites" },
  { href: "/cart", label: "Cart" },
  { href: "/orders", label: "Orders" },
];
