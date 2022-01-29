<template>
  <div id="voltChart">

  </div>
</template>

<script>
  import flashIcon from '../assets/MdiFlash.svg'
  import echarts from '../../static/echarts.min.js'
  export default {
    props: {
      value: {
        type: Number,
      },
    },
    data() {
      return {
        voltageChart: null,
        flashIcon
      }
    },
    methods: {
      echartsInit() {
        let arr = [this.value];
        let title = 'Voltage'
        const color = ['#35c495', '#0ceda3', '#fff']
        const option = {

          title: {
            text: '{a|' + arr[0] + 'V' + '}\n{b|' + '}',
            x: 'center',
            y: 'center',
            textStyle: {
              rich: {
                a: {
                  fontSize: 20,
                  color: '#2faba1',
                  fontWeight: '600',
                  padding: [5, 0],
                },
                b: {
                  // fontSize: 10,
                  // color: '#38449c',
                  // padding: [0, 0],
                  backgroundColor: {
                    image: this.flashIcon
                  },
                  height: 25,
                  width:25
                }
              }
            }
          },
          tooltip: {
            formatter: function (params) {
              var res = "<div class='tooltip'><p>Voltage: " + params.value + "V</p></div>"
              return res;
            },
            backgroundColor: 'rgba(77,130,154,0.9)',
            borderRadius: 15,
            padding: [10, 10, 10, 10],
          },
          series: [
            //outer gauge
            {
              type: 'gauge',
              splitNumber: 20,
              min: 0,
              max: 100,
              radius: '88%',
              silent: true,
              center: ['50%', '50%'],
              startAngle: 90,
              endAngle: -269.9999,
              axisLine: {
                show: true,
                lineStyle: {
                  width: 2,
                  shadowBlur:5,
                  shadowColor:'rgba(77, 240, 221,0.9)',
                  color: [
                    [0, '#2faba1'],
                    [1, '#2faba1']
                  ]
                }
              },
              axisTick: {
                show: true,
                lineStyle: {
                  color: '#2faba1',
                  width: 2,
                },
                length: 10,
                splitNumber: 5
              },
              splitLine: {
                show: true,
                distance: 6,
                length: 4,
                lineStyle: {
                  color: '#2faba1',
                  width: 2,
                  
                }
              },
              axisLabel: {
                show: false
              },
              pointer: {
                show: 0,
              },
            },
            //outer circle
            {
              type: 'pie',
              radius: ['59%', '62%'],
              hoverAnimation: false,
              silent: true,
              color: "rgba(77, 240, 221)",
              itemStyle: {
                normal: {
                  shadowBlur:5,
                  shadowColor:'rgba(77, 240, 221,0.9)'
                }
              },
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
              data: [{ value: 1, name: 'vol1' }]
            },
            //inner gauge
            {
              type: 'gauge',
              splitNumber: 4,
              min: 0,
              max: 4,
              radius: '60%',
              silent: true,
              center: ['50%', '50%'],
              startAngle: 90,
              endAngle: -269.9999,
              axisLine: {
                show: true,
                lineStyle: {
                  width: 0,
                  shadowBlur: 0,
                  color: [
                    [0, '#2faba1'],
                    [1, '#2faba1']
                  ]
                }
              },
              axisTick: {
                show: true,
                lineStyle: {
                  color: '#2faba1',
                  width: 1
                },
                length: 5,
                splitNumber: 4
              },
              splitLine: {
                show: true,
                distance: -1,
                length: 15,
                lineStyle: {
                  color: '#2faba1',
                  width: 1
                },
              },
              axisLabel: {
                show: false
              },
              pointer: {
                show: 0,
              },
            },
            //inner circle
            {
              type: 'pie',
              radius: ['44%', '45%'],
              silent: true,
              hoverAnimation: false,
              color: "rgba(77, 240, 221,0.9)",
              itemStyle: {
                normal: {
                  shadowBlur:5,
                  shadowColor:'rgba(77, 240, 221,0.9)'
                }
              },
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
              data: [{ value: 1, name: 'vol2' }]
            },
            {
              type: 'gauge',
              splitNumber: 8,
              min: 0,
              max: 8,
              radius: '60%',
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
                    [0, '#2faba1'],
                    [1, '#2faba1']
                  ]
                }
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: '#2faba1',
                  width: 1
                },
                length: 5,
                splitNumber: 4
              },
              splitLine: {
                show: true,
                distance: 6,
                length: 5,
                lineStyle: {
                  color: '#2faba1',
                  width: 1
                },
              },
              axisLabel: {
                show: false
              },
              pointer: {
                show: 0,
              },
            },
            //pie to trigger tooltip
            {
              name: 'voltage',
              type: 'pie',
              radius: [0, '48%'],
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
              data: arr
            },
          ]
        };
        this.voltageChart = echarts.init(document.getElementById('voltChart'),null, { renderer: 'svg' })
        this.voltageChart.setOption(option)
        window.addEventListener("resize", () => {
          this.voltageChart.resize()
        })
      },
    },
    mounted(){
      this.echartsInit();
    },
    beforeDestroy() {
      if (this.voltageChart) {
        echarts.dispose(this.voltageChart)
      }
    },

  }
</script>

<style>
  #voltChart {
    width: 10vw;
    height: 25.5vh;
  }
</style>