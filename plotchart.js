function makeChart(datapenduduk) {
    // datapenduduk is an array of objects where each object represents a player
     var usia = datapenduduk.map(function(d) {
      return d.Usia;
    });
    var jumlah = datapenduduk.map(function(d) {
      return d.Jmlpndk;
    });
   
    var ctx = document.getElementById('myChartOne').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: usia,
        datasets: [{
          label: 'Jumlah',
          data: jumlah,
          backgroundColor:[
        'rgba(212, 68, 106, 0.3)',
        'rgba(255, 159, 64, 0.3)',
        'rgba(255, 205, 86, 0.3)',
        'rgba(36, 138, 227, 0.3)',
        'rgba(54, 162, 235, 0.3)',
        'rgba(153, 102, 255, 0.3)',
        'rgba(201, 203, 207, 0.3)'
          ],
          borderColor:[
        'rgb(212, 68, 106)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(36, 138, 227)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)' 
          ],
          borderWidth: 2
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
  }
  d3.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vTQaYJ-aqkFYcPwosfcIHX6wQus6uf3LSs5UTsGpUiKUIn3an68dTXEgC0yD94wjyyIny9nwe8Y8dOm/pub?gid=917736693&single=true&output=csv').then(makeChart);

function buatdiagram(datapenduduk) {
    // datapenduduk is an array of objects where each object represents a player
     var pekerjaann = datapenduduk.map(function(d) {
      return d.Pekerjaan;
    });
    var totall = datapenduduk.map(function(d) {
      return d.total;
    });
    
    var ctx = document.getElementById('myChartTwo').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: pekerjaann,
        datasets: [
          {
            label: 'Jumlah pekerja',
            data: totall,
            backgroundColor:[
                'rgba(212, 68, 106, 0.3)',
                'rgba(255, 159, 64, 0.3)',
                'rgba(255, 205, 86, 0.3)',
                'rgba(36, 138, 227, 0.3)',
                'rgba(54, 162, 235, 0.3)',
                'rgba(153, 102, 255, 0.3)',
                'rgba(201, 203, 207, 0.3)',
                'rgba(110, 158, 235, 0.3)',
                'rgba(176, 123, 237, 0.3)',
                'rgba(116, 242, 234, 0.3)',
            ],
            borderColor:[
                'rgb(212, 68, 106)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(36, 138, 227)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)',
                'rgb(110, 158, 235)',
                'rgb(176, 123, 237)',
                'rgb(116, 242, 234)',
            ],
            borderWidth: 2
          }
        ]
      },
      options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });
  }
  d3.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vTQaYJ-aqkFYcPwosfcIHX6wQus6uf3LSs5UTsGpUiKUIn3an68dTXEgC0yD94wjyyIny9nwe8Y8dOm/pub?gid=744188034&single=true&output=csv').then(buatdiagram)

function buatDiagram(datapenduduk) {
     var agama = datapenduduk.map(function(d) {
      return d.Agama;
    });
    var Totalpemukaagama = datapenduduk.map(function(d) {
      return d.Total;
    });
    
    var ctx = document.getElementById('myChartThree').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: agama,
        datasets: [
          {
            label:'Jumlah Penduduk',
            data: Totalpemukaagama,
            backgroundColor:[
                'rgba(212, 68, 106, 0.3)',
                'rgba(255, 159, 64, 0.3)',
                'rgba(255, 205, 86, 0.3)'
            ],
            borderColor:[
                'rgb(212, 68, 106)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)'
            ],
            borderWidth: 2
          }
        ]
      },
      options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
      }
    });
  }
  d3.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vTQaYJ-aqkFYcPwosfcIHX6wQus6uf3LSs5UTsGpUiKUIn3an68dTXEgC0yD94wjyyIny9nwe8Y8dOm/pub?gid=1545165958&single=true&output=csv').then(buatDiagram)

function BuatDiagram(datapenduduk) {
    // datapenduduk is an array of objects where each object represents a player
     var tahunn = datapenduduk.map(function(d) {
      return d.Tahun;
    });
    var jumlahtotal = datapenduduk.map(function(d) {
      return d.Jumlah;
    });
    
    var ctx = document.getElementById('myChartFour').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: tahunn,
        datasets: [
          {
            label: 'Total Penduduk',
            data: jumlahtotal,
            backgroundColor:[
                'rgba(176, 123, 237, 0.3)',
                'rgba(116, 242, 234, 0.3)',
            ],
            borderColor:[
                'rgba(176, 123, 237)',
                'rgba(116, 242, 234)',
            ],
            borderWidth: 2
          }
        ]
      },
      options: {
        scales: {
            yAxes: [{
                display: true,
                ticks:{
                  beginAtZero: true
                }
            }]
        }
    }
    });
  }
  d3.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vTQaYJ-aqkFYcPwosfcIHX6wQus6uf3LSs5UTsGpUiKUIn3an68dTXEgC0yD94wjyyIny9nwe8Y8dOm/pub?gid=385029408&single=true&output=csv').then(BuatDiagram)

  function makechart(datapenduduk) {
    // datapenduduk is an array of objects where each object represents a player
     var tingkatpendidikann = datapenduduk.map(function(d) {
      return d.TingkatPendidikan;
    });
    var jumlah = datapenduduk.map(function(d) {
      return d.Jumlah;
    });
   
    var ctx = document.getElementById('myChartFive').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: tingkatpendidikann,
        datasets: [{
          label: 'Jumlah',
          data: jumlah,
          backgroundColor:[
        'rgba(212, 68, 106, 0.3)',
        'rgba(255, 159, 64, 0.3)',
        'rgba(255, 205, 86, 0.3)',
        'rgba(47, 222, 152, 0.3)',
        'rgba(54, 162, 235, 0.3)'
          ],
          borderColor:[
        'rgb(212, 68, 106)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(47, 222, 152)',
        'rgb(54, 162, 235)' 
          ],
          borderWidth: 2
          }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins:{
              title:{
                display: true,
                text: 'Data Pendidikan Penduduk',
                padding:{
                  top: 10,
                  bottom: 30
                }
              }
            }
        }
    });
  }
  d3.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vTQaYJ-aqkFYcPwosfcIHX6wQus6uf3LSs5UTsGpUiKUIn3an68dTXEgC0yD94wjyyIny9nwe8Y8dOm/pub?gid=1205912369&single=true&output=csv').then(makechart);
