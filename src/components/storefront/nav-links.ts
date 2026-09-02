/**
 * Shared primary navigation. Archive entries map to /shop/$category.
 * "About" and "Contact" are standalone routes.
 */
export const menuLinks = [
  { label: "New In", category: "new-in" },
  { label: "Women", category: "women" },
  { label: "Men", category: "men" },
  { label: "Outerwear", category: "outerwear" },
] as const;
