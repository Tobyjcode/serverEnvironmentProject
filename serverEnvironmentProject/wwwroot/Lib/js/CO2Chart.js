// Load the packages
google.charts.load('current', { 'packages': ['gauge'] });

function drawCO2Chart(label, value, elementId) {
    google.charts.setOnLoadCallback(function () {
        var data = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            [label, value]
        ]);

        var element = document.getElementById(elementId);
        var options = {
            width: element.offsetWidth,
            height: element.offsetHeight,
            redFrom: 90, redTo: 100,
            yellowFrom: 75, yellowTo: 90,
            minorTicks: 5
        };

        var chart = new google.visualization.Gauge(element);

        chart.draw(data, options);

        setInterval(function () {
            data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
            chart.draw(data, options);
        }, 1000);
    });
}
