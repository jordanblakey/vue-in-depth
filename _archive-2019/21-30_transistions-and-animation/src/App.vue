<template>
  <div id="app">
    <!-- <HelloWorld></HelloWorld> -->
    <DynamicComponents></DynamicComponents>
    <div id="nav">
      <router-link to="/">Overview</router-link>&nbsp;|&nbsp;
      <router-link
        to="/transitioning-single-elements-components"
      >Transitioning Single Elements/Components</router-link>&nbsp;|&nbsp;
      <router-link to="/initial-render">Initial Render</router-link>&nbsp;|&nbsp;
      <router-link to="/transitioning-between-elements">Transitioning Between Elements</router-link>&nbsp;|&nbsp;
      <router-link to="/transitioning-between-components">Transitioning Between Components</router-link>&nbsp;|&nbsp;
      <router-link to="/list-transitions">List Transitions</router-link>&nbsp;|&nbsp;
      <router-link to="/reusable-transitions">Reusable Transitions</router-link>&nbsp;|&nbsp;
      <router-link to="/dynamic-transitions">Dynamic Transitions</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import DynamicComponents from './components/DynamicComponents'
export default {
    components: {
        DynamicComponents
    }
}
</script>


<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 30px;
}
</style>