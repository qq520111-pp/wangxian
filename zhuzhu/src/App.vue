<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
html {
  font-size: 100px;
}
body {
  font-size: 16px;
  background: #ddd;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 400px;
  background: #ddd;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.7rem;
  z-index: 9999;
}
</style>
