
var listOfCarImages = [
    "./carImages/innova.png",
    "./carImages/fortuner.png",
    "./carImages/nissan.jpg"
];
var carDetails = [
    { carname: "Innova", rent: 1000, brand: "Toyota", description: "The Toyota Innova is a compact MPV and is one of the best-sellers of Toyota Motor Philippines. With its 7-seat capacity (8 in some variants), raised ride height, and diesel mill, the Innova has become a perennial choice in the MPV segment." },
    { carname: "Fortuner", rent: 1500, brand: "Toyota", description: "Fortuner can seat seven people, with the option to fold the third-row seats to the side in order to accommodate more cargo. The Fortuner also has the advantage of having better amenities compared to the cars it shares its platform with." },
    { carname: "RX 245", rent: 1500, brand: "Nissan", description: "Imagine a car that can park for you, monitor your surroundings, and even knows when to step in to avoid accidents. All that and more are already a reality with Nissan Intelligent Mobility." }
];
var selectedImageHandler = ""
var listOfNavBars = ["landingPage", "dashboard", "listOfCars", "myCart", "addDetails", "aboutUs"];
for (let index = 0; index < listOfNavBars.length; index++) {
    if (listOfNavBars[index] != "landingPage") {
        document.getElementById(listOfNavBars[index]).style.display = "none";
    }
}

function selected_nav_bar(selectedNav, id) {
    if (listOfCarImages.length != 0) {
        display_images();
    }
    if (selectedNav == "myCart") {
        console.log(arrayOfAddedToCart)
        console.log(arrayOfRentedCar)
        returnCartContain(arrayOfRentedCar, 'rented', 'Rented');
        returnCartContain(arrayOfAddedToCart, 'cartAdded', 'AddedToCart');
    }

    for (let index = 0; index < listOfNavBars.length; index++) {
        if (listOfNavBars[index] != selectedNav) {
            document.getElementById(listOfNavBars[index]).style.display = "none";
        } else {
            document.getElementById(listOfNavBars[index]).style.display = "block";
        }
    }    
}

function select_image(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('output_image');
        output.src = reader.result;
        selectedImageHandler = event.target.previousElementSibling.src;
    }
    reader.readAsDataURL(event.target.files[0]);
}

function display_images() {
    var x = "", i;

    for (let index = 0; index < listOfCarImages.length; index++) {
        x = x + '<div class="column">' +
            '<img src="' + listOfCarImages[index] + '" height="150px" width="150px">' +
            '<div class="container"> ' +
            '<h4><b>' + carDetails[index].carname + '</b></h4>' +
            ' <p>' + carDetails[index].brand + ' </p> ' +
            '<a onclick="clickShowModal(' + index + ')"> See more details >>> </a> <br><br>' +
            '</div></div>'
    }
    document.getElementById("demo").innerHTML = x;
}

function add_new_car_details() {
    listOfCarImages.push(selectedImageHandler)
    carDetails.push({ carname: document.getElementById("carName").value, brand: document.getElementById("brand").value, rent: document.getElementById("rent").value, description: document.getElementById("desc").value })
    document.getElementById("carName").value = "";
    document.getElementById("rent").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("desc").value = "";
}