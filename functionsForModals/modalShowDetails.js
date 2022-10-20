// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var globalIndex;

// When the user clicks the button, open the modal 
function clickShowModal(index) {
    globalIndex = index
    console.log(index)
    console.log(carDetails[index].carname)
    console.log(listOfCarImages[index])
    document.getElementById("carRent").innerHTML =  "P " +carDetails[index].rent + " per day";
    document.getElementById("carBrand").innerHTML = carDetails[index].brand + " ( " + carDetails[index].carname + " )";
    document.getElementById("description").innerHTML = carDetails[index].description;
    document.getElementById("carImage").src = listOfCarImages[index];
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}