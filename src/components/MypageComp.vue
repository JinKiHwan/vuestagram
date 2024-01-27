<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="💡" @input="search($event.target.value)" />
    <div v-for="(a, i) in follower" :key="i">
      <div class="post-header">
        <div class="profile" :style="{ backgroundImage: `url(${a.image})` }"></div>
        <span class="profile-name">{{ a.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs, watch } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

export default {
  name: 'mypageComp',
  props: {
    one: Number,
  },

  setup(props) {
    function search(data) {
      let newFollower = followerOriginal.value.filter((a) => {
        return a.name.indexOf(data) != -1;
      });
      follower.value = [...newFollower];
    }

    //첫번째 파라미터는 props, 두번째는 context
    let follower = ref([]); //자료형 데이터 담음 (사실 상관없음)
    let test = reactive({ name: 'kim' }); //array, object 씀 (사실 상관없음)
    test;

    let followerOriginal = ref([]);

    let { one } = toRefs(props);

    console.log(one.value);

    /* watch 사용법 */
    //one == 감시할 데이터
    watch(one, () => {});

    onMounted(() => {
      axios.get('/follow.json').then((a) => {
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      });
    });

    /* computed 사용법 */

    let result = computed(() => {
      return follower.value.length;
    });

    console.log(result.value);

    let store = useStore();
    console.log(store.state.name);

    return { follower, search };
  },
};
</script>

<style></style>
