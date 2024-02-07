// calls the packages
google.charts.load('current', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(initChart);

// A chart initializer where we take xs and ys as arrays
function initChart() {
    var xs = [1, 2, 3, 4, 5]; // replace with your x-axis data
    var ys = [1, 2, 3, 4, 5]; // replace with your y-axis data
    window.generateChart({ xs, ys });
}

// generates the chart, it takes in our variables as params
window.generateChart = (params) => {
    var xs = params.xs;
    var ys = params.ys;

    // visualizes the google dataTable chart
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Y');

    for (var i = 0; i < ys.length; i++) {
        data.addRow([xs[i], ys[i]]);
    }

    // This variable contains options for what can be displayed on the chart
    var options = {
        hAxis: { title: 'Time (Miniute)' },
        vAxis: { title: 'Temperature' },
        title: 'temperature chart test',
        legend: { position: 'none' },
    };

    var chart = new google.visualization.LineChart(document.getElementById('chartDiv'));
    chart.draw(data, options);
};

window.onresize = function () { initChart(); }
