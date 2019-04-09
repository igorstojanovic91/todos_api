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
    todos.forEach(function(todo, index, arr) {
        var newTodo = "<li class='task'>" + todo.name + "</li>"
        document.querySelector(".list").innerHTML += newTodo;
        if(todo.completed) {
            console.log(document.querySelector("li:nth-of-type("+index+1+")").classList.add("done"))
        }
        console.log(todo.completed)
    })
}


  