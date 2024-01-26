import { createStore } from 'vuex';
import dataJs from './assets/data';
import axios from 'axios';

const store = createStore({
  state() {
    const likesData = dataJs.map((item) => ({ likes: item.likes }));

    return {
      name: 'kim',
      age: 10,
      likesCount: 0,
      likesData,
      more: {},
    };
  },

  mutations: {
    setMore(state, data) {
      state.more = data;
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

    좋아요(state) {
      if (state.likesCount == 0) {
        state.likesData.forEach((item) => {
          item.likes += 1;
        });
        state.likesCount += 1;
      } else if (state.likesCount == 1) {
        state.likesData.forEach((item) => {
          item.likes -= 1;
        });
        state.likesCount -= 1;
      }
    },
  },

  actions: {
    //데이터 가져오기
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a) => {
        context.commit('setMore', a.data);
      });
    },
  },
});

export default store;
