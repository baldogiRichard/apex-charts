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

<b>Dashed Line Chart example</b>

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

<pre><code>
"series": [
    {
        "name": "Session Duration",
        "type": "line",
        "data": [
            {
                "x": "2017.02.11",
                "y": 43
            },
            {
                "x": "2017.02.12",
                "y": 56
            }
        ]
    },
    {
        "name": "Page Views",
        "type": "line",
        "data": [
            {
                "x": "2017.02.11",
                "y": 15
            },
            {
                "x": "2017.02.12",
                "y": 17
            }
        ]
    },
    {
        "name": "Total Visits",
        "type": "line",
        "data": [
            {
                "x": "2017.02.11",
                "y": 10
            },
            {
                "x": "2017.02.12",
                "y": 36
            }
        ]
    }
]
</code></pre>

<b>Settings</b>

<img width="100" alt="image" src="https://user-images.githubusercontent.com/100072414/202905123-c7d91798-6145-4ac4-99cb-6723007f3b9d.png">

<b>Title attributes</b>
<p>You can specify a title for category (X) and Value (Y) axis</p>

<img width="143" alt="image" src="https://user-images.githubusercontent.com/100072414/202905705-6f2480c0-d471-47c5-a739-27bf56e625f6.png">

<b>Array type charts</b>
<p>When working with array type charts you can specify a comma separated list of columns for the Y axis which will generate an array of values</p>

<img width="143" alt="image" src="https://user-images.githubusercontent.com/100072414/202905387-8308cd9d-69a7-4ab0-b905-a13d96a6c5b2.png">

<b>Combo chart attributes</b>
<p>When you specify a combo chart in the "Type" attribute a type and name column must be specified for the plug-in to generate multiple charts in the display area.</p>

<b>Toolbar features</b>
<p>Make the chart more flexible and interactive by selecting the following features</p>
<ul>
       <li>Download: The chart can be downloaded in different formats (SVG,PNG,CSV).</li>
       <li>Selection: Select a specific region in the X or Y axis of the chart.</li>
       <li>Zoom: Zoom in and out to gain more insight when analyzing your chart.</li>
       <li>Pan: Moves the chart plotarea left or right.</li>
       <li>Reset: Resets the chart to its original display.</li>
</ul>

<img width="143" alt="image" src="https://user-images.githubusercontent.com/100072414/202906719-2682cacc-d1c6-45cf-be9b-c2d9307ce31c.png">

<b>Synchronize charts</b>
<p>Charts can be synchronized to change the content of the plotarea.</p>

<b>Customizing the interactive charts region</b>

Developers can customize their charts by specifying a function in the Javascript Initialization Code section

Example:

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

For more options please check the <a href="https://apexcharts.com/docs/" rel="nofollow">ApexCharts Documentation</a> Options (Reference) section.

#

License MIT
