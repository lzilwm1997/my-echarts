<template>
  <div>
    <div :id="id" :style="{ width: width, height: height }" :class="setClass" />
  </div>
</template>
<script>
export default {
  name: 'BarGraph',
  props: {
    id: {
      type: String,
      default: 'charts'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    setClass: {
      type: String
    }
  },
  mounted() {
    this.setBarGraph()
  },
  methods: {
    setBarGraph() {
      var mycharts = this.$echarts.init(document.getElementById(this.id))
      mycharts.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    }
  }
}
</script>
