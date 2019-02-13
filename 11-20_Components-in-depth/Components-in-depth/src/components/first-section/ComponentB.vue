<template>
  <div>
    <h2>Component B. Post title is {{ title }}</h2>
    <component-c></component-c>
    <component-a></component-a>
    <div>
      <h3>{{ post.title }}</h3>
      <p>This has been liked {{ post.likes }} times.</p>
      <p>Published: {{ post.isPublished }}</p>
      <p>Status: {{ status }}</p>
    </div>
    <!-- Static Props -->
    <blog-post title="I'm a title!"></blog-post>
    <!-- Dynamic Props -->
    <blog-post v-bind:title="post.title + ' by ' + post.author.name" v-bind:likes="post.likes" is-published></blog-post>
    <!-- Pass a boolean -->
    <blog-post v-bind:is-published="false"></blog-post>
    <!-- v-bind shorthand -->
    <!-- Pass an array -->
    <blog-post :is-published="post.isPublished" :comment-ids="[234, 266, 273]"></blog-post>
    <blog-post :is-published="post.isPublished" :comment-ids="post.commentIds"></blog-post>
    <!-- Pass an object -->
    <blog-post :is-published="post.isPublished" :author="{ name: 'Veronica', company: 'Veridian' }"></blog-post>
    <!-- Pass an object -->
    <blog-post :author="post.author"></blog-post>
    <!-- Pass properties of an object -->
    <blog-post v-bind="post"></blog-post>
    <blog-post :someone="someone" :initial-counter="77" size="  VERY   LARGE   "></blog-post>
    <blog-post undefined="Something undefined" class="appended-class" :style="newStyles"></blog-post>
  </div>
</template>

<script>
import ComponentA from './ComponentA';
import ComponentC from './ComponentC';
import BlogPost from './BlogPost';

// Import type definitions for custom prop validation
import { Person } from '../../types';

export default {
  name: 'ComponentB',
  components: {
    ComponentA,
    ComponentC,
    BlogPost
  },
  // props: ['postTitle'], // Props as an array of strings
  // Use an object for type safety on props
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    requiredProp: {
      type: String,
      required: true
    },
    date: Date,
    function: Function,
    symbol: Symbol,
    status: {
      // Custom validator enumerated type
      validator: function(value) {
        return ['success', 'warning', 'danger'].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      someone: new Person('Tim', 'Smith'),
      newStyles: {
        background: 'green'
      },
      post: {
        title: 'Bound Title',
        author: {
          name: 'Bound Author'
        },
        likes: 42,
        isPublished: false,
        commentIds: [777, 747, 808],
        author: {
          name: 'Thomas',
          company: 'Dvorak'
        }
      }
    };
  }
};
</script>

<style lang="scss">
.blog-post:last-child {
  color: red;
}
</style>
