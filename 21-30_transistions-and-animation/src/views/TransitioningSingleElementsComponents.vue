<template>
  <div class="transitioning-single-elements-components">
    <h1>Transitioning Single Elements/Components</h1>
    <div id="demo">
      <button v-on:click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
      <h2>Transition Classes</h2>
      <ul>
        <li>
          <code>v-enter</code>: Starting state for enter. Added before element is inserted, removed one frame after element is inserted.
        </li>
        <li>
          <code>v-enter-active</code>: Active state for enter. Applied during the entire entering phase.
        </li>
        <li>
          <code>v-enter-to</code>: Ending state for enter. Added one frame after the element is inserted, removed when the transition/animation finishes.
        </li>
        <li>
          <code>v-leave</code>: Starting state for leave. Added immediately when a leaving transition is triggered.
        </li>
        <li>
          <code>v-enter</code>: Active state for leave.
        </li>
        <li>
          <code>v-enter</code>: Ending state for leave.
        </li>
      </ul>

      <p>Each of these classes will be prefixed with the name of the transition. Here the v- prefix is the default when you use a transition element with no name. If you use transition name="my-transition" for example, then the v-enter class would instead be my-transition-enter.</p>
    </div>

    <div id="example-1">
      <button @click="show1 = !show1">Toggle render</button>
      <transition name="slide-fade">
        <p v-if="show1">hello</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      show: true,
      show1: true
    };
  },
  components: {}
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
