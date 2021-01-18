import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { Bar, Doughnut } from 'react-chartjs-2';
import { fetchData } from '../../api/australia';

export const AusMixChart = () => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetchData();
      const reverseRes = res.reverse();

      setApiData({
        labels: reverseRes.map(data => data.date),
        datasets: [
          {
            label: 'New Confirmed',
            borderColor: 'salmon',
            backgroundColor: 'salmon',
            fill: true,
            data: reverseRes.map(data => data.newConfirmed),
            type: 'bar',
            yAxisID: 'y-axis-1'
          },
          {
            label: 'Confirmed',
            borderColor: '#ff6384',
            backgroundColor: '#ff6384',
            fill: false,
            data: reverseRes.map(data => data.confirmed),
            type: 'line',
            yAxisID: 'y-axis-2',
            pointRadius: 1,
            hoverRadius: 5
          },
          {
            label: 'Recovered',
            borderColor: '#36a2eb',
            backgroundColor: '#36a2eb',
            fill: false,
            data: reverseRes.map(data => data.recovered),
            type: 'line',
            yAxisID: 'y-axis-2',
            pointRadius: 1,
            hoverRadius: 5
          },
          {
            label: 'Deaths',
            borderColor: '#c9cbcf',
            backgroundColor: '#c9cbcf',
            fill: false,
            data: reverseRes.map(data => data.deaths),
            type: 'line',
            yAxisID: 'y-axis-2',
            pointRadius: 1,
            hoverRadius: 5
          },

        ]
      });
    };

    fetchApi();
  }, []);

  const options = {
    title: { display: true, text: 'Change in confirmed cases from Covid 19', fontSize: 16 },
    legend: { display: true, position: 'bottom' },
    responsive: true,
    tooltips: {
      mode: 'label',
      callbacks: {
        label: function (tooltipItem, data) {
          return data.datasets[tooltipItem.datasetIndex].label + ' : ' + tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      }
    },
    elements: {
      line: {
        fill: false
      }
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'month'
          }
        }
      ],

      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          labels: {
            show: true
          },
          scaleLabel: {
            display: true,
            labelString: 'New Cases'
          },
          ticks: {
            beginAtZero: true,
            callback: function (label) {
              if (label < 1000) {
                return label
              } else if (label >= 1000) {
                return label / 1000 + 'k'
              } else if (label >= 1000000) {
                return label / 1000000 + 'M'
              }
            }
          }
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          },
          scaleLabel: {
            display: true,
            labelString: 'Accumulation'
          },
          ticks: {
            beginAtZero: true,
            callback: function (label) {
              if (label < 1000) {
                return label
              } else if (label >= 1000) {
                return label / 1000 + 'k'
              } else if (label >= 1000000) {
                return label / 1000000 + 'M'
              }
            }
          }
        }
      ]
    }
  };

  return (
    <div style={{paddingBottom: '3%'}}>
      <Paper style={{ padding: '10px' }}>
        <Bar
          data={apiData}
          options={options}
        />
      </Paper>
    </div>
  )
};


