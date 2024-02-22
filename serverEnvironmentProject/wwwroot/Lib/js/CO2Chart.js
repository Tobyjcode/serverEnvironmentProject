// Load the packages
google.charts.load('current', { 'packages': ['gauge'] });

function drawCO2Chart(label, value, elementId) {
    google.charts.setOnLoadCallback(function () {
        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            [label, value]
        ]);

        var options = {
            width: 200, height: 500,
            redFrom: 90, redTo: 100,
            yellowFrom: 75, yellowTo: 90,
            minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById(elementId));

        chart.draw(data, options);

        setInterval(function () {
            data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
            chart.draw(data, options);
        }, 13000);
    });
}
