var xValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var yValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var barColors = ["#f1a3ba", "#f1a3ba","#f1a3ba","#f1a3ba","#f1a3ba", "#f1a3ba", "#f1a3ba", "#f1a3ba","#f1a3ba","#f1a3ba","#f1a3ba", "#f1a3ba"];
var incomeMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Monthly Number of Rented Cars"
    }
  }
});


getSelectedMonth = () => {
    // document.getElementById("value").innerHTML =  document.getElementById("month").value;
    console.log(incomeMonth[xValues.indexOf(document.getElementById("month").value)])
    document.getElementById("value").innerHTML = 'P ' + incomeMonth[ xValues.indexOf(document.getElementById("month").value)].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}