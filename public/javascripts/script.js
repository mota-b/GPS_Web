
console.log("hi")
/* var url = window.location.protocol + "//" + window.location.host
console.log(url)
// register
function registerUser() {
     var username = document.getElementsByClassName("username");
     var password = document.getElementsByClassName("password");

     $.ajax({
         url: url + "/register",
         method: "post",
         data: {
             username: username[0].value,
             password: password[0].value
         }
     }).success(function(response){
         alert("Welcome Home ", username[0].value);

         console.log("YOU CAN ADD AGAIN !");
     }).error(function(response) {
         console.log("Error", username[0].value, "Exist");
     });
}

// logIn
function loginUser() {
    var username = document.getElementsByClassName("username");
    var password = document.getElementsByClassName("password");
    console.log(username)
    $.ajax({
        url: url + "/log",
        method: "post",
        data: {
            username: username[0].value,
            password: password[0].value
        }
    }).success(function(response){
        window.location.assign("/map");
    }).error(function(response) {
        alert("Incorrect username or password!");
 });
}

function getUser() {
    var username = document.getElementsByClassName("username");

    $.ajax({
        url: url + "/user",
        method: "get"
    }).success(function(response){
        window.location.assign("/map");
    }).error(function(response) {
        alert("Cannot fetch data. Please try again");
    });
}

 */

/*function registerUser() {
     var username = document.getElementsByClassName("username");
     var password = document.getElementsByClassName("password");

     $.ajax({
         url: url2 + "/register",
         method: "post",
         data: {
             username: username[0].value,
             password: password[0].value
         }
     }).success(function(response){
         alert("Welcome Home ", username[0].value);

         console.log("YOU CAN ADD AGAIN !");
     }).error(function(response) {
         console.log("Error", username[0].value, "Exist");
     });
}

function loginUser() {
    var username = document.getElementsByClassName("username");
    var password = document.getElementsByClassName("password");
    
    $.ajax({
        url: url2 + "/log",
        method: "post",
        data: {
            username: username[0].value,
            password: password[0].value
        }
    }).success(function(response){
        window.location.assign("/map");
    }).error(function(response) {
        alert("Incorrect username or password!");
 });
}

function getUser() {
    var username = document.getElementsByClassName("username");

    $.ajax({
        url: url2 + "/user",
        method: "get"
    }).success(function(response){
        window.location.assign("/map");
    }).error(function(response) {
        alert("Cannot fetch data. Please try again");
    });
}

*/