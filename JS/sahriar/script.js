function loadDept(deptSelect) {
    if (deptSelect === "") {
        document.getElementById("output").innerHTML = "";
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "info.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var html = "<ul>";
            for (var i = 0; i < data.length; i++) {
                if (data[i].Faculty === deptSelect) {
                    html += "<li>" + data[i].dept + "</li>";
                }
            }
            html += "</ul>";
            document.getElementById("output").innerHTML = html;
        }
    };
    xhr.send();
}