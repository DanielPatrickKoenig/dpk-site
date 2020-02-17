import Utilities from './Utilities.js'
const EducationEvents = [
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 1994,
    end: 1994,
    month: 6,
    details: {
      side: 'right',
      school: 'Lake Fenton High School',
      degree: 'High School Deploma',
      logo: 'https://www.lakefentonschools.org/assets/apptegy_cms/themes/lakefentonmi/logo-b1400007ea6d0b4a84a39cf96b6f917f.png',
      summary: '<p>It was high school. Good times, poor judgement and lots of awkward moments.</p>'
    }
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 1999,
    end: 1999,
    month: 4,
    details: {
      side: 'left',
      school: 'Collage for Creative Studies',
      degree: 'Bachelor of Fine Arts (Art Direction)',
      logo: 'https://www.collegeforcreativestudies.edu/sites/ccs/resources/images/logo.svg',
      summary: '<p>Durring my time at CCS I studied art direction meant to be used in the creation of advertising campaigns.</p><p>After collage I enjoyed a fruitful career in the advertising industry.</p><p>However, CCS planted a seed that developed into passionate obsession for interactive media which ultimately lead to a career change.</p>'
    }
  }
]
export default EducationEvents
