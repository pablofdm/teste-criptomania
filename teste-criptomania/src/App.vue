<template>
  <div id="app">
    <transition name="router-animation" enter-active-class="animated fadeinDown" leave-active-class="animated fadeOutDown">
    <router-view>

    </router-view>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
margin: 0;
padding: 0;
}
</style>
