

const intitialState = {
    name: "browse"
}

const btnReducer = (state = intitialState, action) => {
    return { name: action.data }
}

export default btnReducer