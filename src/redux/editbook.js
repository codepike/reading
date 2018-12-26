
const EDIT_ACTIONS = {
  ADD_BOOK: "ADD_BOOK",
  ADD_TITLE: "ADD_TITLE",
  ADD_COVER: "DELELE_PAGE",
  INPUT_CHANGE: "INPUT_CHANGE"
}

const initialState = {
  title: "",
  author: "",
  illustrator: "",
  cover: ""
};

function editReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_ACTIONS.INPUT_CHANGE:
      return {...state,
        [action.id]: action.value
      };
    default:
      return state
  }
}

export function inputChange(id, value) {
  return {
    type: EDIT_ACTIONS.INPUT_CHANGE,
    id: id,
    value: value
  }
}
