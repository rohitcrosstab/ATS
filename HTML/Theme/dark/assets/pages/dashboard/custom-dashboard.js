'use strict';
$(document).ready(function() {
    // Calender js
    $(function() {
        $('.widget-calender').pignoseCalendar();
    });

    //statetics-graph1 update 2
    $(function() {

        // We use an inline data source in the example, usually data would
        // be fetched from a server

        var data = [],
            totalPoints = 300;

        function getRandomData() {

            if (data.length > 0)
                data = data.slice(1);

            // Do a random walk

            while (data.length < totalPoints) {

                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;

                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }
                data.push(y);
            }

            // Zip the generated y values with the x values

            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }

            return res;
        }

        // Set up the control widget

        var updateInterval = 30;
        $("#updateInterval").val(updateInterval).change(function() {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                if (updateInterval < 1) {
                    updateInterval = 1;
                } else if (updateInterval > 2000) {
                    updateInterval = 2000;
                }
                $(this).val("" + updateInterval);
            }
        });


        //STATETICS chart start
        var plot = $.plot("#analythics-graph", [getRandomData()], {
            series: {
                shadowSize: 0, // Drawing is faster without shadows
                color: '#0073aa'
            },
            lines: {
                fill: true,
                fillColor: 'rgba(0, 115, 170, 0.3)',
                borderWidth: 0
            },
            grid: {
                borderWidth: 0,
                labelMargin: 0,
                axisMargin: 0,
                minBorderMargin: 0
            },
            yaxis: {
                min: 0,
                max: 100,
                show: true
            },
            xaxis: {
                show: false
            }
        });

        //STATETICS chart Ends
        function update() {

            plot.setData([getRandomData()]);

            // Since the axes don't change, we don't need to call plot.setupGrid()

            plot.draw();
            setTimeout(update, updateInterval);
        }

        update();

    });

    /*custom line chart*/
    $(".customchart").sparkline([15, 30, 27, 35, 50, 71, 60], {
        type: 'line',
        width: '100%',
        height: '300px',
        tooltipClassname: 'chart-sparkline',
        chartRangeMax: '50',
        lineColor: '#0073aa',
        fillColor: 'rgba(0, 115, 170, 0.5)'
    });

    $(".customchart").sparkline([0, 25, 10, 7, 25, 35, 30], {
        type: 'line',
        width: '100%',
        height: '300px',
        composite: '!0',
        tooltipClassname: 'chart-sparkline',
        chartRangeMax: '40',
        lineColor: '#239a55',
        fillColor: 'rgba(35, 154, 85, .5)'
    });
    /*Pie*/
    $(".visitor-chart").sparkline([1, 2], {
        type: 'pie',
        width: '100px',
        height: '65px',
        sliceColors: ['#ccc', '#0073aa'],
        tooltipClassname: 'chart-sparkline'
    });
    /*custom line chart*/
    $(".sale-chart").sparkline([0, 6, 3, 10, 8, 3, 6, 15, 3, 14, 2, 9, 12, 0], {
        type: 'line',
        width: '100%',
        height: '65px',
        tooltipClassname: 'chart-sparkline',
        chartRangeMax: '50',
        lineColor: '#ccc',
        fillColor: '#ccc'
    });

    $(".sale-chart").sparkline([0, 6, 3, 10, 8, 3, 6, 15, 3, 0, 0, 0, 0, 0], {
        type: 'line',
        width: '100%',
        height: '65px',
        composite: '!0',
        tooltipClassname: 'chart-sparkline',
        chartRangeMax: '40',
        lineColor: '#fcd43d',
        fillColor: '#fcd43d'
    });
        //  Visitors bar
        $(".resource-barchart").sparkline([5, 6, 2, 4, 9, 8, 3, 6, 4, 5], {
            type: 'bar',
            barWidth: '8px',
            height: '50px',
            barColor: '#239a55',
            tooltipClassname: 'abc'
        });
        $(window).resize(function() {
        //  Resource bar
        $(".resource-barchart1").sparkline([5, 6, 3, 4, 7, 4, 8, 3, 6], {
            type: 'bar',
            barWidth: '12px',
            height: '70px',
            barColor: '#04e0b4',
            tooltipClassname: 'abc'
        });
        $(".resource-barchart2").sparkline([5, 6, 3, 4, 7, 4, 8, 3, 6], {
            type: 'bar',
            barWidth: '12px',
            height: '70px',
            barColor: '#fcd43d',
            tooltipClassname: 'abc'
        });
        $(".resource-barchart3").sparkline([5, 6, 3, 4, 7, 4, 8, 3, 6], {
            type: 'bar',
            barWidth: '12px',
            height: '70px',
            barColor: '#0393d8',
            tooltipClassname: 'abc'
        });

        /*custom line chart*/
        $(".customchart").sparkline([15, 30, 27, 35, 50, 71, 60], {
            type: 'line',
            width: '100%',
            height: '300px',
            tooltipClassname: 'chart-sparkline',
            chartRangeMax: '50',
            lineColor: '#0073aa',
            fillColor: 'rgba(0, 115, 170, 0.5)'
        });

        $(".customchart").sparkline([0, 25, 10, 7, 25, 35, 30], {
            type: 'line',
            width: '100%',
            height: '300px',
            composite: '!0',
            tooltipClassname: 'chart-sparkline',
            chartRangeMax: '40',
            lineColor: '#239a55',
            fillColor: 'rgba(35, 154, 85, .5)'
        });
        /*Pie*/
        $(".visitor-chart").sparkline([1, 2], {
            type: 'pie',
            width: '100px',
            height: '65px',
            sliceColors: ['#ccc', '#0073aa'],
            tooltipClassname: 'chart-sparkline'
        });
        /*custom line chart*/
        $(".sale-chart").sparkline([0, 6, 3, 10, 8, 3, 6, 15, 3, 14, 2, 9, 12, 0], {
            type: 'line',
            width: '100%',
            height: '65px',
            tooltipClassname: 'chart-sparkline',
            chartRangeMax: '50',
            lineColor: '#ccc',
            fillColor: '#ccc'
        });

        $(".sale-chart").sparkline([0, 6, 3, 10, 8, 3, 6, 15, 3, 0, 0, 0, 0, 0], {
            type: 'line',
            width: '100%',
            height: '65px',
            composite: '!0',
            tooltipClassname: 'chart-sparkline',
            chartRangeMax: '40',
            lineColor: '#fcd43d',
            fillColor: '#fcd43d'
        });
        //  Visitors bar
        $(".resource-barchart").sparkline([5, 6, 2, 4, 9, 8, 3, 6, 4, 5], {
            type: 'bar',
            barWidth: '8px',
            height: '50px',
            barColor: '#239a55',
            tooltipClassname: 'abc'
        });
    });

});

