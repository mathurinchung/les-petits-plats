export default class StringUtils {
  formatText(string) {
    return string.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s/g,"");
  }

  setString(item) { return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(); }
}