// Load the packages
google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var label = 'CO2'; // vores variable for labellet
    var value = 60; // vores test værdi for graffen

    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        [label, value]
    ]);

    var options = {
        width: 200, height: 200,
        redFrom: 90, redTo: 100,
        yellowFrom: 75, yellowTo: 90,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('CO2_chart_div'));
    chart.draw(data, options);

    setInterval(function () {
        value = 40 + Math.round(60 * Math.random());
        data.setValue(0, 1, value);
        chart.draw(data, options);
    }, 13000);
}

/*window.onresize = function () { drawChart(); }*/
