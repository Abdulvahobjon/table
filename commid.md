let arr = [
  { id: 1, cc: 12, свысы: 560, ывсывсы: 88, ывсывы: 351 },
  { id: 2, cc: 14, свысы: 547, ывсывсы: 74, ывсывы: 258 },
  { id: 3, cc: 16, свысы: 250, ывсывсы: 63, ывсывы: 62 },
  { id: 4, cc: 58, свысы: 36, ывсывсы: 980, ывсывы: 148 },
  { id: 5, cc: 36, свысы: 89, ывсывсы: 45, ывсывы: 48 },
  { id: 6, cc: 89, свысы: 58, ывсывсы: 64, ывсывы: 69 },
  { id: 7, cc: 69, свысы: 69, ывсывсы: 87, ывсывы: 78 },
  { id: 8, cc: 25, свысы: 35, ывсывсы: 663, ывсывы: 888 },
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
var ctxPie = document.getElementById("myChartPie").getContext("2d");
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

var myChart = new Chart(ctxPie, {
  type: "pie",
  data: {
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    datasets: [
      {
        label: "Dataset 1",
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: Object.values(Utils.CHART_COLORS),
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