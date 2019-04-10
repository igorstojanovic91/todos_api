//Adding new data with form
var form = document.querySelector("#todoInput")
form.addEventListener("keypress", function(event) {
    if(event.which == 13) {
        createTodo();
    }
})

//Loading list
makeRequest("GET", "api/todos")

function makeRequest(type, url, data) {
    var XHR = new XMLHttpRequest();

    if(type === "GET") {
        XHR.open(type, url)
        XHR.send()
        XHR.onreadystatechange = function() {
            if(XHR.readyState == 4 && XHR.status == 200) {  
                var data = JSON.parse(XHR.responseText); //takes the EUR rate -> ALWAYS PARSE FIRST!!!
                addTodos(data)
            } 
        }
    }
    if(type === "POST") {
        XHR.open(type, url, true)
        XHR.setRequestHeader('Content-type', "application/json"); //needed to post data
        XHR.send(JSON.stringify(data)); //makes data to string
        XHR.onreadystatechange = function() {
            if(XHR.status == 201 && XHR.readyState == 4) {
                var data = [JSON.parse(XHR.responseText)]; //converting it to an array and JSON to pass it in addTodos function
                addTodos(data);
                document.querySelector("input").value = ""; //sets form back to empty string

            }  else {
                XHR.onerror = function () {
                    console.log("** An error occurred during the transaction");
                  }
            }
        }
    }
}



function addTodos(todos) {
    //add todos to page here
    todos.forEach(function(todo, index, arr) {
        var newTodo = "<li class='task'>" + todo.name + "</li>"
        document.querySelector(".list").innerHTML += newTodo;
        if(todo.completed) {
            document.querySelector("li:nth-of-type("+index+1+")").classList.add("done");
        }
    })
}



  
function createTodo() {
    var userInput = document.querySelector("input").value 
    makeRequest("POST", "api/todos", {name: userInput});
}
