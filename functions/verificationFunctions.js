var users = []
var loggedIn = false;
var showSignUp = false;
var dashboardStatsShow = false;
var counterForLogin = 0
var adminCode = 691534;
var currentUser;
var everyUsersCart = []

if(!loggedIn) {
    document.getElementById("needToLogged").style.display = "none";
    document.getElementById("topNavHide").style.display = "none";  
    document.getElementById("footer").style.display = "none";
}

if(!showSignUp) {
    document.getElementById("signUpForm").style.display = "none";
}

showSignUpPage = () => {
    if(!showSignUp) {
        showSignUp = true;
        document.getElementById("signUpForm").style.display = "block";
        document.getElementById("logInForm").style.display = "none";
    }else {
        showSignUp = false;
        document.getElementById("signUpForm").style.display = "none";
        document.getElementById("logInForm").style.display = "block";
    }
}

loginFunction = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("dashboard").style.display = "none";
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    for (let index = 0; index < users.length; index++) {
        if(users[index].username == user && users[index].password == pass) {
            currentUser = users[index];
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("needToLogged").style.display = "block";
            document.getElementById("topNavHide").style.display = "block";
            document.getElementById("logInForm").style.display = "none";
            document.getElementById("footer").style.display = "block";
            if(currentUser.typeOfUser == "Lessor") {
                document.getElementById("add").style.display = "block";
            }else {
                document.getElementById("add").style.display = "none";
            }
        }
    }

    for (let index = 0; index < everyUsersCart.length; index++) {
        if(everyUsersCart[index].username == user) {
            arrayOfAddedToCart = everyUsersCart[index].addedToCart;
            arrayOfRentedCar = everyUsersCart[index].rentedCar;
        }
    }
}


signUpFunction = () => {
    users.push(
        {
            fullname: document.getElementById("fName").value, 
            email :document.getElementById("email").value,
            birthdate: document.getElementById("bDate").value,
            typeOfUser: document.getElementById("sOption").value,
            username: document.getElementById("uName").value,
            password: document.getElementById("pWord").value
        }
    )
    everyUsersCart.push(
        {
            username: document.getElementById("uName").value,
            rentedCar: [],
            addedToCart: []
        }
    )
    alert("New User Successfully signed up!")
    document.getElementById("fName").value = "", 
    document.getElementById("email").value = "",
    document.getElementById("bDate").value = "",
    document.getElementById("uName").value = "",
    document.getElementById("pWord").value = ""
}


adminLogIn = () => {
    let askCode;
    counterForLogin++;
    if(counterForLogin > 6) {
        askCode = prompt("Enter Admin code: ");
        if(askCode == adminCode) {
            document.getElementById("home").style.display = "block";
            document.getElementById("needToLogged").style.display = "block";
            document.getElementById("topNavHide").style.display = "block";
            document.getElementById("logInForm").style.display = "none";
        }
    }
}

logOut = () => {
    document.getElementById("home").style.display = "none";
    document.getElementById("needToLogged").style.display = "none";
    document.getElementById("topNavHide").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("logInForm").style.display = "block";
    counterForLogin = 0;
}