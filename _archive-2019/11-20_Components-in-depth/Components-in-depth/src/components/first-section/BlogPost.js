import Vue from 'vue'

// Import types for custom prop validation
import { Person } from '../../types';

// Global Components (defined before 'new Vue')
export default Vue.component('blog-post', {
  // props: ['title', 'likes'],
  inheritAttrs: false,
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: {
      type: Array,
      default: function() {
        return ['None']
      }
    },
    author: {
      type: Object,
      default: function() {
        return {}
      }
    },
    initialCounter: Number,
    size: [String, Number],
    someone: Person
  },
  data() {
    return {
      counter: this.initialCounter
    }
  },
  computed: {
    computedSize: function() {
      return this.size ? this.size.trim().toLowerCase() : null
    }
  },
  template: `
  <div class="blog-post">
    <h3>{{ title }}</h3>
    <p>This has been liked {{ likes || 0 }} times.<br>
    Published: {{ isPublished }}<br>
    Comments: {{ commentIds || 'None' }}<br>
    Author: {{ author }}<br>
    Counter: {{ counter }}<br>
    Size: {{ computedSize }}<br>
    Someone: {{ someone }}<br>
    Attributes: {{ $attrs }}
    </p>

  </div>`
});
