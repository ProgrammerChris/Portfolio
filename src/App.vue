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


<style scoped>
@media screen and (max-width: 376px) {
  #app {
    grid-template-columns: 0% auto 0%;
  }
}
@media screen AND (min-width: 600px) AND (max-height: 640px) {
  #app {
    grid-template-rows: auto;
  }
  #nav {
    grid-row: 1;
  }
}

</style>

<style>

@media screen and (min-width: 768px) and (min-height: 900px) {
  #nav {
    font-size: 28px;
  }
}

body {
    background: #EEEEEE;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  display: grid;
  grid-template-rows: 200px 50px auto;
  grid-template-columns: 10% auto 10%;
}

#nav {
  grid-column: 2;
  grid-row: 2;
  padding-top: 18px;
}

#nav a {
  font-weight: bold;
  color: #333333;
  text-decoration: none;
  padding-left: 2%;
  padding-right: 2%;
  
}

#nav a.router-link-exact-active {
  color: #BF0F00;
}

.side {
  grid-row: 1;
  grid-column: 2;
}


img {
  display: inline;
}
</style>
