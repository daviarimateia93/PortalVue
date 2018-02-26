<template>
  <div>
    <portal-bar-chart :data="chartData" :options="chartOptions" :v-if="chartType === 'bar'"></portal-bar-chart>
    <portal-bubble-chart :data="chartData" :options="chartOptions" :v-if="chartType === 'bubble'"></portal-bubble-chart>
    <portal-doughnut-chart :data="chartData" :options="chartOptions" :v-if="chartType === 'doughnut'"></portal-doughnut-chart>
    <portal-line-chart :data="chartData" :options="chartOptions" :v-if="chartType === 'line'"></portal-line-chart>
    <portal-pie-chart :data="chartData" :options="chartOptions" :v-if="chartType === 'pie'"></portal-pie-chart>
    <portal-polar-chart :data="chartData" :options="chartOptions" :v-if="chartType === 'polar'"></portal-polar-chart>
    <portal-radar-chart :data="chartData" :options="chartOptions" :v-if="chartType === 'radar'"></portal-radar-chart>
    <portal-scatter-chart :data="chartData" :options="chartOptions" :v-if="chartType === 'scatter'"><portal-scatter-chart>
  </div>
</template>

<script>
import PortalBarChart from './charts/PortalBarChart'
import PortalBubbleChart from './charts/PortalBubbleChart'
import PortalDoughnutChart from './charts/PortalDoughnutChart'
import PortalLineChart from './charts/PortalLineChart'
import PortalPieChart from './charts/PortalPieChart'
import PortalPolarChart from './charts/PortalPolarChart'
import PortalRadarChart from './charts/PortalRadarChart'
import PortalScatterChart from './charts/PortalScatterChart'


export default {
  props: ['data', 'options', 'type'],
  data () {
    return {
      chartType: this.type,
      chartData: this.data,
      chartOptions: this.options
    }
  },
  components: {
    PortalBarChart,
    PortalBubbleChart,
    PortalDoughnutChart,
    PortalLineChart,
    PortalPieChart,
    PortalPolarChart,
    PortalRadarChart,
    PortalScatterChart
  }
}
</script>

<style>

</style>
