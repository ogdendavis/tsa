export const state = () => ({
  awesome: true,
  counter: 0,
})

export const mutations = {
  increment(state) {
    state.counter++;
  },
  becomeLame(state) {
    state.awesome = false;
  },
}
