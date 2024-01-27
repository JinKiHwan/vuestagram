import { createStore } from 'vuex';
import axios from 'axios';
import information from './assets/data';
import filter from './assets/filter';

const store = createStore({
  state() {
    //const likesData = dataJs.map((item) => ({ likes: item.likes }));

    return {
      name: 'kim',
      age: 10,
      likesCount: 0,
      //likesData,
      more: {},
      likeCount: false,
      count: 0,
      information: information,

      urlImage: '',
      postText: '123',
      filterClass: '',
      step: 3,
      filter: filter,

      selectFilter: '',
    };
  },

  mutations: {
    filterPicker(state, data) {
      state.selectFilter = data;
    },
    write(state, data) {
      state.postText = data;
    },

    setMore(state, data) {
      state.more = data;
      state.information.push(state.more);
      state.count++;
    },

    이름변경(state) {
      state.name = '박';
    },
    나이증가(state, data) {
      if (state.age < 100) {
        state.age += data;
      } else {
        state.age;
      }
    },

    너무너무좋아요(state, i) {
      if (state.likeCount == false) {
        state.information[i].likes += 1;
        state.likeCount = true;
      } else {
        state.information[i].likes -= 1;
        state.likeCount = false;
      }
    },

    publish(state) {
      var 내게시물 = {
        name: 'Minny',
        userImage: 'https://picsum.photos/100?random=5',
        postImage: state.urlImage,
        likes: 49,
        date: 'Apr 4',
        liked: false,
        content: state.postText,
        filter: state.selectFilter,
      };
      console.log(내게시물);
      state.information.unshift(내게시물);
      state.step = 0;
      state.filterClass = '';
      state.selectFilter = '';
    },

    next(state) {
      state.step = 2;
    },

    upload(state, event) {
      let files = event.target.files;

      if (files.length > 0) {
        let url = URL.createObjectURL(files[0]);

        state.step = 1;
        state.urlImage = url;

        console.log(state.urlImage);
      }
    },
  },

  actions: {
    getData(context) {
      axios
        .get(`https://codingapple1.github.io/vue/more${context.state.count}.json`)
        .then((result) => {
          context.commit('setMore', result.data);
          console.log(context.state.information[0].likes);
        })
        .catch((error) => {
          alert('잘못된 접근입니다.', error);
        });
    },
  },
});

export default store;