'use strict';
$(document).ready(function() {
    $(document).ready(function() {
        areaChart();
    });
    /*Area chart*/
    function areaChart() {

        window.lineChart = Morris.Line({
            element: 'task-status',
            data: [
                { y: '2006', a: 30, b: 10 },
                { y: '2007', a: 28, b: 60 },
                { y: '2008', a: 25, b: 20 },
                { y: '2009', a: 29, b: 50 },
                { y: '2010', a: 35, b: 22 },
                { y: '2011', a: 45, b: 70 },
                { y: '2012', a: 32, b: 26 },
                { y: '2013', a: 19, b: 75 },
                { y: '2014', a: 22, b: 35 },
                { y: '2015', a: 40, b: 65 },
                { y: '2016', a: 25, b: 10 }
            ],
            xkey: 'y',
            redraw: true,
            ykeys: ['a', 'b'],
            hideHover: 'auto',
            labels: ['Series A', 'Series B'],
            lineColors: ['#f1c40f', '#239a55']
        });
    };

    var chart = c3.generate({
        bindto: '#chart',
        color: {
        pattern: ['#239a55', '#0073aa', '#f1c40f', '#2ecc71', '#bdc3c7', '#e74c3c']
    },
        data: {
            columns: [
                ["Application", 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                ["Phone Screen", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                ["MGR Interview", 2.5, 0.2, 0.1, 0.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
                ["Onsite Interview", 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                ["Offer", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                ["Hire", 2.5, 1.9, 2.1, 1.8, 0.2, 0.1, 0.2, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
            ],
            type : 'donut',
            onclick: function (d, i) { console.log("onclick", d, i); },
            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        },
        donut: {
            title: "Total Openings - 41"
        }
    });

    /*Pie Chart*/

    var chart = c3.generate({
        bindto: '#transection',
        data: {
            // iris data from R
            columns: [
                ['Done', 150],
                ['Due', 180],
                ['Hold', 60]
            ],
            type: 'pie',
            onclick: function(d, i) { console.log("onclick", d, i); },
            onmouseover: function(d, i) { console.log("onmouseover", d, i); },
            onmouseout: function(d, i) { console.log("onmouseout", d, i); }
        },
        color: {
            pattern: ['#239a55', '#0073aa', '#f1c40f']
        },
    });
});
