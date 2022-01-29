<template>
  <div id="app">
    <div class="first-row">
      <div class="coolantChart-container">
        <CoolantChart :value=33></CoolantChart>
      </div>
      <div class="fuelLevelChart-container">
        <FuelLevelChart :value=50></FuelLevelChart>
      </div>
      <div class="voltageChart-container">
        <VoltageChart :value=28></VoltageChart>
      </div>
      <div class="statusChart-container">
        <StatusChart :value='true'></StatusChart>
      </div>
      <div class="hourChart-container">
        <HourChart :value=1550></HourChart>
      </div>
    </div>
    <div class="second-row">
      <div class="engineRpmChart-container">
        <EngineRpmChart :value="engineRpm" :isEngineOn="isEngineOn"></EngineRpmChart>
      </div>
      <div class="batteryChart-container">
        <BatteryChart :value="99"></BatteryChart>
      </div>
    </div>
    <div class="third-row">
      <div class="lineChart-container">
        <LineChart :value="machineHour"></LineChart>
      </div>
      <div class="barChart-container">
        <BarChart :value="machineHour"></BarChart>
      </div>
    </div>



  </div>
</template>

<script>
  import CoolantChart from './components/CoolantTemp.vue'
  import FuelLevelChart from './components//FuelLevel.vue'
  import VoltageChart from './components//Voltage.vue'
  import BatteryChart from './components//BatteryPercentage.vue'
  import EngineRpmChart from './components//EngineRpm.vue'
  import StatusChart from './components//Status.vue'
  import HourChart from './components//TotalHour.vue'
  import LineChart from './components//LineChart.vue'
  import BarChart from './components//barChart.vue'

  export default {
    name: 'App',
    components: {
      CoolantChart,
      FuelLevelChart,
      VoltageChart,
      BatteryChart,
      EngineRpmChart,
      StatusChart,
      HourChart,
      LineChart,
      BarChart
    }
  }

</script>

<style>
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
    background-color: #091220;
    margin: 0;
  }

  .first-row,
  .second-row,.third-row {
    display: flex;
    width: 100%;
    height: 33.3%;
  }

  .coolantChart-container,
  .fuelLevelChart-container,
  .voltageChart-container,
  .statusChart-container,
  .hourChart-container {
    width: 10%;
    height: 100%;
  }
  .engineRpmChart-container{
    width: 20%;
    height: 100%;
  }
  .barChart-container {
    width: 30%;
    height: 100%;
  }
  .lineChart-container {
    width: 30%;
    height: 100%;
  }

  .tooltip {
    font-family: "Titillium Web", "微软雅黑", "Tahoma", "Microsoft YaHei", "Roboto";
    color: #4df0dd;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    width: auto;
    height: 30px;
    line-height: 30px;
  }

</style>
