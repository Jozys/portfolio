export const getAge = (): number => {
  let birthDate = new Date(import.meta.env.VITE_USER_BIRTHDATE ?? "1970-01-01");
  let currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  // 05 - 06 => negative, age calculated before is not reached
  let months = currentDate.getMonth() - birthDate.getMonth();
  // 06 - 07 = -1 => negative age calculated before is not reached;
  let days = currentDate.getDate() - birthDate.getDate();
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
export function getNestedValue(obj: any, path: string): any {
  return path.split(".").reduce((prev, curr) => prev && prev[curr], obj);
}
