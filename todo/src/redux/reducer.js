const initData = {
  list: [],
};

function reducer(state = initData, action) {
  switch (action.type) {
    case "ADD_TODO":
      const { id,data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return { ...state, list: newList };

      case "EDIT_TODO":
        const editedList = state.list.map((elem)=>{
            if(elem.id === action.payload.id){
                elem.data= action.payload.value
            }
        })
        // return editedList;

    default:
      return state;
  }
}

export default reducer;
