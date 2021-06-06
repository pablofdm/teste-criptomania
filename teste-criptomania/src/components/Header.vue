<template>
  <div class="header-app">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid d-flex align-items-center">
        <a class="navbar-brand" @click="goHome()">
          <img src="../assets/logo.png" alt="" width="50" class="d-inline-block align-text-top">
        </a>
        <h3 class="text-dark">{{msg}}</h3>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  methods: {
    goHome(){
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img:hover {
  cursor: pointer;
}

</style>
