<template>
  <NavBar/>
  <router-view/>
</template>

<style>
@import "style.css";
</style>

<script>
import  NavBar from "./components/Without VueX/NavBar.vue";

export default {
  components:{
    NavBar
  }
}

</script>
