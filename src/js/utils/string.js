export default class StringUtils {
  static formatText(string) { return string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g,""); }

  static setString(item) { return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(); }
}