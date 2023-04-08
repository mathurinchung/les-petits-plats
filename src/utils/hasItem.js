export const hasItem = (array, string) => {
  if (string && !array.has(string.slice(0, -1))) return array.add(string.trim());
}