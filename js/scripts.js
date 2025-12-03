(() => {
  'use strict'

  // contexto do gráfico canvas
  const ctx = document.getElementById('myChart')

  const myChart = new Chart(ctx, {
    type: 'bar', // gráfico de barras
    data: {
      labels: [
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ],
      datasets: [
        {
          label: 'Receitas',
          data: [5300, 5450, 5100, 5800, 5600, 5300],
          backgroundColor: 'rgba(25, 135, 84, 0.8)', // Verde (cor de sucesso do Bootstrap)
          borderColor: 'rgba(25, 135, 84, 1)',
          borderWidth: 1
        },
        {
          label: 'Despesas',
          data: [4100, 4500, 4800, 4200, 4950, 1431.25],
          backgroundColor: 'rgba(220, 53, 69, 0.8)', // Vermelho (cor de perigo do Bootstrap)
          borderColor: 'rgba(220, 53, 69, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top', // Exibe a legenda no topo
        },
        title: {
          display: true,
          text: 'Receitas vs. Despesas Mensais'
        }
      },
      scales: {
        y: {
          beginAtZero: true // Eixo Y começa no zero
        }
      }
    }
  })
})()