"use strict"


function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

let ctx = document.getElementById("myChart").getContext('2d');
let myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Лют.', 'Бер.', 'Квiт.', 'Трав.', 'Чер.', 'Лип.'],
    datasets: [{
      label: '',
      data: [
          randomInteger(5000, 20000),
          randomInteger(5000, 20000), 
          randomInteger(5000, 20000), 
          randomInteger(5000, 20000), 
          randomInteger(5000, 20000), 
          randomInteger(5000, 20000)
        ],
      borderColor: '#f6731c',
      borderWidth: 4
    }]
  },
  options: {
    legend: {
        display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,          
          stepSize: 0,         
        },
        ticks: {
          maxTicksLimit: 4,
          minTicksLimit: 4
        }
      }],
    }
  }
});

let ctxTwo = document.getElementById("myChartTwo").getContext('2d');
let myChartTwo = new Chart(ctxTwo, {
  type: 'bar',
  data: {
    labels: ['Лют.', 'Бер.', 'Квiт.', 'Трав.', 'Чер.', 'Лип.'],
    datasets: [{
      label: '',
      data: [
        randomInteger(5000, 20000),
        randomInteger(5000, 20000),
        randomInteger(5000, 20000),
        randomInteger(5000, 20000),
        randomInteger(5000, 20000),
        randomInteger(5000, 20000),
      ],
      borderColor: '#f6731c',
      borderWidth: 1,
			backgroundColor: '#f6731c'
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        display: false
      }],
      xAxes: [{
        barThickness: 10
      }]
    }
  }
});