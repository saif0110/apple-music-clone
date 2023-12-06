
const intitialState = {
    value: ""
}

const searchReducer = (state = intitialState, action) => {
    console.log('search reducer: ', action.payload);
    switch (action.type) {
        case "search":
            return { value: action.payload }
        default: return state;
    }
}

export default searchReducer;