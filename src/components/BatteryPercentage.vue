<template>
  <div id="batteryChart"></div>
</template>

<script>
  import batteryIcon from '../assets/MdiBattery.svg'
  import echarts from '../../static/echarts.min.js'
  export default {
    props: {
      value: {
        type: Number,
      },
    },
    data() {
      return {
        batteryPercentageChart: null,
        batteryIcon,
        labelData: [],
        echarts
      }
    },
    methods: {
      echartsInit() {
        let value = this.value;
        let title = 'Battery Remaining';
        const option = {
          title: {
            text: '{a|' + value + '%' + '}\n{b|' + '}',
            x: 'center',
            y: 'center',
            textStyle: {
              rich: {
                a: {
                  fontSize: 43,
                  color: '#2faba1',
                  fontWeight: '100',
                  padding: [5, 0],
                  textAlign: 'center',
                  textShadowColor: 'rgba(47, 171, 161,0.9)',
                  textShadowBlur: 5,
                },
                b: {
                  // fontSize: 12,
                  // fontWeight: '500',
                  // color: '#38449c',
                  // padding: [0, 0],
                  // textAlign: 'center',
                  backgroundColor: {
                    image: this.batteryIcon
                  },
                  height: 35,
                  width: 40
                }
              }
            }
          },
          polar: {
            radius: ['71%', '77%'],
            center: ['50%', '50%'],
          },
          angleAxis: {
            max: 100,
            show: false,
            startAngle: 0,
          },
          radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,

            },
            axisTick: {
              show: false
            },
          },
          tooltip: {
            formatter: function (params) {
              var res = "<div class='tooltip'><p>Battery Remaining: " + params.value + "%</p></div>"
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
              hoverAnimation: false,
              data: this.labelData,
              radius: ['82%', '89%'],
              silent: true,
              itemStyle: {
                normal: {
                  borderColor: 'rgba(56,103,122,0.8)',
                  borderWidth: 1,
                  shadowBlur:10,
                  shadowColor:'rgba(77, 240, 221,0.9)'
                }
              },
              label: {
                normal: {
                  position: 'inside',
                  show: false,
                }
              },
            },
            //second outer circle
            {
              name: '',
              type: 'bar',
              roundCap: true,
              barWidth: 60,
              silent: true,
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(70, 68, 81,0.2)',
              },
              data: [value],
              coordinateSystem: 'polar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgba(77, 240, 221,1)'
                  }, {
                    offset: 1,
                    color: 'rgba(77, 240, 221,0.5)'
                  }]),
                  shadowBlur: 5,
                  borderColor: 'rgba(77, 240, 221,0.8)',
                  shadowColor: 'rgba(77, 240, 221,0.8)'
                }
              }
            },
            //dashed circle
            {
              type: 'pie',
              silent: true,
              radius: ['57%', '61%'],
              hoverAnimation: false,
              clockWise: false,
              label: {
                show: false
              },
              data: this.dashed(50,'rgba(47, 171, 161,.8)')
            },
            //inner circle
            {
              type: 'pie',
              radius: ['53%', '55%'],
              hoverAnimation: false,
              silent: true,
              color: "rgba(47, 171, 161,1)",
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
              data: [{ value: 1, name: 'battery' }]
            },
            //pie to trigger tooltip
            {
              name: 'Battery Remaining',
              type: 'pie',
              radius: [0, '52%'],
              hoverAnimation: false,
              color: "rgba(47, 171, 161,0)",
              tooltip: {
                show: true
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
              data: [this.value]
            },
          ]
        };
        for (var i = 0; i < 50; ++i) {
          this.labelData.push({
            value: 1,
            name: i,
            itemStyle: {
              normal: {
                color: 'rgba(100, 100, 105,0.9)',
              }
            }
          });
        }
        for (var i = 0; i < this.labelData.length; ++i) {
          if (this.labelData[i].name < parseInt((value / 100) * 50)) {
            this.labelData[i].itemStyle = {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                      offset: 0,
                      color: 'rgba(245, 252, 252,0.9)'
                    },
                    {
                      offset: 1,
                      color: '#fff'
                    }
                  ]
                )
              },
            }
          }
        }
        this.batteryPercentageChart = echarts.init(document.getElementById('batteryChart'),null, { renderer: 'svg' })
        this.batteryPercentageChart.setOption(option)
        window.addEventListener("resize", () => {
          this.batteryPercentageChart.resize()
        })

      },

    },
    mounted(){
      this.echartsInit();
    },
    beforeDestroy() {
      if (this.batteryPercentageChart) {
        echarts.dispose(this.batteryPercentageChart)
      }
    },
  }
</script>

<style>
  #batteryChart {
    width: 12vw;
    height: 32vh;
  }
</style>