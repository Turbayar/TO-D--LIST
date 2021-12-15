function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo-input");
    db.collection("todo_items").add({
       text: text.value,
       status:"active"
    })
    text.value = "";
}

function getItems(){
    db.collection("todo_items").onSnapshot((snapshot) => {
        console.log(snapshot);
        let items = [];
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id,
                ...doc.data()
            })
        })
        generateItems(items)
    })
}

function generateItems(items){
   

    let todo = "";
    items.forEach((items) => {
       todo += `
        <div class="todo-item">
            <div class="check">
              <div class="check-mark checked">
                <img src="assets/icon-check.svg" />
              </div>
            </div>
            <div class="todo-text"> ${items.text} </div>
          </div>
        `

        
    })
    document.querySelector(".todo-items").innerHTML = todo;

}


getItems();