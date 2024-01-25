import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 10,
      likes: 30,
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
  },
});

export default store;
