<template>
  <div id="app">
    <top-Head></top-Head>
    <footer></footer>
  </div>
</template>
<script>
import topHead from './components/topHead'
import footer from './components/footer'
export default {
  nam:'app',
  components:{
    topHead,
    footer
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
