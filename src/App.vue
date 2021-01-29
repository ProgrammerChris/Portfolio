<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hjem</router-link> | 
      <router-link to="/prosjekter">Prosjekter</router-link> |
      <router-link to="/om">Om meg</router-link> | 
      <router-link to="/kontakt">Kontakt</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
  body{
background: #EEEEEE;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #333333;
    display: grid;
    grid-template-rows: 300px 50px auto ;
    grid-template-columns: 15% auto 15%;

}

#nav {
    grid-column: 2;
    grid-row: 2;
    padding: 70px;
}

#nav a {
    font-weight: bold;
    color: #333333;
    text-decoration: none;
}

#nav a.router-link-exact-active {
    color: #BF0F00;
}

</style>
