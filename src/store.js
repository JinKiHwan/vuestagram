import { createStore } from 'vuex';
//import dataJs from './assets/data';
import axios from 'axios';
import information from './assets/data';

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
      information: information,
    };
  },

  mutations: {
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

    // 좋아요(state) {
    //   if (state.likesCount == 0) {
    //     state.likesData.forEach((item) => {
    //       item.likes += 1;
    //     });
    //     state.likesCount += 1;
    //   } else if (state.likesCount == 1) {
    //     state.likesData.forEach((item) => {
    //       item.likes -= 1;
    //     });
    //     state.likesCount -= 1;
    //   }
    // },
  },

  actions: {
    //데이터 가져오기
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
