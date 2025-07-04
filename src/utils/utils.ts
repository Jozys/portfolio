export const getAge = (): number => {
  const birthDate = new Date(
    import.meta.env.VITE_USER_BIRTHDATE ?? "1970-01-01"
  );
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  // 05 - 06 => negative, age calculated before is not reached
  const months = currentDate.getMonth() - birthDate.getMonth();
  // 06 - 07 = -1 => negative age calculated before is not reached;
  const days = currentDate.getDate() - birthDate.getDate();
  if (months <= 0) {
    if (months < 0 || (months === 0 && days < 0)) {
      age--;
    }
  }
  return age;
};

/**
 * Get a nested value from an object based on a dot-separated path.
 * This function allows you to access deeply nested properties in an object.
 * @param obj - The object from which to retrieve the value.
 * @param path - A string representing the path to the desired property, using dot notation (e.g., "a.b.c").
 * @returns The value at the specified path, or undefined if the path does not exist.
 */
export function getNestedValue(obj: unknown, path: string): string {
  return path.split(".").reduce((prev: unknown, curr: string) => {
    if (prev && typeof prev === "object" && curr in prev) {
      // Type assertion to index signature
      return (prev as Record<string, unknown>)[curr];
    }
    return "";
  }, obj) as string;
}
