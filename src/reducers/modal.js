function modal(state = {}, action){
    
    console.log('模态框：', action);
    return{
                       
        content: action.content,
        close: action.close,

    }

}

export default modal;