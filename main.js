function deleteFunction(){
    let container = document.querySelector("#mainCon");
    let confirm = document.createElement("input");
    confirm.setAttribute("type", "text");
    confirm.setAttribute("id", "inputValue");
    confirm.setAttribute("placeholder", "type delete")
    mainCon.appendChild(confirm);
    let check = document.querySelector("#inputValue");
    check.addEventListener("change", function compare (){
        if(confirm.value == "delete"){
            let delText = document.querySelector("#deleteText");
            delText.remove();
            confirm.value = "";
        }
        else{
            alert("The input field doesn't match the requirement.");
            confirm.value = "";
        }
    })
}
