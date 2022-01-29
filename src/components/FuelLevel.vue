<template>
  <div id="fuelChart"></div>
</template>

<script>
  import fuelIcon from '../assets/MdiGasStation.svg'
  import echarts from '../../static/echarts.min.js'
  export default {
    props: {
      value: {
        type: Number,
      },
    },
    data() {
      return {
        fuelLevelChart: null,
        fuelIcon,
        labelData: [],
        echarts
      }
    },
    methods: {
      echartsInit() {
        let value = this.value;
        let title = 'Fuel Level';

        const option = {

          title: {
            text: '{a|' + value + '%}\n{b|' + '}',
            x: 'center',
            y: 'center',
            textStyle: {
              rich: {
                a: {
                  fontSize: 20,
                  color: '#2faba1',
                  fontWeight: '600',
                  padding: [7, 0],
                },
                b: {
                  // fontSize: 12,
                  // color: '#38449c',
                  // padding: [5, 0]
                  backgroundColor: {
                    image: this.fuelIcon
                  },
                  height: 25,
                  width: 25
                }
              }
            }
          },
          tooltip: {
            formatter: function (params) {
              var res = "<div class='tooltip'><p>Fuel Level: " + params.value + "%</p></div>"
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
              silent: true,
              radius: ['89%', '99%'],
              startAngle: 45,
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
              data: this.pie6(10, 50, 'rgba(163,217,211,0.9)')
            },
            //second outer circle
            {
              type: 'pie',
              zlevel: 6,
              silent: true,
              radius: ['82%', '90%'],
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
              data: this.pie6(28, 15, 'rgba(77, 240, 221,0.8)')
            },
            //third outer circle
            {
              type: 'pie',
              hoverAnimation: false,
              data: this.labelData,
              radius: ['65%', '75%'],
              silent: true,
              zlevel: 2,
              itemStyle: {
                normal: {
                  borderColor: 'rgba(56,103,122,0.8)',
                  borderWidth: 1,
                  shadowBlur: 5,
                  shadowColor: 'rgba(77, 240, 221,0.9)'
                }
              },
              label: {
                normal: {
                  position: 'inside',
                  show: false,
                }
              },
            },
            //inner circle
            {
              type: 'pie',
              zlevel: 6,
              silent: true,
              radius: ['50%', '53%'],
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
              data: this.pie2(25, 'rgba(77, 240, 221,0.8)')
            },
            //pie to trigger tooltip
            {
              name: 'Fuel',
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
              data: [{ value: value, name: 'Fuel' }]
            },
          ]
        };
        for (var i = 0; i < 30; ++i) {
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
          if (this.labelData[i].name <= parseInt((value / 100) * 30)) {
            console.log(parseInt((value / 100) * 30))
            if (value >= 15) {
              this.labelData[i].itemStyle = {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [{
                        offset: 0,
                        color: 'rgba(245, 252, 252,0.5)'
                      },
                      {
                        offset: 1,
                        color: '#fff'
                      }
                    ]
                  )
                },
              }
            } else {
              this.labelData[i].itemStyle = {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 1, 0, 0,
                    [{
                        offset: 0,
                        color: 'rgba(252,166,81,0.9)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(252,166,81,1)'
                      }
                    ]
                  )
                },
              }
            }

          }
        }
        this.fuelLevelChart = echarts.init(document.getElementById('fuelChart'), null, { renderer: 'svg' })
        this.fuelLevelChart.setOption(option)
        window.addEventListener("resize", () => {
          this.fuelLevelChart.resize()
        })
      },
    },
    mounted(){
     this.echartsInit(); 
    },
    beforeDestroy() {
      if (this.fuelLevelChart) {
        echarts.dispose(this.fuelLevelChart)
      }
    },

  }
</script>

<style>
  #fuelChart {
    width: 9.5vw;
    height: 25vh;
  }
</style>