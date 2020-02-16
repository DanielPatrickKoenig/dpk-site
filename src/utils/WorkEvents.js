import Utilities from './Utilities.js'
const WorkEvents = [
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 1999,
    end: 2001,
    month: 5,
    details: {
      side: 'right',
      company: 'Lighten Coleman',
      title: 'Art Director',
      charts: [
        {
          type: Utilities.ChartTypes.PIE,
          context: Utilities.ChartContexts.SKILLS,
          title: 'Most Used Skils',
          data: {
            'Design': 100
          }
        },
        {
          type: Utilities.ChartTypes.WORDCLOUD,
          context: Utilities.ChartContexts.FRAMEWORKS_LIBRARIES,
          title: 'Frameworks and Libraries',
          data: {
            'Illustrator': 10,
            'QuarkXpress': 60,
            'Photoshop': 30
          }
        }
      ]
    },
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
    details: {
      company: 'Asylum',
      title: 'Designer',
      charts: [
        {
          type: Utilities.ChartTypes.PIE,
          context: Utilities.ChartContexts.SKILLS,
          title: 'Most Used Skils',
          data: {
            'Design': 90,
            'AS1': 10
          }
        },
        {
          type: Utilities.ChartTypes.WORDCLOUD,
          context: Utilities.ChartContexts.FRAMEWORKS_LIBRARIES,
          title: 'Frameworks and Libraries',
          data: {
            'Flash': 10,
            'Illustrator': 20,
            'QuarkXpress': 50,
            'Photoshop': 20
          }
        }
      ]
    },
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
    details: {
      side: 'right',
      company: 'ASA',
      title: 'Designer',
      charts: [
        {
          type: Utilities.ChartTypes.PIE,
          context: Utilities.ChartContexts.SKILLS,
          title: 'Most Used Skils',
          data: {
            '3D Modeling': 15,
            'Design': 70,
            'AS1': 10,
            'CSS': 5
          }
        },
        {
          type: Utilities.ChartTypes.WORDCLOUD,
          context: Utilities.ChartContexts.FRAMEWORKS_LIBRARIES,
          title: 'Frameworks and Libraries',
          data: {
            'Flash': 10,
            'Illustrator': 20,
            'QuarkXpress': 20,
            'Photoshop': 30,
            'Blender': 20
          }
        }
      ]
    },
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
    details: {
      company: 'Brio',
      title: 'Art Director',
      charts: [
        {
          type: Utilities.ChartTypes.PIE,
          context: Utilities.ChartContexts.SKILLS,
          title: 'Most Used Skils',
          data: {
            'AS1': 10,
            'Design': 90
          }
        },
        {
          type: Utilities.ChartTypes.WORDCLOUD,
          context: Utilities.ChartContexts.FRAMEWORKS_LIBRARIES,
          title: 'Frameworks and Libraries',
          data: {
            'Flash': 10,
            'Illustrator': 20,
            'InDesign': 20,
            'Photoshop': 30,
            'QuarkExpress': 20
          }
        }
      ]
    },
    accomplishments: [
      'Provided design expertise for the creation of B2B advertisements',
      'Enhanced capabilities to include interactive deliverables.'
    ]
  },
  {
    id: Utilities.generateID(),
    stateVal: 0,
    start: 2004,
    end: 2006,
    month: 4,
    details: {
      side: 'right',
      company: 'Ford',
      title: 'Flash Developer',
      charts: [
        {
          type: Utilities.ChartTypes.PIE,
          context: Utilities.ChartContexts.SKILLS,
          title: 'Most Used Skils',
          data: {
            'AS2': 60,
            'AS1': 30,
            'Design': 10
          }
        },
        {
          type: Utilities.ChartTypes.WORDCLOUD,
          context: Utilities.ChartContexts.FRAMEWORKS_LIBRARIES,
          title: 'Frameworks and Libraries',
          data: {
            'Flash': 40,
            'Illustrator': 12,
            'Photoshop': 12
          }
        }
      ]
    },
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
    details: {
      company: 'NCMS',
      title: 'Flash Developer',
      charts: [
        {
          type: Utilities.ChartTypes.PIE,
          context: Utilities.ChartContexts.SKILLS,
          title: 'Most Used Skils',
          data: {
            'AS2': 15,
            'AS1': 45,
            'Design': 40
          }
        },
        {
          type: Utilities.ChartTypes.WORDCLOUD,
          context: Utilities.ChartContexts.FRAMEWORKS_LIBRARIES,
          title: 'Frameworks and Libraries',
          data: {
            'Flash': 40,
            'Illustrator': 12,
            'Photoshop': 12
          }
        }
      ]
    },
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
    details: {
      side: 'right',
      company: 'Duffy Petrosky',
      title: 'Sr. Art Director',
      charts: [
        {
          type: Utilities.ChartTypes.PIE,
          context: Utilities.ChartContexts.SKILLS,
          title: 'Most Used Skils',
          data: {
            'AS2': 20,
            'AS1': 30,
            'Design': 50
          }
        },
        {
          type: Utilities.ChartTypes.WORDCLOUD,
          context: Utilities.ChartContexts.FRAMEWORKS_LIBRARIES,
          title: 'Frameworks and Libraries',
          data: {
            'Flash': 40,
            'Illustrator': 12,
            'InDesign': 12,
            'Photoshop': 12,
            'PageMaker': 6
          }
        }
      ]
    },
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
    details: {
      company: 'Organic',
      title: 'Sr. Engineer',
      charts: [
        {
          type: Utilities.ChartTypes.PIE,
          context: Utilities.ChartContexts.SKILLS,
          title: 'Most Used Skils',
          data: {
            'AS2': 85,
            'JS': 15
          }
        },
        {
          type: Utilities.ChartTypes.WORDCLOUD,
          context: Utilities.ChartContexts.FRAMEWORKS_LIBRARIES,
          title: 'Frameworks and Libraries',
          data: {
            'Flash': 40,
            'MooTools': 30,
            'gsap': 25
          }
        }
      ]
    },
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
    details: {
      side: 'right',
      company: 'Enlighten',
      title: 'Software Engineer',
      charts: [
        {
          type: Utilities.ChartTypes.PIE,
          context: Utilities.ChartContexts.SKILLS,
          title: 'Most Used Skils',
          data: {
            'AS3': 58,
            'AS2': 20,
            'JS': 10,
            'CSS': 12
          }
        },
        {
          type: Utilities.ChartTypes.WORDCLOUD,
          context: Utilities.ChartContexts.FRAMEWORKS_LIBRARIES,
          title: 'Frameworks and Libraries',
          data: {
            'Flash': 40,
            'gsap': 30,
            'Papervision': 25,
            'FlashDevelop': 100,
            'Flex': 18,
            'svn': 18
          }
        }
      ]
    },
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
    details: {
      company: 'Concept Facgtory',
      title: 'Software Developer',
      charts: [
        {
          type: Utilities.ChartTypes.PIE,
          context: Utilities.ChartContexts.SKILLS,
          title: 'Most Used Skils',
          data: {
            'AS3': 55,
            'Objective C': 25,
            'JS': 15,
            'CSS': 24
          }
        },
        {
          type: Utilities.ChartTypes.BAR,
          context: Utilities.ChartContexts.WORK_TYPE,
          title: 'Types of Coding',
          data: {
            'Front-end': 80,
            'Mobile': 20
          }
        },
        {
          type: Utilities.ChartTypes.WORDCLOUD,
          context: Utilities.ChartContexts.FRAMEWORKS_LIBRARIES,
          title: 'Frameworks and Libraries',
          data: {
            'XCode': 12,
            'Flash': 100,
            'gsap': 30,
            'jquery': 8,
            'FlashDevelop': 22,
            'Flex': 18,
            'Illustrator': 30,
            'Photoshop': 26
          }
        }
      ]
    },
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
    details: {
      side: 'right',
      company: 'Gongos',
      title: 'Sr. Developer',
      charts: [
        {
          type: Utilities.ChartTypes.PIE,
          context: Utilities.ChartContexts.SKILLS,
          title: 'Most Used Skils',
          data: {
            'JS': 55,
            'CSS': 25,
            'Python': 15,
            'C#': 3,
            'PHP': 2
          }
        },
        {
          type: Utilities.ChartTypes.BAR,
          context: Utilities.ChartContexts.WORK_TYPE,
          title: 'Types of Coding',
          data: {
            'Front-end': 82,
            'Server-side': 8,
            'Mobile': 10
          }
        },
        {
          type: Utilities.ChartTypes.WORDCLOUD,
          context: Utilities.ChartContexts.FRAMEWORKS_LIBRARIES,
          title: 'Frameworks and Libraries',
          data: {
            'Vue': 100,
            'Vanilla js': 35,
            'jQuery': 25,
            'Vuetify': 45,
            'Pixi': 12,
            'three': 14,
            'gsap': 30,
            'git': 55,
            'npm': 65,
            'pip': 40,
            'pandas': 20,
            'numpy': 20,
            'angular': 5,
            'web2py': 30,
            'flask': 5,
            '.Net': 6,
            'Xamarin': 10,
            'webpack': 16,
            'electron': 20,
            'scss': 30,
            'stylus': 16,
            'bootstrap': 22
          }
        }
      ]
    },
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
