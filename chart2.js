let ctx2 = document.getElementById('myChart2');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], //　棒に表示される名前 
        datasets: [
					{
							label: 'bar-dataset',
							data: [110, 120, 40, 30, 20, 10], // 棒の高さ
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
							},
          {
            label: 'Line Dataset',
            data: [50, 50, 50, 50, 50, 50],
            // Changes this dataset to become a line
            type: 'line',
            fill: false,
          }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
