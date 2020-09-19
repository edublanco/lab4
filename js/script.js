var postBttn = document.getElementById("postBttn")
var clearBttn = document.getElementById("clearBttn")
var markBttn = document.getElementById("markBttn")
var list = document.getElementById("listToDo")
var listTodo = document.getElementsByName("todo");

postBttn.addEventListener("click",Post)
clearBttn.addEventListener("click",Clear);
markBttn.addEventListener("click",Mark);

function Post(e) {
    e.preventDefault();
    let todo = document.getElementById("txtArea").value
    let cList = list.innerHTML;
    list.innerHTML = cList + `<input type = "checkbox" name="todo" />  ${todo}  <br>  `
}

function Mark(e) {
    e.preventDefault();
    
    for(var i = 0; i < listTodo.length; i++){
        listTodo[i].checked = true
    }
}
 
function Clear(e) {
    e.preventDefault();
   
    for(var i = 0; i < listTodo.length; i++){
        listTodo[i].checked = false
    }
}
 

