<template>
  <div>
    <Post />
    <Post />
    <Post />
  </div>
</template>

<script>
import Post from './PostComp';

export default {
  name: 'ContainerComp',

  components: {
    Post: Post,
  },
};
</script>

<style></style>
