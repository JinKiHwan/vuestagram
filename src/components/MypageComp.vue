<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div v-for="(a, i) in follower" :key="i">
      <div class="post-header">
        <div class="profile" :style="{ backgroundImage: `url(${a.image})` }"></div>
        <span class="profile-name">{{ a.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
  name: 'mypageComp',

  setup() {
    let follower = ref([]);

    onMounted(() => {
      axios.get('/follow.json').then((a) => {
        follower.value = a.data;
      });
    });

    return { follower };
  },
};
</script>

<style></style>
