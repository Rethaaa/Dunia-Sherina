// preloader
var loader = document.querySelector("#preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});

// navbar
const navView = document.querySelector("#nav-view");
let navList = document.querySelector(".nav-list");
navView.onclick = function() {
    navList.classList.toggle("slide");
}
if (window.innerWidth <= 1194) {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", event => {
            dropdown.classList.toggle("open");
        });
    });
}

// chart
const labels = [
    'Es Teh', 'Donat', 'Bakso Kuah', 'Es Krim', 'Cookie',
    'Seashell Necklace', 'Seashell Bracelets', 'Friendship Bracelets',
    'Jedai Bunga', 'Sticker Sheet', 'Totebag', 'Pouch Kain Batik'
];

const data = [76, 59, 107, 41, 108, 19, 25, 16, 49, 26, 11, 3];

const backgroundColors = [
    '#85200C', '#A61C00', '#CC0000', '#B45F06', '#E69138',
    '#F1C232', '#6AA84F', '#45818E', '#3C78D8', '#0B5394',
    '#674EA7', '#A64D79'
];

// Bar Chart
new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Jumlah Terjual',
            data: data,
            backgroundColor: '#DA870D',
            borderColor: '#C15514',
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah Terjual'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Nama Barang'
                }
            }
        }
    }
});

// Line Chart
new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Jumlah Terjual',
            data: data,
            fill: false,
            backgroundColor: '#DA870D',
            borderColor: '#C15514',
            tension: 0.3,
            pointRadius: 4
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Jumlah Terjual'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Nama Barang'
                }
            }
        }
    }
});

// Pie Chart
new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: 'Jumlah Terjual',
            data: data,
            backgroundColor: backgroundColors
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 12
                },
                formatter: (value, context) => {
                    const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                    const percentage = (value / total * 100).toFixed(1);
                    return `${percentage}%`;
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});