<template>
  <div>
    <h2>Component B</h2>
    <component-c></component-c>
    <component-a></component-a>
  </div>
</template>

<script>
import ComponentA from './ComponentA';
import ComponentC from './ComponentC';

export default {
  name: 'ComponentB',
  components: {
    ComponentA,
    ComponentC
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
</style>
