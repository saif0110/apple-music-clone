

const searchAction = (value)=>{
    console.log('search action: ', value);
    return {
        type: "search",
        payload: value
    }
}

export default searchAction