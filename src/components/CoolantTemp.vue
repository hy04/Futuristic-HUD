<template>
  <div id="coolantChart"></div>
</template>

<script>
  import coolantIcon from '../assets/MdiCoolantTemperature.svg'
  import echarts from '../../static/echarts.min.js'
  export default {
    props: {
      value: {
        type: Number,
      },
    },
    data() {
      return {
        coolantChart: null,
        coolantIcon,
        echarts
      }
    },
    methods: {
      echartsInit() {
        let value = this.value;
        let title = 'Coolant';

        const option = {

          title: {
            text: '{a|' + value + '°C}\n{b|' + '}',
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
                  // fontSize: 12,
                  // color: '#38449c',
                  // padding: [5, 0]
                  backgroundColor: {
                    image: this.coolantIcon
                  },
                  height: 25,
                  width: 25
                }
              }
            }
          },
          tooltip: {
            formatter: function (params) {
              var res = "<div class='tooltip'><p>Coolant Temperature: " + params.value + "°C</p></div>"
              return res;
            },
            backgroundColor: 'rgba(77,130,154,0.9)',
            borderRadius: 15,
            padding: [10, 10, 10, 10],
          },
          series: [
            //outer two-border-pie
            {
              type: 'pie',
              zlevel: 6,
              silent: true,
              radius: ['83%', '91%'],
              startAngle: '88',
              clockWise: false,
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
              data: this.pie2(25,'rgba(77, 240, 221,0.8)')
            },
            //gauge circle
            {
              type: 'gauge',
              splitNumber: 30,
              min: 0,
              max: 100,
              silent: true,
              radius: '95%',
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
                  width: 2
                },
                length: 5,
                splitNumber: 2
              },
              splitLine: {
                show: false,
                distance: 2,
                length: 8,
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
              }
            },
            //outer single circle
            {
              type: 'pie',
              radius: ['85%', '89%'],
              hoverAnimation: false,
              clockWise: false,
              silent: true,
              itemStyle: {
                normal: {
                  shadowBlur: 20,
                  shadowColor: 'rgba(47, 171, 161,0.3)',
                  color: 'rgba(47, 171, 161,0.7)'
                }
              },
              label: {
                show: false
              },
              data: [100]
            },
            //inner single circle
            {
              type: 'pie',
              radius: ['74%', '76%'],
              hoverAnimation: false,
              clockWise: false,
              silent: true,
              itemStyle: {
                normal: {
                  shadowBlur: 20,
                  shadowColor: 'rgba(47, 171, 161,0.5)',
                  color: 'rgba(47, 171, 161,0.7)'
                }
              },
              label: {
                show: false
              },
              data: [100]
            },
            //two-border-pie
            {
              type: 'pie',
              zlevel: 6,
              silent: true,
              radius: ['66%', '70%'],
              startAngle: '88',
              clockWise: true,
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
              data: this.pie2(25,'rgba(163,217,211,0.9)')
            },
            //inner two-border-pie
            {
              type: 'pie',
              zlevel: 6,
              silent: true,
              radius: ['46%', '50%'],
              startAngle: '92',
              clockWise: false,
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
              data: this.pie2(13,'rgba(77, 240, 221,0.8)')
            },
            //pie to trigger tooltip
            {
              name: 'Coolant',
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
              data: [{ value: value, name: 'Coolant' }]
            },

          ]
        };

        this.coolantChart = echarts.init(document.getElementById('coolantChart'),null, { renderer: 'svg' })
        this.coolantChart.setOption(option)
        window.addEventListener("resize", () => {
          this.coolantChart.resize()
        })
      },


    },
    mounted(){
      this.echartsInit();
    },
    beforeDestroy() {
      if (this.coolantChart) {
        echarts.dispose(this.coolantChart)
      }
    },

  }
</script>

<style>
  #coolantChart {
    width: 9.5vw;
    height: 25vh;
  }
</style>