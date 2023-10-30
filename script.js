function search() {
    let filter = document.getElementById("search-input").value.toUpperCase();
    let crd = document.querySelectorAll(".crd");
    let title = document.getElementsByTagName("p");

    for(var i = 0; i<title.length; i++){
        let a = crd[i].getElementsByTagName("p")[0];
        let value = a.innerHTML || a.innerText || a.textContent;
        if(value.toUpperCase().indexOf(filter)>-1) {
            crd[i].style.display = "";
        }
        else{
            crd[i].style.display = "none";
        }
    }
}