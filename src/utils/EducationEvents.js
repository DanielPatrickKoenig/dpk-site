import Utilities from './Utilities.js'
const EducationEvents = [
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 1994,
    end: 1994,
    month: 6,
    details: {side: 'right', school: 'Lake Fenton High School', degree: 'High School Deploma'}
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 1999,
    end: 1999,
    month: 4,
    details: {side: 'left', school: 'Collage for Creative Studies', degree: 'Bachelor of Fine Arts (Art Direction)'}
  }
]
export default EducationEvents
