export const setString = item => {
  if (item) return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
};