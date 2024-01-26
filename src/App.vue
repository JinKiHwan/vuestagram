<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="step++" v-if="step == 1">Next</li>
      <li @click="publish" v-if="step == 2">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.commit('이름변경')">버튼</button>

  <h4>나이: {{ $store.state.age }}</h4>
  <button @click="$store.commit('나이증가', 10)">버튼</button>

  <Container :information="$store.state.information" :step="step" :urlImage="urlImage" :filterClass="filterClass" @write="postText = $event" />

  <button @click="$store.dispatch('getData')">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" @change="upload" multiple accept="image/*" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from './components/ContainerComp.vue';

export default {
  name: 'App',

  data() {
    return {
      step: 0,
      urlImage: '',
      postText: '',
      filterClass: '',
    };
  },

  mounted() {
    this.emitter.on('이벤트명작명', (filterName) => {
      this.filterClass = filterName;
    });
  },

  components: {
    Container: Container,
  },

  methods: {
    upload(e) {
      let a = e.target.files;

      let url = URL.createObjectURL(a[0]);

      this.step = 1;
      this.urlImage = url;
    },

    publish() {
      var 내게시물 = {
        name: 'Minny',
        userImage: 'https://picsum.photos/100?random=5',
        postImage: this.urlImage,
        likes: 49,
        date: 'Apr 4',
        liked: false,
        content: this.postText,
        filter: this.filterClass,
      };
      this.information.unshift(내게시물);
      this.step = 0;
      this.filterClass = '';
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
