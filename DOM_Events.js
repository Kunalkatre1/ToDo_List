let btn = document.getElementsByTagName("button")

//addEventListner() method accepts 2 parameter, 1st -> event & 2nd -> function
btn[0].addEventListener("mouseleave", function(){
    console.log("Button Clicked!")
})

let input_box = document.getElementById("input_items")
let enter = document.getElementById("enter")
let list = document.getElementById("item_list")

//Function to create a delete buton when an Item is added to the list.
function createDeleteButton(){
    let del_btn = document.createElement("button");
    del_btn.id=input_box.value;
    setDeleteButtonProperties(del_btn);
    del_btn.setAttribute("id", input_box.value)
    return del_btn;
}

//Set style of the delete button on creation.
function setDeleteButtonProperties(del_btn){
    del_btn.id=input_box.value;
    del_btn.value="remove";
    del_btn.innerHTML="remove";
    del_btn.setAttribute("class", "delete_button");
    del_btn.addEventListener("click", deleteItem);
}

//Delete the item from the list
function deleteItem(){
    let id = this.id;
    let btn_list = list.querySelectorAll("button");
    btn_list.forEach(element => {
        if(id === element.getAttribute("id")){
            element.remove();
            document.getElementById(id).remove();
        }
    });
}

//Function to add the Item to the list from input box
function addItemsToList(){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input_box.value));
    li.appendChild(createDeleteButton());
    li.setAttribute("id", input_box.value);
    list.appendChild(li)
    input_box.value = "";
}

//Function to check if item is blank or not.
function checkIfEmpty(){
    if (input_box.value.length > 0) {
        addItemsToList();   
    }else{
        alert("Please enter any item");
    }
}

//Enter key press functionality to add itme to the list.
function addItemsAfterKeypress(event){
        if (event.key === "Enter"){
            checkIfEmpty()
        }
    
}

enter.addEventListener("click", checkIfEmpty)
input_box.addEventListener("keypress",addItemsAfterKeypress)


