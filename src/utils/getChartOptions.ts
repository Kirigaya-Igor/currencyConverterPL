export interface IChartOptions {
    xData: string[];
    yData: number[];
    currentPrice: number;
    rateCode: string;
}

export const getChartOptions = (data: IChartOptions, isLight?: boolean) => {
    const minY = +(Math.min(...data.yData) - 0.1).toFixed(2);

    return {
        grid: {
            top: '30px',
            left: '100px',
            right: '0px',
            bottom: '90px',
            borderColor: 'rgba(115, 143, 172, 0.24)',
            backgroundColor: 'rgba(115, 143, 172, 0.07)',
            show: true,
        },
        legend: {
            data: [`Price ${data.rateCode}`],
            orient: 'vertical',
            bottom: 0,
            height: 50,
            itemWidth: 50,
            itemHeight: 0,
            itemGap: 15,
            textStyle: {
                color: isLight ? 'black' : 'white',
                fontSize: 15,
            },
            selectedMode: false,
        },
        xAxis: {
            data: data.xData,
            type: 'category',
            boundaryGap: false,
            splitLine: {
                lineStyle: {
                    color: 'rgba(115, 143, 172, 0.24)',
                },
            },
            axisLine: {
                lineStyle: {
                    color: isLight ? 'black' : 'white',
                },
            },
            axisLabel: {
                rotate: 25,
                margin: 20,
                color: isLight ? 'black' : 'white',
            },
            splitNumber: 10,
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: 'rgba(115, 143, 172, 0.24)',
                },
            },
            min: minY < 0 ? 0 : minY,
            axisLine: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}',
                color: isLight ? 'black' : 'white',
                margin: 24,
            },
            axisTick: {
                show: false,
            },
            splitNumber: 12,
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (e: any) {
                const price = e[0].value;
                const date = e[0].name;

                return `
            <div>
                <p>
                    price:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    ${price}
                </p>
                <p>
                    date:
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    ${date}
                </p>
                <p>
                    current price:
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    ${data.currentPrice} (${data.xData[254]})
                </p>
            </div>`;
            },
        },
        series: [
            {
                type: 'line',
                name: `Price ${data.rateCode}`,
                symbol: 'none',
                smooth: true,
                lineStyle: {
                    color: '#65C637',
                },
                data: data.yData,
            },
            {
                type: 'line',
                markLine: {
                    symbol: 'none',
                    label: {
                        show: false,
                    },
                    lineStyle: {
                        color: isLight ? 'black' : 'white',
                        type: 'solid',
                    },
                    data: [{ yAxis: data.currentPrice }, { xAxis: 'min' }],
                },
            },
        ],
    };
};
