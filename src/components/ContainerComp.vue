<template>
  <div>
    <div v-if="step == 0">
      <Post
        :information="information[i]"
        v-for="(post, i) in information"
        :key="i" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${urlImage})` }"></div>
      <div class="filters">
        <FilterBox
          :selectFilter="selectFilter"
          :urlImage="urlImage"
          v-for="selectFilter in filters"
          :key="selectFilter"></FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div
        class="upload-image"
        :style="{ backgroundImage: `url(${urlImage})` }"></div>
      <div class="write">
        <textarea
          class="write-box"
          @input="$emit('write', $event.target.value)">
          write!
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from './PostComp';
import FilterBox from './FIlterBox.vue';
import filters from '../assets/filter';

export default {
  name: 'ContainerComp',

  data() {
    return {
      filters: filters,
    };
  },

  components: {
    Post: Post,
    FilterBox: FilterBox,
  },

  props: {
    information: Array,
    step: Number,
    urlImage: String,
    postText: String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
