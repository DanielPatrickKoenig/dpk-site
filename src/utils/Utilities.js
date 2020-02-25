function generateID () {
  return 'el-' + Math.random().toString().split('.').join('') + '-' + Math.random().toString().split('.').join('') + '-' + Math.random().toString().split('.').join('')
}
const ChartColors = ['#DB166C', '#2bb3cd', '#fdbe40', '#7d8f9e', '#5E79BB', '#EB7523', '#432256', '#2bb3cd', '#66342d', '#8fc23e', '#fdbe40', '#dc527d']
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