export const AusCharts = () => {
  const [newConfirmedData, setNewConfirmedData] = useState({});
  const [activeData, setActiveData] = useState({});
  const [newDeathsData, setNewDeathsData] = useState({});
  const [comparedData, setComparedData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetchData();

      const labels = [
        res[9].date_2,
        res[8].date_2,
        res[7].date_2,
        res[6].date_2,
        res[5].date_2,
        res[4].date_2,
        res[3].date_2,
        res[2].date_2,
        res[1].date_2,
        res[0].date_2
      ]

      setNewConfirmedData({
        labels: labels,
        datasets: [
          {
            label: 'New Confirmed',
            backgroundColor: '#ff6384',
            barThickness: 10,
            fill: true,
            data: [
              res[9].newConfirmed,
              res[8].newConfirmed,
              res[7].newConfirmed,
              res[6].newConfirmed,
              res[5].newConfirmed,
              res[4].newConfirmed,
              res[3].newConfirmed,
              res[2].newConfirmed,
              res[1].newConfirmed,
              res[0].newConfirmed
            ]
          }
        ]
      });

      setActiveData({
        labels: labels,
        datasets: [
          {
            label: 'Non-Critical',
            stack: 'active',
            backgroundColor: '#ffcd56',
            barThickness: 10,
            fill: true,
            data: [
              res[9].active - res[9].critical,
              res[8].active - res[8].critical,
              res[7].active - res[7].critical,
              res[6].active - res[6].critical,
              res[5].active - res[5].critical,
              res[4].active - res[4].critical,
              res[3].active - res[3].critical,
              res[2].active - res[2].critical,
              res[1].active - res[1].critical,
              res[0].active - res[0].critical
            ]
          },
          {
            label: 'Critical',
            stack: 'active',
            backgroundColor: 'salmon',
            barThickness: 10,
            fill: true,
            data: [
              res[9].critical,
              res[8].critical,
              res[7].critical,
              res[6].critical,
              res[5].critical,
              res[4].critical,
              res[3].critical,
              res[2].critical,
              res[1].critical,
              res[0].critical
            ]
          }
        ]
      });

      setNewDeathsData({
        labels: labels,
        datasets: [
          {
            label: 'New Deaths',
            backgroundColor: '#c9cbcf',
            barThickness: 10,
            fill: true,
            data: [
              res[9].newDeaths,
              res[8].newDeaths,
              res[7].newDeaths,
              res[6].newDeaths,
              res[5].newDeaths,
              res[4].newDeaths,
              res[3].newDeaths,
              res[2].newDeaths,
              res[1].newDeaths,
              res[0].newDeaths
            ]
          }
        ]
      });

      setComparedData({
        labels: ['Recovered', 'Active', 'Deaths'],
        datasets: [
          {
            backgroundColor: ['#36a2eb', '#ffcd56', '#c9cbcf'],
            borderColor: ['#36a2eb', '#ffcd56', '#c9cbcf'],
            fill: false,
            data: [
              res[0].recovered,
              res[0].active,
              res[0].deaths
            ]
          }
        ]
      });
    }

    fetchApi();
  }, []);

  return (
    <div style={{paddingBottom: '3%'}}>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Paper style={{ padding: '10px' }}>
            <Bar
              data={newConfirmedData}
              options={{
                title: { display: true, text: 'Daily new cases', fontSize: 16 },
                legend: { display: true, position: 'bottom' },
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                      callback: function (value) {
                        if (parseInt(value) >= 1000) {
                          return value.toLocaleString();
                        } else {
                          return value;
                        }
                      }
                    }
                  }]
                },
                tooltips: {
                  callbacks: {
                    label: function (tooltipItem, data) {
                      return data.datasets[tooltipItem.datasetIndex].label + ' : ' + tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                  }
                }
              }}
            />
          </Paper>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Paper style={{ padding: '10px' }}>
            <Bar
              data={activeData}
              options={{
                title: { display: true, text: 'Total Active Cases', fontSize: 16 },
                legend: { display: true, position: 'bottom' },
                scales: {
                  yAxes: [{
                    stacked: true,
                    ticks: {
                      beginAtZero: true,
                      callback: function (value) {
                        if (parseInt(value) >= 1000) {
                          return value.toLocaleString();
                        } else {
                          return value;
                        }
                      }
                    }
                  }],
                  xAxes: [{
                    stacked: true,
                  }]
                },
                tooltips: {
                  mode: 'label',
                  callbacks: {
                    label: function (tooltipItem, data) {
                      return data.datasets[tooltipItem.datasetIndex].label + ' : ' + tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    },
                    footer: (tooltipItems, data) => {
                      let total = tooltipItems.reduce((a, e) => a + parseInt(e.yLabel), 0);
                      return 'Total Active: ' + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                  }
                }
              }}
            />
          </Paper>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Paper style={{ padding: '10px' }}>
            <Bar
              data={newDeathsData}
              options={{
                title: { display: true, text: 'Daily new deaths', fontSize: 16 },
                legend: { display: true, position: 'bottom' },
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                      callback: function (value) {
                        if (parseInt(value) >= 1000) {
                          return value.toLocaleString();
                        } else {
                          return value;
                        }
                      }
                    }
                  }]
                },
                tooltips: {
                  callbacks: {
                    label: function (tooltipItem, data) {
                      return data.datasets[tooltipItem.datasetIndex].label + ' : ' + tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                  }
                }
              }}
            />
          </Paper>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Paper style={{ padding: '10px' }}>
            <Doughnut
              data={comparedData}
              options={{
                title: { display: true, text: 'Breakdown of confirmed cases', fontSize: 16 },
                legend: { display: true, position: 'bottom' },
                tooltips: {
                  callbacks: {
                    label: function (tooltipItem, data) {
                      var dataset = data.datasets[tooltipItem.datasetIndex];
                      var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                      var total = meta.total;
                      var currentValue = dataset.data[tooltipItem.index];
                      var percentage = parseFloat((currentValue / total * 100).toFixed(1));
                      return currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' (' + percentage + '%)';
                    }
                  }
                }
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )

}

