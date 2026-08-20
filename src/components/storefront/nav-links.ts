/**
 * Shared primary navigation. Archive entries map to /shop/$category;
 * "About" scrolls to the brand story on the home page.
 */
export const menuLinks = [
  { label: "New In", category: "new-in" },
  { label: "Women", category: "women" },
  { label: "Men", category: "men" },
  { label: "Outerwear", category: "outerwear" },
] as const;
