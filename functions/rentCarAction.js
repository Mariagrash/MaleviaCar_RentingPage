var arrayOfRentedCar = []
var arrayOfAddedToCart = []
var arrayToCompare = []

function addToCart() {
  for (let index = 0; index < everyUsersCart.length; index++) {
    if(everyUsersCart[index].username == currentUser.username) {      
      everyUsersCart[index].addedToCart.push({ carImage: listOfCarImages[globalIndex], carDetails: carDetails[globalIndex], rent: false });
      arrayOfAddedToCart = everyUsersCart[index].addedToCart;
      modal.style.display = "none";
    }
  }   
}

function addToRent() {
  if(!arrayToCompare.includes(carDetails[globalIndex])) {
    for (let index = 0; index < everyUsersCart.length; index++) {
      if(everyUsersCart[index].username == currentUser.username) {
        everyUsersCart[index].rentedCar.push({ carImage: listOfCarImages[globalIndex], carDetails: carDetails[globalIndex], rent: true });
        arrayOfRentedCar = everyUsersCart[index].rentedCar;
        arrayToCompare.push(carDetails[globalIndex])
        yValues[new Date().getMonth()] = arrayOfRentedCar.length;
      
        incomeMonth[new Date().getMonth()] += carDetails[globalIndex].rent;
        
        modal.style.display = "none";
      }
    }
  }else {
    alert("Car already Rented!")
  }
}


function returnCartContain(array, id, type) {
  let x;

  if(array.length != 0) {
    for (let index = 0; index < array.length; index++) {
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
    }
  }else {
    x = undefined;
  }
  if(x == undefined) {
    document.getElementById(id).innerHTML = "";
  }else {
    document.getElementById(id).innerHTML = x;
  }
}