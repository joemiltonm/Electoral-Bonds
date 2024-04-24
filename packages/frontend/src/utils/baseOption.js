export let baseOption = {
            title: {
                text: 'proportion',
                right: '20',
                top: '0',
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: '0',
                show: true,
            },
            series: [
                {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
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
                    }
                }
            ]
            };
