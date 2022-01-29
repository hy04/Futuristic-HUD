<template>
  <div id="lineChart"></div>
</template>

<script>
  import echarts from '../../static/echarts.min.js'
  export default {
    props: {
      value: {
        type: Number,
      },
    },
    data() {
      return {
        eChart: null,
      }
    },
    methods: {
      echartsInit() {
        let arr = [this.value];
        let DataSample = ["20", "50", "12", "65", "30", "60"]
        let xLabel = ['3.26', '3.27', '3.28', '3.29', '3.30', '3.31']
        let title = 'lineChart'
        const option = {
          backgroundColor: 'rgba(19,74,71,.4)',
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(77,130,154,0.9)',
            borderRadius: 15,
            borderWidth: 0,
            padding: [10, 10, 10, 10],
            axisPointer: {
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                }
              },
            },
            textStyle: {
              fontFamily: "Titillium Web",
              color: '#4df0dd',
              fontSize: 18,
              fontWeight: 600
            }

          },
          //   legend: {
          //     align: "left",
          //     right: '10%',
          //     top: '10%',
          //     type: 'plain',
          //     textStyle: {
          //       color: '#7ec7ff',
          //       fontSize: 16
          //     },
          //     itemGap: 25,
          //     itemWidth: 18,
          //     icon: 'path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',

          //     data: [{
          //         name: 'people1'
          //       },
          //       {
          //         name: 'people2'
          //       }
          //     ]
          //   },
          grid: {
            show: true,
            top: '1%',
            left: '1%',
            right: '1%',
            bottom: '1%',
            borderColor: 'rgba(47, 171, 161,0.8)',
            borderWidth: 5,
            shadowBlur: 10,
            shadowColor: 'rgba(47, 171, 161,0.7)'
            // containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgb(84,94,102,.3)'
              },
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: '#2faba1',
                padding: 16,
                fontSize: 14
              },
              formatter: function (data) {
                return data
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgb(84,94,102,.3)'
              },
            },
            axisTick: {
              show: false,
            },
            data: xLabel
          }],
          yAxis: [{
            //name: 'people',
            nameTextStyle: {
              color: '#2faba1',
              fontSize: 16,
              padding: 10
            },
            min: 0,
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgb(84,94,102,.3)'
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgb(84,94,102,.3)"
              }

            },
            axisLabel: {
              show: false,
              textStyle: {
                color: '#2faba1',
                padding: 16
              },
              formatter: function (value) {
                if (value === 0) {
                  return value
                }
                return value
              }
            },
            axisTick: {
              show: false,
            },
          }],
          series: [{
            name: 'Changes',
            type: 'line',
            symbol: 'circle',
            showAllSymbol: true,
            symbolSize: 0,
            smooth: true,
            lineStyle: {
              normal: {
                width: 5,
                color: 'rgba(77, 240, 221,0.9)',
              },
              borderColor: 'rgba(0,0,0,.4)',
            },
            itemStyle: {
              color: "rgba(77, 240, 221,1)",
              borderColor: "#646ace",
              borderWidth: 2

            },
            tooltip: {
              show: true
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgba(77, 240, 221,.3)"
                  },
                  {
                    offset: 1,
                    color: "rgba(77, 240, 221, 0)"
                  }
                ], false),
                shadowColor: 'rgba(77, 240, 221,0.5)',
                shadowBlur: 20
              }
            },
            data: DataSample
          }]
        };
        this.eChart = echarts.init(document.getElementById('lineChart'), null, {
          renderer: 'svg'
        })
        this.eChart.setOption(option)
        window.addEventListener("resize", () => {
          this.eChart.resize()
        })
      },
    },
    mounted() {
      this.echartsInit();
    },
    beforeDestroy() {
      if (this.eChart) {
        echarts.dispose(this.eChart)
      }
    },

  }

</script>

<style>
  #lineChart {
    width: 78%;
    height: 65%;
  }

</style>
