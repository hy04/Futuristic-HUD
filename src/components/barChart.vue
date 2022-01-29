<template>
  <div id="barChart">

  </div>
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
        let DataSample = [80, 60, 50, 40, 87, 90, 100]
        let xLabel = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
        let title = 'barChart'
        const option = {
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
          // backgroundColor: '#0f375f',
          animation: false,
          grid: {
            top: "1%",
            bottom: "1%",
            left: '2%',
            right: '2%'
          },
          xAxis: {
            data: xLabel,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#11417a'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              margin: 14,
              fontSize: 14,
              textStyle: {
                color: "#A3C0DF"
              }
            },

          },
          yAxis: [{
            type: "value",
            gridIndex: 0,
            min: 0,
            max: 100,
            interval: 25,
            // splitNumber: 4,
            splitLine: {
              show: false,
              lineStyle: {
                color: '#113763',
                width: 1
              },
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#11417a'
              }
            },
            axisLabel: {
              show: false,
              margin: 14,
              fontSize: 14,
              textStyle: {
                color: "#A3C0DF"
              }
            },
          }, ],
          series: [{
              name: "Changes",
              type: "bar",
              barWidth: 17,
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgba(77, 240, 221,0.9)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(47, 171, 161,0.8)'
                    }
                  ])
                }
              },
              data: DataSample,
              z: 10,
              zlevel: 0,
              label: {
                "show": false,
                "position": "top",
                "distance": 10,
                fontSize: 16,
                "color": "#01fff4"
              }
            },
            {
              type: "pictorialBar",
              itemStyle: {
                normal: {
                  color: "#091220",
                  borderWidth: 0
                }
              },
              tooltip: {
                show: false
              },
              symbolRepeat: "fixed",
              symbolMargin: 4,
              symbol: "rect",
              symbolClip: true,
              symbolSize: [17, 2],
              symbolPosition: "start",
              symbolOffset: [0, -1],
              data: DataSample,
              width: 25,
              z: 0,
              zlevel: 1,
            },
          ]
        };
        this.eChart = echarts.init(document.getElementById('barChart'), null, { renderer: 'svg' })
        this.eChart.setOption(option)
        window.addEventListener("resize", () => {
          this.eChart.resize()
        })
      },
    },
    mounted(){
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
  #barChart {
    width: 28%;
    height: 70%;
  }
</style>