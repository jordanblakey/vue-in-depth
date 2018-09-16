<template>
  <div>
    <h1>Main Component</h1>
    <hr>
    <component-b></component-b>
    <base-comp></base-comp>
  </div>
</template>

<script>
import ComponentB from './components/ComponentB';
export default {
  components: {
    ComponentB
  }
};
</script>

<style lang="sass" scoped>
</style>
