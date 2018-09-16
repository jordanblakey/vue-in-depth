<template>
  <div>
    <h1>Main Component</h1>
    <hr>
    <component-b title="New Post 1" required-prop="Compliance" status="success"></component-b>
    <base-comp></base-comp>
    testin
  </div>
</template>

<script>
import ComponentB from './components/ComponentB';

export default {
  components: {
    ComponentB
  },
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
</style>
