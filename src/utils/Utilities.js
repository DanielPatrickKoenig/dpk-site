function generateID () {
  return 'el-' + Math.random().toString().split('.').join('') + '-' + Math.random().toString().split('.').join('') + '-' + Math.random().toString().split('.').join('')
}
const ChartColors = ['#00aeef', '#fdc689', '#7cc576', '#f26d7d', '#a186be', '#ec008c', '#c69c6d', '#ed145b', '#f26522', '#acd373', '#aba000', '#f5989d']
const ChartTypes = {
  PIE: 0,
  BAR: 1,
  WORDCLOUD: 2
}
const ChartContexts = {
  SKILLS: 0,
  WORK_TYPE: 1,
  FRAMEWORKS_LIBRARIES: 2
}
const Utilities = {
  generateID: generateID,
  ChartColors: ChartColors,
  ChartTypes,
  ChartContexts
}
export default Utilities
