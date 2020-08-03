export const state = () => ({
  truths: [
    {
      'arent': 'racist',
      'noun': false,
    },
    {
      'arent': 'homophobic',
      'noun': false,
    },
    {
      'arent': 'liar',
      'noun': true,
    },
    {
      'arent': 'misogynist',
      'noun': false,
    },
    {
      'arent': 'ableist',
      'noun': false,
    },
    {
      'arent': 'fascist',
      'noun': true,
    },
  ],
  index: -1, // So that very first click increments index to 0
  displayContent: {},
});

export const mutations = {
  incrementTruth(state) {
    const maxIndex = state.truths.length - 1;
    state.index = state.index >= maxIndex ? 0 : state.index + 1;
  },
  setTruth(state) {
    // Set the new truth to display using the indicated index in state
    state.displayContent = state.truths[state.index];
  },
  shuffleTruths(state) {
    // Randomly reorder truths and put them in state
    const truths = state.truths;
    for (let i = truths.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [truths[i], truths[j]] = [truths[j], truths[i]];
    }
  }
}

export const actions = {
  // Fires on button click to load new content
  getNextTruth(context) {
    // Move to the next index, or back to the beginning
    context.commit('incrementTruth');
    // If we're (back) at the beginning, shuffle!
    if (context.state.index === 0) {
      context.commit('shuffleTruths');
    }
    // Set the display content per the new index in state
    context.commit('setTruth');
  }
}
