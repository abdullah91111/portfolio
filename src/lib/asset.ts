/** Public files need the same prefix as the GitHub Pages project URL. */
export function asset(path: string) {
  return path.startsWith("/") && !path.startsWith("//")
    ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio"}${path}`
    : path;
}
