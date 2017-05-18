//创建一个reducer

//reducer的作用就是传递一个action 和state，然后
function hidden(state = '', action){
    console.log('隐藏吧！！！！');
    console.log('隐藏action:', action); 
    console.log('隐藏state:', state);
    //返回一个更新过的state 
    if(action.status === 'down'){
        // 返回的是一个Object
        return 'hide'
    }else if(action.status === 'up'){
        return 'show'
    }   
    return  '';   
}
export default hidden; 