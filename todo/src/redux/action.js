
export function addTodo(value){
    return{
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data:value
        }
    }
}

export function deleteTodo(id){
    return{
        type: "DELETE_TODO",
        id
    }
}

export function editTodo(id,value){
    return{
        type: "EDIT_TODO",
        payload: {id,value}
    }
}