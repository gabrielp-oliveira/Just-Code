function newTodoItem(){
    let inputValue = document.getElementById("todoInput");
    let todoList = document.getElementById("todoList")
    let sit = false
    todoList.childNodes.forEach((a) => {
        if(a.firstChild.innerHTML == inputValue.value){
            alert("todo already cadastred");
            sit = true
            return 
        }
    })
    if(sit){
        return
    }
    let li = document.createElement("li");
    let div = document.createElement("div");
    let close = document.createElement("div");
    close.innerHTML = 'x'
    close.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    div.addEventListener('click', function(ev) {
        if (div.className == 'checked') {
            div.className = ''
        }else{
            div.className = 'checked'
        }
      })
    
    if (inputValue.value.trim() === '') {
        alert("You must write something!");
        return
    } else {
        div.innerHTML = inputValue.value
        li.append(div)
        li.append(close)
        todoList.appendChild(li);
    }
    inputValue.value = ''
}