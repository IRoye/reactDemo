
//action types
export const INCREMNET_LIKES = 'INCREMENT_LIKES';
export const ADD_COMMENT = 'ADD_COMMENTS';
export const REMOVE_COMMENTS = 'REMOVE_COMMENTS';


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
