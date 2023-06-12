export const initialState = {
  theme: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: !state.theme };
    default:
      return state;
  }
};

export default reducer;
