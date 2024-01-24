<template>
  <div>
    <Post
      :information="information[i]"
      v-for="(post, i) in information"
      :key="i" />
  </div>
</template>

<script>
import Post from './PostComp';

export default {
  name: 'ContainerComp',

  components: {
    Post: Post,
  },

  props: {
    information: Array,
  },
};
</script>

<style></style>
