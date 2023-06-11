import App from './app';
import './sass/index.scss';

document.querySelector('#app').innerHTML = `
  <header id="header">
    <i class="icon-logo"></i>
  </header>

  <main id="main">
    <form id="search">
      <label id="searchlabel" for="searchbar"><i class="icon-magnifying-glass"></i></label>
      <input id="searchbar" name="searchbar" type="text" placeholder="Rechercher une recette">
    </form>

    <div id="keywords">
      <ul class="keyword-list keyword-list-ingredients"></ul>
      <ul class="keyword-list keyword-list-appliances"></ul>
      <ul class="keyword-list keyword-list-ustensils"></ul>
    </div>

    <div id="filters"></div>

    <ul id="recipes"></ul>
  </main>
`;

const app = new App();
app.init();