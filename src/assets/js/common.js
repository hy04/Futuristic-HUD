export default{
  install(Vue) {
      //Generate 2-border-pie
      Vue.prototype.pie2=function (length,color) {
        let dataArr = [];
        for (var i = 0; i < 4; i++) {
          if (i % 2 === 0) {
            dataArr.push({
              name: (i + 1).toString(),
              value: length,
              itemStyle: {
                normal: {
                  color: color,
                  shadowBlur: 10,
                  borderColor: color,
                  shadowColor: color
                }
              },
            })
          } else {
            dataArr.push({
              name: (i + 1).toString(),
              value: 20,
              itemStyle: {
                normal: {
                  color: "rgba(0,0,0,0)",
                  borderWidth: 0,
                  borderColor: "rgba(0,0,0,0)",
                }
              }
            })
          }

        }
        return dataArr
      },
      //Generate 3-border-pie
      Vue.prototype.pie3=function () {
        let dataArr = [];
        for (var i = 0; i < 6; i++) {
          if (i % 2 === 0) {
            dataArr.push({
              name: (i + 1).toString(),
              value: 25,
              itemStyle: {
                normal: {
                  color: "rgba(77, 240, 221,0.9)",
                  shadowBlur: 12,
                  borderColor: 'rgba(77, 240, 221,0.8)',
                  shadowColor: 'rgba(77, 240, 221,0.8)'
                }
              },
            })
          } else {
            dataArr.push({
              name: (i + 1).toString(),
              value: 20,
              itemStyle: {
                normal: {
                  color: "rgba(0,0,0,0)",
                  borderWidth: 0,
                  borderColor: "rgba(0,0,0,0)",
                }
              }
            })
          }

        }
        return dataArr

      },
      //Generate 4-border-pie
      Vue.prototype.pie4= function(color) {
        let dataArr = [];
        for (var i = 0; i < 8; i++) {
          if (i % 2 === 0) {
            dataArr.push({
              name: (i + 1).toString(),
              value: 25,
              itemStyle: {
                normal: {
                  color: color,
                  shadowBlur: 10,
                  borderColor: color,
                  shadowColor: color
                }
              }
            })
          } else {
            dataArr.push({
              name: (i + 1).toString(),
              value: 20,
              itemStyle: {
                normal: {
                  color: "rgba(0,0,0,0)",
                  borderWidth: 0,
                  borderColor: "rgba(0,0,0,0)"
                }
              }
            })
          }

        }
        return dataArr

      },
       //Generate 6-border-pie
       Vue.prototype.pie6=function (val1,val2,color) {
        let dataArr = [];
        for (var i = 0; i < 12; i++) {
          if (i % 2 === 0) {
            dataArr.push({
              name: (i + 1).toString(),
              value: val1,
              itemStyle: {
                normal: {
                  color: color,
                  shadowBlur: 10,
                  borderColor: color,
                  shadowColor: color
                }
              },
            })
          } else {
            dataArr.push({
              name: (i + 1).toString(),
              value: val2,
              itemStyle: {
                normal: {
                  color: "rgba(0,0,0,0)",
                  borderWidth: 0,
                  borderColor: "rgba(0,0,0,0)",
                }
              }
            })
          }

        }
        return dataArr
      },
      //Generate dash-style circle
      Vue.prototype.dashed=function(length,color) {
        let dataArr = [];
        for (var i = 0; i < length; i++) {
          if (i % 2 === 0) {
            dataArr.push({
              name: (i + 1).toString(),
              value: 20,
              itemStyle: {
                normal: {
                  color: color,
                  shadowBlur: 10,
                  borderColor: 'color',
                  shadowColor: color
                }
              }
            })
          } else {
            dataArr.push({
              name: (i + 1).toString(),
              value: 20,
              itemStyle: {
                normal: {
                  color: 'rgb(0,0,0,0)',
                  borderWidth: 1,
                  borderColor: color
                }
              }
            })
          }

        }
        return dataArr

      }
      

    

  }
}