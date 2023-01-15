/* globals apex,$ */
window.APEXCHARTS = window.APEXCHARTS || {};

//Initialize plugin
APEXCHARTS.initialize = function(chartId,data,init) {

    var jsonData = JSON.parse(data);

    if (init && typeof init == 'function') init.call(this, jsonData);

    var chart = new ApexCharts(document.querySelector("#" + chartId), jsonData);

    chart.render();
}