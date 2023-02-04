let arr = [
  { id: 1, label: "Конкурент 1", cc: 12, свысы: 560, ывсывсы: 88, ывсывы: 351 },
  { id: 2, label: "Конкурент 2", cc: 14, свысы: 547, ывсывсы: 74, ывсывы: 258 },
  { id: 3, label: "Конкурент 3", cc: 16, свысы: 250, ывсывсы: 63, ывсывы: 62 },
  { id: 4, label: "Конкурент 4", cc: 58, свысы: 36, ывсывсы: 980, ывсывы: 148 },
  { id: 5, label: "Конкурент 5", cc: 36, свысы: 89, ывсывсы: 45, ывсывы: 48 },
  { id: 6, label: "Конкурент 6", cc: 89, свысы: 58, ывсывсы: 64, ывсывы: 69 },
  { id: 7, label: "Конкурент 7", cc: 69, свысы: 69, ывсывсы: 87, ывсывы: 78 },
  { id: 8, label: "Конкурент 8", cc: 25, свысы: 35, ывсывсы: 663, ывсывы: 888 },
];




let labels = arr.map(function (d) {
    return d.id;
  });
  let cc = arr.map(function (d) {
    return d.cc;
  });
  let свысы = arr.map(function (d) {
    return d.свысы;
  });
  let ывсывсы = arr.map(function (d) {
    return d.ывсывсы;
  });
  let ывсывы = arr.map(function (d) {
    return d.ывсывы;
  });
  
  var ctx = document.getElementById("myChart").getContext("2d");
  var ctxBar = document.getElementById("myChartBar").getContext("2d");


  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "cc",
          data: cc,
          backgroundColor: "rgba(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          fill: true,
        },
        {
          label: "свысы",
          data: свысы,
          backgroundColor: "rgba(54, 162, 235)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          fill: true,
        },
        {
          label: "ывсывсы",
          data: ывсывсы,
          backgroundColor: "rgba(255, 206, 86)",
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
          fill: true,
        },
        {
          label: "ывсывы",
          data: ывсывы,
          backgroundColor: "rgba(75, 192, 192)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  
  var myChart = new Chart(ctxBar, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "cc",
          data: cc,
          backgroundColor: "rgba(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
          fill: true,
        },
        {
          label: "свысы",
          data: свысы,
          backgroundColor: "rgba(54, 162, 235)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          fill: true,
        },
        {
          label: "ывсывсы",
          data: ывсывсы,
          backgroundColor: "rgba(255, 206, 86)",
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
          fill: true,
        },
        {
          label: "ывсывы",
          data: ывсывы,
          backgroundColor: "rgba(75, 192, 192)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });


let labels2 = arr.map(function (d) {
    return d.label;
  });

let backgroundColors = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
];

var ctxPie1 = document.getElementById("myChartPie-1").getContext("2d");
var myChart = new Chart(ctxPie1, {
  type: "pie",
  data: {
    labels: labels2,
    datasets: [
      {
        data: cc,
        backgroundColor: backgroundColors,
        // borderColor: "rgba(255, 99, 132, 1)",
        // borderWidth: 1,
      },
    ],
  },
});


var ctxPie2 = document.getElementById("myChartPie-2").getContext("2d");
var myChart = new Chart(ctxPie2, {
  type: "pie",
  data: {
    labels: labels2,
    datasets: [
      {
        data: свысы,
        backgroundColor: backgroundColors,
        // borderColor: "rgba(255, 99, 132, 1)",
        // borderWidth: 1,
      },
    ],
  },
});



var ctxPie3 = document.getElementById("myChartPie-3").getContext("2d");
var myChart = new Chart(ctxPie3, {
  type: "pie",
  data: {
    labels: labels2,
    datasets: [
      {
        data: ывсывсы,
        backgroundColor: backgroundColors,
        // borderColor: "rgba(255, 99, 132, 1)",
        // borderWidth: 1,
      },
    ],
  },
});


var ctxPie4 = document.getElementById("myChartPie-4").getContext("2d");
var myChart = new Chart(ctxPie4, {
  type: "pie",
  data: {
    labels: labels2,
    datasets: [
      {
        data: ывсывы,
        backgroundColor: backgroundColors,
        // borderColor: "rgba(255, 99, 132, 1)",
        // borderWidth: 1,
      },
    ],
  },
});
