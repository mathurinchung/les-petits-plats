export const formatText = (string) => {
  return string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g,"");
};

export const setString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
