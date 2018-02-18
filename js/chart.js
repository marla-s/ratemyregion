Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Rate My Region'
    },
    xAxis: {
        categories: [
            'Openness to Entrepreneurship',
            'Balanced Economic Development Strategies',
            'Robust Entrepreneurship Programs',
            'Prudent Investment Processes',
            'An Expansive View',
            'Infrastructure'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rating'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b> {point.y} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'User',
        data: [0,1,2.5,4,5,1]

    }, {
        name: 'Expert',
        data: [2.5,4,1,5,4,2.5]

    }]
});