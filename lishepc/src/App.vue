<template>
  <div id="app">
    <top-Head></top-Head>
    <foot></foot>
  </div>
</template>
<script>
import topHead from './components/topHead'
import foot from './components/footer'
export default {
  nam:'app',
  components:{
    topHead,
    foot
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
