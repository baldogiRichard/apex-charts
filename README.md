# apex-charts
This repository contains the files for the apexcharts APEX Plug-in.

<img width="697" alt="image" src="https://user-images.githubusercontent.com/100072414/202902389-559b2074-5f76-4702-9112-a59262d81009.png">

<img width="695" alt="image" src="https://user-images.githubusercontent.com/100072414/202902450-fa81c2a6-2edb-430a-8a14-6926c72fc542.png">

Oracle Application Express - Interactive Charts plugin

This plug-in provides a region where you can display different kinds of interactive charts.

Minimum requirement: Oracle Application Expresss 20.2

This plug-in uses the <a href="https://apexcharts.com/" rel="nofollow">ApexCharts.js</a> and the <a href="https://momentjs.com/" rel="nofollow">Moment.js</a> library.

# setup

You can check each setup in my downloadable <a href="https://github.com/baldogiRichard/plug-in-site" rel="nofollow">Sample Application: APEX Plug-ins by Richard Baldogi</a>

<b>Gradient Line Chart example</b>

<u>Query example:</u>

<pre><code>select ID,
       to_char(to_date(CATEGORY,'mm.dd.yyyy'),'yyyy.mm.dd') as CATEGORY,
       case when CHARTNAME = 'synch1'
               then 'Total Visits'
            when CHARTNAME = 'sync2'
               then 'Page Views'
            else 'Session Duration'
       end as CHARTNAME,
       VALUE,
       'line' as COMBO_TYPE
from APEXCHARTS_LINE</code></pre>

<u>JSON example:</u>

<pre><code>series: 
[
    {
        "name": "line_chart_3",
        "type": "line",
        "data": [
            {
                "x": "2017.02.11",
                "y": 15
            },
            {
                "x": "2017.02.12",
                "y": 17
            },
            {
                "x": "2017.02.13",
                "y": 23
            }
        ]
    }
]
</code></pre>

<b>Customizing the interactive charts region</b>

Developers can customize their charts by specifying a function in the Javascript Initialization Code section

Example:


<code><pre>

function(config){
    
    config.stroke = {
          width: [5, 7, 5],
          curve: 'straight',
          dashArray: [0, 8, 5]
    };

    config.legend = {
        tooltipHoverFormatter: function(val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
    };

    config.markers = {size: 0, hover: {sizeOffset: 6}};

    return config;
}

</code></pre>

For more options please check the <a href="https://apexcharts.com/docs/" rel="nofollow">ApexCharts Documentation</a> Options (Reference) section.

#

License MIT
