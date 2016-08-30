document.getElementById("query").onkeypress = function (e) {
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13') {
        // Enter pressed
        search();
    }
}

function search() {
    var term = document.getElementById("query").value;
    var cur  = document.URL;
    if (term != null && term != "" && term.replace(" ", "") != "") {
        term = term.toLowerCase();
        term = term.replace(" ", "+");
        //window.location.href = "http://localhost:8999/search.html?query=" + term;
        window.location.href = cur + "search.html?query=" + term;
    }
}
