import {Chart, registerables } from "../node_modules/chart.js/dist/chart.esm.js";
console.log('This works.');
Chart.register(...registerables);
const ctx = document.getElementById('myChart').getContext('2d');
const ctxTwo = document.getElementById('myChartTwo').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Oct. 4-10', 'Oct. 11-17', 'Oct. 18-24', 'Oct. 25-31', 'Nov. 1-7', 'Nov. 8-14'],
        datasets: [{
            label: '# of Listeners',
            data: [750000, 250000, 1250000, 750000, 500000, 100000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
const myChartTwo = new Chart(ctxTwo, {
    type: 'bar',
    data: {
        labels: ['Oct. 4-10', 'Oct. 11-17', 'Oct. 18-24', 'Oct. 25-31', 'Nov. 1-7', 'Nov. 8-14'],
        datasets: [{
            label: '# of Visitors',
            data: [900000, 500000, 1500000, 900000, 700000, 150000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});