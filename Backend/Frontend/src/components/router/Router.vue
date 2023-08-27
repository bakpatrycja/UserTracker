<script setup>
import { ref, computed } from 'vue'
import mainPage from '../pages/mainPage.vue'
import report from '../pages/report.vue'

const routes = {
  '/': mainPage,
  '/report': report,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <div class="routing">
  <a href="#/">Main Page</a> | 
  <a href="#/report">Report</a> 
  <component :is="currentView" />
  </div>
</template>

<style>
.routing {
  margin: 20px;
}

a {
  text-decoration:none;
  display: inline-block;
    width: 86px;
    height: 19px;
    text-decoration: none;
    text-align: center;
    background-color: #009879;
    color: #ffffff;
}
</style>
