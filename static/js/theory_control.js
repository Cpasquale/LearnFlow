
function assign_page() {
    let user = $("#usr").text();
    let pnt = $("#pnt").text();
    if (user == null || user === '' || pnt==null || pnt === '') {
        location.reload();
    }
    document.getElementById("put_username").innerHTML = user.toString();
    document.getElementById("put_pnt").innerHTML = pnt.toString();
}


// per far uscire l'user
function exit_user(){
    deleteAllCookies()
    window.location.href='/logout'
}

function start_exercise(){
    let ex = $("#ex").text();
    window.location.href = "/exercise_flow_chart/"+ex
}

function go_home(){
    window.location.href = "/MainGame/"
}