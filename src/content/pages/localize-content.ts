/**
 * Applies complete-string translations while preserving a page content shape.
 * Identifiers, paths, and other non-display values remain unchanged when they
 * are omitted from a page dictionary.
 */
export function deepLocalize<T>(
  value: T,
  dictionary: Record<string, string>,
): T {
  if (typeof value === "string") {
    return (dictionary[value] ?? value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepLocalize(item, dictionary)) as T;
  }

  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        deepLocalize(item, dictionary),
      ]),
    ) as T;
  }

  return value;
}
