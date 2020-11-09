import Vue from 'vue'
// 引入 ECharts 主模块
// import echarts from 'echarts'
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

Vue.prototype.$echarts = echarts
