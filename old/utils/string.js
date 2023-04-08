export default class StringUtils {
  static formatText(string) {
    return string.toLowerCase() // lower case
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove accents
      .replace(/\s/g,""); // remove spaces
  }

  static setString(item) { return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(); }
}