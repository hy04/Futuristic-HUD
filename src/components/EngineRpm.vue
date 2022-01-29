<template>
  <div id="engineRpmChart"></div>
</template>

<script>
import echarts from '../../static/echarts.min.js'
  export default {
    props: {
      value: {
        type: Number,
      },
      isEngineOn: {
        type: Boolean
      }
    },
    data() {
      return {
        rpmChart: null,
        timer: null,
        echarts
      }
    },
    methods: {
      doing() {
        let option = this.rpmChart.getOption();
        option.series[0].startAngle = option.series[0].startAngle - 3;
        option.series[6].startAngle = option.series[6].startAngle + 3;
        this.rpmChart.setOption(option);
      },
      startTimer() {
        this.timer = setInterval(this.doing, 100);
      },
      stopTimer() {
        clearInterval(this.timer);
      },
      echartsInit() {
        let value = this.isEngineOn ? this.value : 0;
        let isOn = this.isEngineOn ? 'Engine on' : 'Engine off';
        let unit = 'RPM';

        this.rpmChart = echarts.init(document.getElementById('engineRpmChart'), null, {
          renderer: 'svg'
        })
        this.rpmChart.setOption({
          title: {
            text: '{a|' + value + '}\n{b|' + unit + '}\n{c|' + isOn + '}',
            x: 'center',
            y: 'center',
            
            textStyle: {
              rich: {
                a: {
                  fontSize: 25,
                  color: 'rgba(77, 240, 221,0.8)',
                  fontWeight: '600',
                  textShadowColor: 'rgba(77, 240, 221,0.8)',
                  textShadowBlur: 5,
                },
                b: {
                  fontSize: 15,
                  color: 'rgba(77, 240, 221,0.8)',
                  fontWeight: '600',
                  padding: [5, 0],
                  textShadowColor: 'rgba(77, 240, 221,0.8)',
                  textShadowBlur: 5,
                },
                c: {
                  fontSize: 17,
                  color: 'rgba(77, 240, 221,0.8)',
                  padding: [5, 0],
                  fontWeight: '600',
                  textShadowColor: 'rgba(77, 240, 221,0.8)',
                  textShadowBlur: 5,
                }
              }
            }
          },
          tooltip: {
            formatter: function (params) {
              var res = "<div class='tooltip'><p>EngineRPM: " + params.value + "</p></div>"
              return res;
            },
            backgroundColor: 'rgba(77,130,154,0.9)',
            borderRadius: 15,
            padding: [10, 10, 10, 10],
          },
          series: [
            //outer circle
            {
              type: 'pie',
              zlevel: 1,
              radius: ['94%', '96%'],
              silent: true,
              hoverAnimation: false,
              label: {
                normal: {
                  show: false
                },
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.pie3()
            },
            //second outer circle
            {
              type: 'pie',
              zlevel: 3,
              silent: true,
              radius: ['86%', '85%'],
              label: {
                normal: {
                  show: false
                },
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.pie4('rgba(47, 171, 161,0.8)')
            },
            //third outer circle
            {
              type: 'pie',
              zlevel: 2,
              silent: true,
              radius: ['83%', '84%'],
              startAngle: 50,
              hoverAnimation: false,
              label: {
                normal: {
                  show: false
                },
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.pie4('rgba(47, 171, 161,0.8)')
            },
            //dashed circle
            {
              type: 'pie',
              zlevel: 4,
              radius: ['78%', '76%'],
              hoverAnimation: false,
              silent: true,
              clockWise: false,
              itemStyle: {
                normal: {
                  color: '#38449c'
                }
              },
              label: {
                show: false
              },
              data: this.dashed(100, 'rgba(163,217,211,0.9)')
            },
            //fifth outer circle
            {
              type: 'pie',
              silent: true,
              radius: ['66%', '68%'],
              color: ["rgba(47, 171, 161,0.4)", "rgba(47, 171, 161,0.6)", "rgba(47, 171, 161,0.8)",
                "rgba(47, 171, 161,1)",
              ],
              startAngle: 50,
              hoverAnimation: false,
              label: {
                normal: {
                  show: false
                },
              },
              data: [50, 50, 50, 50]
            },
            //gauge circle
            {
              type: 'gauge',
              splitNumber: 16,
              min: 0,
              max: 100,
              radius: '68%',
              center: ['50%', '50%'],
              startAngle: 90,
              endAngle: -269.9999,
              silent: true,
              axisLine: {
                show: true,
                lineStyle: {
                  width: 0,
                  shadowBlur: 0,
                  color: [
                    [0, '#38449c'],
                    [1, '#38449c']
                  ]
                }
              },
              axisTick: {
                show: true,
                lineStyle: {
                  color: '#2faba1',
                  width: 2
                },
                length: 12,
                splitNumber: 5
              },
              splitLine: {
                show: true,
                distance: 3,
                length: 7,
                lineStyle: {
                  color: '#2faba1',
                  width: 2
                }
              },
              axisLabel: {
                show: false
              },
              pointer: {
                show: 0,
              },
              detail: {
                borderColor: '#fff',
                shadowColor: '#fff',
                shadowBlur: 2,
                offsetCenter: [0, '0%'],
                textStyle: {
                  color: '#fff',
                  fontSize: 30,
                },
                formatter: '{value}'
              },
            },
            //inner three-border-pie
            {
              type: 'pie',
              zlevel: 6,
              silent: true,
              radius: ['43%', '46%'],
              label: {
                normal: {
                  show: false
                },
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.pie3()
            },
            //inner circle
            {
              type: 'pie',
              silent: true,
              color: "rgba(56, 68, 156,0.7)",
              radius: ['44%', '45%'],
              label: {
                normal: {
                  show: false
                },
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [1]
            },
            //pie to trigger tooltip
            {
              name: 'engineRpm',
              type: 'pie',
              radius: [0, '46%'],
              tooltip: {
                show: true
              },
              color: "rgba(47, 171, 161,0)",
              startAngle: 50,
              hoverAnimation: false,
              label: {
                normal: {
                  show: false
                },
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: value,
                name: 'engine'
              }]
            },
          ]
        })
        window.addEventListener("resize", () => {
          this.rpmChart.resize()
        })
        // document.addEventListener("visibilitychange", () => {
        //   if (document.hidden) {
        //     if (this.timer) {
        //       this.stopTimer()
        //     }
        //   } else {
        //     if (this.isEngineOn) {
        //       this.startTimer()
        //     }
        //   }
        // });
      },

    },
    mounted() {
      this.echartsInit();
      if (this.isEngineOn) {
        setTimeout(this.startTimer, 2000)
      }
    },
    beforeDestroy() {
      if (this.timer) {
        this.stopTimer();
      }
      if (this.rpmChart) {
        echarts.dispose(this.rpmChart)
      }
    },
  }

</script>

<style>
  #engineRpmChart {
    width: 20.66vw;
    height: 32.5vh;
  }

</style>
