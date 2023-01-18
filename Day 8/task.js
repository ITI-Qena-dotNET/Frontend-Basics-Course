// 1. In the login form, use local storage to save user name and password in.
function loginUser(event) {
    event.preventDefault()
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    // var rememberme = document.getElementById("rememberme").value

    localStorage.setItem("username", username)
    localStorage.setItem("password", password)
    //localStorage.setItem("rememberme", rememberme)
}

// 2. In the previous Assignment, add “remember me” check box, and save user name and password only if the user checked this checkbox,
// and if the user didn’t check it, remove the saved user name and password from local storage if they saved before.
function loginUserCheck(event) {
    event.preventDefault()
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var rememberme = document.getElementById("rememberme")

    console.log(rememberme);

    if (rememberme.checked) {
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
        localStorage.setItem("rememberme", rememberme)
    } else {
        localStorage.clear()
    }


}

// 5. Use AJAX to retrieve user data, and display: First Name, Last name and user avatar image (show the user image in an <img> tag)
// from the following test web API: https://reqres.in/api/users/1

// a. Make a textbox where the user can enter user ID, and press display and then display the user with the given ID.
function getUserData(element) {
    var userRequest = new XMLHttpRequest()

    userRequest.open("GET", `https://reqres.in/api/users/${element.value}`)
    userRequest.send()
    userRequest.onload = function (res) {
        var response = JSON.parse(userRequest.response)

        document.getElementById("firstName").value = response.data.first_name
        document.getElementById("lastName").value = response.data.last_name
        document.getElementById("avatar").setAttribute("src", response.data.avatar)
    }
}

// b. Use this web API: https://reqres.in/api/users to return all users data, and make a dropdown list and fill it with students name
// returning form the API. (Loop on them and display all users).
var xhr = new XMLHttpRequest()

xhr.open("GET", `https://reqres.in/api/users`)
xhr.send()
xhr.onload = function (res) {
    var response = JSON.parse(xhr.response)
    var dropdownElement = document.getElementById("usersDropdown")

    for (let i = 0; i < response.data.length; i++) {
        var optionItem = document.createElement("option")
        optionItem.innerText = response.data[i].first_name + ' ' + response.data[i].last_name
        optionItem.value = response.data[i].id
        dropdownElement.appendChild(optionItem)
    }
}

// c. When user selects specific user (onchange event), display his data and image below the dropdown list.
function getUserDataFromSelect(element) {
    var userRequest = new XMLHttpRequest()
    console.log(element.options.selectedIndex);
    userRequest.open("GET", `https://reqres.in/api/users/${element.value}`)
    userRequest.send()
    userRequest.onload = function (res) {
        var response = JSON.parse(userRequest.response)

        document.getElementById("firstName").value = response.data.first_name
        document.getElementById("lastName").value = response.data.last_name
        document.getElementById("avatar").setAttribute("src", response.data.avatar)
    }
}
