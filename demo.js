$(function () {

});

var user;
var pwd;

$("#get").click(function () {
    user = $("#user").val();
    pwd = $("#pwd").val();
    console.log(user,pwd);
});


var url = window.location.href;
$("#urlt").click(function () {
    window.location.href = url + "?id=" + user + "&pwd=" + pwd;
});

$("#urlr").click(function () {
    let a = window.location.href;
    let z = a.split("?");
    console.log(z);
    let x = z[z.length-1].split("&");
    let user = (x[0].split("="))[1];
    let pwd = (x[1].split("="))[1];
    console.log(user,pwd);
});

// function getQueryString(name) {
//     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//     var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
//     var r = window.location.search.substr(1).match(reg);
//     var q = window.location.pathname.substr(1).match(reg_rewrite);
//     if(r != null){
//         return unescape(r[2]);
//     }else if(q != null){
//         return unescape(q[2]);
//     }else{
//         return null;
//     }
// }

$("#localt").click(function () {
    localStorage.setItem("id",user);
    localStorage.setItem("pwd",pwd);
});

$("#localr").click(function () {
    let z = localStorage.getItem("id");
    let x = localStorage.getItem("pwd");
    console.log(z,x);
});

$("#sessiont").click(function () {
    sessionStorage.setItem("id",user);
    sessionStorage.setItem("pwd",pwd);
});

$("#sessionr").click(function () {
    let z = sessionStorage.getItem("id");
    let x = sessionStorage.getItem("pwd");
    console.log(z,x);
});

$("#cookiet").click(function () {
    $.cookie("id",user);
    $.cookie("pwd",pwd);
});

$("#cookier").click(function () {
    let id = $.cookie("id");
    let pwd = $.cookie("pwd");
    console.log(id,pwd);
});