
//action types
export const INCREMNET_LIKES = 'INCREMENT_LIKES';
export const ADD_COMMENT = 'ADD_COMMENTS';
export const REMOVE_COMMENTS = 'REMOVE_COMMENTS';
export const HIDDEN_CATES = 'HIDDEN_CATES';


//action creators

//每当有一个action被发出，   被dispach,此时所有的reducers都会被执行 

//index 代表课程的序号
export function increment(index){
    //返回的是action
    return {type : INCREMNET_LIKES, index}
}

export function addComment(courseId, author, comment){
    return {type : ADD_COMMENT, author, comment}
}

export function removeComment(courseId, i){
  return {type :REMOVE_COMMENTS, i ,courseId}
}

// action ， 用来被dispatch, 用store来dispatch
//必须要有type 和value吗？
export function changeShow(status){
   return {type: HIDDEN_CATES, status}
}
