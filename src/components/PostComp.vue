<template>
  <div class="post">
    <div class="post-header">
      <div
        class="profile"
        :style="{
          backgroundImage: `url(${information.userImage})`,
        }"
      ></div>
      <span class="profile-name">{{ information.name }}</span>
    </div>
    <div
      :class="$store.state.information[i].filter + ` post-body`"
      :style="{
        backgroundImage: `url(${information.postImage})`,
      }"
      @click="$store.commit('너무너무좋아요', i)"
    ></div>
    <div class="post-content">
      <p>{{ information.likes }} Likes</p>
      <p>
        <strong>{{ information.name }}</strong> {{ information.content }}
      </p>
      <p class="date">{{ information.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostComp',
  props: {
    information: Object,
    filterClass: String,
    likesData: Number,
    i: Number,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url('https://picsum.photos/100?random=0');
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url('https://picsum.photos/600?random=0');
  height: 450px;
  background-position: center;
  background-size: cover;
}

.post-body img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
