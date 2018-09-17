<template>
  <div>
    <!-- <div v-on:enlarge-text="postFontSize += 1" class="custom-events">
      <my-button>Click to enlarge text</my-button>
      <p>{{postFontSize}}</p>
      <button-counter v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title"></button-counter>
      <hr>
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue';
import MyButton from './MyButton';

Vue.component('button-counter', {
  data: function() {
    return {
      count: 0
    };
  },
  props: ['title'],
  template:
    '<button v-on:click="count++">{{ title }} You clicked me {{ count }} times.</button>'
});

export default {
  props: ['title'],
  methods: {},
  components: { MyButton },
  data: function() {
    return {
      postFontSize: 1,
      count: 0,
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
