var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {  
        var data = JSON.parse(XHR.responseText); //takes the EUR rate -> ALWAYS PARSE FIRST!!!
        addTodos(data)
    } 
}

XHR.open("GET", "/api/todos")
XHR.send()


function addTodos(todos) {
    //add todos to page here
    todos.forEach(function(todo) {
        var newTodo = "<li class='task'>" + todo.name + "</li>"
        document.querySelector(".list").innerHTML += newTodo;
    })
}


  