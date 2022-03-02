function like(){
    alert ("Ninja was liked.")
}

function def(){
    var grn = document.getElementById("grn")
    grn.parentNode.removeChild(grn)
}

function login(){
    var change = document.getElementById("change")
    change.innerText = "Logout"
}
