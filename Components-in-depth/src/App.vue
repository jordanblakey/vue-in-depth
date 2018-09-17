<template>
  <div>
    <h1>Main Component</h1>
    <hr>
    <!-- COMPONENT REGISTRATION & PROPS SECTION -->
    <!-- <component-b title="New Post 1" required-prop="Compliance" status="success"></component-b> -->
    <!-- <base-comp></base-comp> -->
    <custom-events title="Test"></custom-events>
  </div>
</template>

<script>
import ComponentB from './components/first-section/ComponentB';
import CustomEvents from './components/second-section/CustomEvents';

export default {
  components: {
    ComponentB,
    CustomEvents
  },
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
</style>
