<template>
  <div id="hourChart">

  </div>
</template>

<script>
  import hourIcon from '../assets/MdiClock.svg'
  import echarts from '../../static/echarts.min.js'
  export default {
    props: {
      value: {
        type: Number,
      },
    },
    data() {
      return {
        totalHourChart: null,
        hourIcon
      }
    },
    methods: {
      echartsInit() {
        let arr = [this.value];
        let title = 'Total Hour'
        const option = {

          title: {
            text: '{a|' + arr[0] + 'h' + '}\n{b|' + '}',
            x: 'center',
            y: 'center',
            textStyle: {
              rich: {
                a: {
                  fontSize: 18,
                  color: '#2faba1',
                  fontWeight: '600',
                  padding: [5, 0],
                },
                b: {
                  // fontSize: 10,
                  // color: '#38449c',
                  // padding: [0, 0],
                  backgroundColor: {
                    image: this.hourIcon
                  },
                  height: 25,
                  width: 25
                }
              }
            }
          },
          tooltip: {
            formatter: function (params) {
              var res = "<div class='tooltip'><p>Total Machine Hour: " + params.value + "h</p></div>"
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
              radius: ['88%', '90%'],
              hoverAnimation: false,
              silent: true,
              color: "rgba(47, 171, 161,0.8)",
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
            //dashed circle
            {
              type: 'pie',
              radius: ['74%', '80%'],
              silent: true,
              hoverAnimation: false,
              clockWise: false,
              label: {
                show: false
              },
              data: this.dashed(80,'rgba(47, 171, 161,0.8)')
            },
            //three-border-pie
            {
              type: 'pie',
              zlevel: 1,
              radius: ['72%', '82%'],
              startAngle: 5,
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
            //two circle
            {
              type: 'pie',
              radius: ['65%', '68%'],
              hoverAnimation: false,
              silent: true,
              color: "rgba(47, 171, 161,0.8)",
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
              type: 'pie',
              radius: ['61%', '63%'],
              hoverAnimation: false,
              silent: true,
              color: "rgba(47, 171, 161,0.8)",
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
              data: [{ value: 1, name: 'vol3' }]
            },
            //gauge circle
            {
              type: 'gauge',
              splitNumber: 36,
              min: 0,
              max: 8,
              radius: '62%',
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
            //inner circle
            {
              type: 'pie',
              radius: ['45%', '48%'],
              hoverAnimation: false,
              silent: true,
              color: "rgba(77, 240, 221,1)",
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
              data: [{ value: 1, name: 'vol4' }]
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
        this.totalHourChart =echarts.init(document.getElementById('hourChart'),null, { renderer: 'svg' })
        this.totalHourChart.setOption(option)
        window.addEventListener("resize", () => {
          this.totalHourChart.resize()
        })
      },
    },
    mounted(){
      this.echartsInit();
    },
    beforeDestroy() {
      if (this.totalHourChart) {
        echarts.dispose(this.totalHourChart)
      }
    },

  }
</script>

<style>
  #hourChart {
    width: 9.5vw;
    height: 25vh;
  }
</style>