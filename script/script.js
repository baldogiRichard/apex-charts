/* globals apex,$ */
window.APEXCHARTS = window.APEXCHARTS || {};

//Initialize plugin
APEXCHARTS.initialize = function(chartId,data,init) {

    if (init && typeof init == 'function') init.call(this, data);

    var chart = new ApexCharts(document.querySelector("#" + chartId), data);

    chart.render();
}