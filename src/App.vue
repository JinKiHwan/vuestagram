<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="$store.commit('next')" v-if="$store.state.step == 1">Next</li>
      <li @click="$store.commit('publish')" v-if="$store.state.step == 2">
        발행
      </li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <p>{{ 작명 }} {{ age }} {{ postText }}</p>

  <p>{{ $store.state.age }}</p>
  <button @click="나이증가(10)">버튼</button>

  <Container
    :information="$store.state.information"
    @write="postText = $event" />

  <button @click="$store.dispatch('getData')">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        type="file"
        id="file"
        class="inputfile"
        @change="upload"
        multiple
        accept="image/*" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from './components/ContainerComp.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'App',

  data() {
    return {
      //step: 0,
      카운터: 0,
    };
  },

  mounted() {},

  components: {
    Container: Container,
  },

  computed: {
    ...mapState(['name', 'age', 'likes', 'postText']),
    ...mapState({ 작명: 'name' }),
  },

  methods: {
    ...mapMutations(['setMore', '좋아요', '나이증가']),

    upload(event) {
      this.$store.commit('upload', event);
    },

    now() {
      return new Date();
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: 'consolas';
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>

<!-- PWA 사용하여 Web App 만들기 -->
<!-- 1.vue add pwa-->
<!-- service-worker.js / manifest.json -->
<!-- 두개의 파일은 npm run build할 때 자동생성 -->
