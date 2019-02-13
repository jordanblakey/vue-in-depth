<template>

  <div class="transitioning-single-elements-components">
    <link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
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

    <div id="example-2">
      <button @click="show2 = !show2">
        Toggle show2
      </button>
      <transition name="slide-fade">
        <p v-if="show2">Hello</p>
      </transition>
    </div>

    <div id="example-3">
      <button @click="show3 = !show3">Toggle show3</button>
      <transition name="bounce">
        <p v-if="show3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, eaque!
        </p>
      </transition>
    </div>

    <div id="example-4">
      <button @click="show4 = !show4">Toggle show4</button>
      <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
        <p v-if="show4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, nesciunt!</p>
      </transition>
    </div>

    <div id="example-5">
      <button @click="show5 = !show5">Toggle show5</button>
      <transition
        name="test"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:enter-cancelled="enterCancelled"

        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
        v-on:leave-cancelled="leaveCancelled"
      >
        <p v-if="show5">Lorem ipsum dolor sit amet.</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            show: true,
            show1: true,
            show2: true,
            show3: true,
            show4: true,
            show5: true
        }
    },
    components: {},
    methods: {
        // ENTERING
        beforeEnter: function(el) {
            console.log('beforeEnter', el)
        },
        enter: function(el, done) {
            console.log('enter', el)
            done()
        },
        afterEnter: function(el) {
            console.log('afterEnter', el)
        },
        enterCancelled: function(el) {
            console.log('enterCancelled', el)
        },
        beforeLeave: function(el) {
            console.log('beforeLeave', el)
        },
        leave: function(el, done) {
            console.log('leave', el)
            done()
        },
        afterLeave: function(el) {
            console.log('afterLeave', el)
        },
        leaveCancelled: function(el) {
            console.log('leaveCancelled', el)
        }
    }
}
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

/* .slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
} */

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

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>
