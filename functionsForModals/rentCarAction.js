var arrayOfRentedCar = []
var arrayOfAddedToCart = []
var arrayToCompare = []

function addToCart() {
  arrayOfAddedToCart.push({ carImage: listOfCarImages[globalIndex], carDetails: carDetails[globalIndex], rent: false }); 
  modal.style.display = "none";
}

function addToRent() {
  if(!arrayToCompare.includes(carDetails[globalIndex])) {
    arrayOfRentedCar.push({ carImage: listOfCarImages[globalIndex], carDetails: carDetails[globalIndex], rent: true });
    arrayToCompare.push(carDetails[globalIndex])
    yValues[new Date().getMonth()] = arrayOfRentedCar.length;
  
    incomeMonth[new Date().getMonth()] += carDetails[globalIndex].rent;
    console.log(incomeMonth[new Date().getMonth()])
    
    modal.style.display = "none";
  }else {
    alert("Car already Rented!")
  }
}


function returnCartContain(array, id, type) {
  let x;

  for (let index = 0; index < array.length; index++) {
    console.log(array[index])
    if (x != undefined) {
      x = x + '<li class="w3-bar">' +
        '<p class="w3-bar-item w3-white  w3-right">'+ type+ '</p>' +
        '<img src="'+ listOfCarImages[index] +'" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">' +
        '<div class="w3-bar-item">' +
        '<span class="w3-large">' + array[index].carDetails.carname + '( '+array[index].carDetails.brandname +' )' + '</span><br>' +
        '<span>'+ array[index].carDetails.description + '</span>' +
        '</div>' +
        '</li>'
    } else {
      x = '<li class="w3-bar">' +
        '<p class="w3-bar-item w3-white  w3-right">' + type +'</p>' +
        '<img src="'+ listOfCarImages[index] +'" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">' +
        '<div class="w3-bar-item">' +
        '<span class="w3-large">' + array[index].carDetails.carname + ' ( '+array[index].carDetails.brand +' )' + '</span><br>' +
        '<span>'+ array[index].carDetails.description +'</span>' +
        '</div>' +
        '</li>'
    }
    document.getElementById(id).innerHTML = x;
  }
}