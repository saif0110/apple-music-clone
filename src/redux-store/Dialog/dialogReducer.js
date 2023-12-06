

const intitialState = {
    open: false
}

const dialogReducer = (state = intitialState, action)=>{
    return {open: !(action.payload)}
}

export default dialogReducer;