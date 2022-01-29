<template>
  <div id="statusChart"></div>
</template>

<script>
  import echarts from '../../static/echarts.min.js'
  export default {
    props: {
      value: {
        type: Boolean,
      }
    },
    data() {
      return {
        echart: null,
        timer: null
      }
    },
    methods: {
      doing() {
        let option = this.echart.getOption();
        option.series[1].startAngle = option.series[1].startAngle - 3;
        option.series[2].startAngle = option.series[2].startAngle - 3;
        this.echart.setOption(option);
      },
      startTimer() {
        this.timer = setInterval(this.doing, 100);
      },
      stopTimer() {
        clearInterval(this.timer);
      },
      echartsInit() {
        let value = this.value ? 'Online' : 'Offline';
        this.echart = echarts.init(document.getElementById('statusChart'), null, {
          renderer: 'svg'
        })

        this.echart.setOption({
          title: {
            text: '{a|' + value + '}',
            x: 'center',
            y: 'center',
            textStyle: {
              rich: {
                a: {
                  fontSize: 18,
                  color: 'rgba(77, 240, 221,0.9)',
                  fontWeight: '600',
                  textShadowColor: 'rgba(77, 240, 221,0.8)',
                  textShadowBlur: 5,
                }
              }
            }
          },
          tooltip: {
            formatter: function (params) {
              var res = "<div class='tooltip'><p>Status: " + params.data.name + "</p></div>"
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
              radius: ['82%', '85%'],
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
            //second outer circle
            {
              type: 'pie',
              silent: true,
              radius: ['77%', '80%'],
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
              silent: true,
              radius: ['72%', '73%'],
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
              data: this.pie4('rgba(163,217,211,0.9)')
            },
            //fourth circle
            {
              type: 'pie',
              radius: ['65%', '69%'],
              hoverAnimation: false,
              silent: true,
              color: "rgba(77, 240, 221,0.9)",
              itemStyle: {
                normal: {
                  shadowBlur: 5,
                  shadowColor: 'rgba(77, 240, 221,0.9)'
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
              data: [{
                value: 1,
                name: 'status'
              }]
            },
            //fifth outer circle
            {
              type: 'pie',
              silent: true,
              radius: ['58%', '60%'],
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
              radius: ['46%', '48%'],
              silent: true,
              hoverAnimation: false,
              clockWise: false,
              label: {
                show: false
              },
              data: this.dashed(100, 'rgba(47, 171, 161,.8)')
            },
            //inner circle
            {
              type: 'pie',
              silent: true,
              radius: ['34%', '35%'],
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
            //pie to trigger tooltip
            {
              name: 'status',
              type: 'pie',
              radius: [0, '33%'],
              tooltip: {
                show: true
              },
              color: "rgba(56, 68, 156,0)",
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
                value: 1,
                name: value
              }]
            },
          ]
        })
        window.addEventListener("resize", () => {
          this.echart.resize()
        })
        
      },

    },
    mounted() {
      this.echartsInit();
    },
    beforeDestroy() {
      if (this.echart) {
        echarts.dispose(this.echart)
      }
    },

  }

</script>

<style>
  #statusChart {
    width: 10vw;
    height: 25.5vh;
  }

</style>
