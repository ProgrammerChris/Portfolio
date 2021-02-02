<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hjem</router-link>
      <router-link to="/prosjekter">Prosjekter</router-link>
      <router-link to="/om">Om meg</router-link>
      <router-link to="/kontakt">Kontakt</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  background: #eeeeee;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  display: grid;
  grid-template-rows: 200px;
  grid-template-columns: 2fr minmax(360px, 700px) 2fr;
}
#nav {
  grid-column: 2;
  display: inline-flex;
  grid-row: 2;
  align-self: end;
  justify-content: space-around;
}
#nav a {
  font-weight: bold;
  color: #333333;
  text-decoration: none;
  font-size: 1.25em;
}
#nav a.router-link-exact-active {
  color: #bf0f00;
}
.page {
  grid-column: 2;
}
</style>
