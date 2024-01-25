import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 10,
      likes: 30,
      likesCount: 0,
    };
  },

  mutations: {
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
        state.likes += 1;
        state.likesCount += 1;
      } else if (state.likesCount == 1) {
        state.likes -= 1;
        state.likesCount -= 1;
      }
    },
  },
});

export default store;
