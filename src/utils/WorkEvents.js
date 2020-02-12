import Utilities from './Utilities.js'
const WorkEvents = [
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 1999,
    end: 2001,
    month: 5,
    company: 'Lighten Coleman',
    title: 'Art Director',
    details: {side: 'right', company: 'Lighten Coleman', title: 'Art Director', chart: {js: 55, css: 25, python: 15, cshap: 5}},
    accomplishments: [
      'Provided design expertise in the production of print advertisements and Brochures for brands such as Bang & Olvson, Oce, Habitat and many more.'
    ]
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 2001,
    end: 2002,
    month: 4,
    company: 'Asylum',
    title: 'Designer',
    details: {company: 'Asylum', title: 'Designer', chart: {js: 55, css: 25, python: 15, cshap: 5}},
    accomplishments: [
      'Created th company&#39;s first interactive, cd rom based, annual report.',
      'Provided design expertise in the creation of annual reports and consumer product packaging for brands such as Abbod Labs, Goody, Avery Dennison and many more.'
    ]
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 2002,
    end: 2003,
    month: 3,
    company: 'Asa',
    title: 'Designer',
    details: {side: 'right', company: 'ASA', title: 'Designer', chart: {js: 55, css: 25, python: 15, cshap: 5}},
    accomplishments: [
      'Enhanced capabilities to include interactive deliverables.',
      'Worked with model maker to generate digital representations of in store displays for brands such as Absolute Vodka, Mars, Firestone and many more.',
      'Provided design expertise in the creation of product packaging for Homack and Kobalt.',
      'Streamlined display prototyping process by providing 3D modeling capabilities to process'
    ]
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 2003,
    end: 2004,
    month: 2,
    company: 'Brio',
    title: 'Art Director',
    details: {company: 'Brio', title: 'Art Director', chart: {js: 55, css: 25, python: 15, cshap: 5}},
    accomplishments: [
      'Provided design expertise for the creation of B2B advertisements',
      'Enhanced capabilities to include interactive deliverables.'
    ]
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 2004,
    company: 'Ford',
    title: 'Flash Developer',
    details: {side: 'right', company: 'Ford', title: 'Flash Developer', chart: {js: 55, css: 25, python: 15, cshap: 5}},
    accomplishments: [
      'Worked with the technical writers, scientists and safety specialists to develop material for training corses.',
      'Developed safety cources for ratiation, error proofing, electrical safety and many more.',
      'Elevated the efficiency of workflow and quality of e-learning material with reusable ui and animation algorithms.'
    ]
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 2005,
    end: 2006,
    month: 6,
    company: 'NCMS',
    title: 'Flash Developer',
    details: {company: 'NCMS', title: 'Flash Developer', chart: {js: 55, css: 25, python: 15, cshap: 5}},
    accomplishments: [
      'Developed a code library for streamlining the production of e-learning courses.',
      'Salvaged several, assumed to be, failed projects making them profitalbe and successful.',
      'Trained the production and best practices of e-learning development.'
    ]
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 2006,
    end: 2007,
    month: 1,
    company: 'Duffy Petrosky',
    title: 'Sr. Art Director',
    details: {side: 'right', company: 'Duffy Petrosky', title: 'Sr. Art Director', chart: {js: 55, css: 25, python: 15, cshap: 5}},
    accomplishments: [
      'Managed the design and development of all web based projects.',
      'Played a lead role in the design, concept and production of print material',
      'Presented interactive content at client pitches.'
    ]
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 2007,
    end: 2009,
    month: 1,
    company: 'Organic',
    title: 'Sr. Engineer',
    details: {company: 'Organic', title: 'Sr. Engineer', chart: {js: 55, css: 25, python: 15, cshap: 5}},
    accomplishments: [
      'Significantly improved the realationship between the creative and engineering department.',
      'Developmed multiple tools to streamline the production of unorthadox development solutiohns.',
      'Developed web applicationns for brands such as Jeep, Varisign, Geek Squad and many more.',
      'Developed a library to simplify the usage of the AS2 drawing api.'
    ]
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 2009,
    end: 2010,
    month: 1,
    company: 'Enlighten',
    title: 'Software Engineer',
    details: {side: 'right', company: 'Enlighten', title: 'Software Engineer', chart: {'AS3': 58, 'AS2': 20, 'CSS': 12, 'JavaScript': 10}},
    accomplishments: [
      'Created a tool for 3D particle modeling for creating particle based user experieces elements.',
      'Mentored other engineers in the development of AS3 applications.',
      'Searved as en expert in the transition from AS2 to AS3',
      'Developed web applicationns for brands such as Biore, Hunter Douglass, Health Media and many more.',
      'Developed a code library for AS3 rapid prototyping.'
    ]
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 2010,
    end: 2010,
    month: 1,
    company: 'Concept Facgtory',
    title: 'Software Developer',
    details: {company: 'Concept Facgtory', title: 'Software Developer', chart: {'AS3': 85, 'Objective C': 10, 'Java': 5}},
    accomplishments: [
      'Established a rapid prototyping workflow that streamlined proposal and production efficiency by more than 50 percent.',
      'Developed a touch sceen interactive promotional tool for the company&#39;s booth at the 2010 Consemer Electronic Show.',
      'Rapidly output touch screen interface prototypes for testing and proof of concepts for brands such as Ford, Tesla and Chrysler.',
      'Redesigned the company&#39;s first mobile-responsive responsive website.'
    ]
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 2010,
    end: -1,
    month: 4,
    company: 'Gongos',
    title: 'Sr. Developer',
    details: {side: 'right', company: 'Gongos', title: 'Sr. Developer', chart: {'JavaScript': 55, 'CSS': 25, 'Python': 15, 'C#': 3, 'PHP': 2}},
    accomplishments: [
      'Created mobile, web and desktop applications using a wide veriety of technologies including Python, Vue js, Angular, electron, Three js, Pixi js, Unity, Objective C, Vuforia, Xamirine',
      'Developed a wide range of tools for creative department, allowing for time saving efficiencies and increasing colaborition with developers.',
      'Automated the process of creating custom html emails.',
      'Created several reusable sripts to instantly mobile enable third party servey questions',
      'Added multiple capabilities to the company&#39;s list of offerings including Augmented Reality, Virtual Reality, Rich Media Servey Skinning, and many more.',
      'Contributed to the creation of the comany&#39;s prepritory survey platform.',
      'Spearheaded a rapid prototyping initiative for the execution of potentional innovations.'
    ]
  }
]
export default WorkEvents
