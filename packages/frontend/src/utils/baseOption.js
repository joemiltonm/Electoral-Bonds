export let baseOption = {
            title: {
                text: 'Top 10 Receivers',
                left: 'center',
                top: '2',
            },
            legend: {
                orient: 'vertical',
                left: '0',
                show: true,
                textStyle: {
                    width: '200',
                    overflow: 'truncate',
                }
            },
            series: [
                {
                name: 'Access From',
                type: 'pie',
                radius: '80%',
                emphasis: {
                    itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                    },
                    labelLine: {
                    show:false,
                    },
                    label: {
                        show:false,
                    },
                }
    ],
            tooltip: {
                    trigger: 'item', // Can be 'item', 'axis', or 'none'
                formatter: function (params) {
                    let tip = ""
                    if (params.value.toFixed(2) > 1) {
                        tip += params.marker + params.name + ': ' + params.value.toFixed(2) + ' crores (' + params.percent + '%)<br/>'
                    } else {
                        tip += params.marker + params.name + ': ' + (params.value*100).toFixed(2) + ' lakhs ('  + params.percent + '%)<br/>'
                    }
                    return tip
                    }

                    }
            };
