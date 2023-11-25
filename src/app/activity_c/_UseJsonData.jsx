import { useState, useEffect } from 'react';

const UseJsonData = () => {

  // Hardcoded JSON data
  const jsonData = [
      {
        "number": "000",
        "description": "Generalities",
        "level2": [
          {
            "number": "050",
            "description": "General serials & their indexes",
            "level3": [
              {
                "number": "051",
                "description": "General serials & their indexes American"
              },
              {
                "number": "052",
                "description": "General serials & their indexes In English"
              },
              {
                "number": "053",
                "description": "General serials & their indexes In other Germanic languages"
              },
              {
                "number": "054",
                "description": "General serials & their indexes In French, Provencal, Catalan"
              }
            ]
          },
          {
            "number": "060",
            "description": "General organization & museology",
            "level3": [
              {
                "number": "061",
                "description": "General organization & museology In North America"
              },
              {
                "number": "062",
                "description": "General organization & museology In British Isles In England"
              },
              {
                "number": "063",
                "description": "General organization & museology In central Europe In Germany"
              },
              {
                "number": "064",
                "description": "General organization & museology In France & Monaco"
              }
            ]
          },
          {
            "number": "070",
            "description": "News media, journalism, publishing",
            "level3": [
              {
                "number": "071",
                "description": "News media, journalism, publishing In North America"
              },
              {
                "number": "072",
                "description": "News media, journalism, publishing In British Isles In England"
              },
              {
                "number": "073",
                "description": "News media, journalism, publishing In central Europe In Germany"
              },
              {
                "number": "074",
                "description": "News media, journalism, publishing In France & Monaco"
              }
            ]
          },
          {
            "number": "080",
            "description": "News media, journalism, publishing",
            "level3": [
              {
                "number": "081",
                "description": "General collections American"
              },
              {
                "number": "082",
                "description": "General collections In English"
              },
              {
                "number": "083",
                "description": "General collections In other Germanic languages"
              },
              {
                "number": "084",
                "description": "General collections In French, Provencal, Catalan"
              }
            ]
          }
        ]
      }
      ,
      {
        "number": "100",
        "description": "Philosophy & Psychology",
        "level2": [
          {
            "number": "150",
            "description": "Psychology",
            "level3": [
              {
                "number": "152",
                "description": "Perception, movement, emotions, drives"
              },
              {
                "number": "153",
                "description": "Mental processes & intelligence"
              },
              {
                "number": "154",
                "description": "Subconscious & altered states"
              },
              {
                "number": "155",
                "description": "Differential & developmental psychology"
              }
            ]
          },
          {
            "number": "160",
            "description": "Logic",
            "level3": [
              {
                "number": "161",
                "description": "Induction"
              },
              {
                "number": "162",
                "description": "Deduction"
              },
              {
                "number": "165",
                "description": "Fallacies & sources of error"
              },
              {
                "number": "166",
                "description": "Syllogisms"
              }
            ]
          },
          {
            "number": "170",
            "description": "Ethics (Moral philosophy)",
            "level3": [
              {
                "number": "171",
                "description": "Systems & doctrines"
              },
              {
                "number": "172",
                "description": "Political ethics"
              },
              {
                "number": "173",
                "description": "Ethics of family relationships"
              },
              {
                "number": "174",
                "description": "Economic & professional ethics"
              }
            ]
          },
          {
            "number": "180",
            "description": "Ancient, medieval, Oriental philosophy",
            "level3": [
              {
                "number": "181",
                "description": "Oriental philosophy"
              },
              {
                "number": "182",
                "description": "Pre-Socratic Greek philosophies"
              },
              {
                "number": "183",
                "description": "Sophistic & Socratic philosophies"
              },
              {
                "number": "184",
                "description": "Platonic philosophy"
              }
            ]
          }
        ]
      }
      ,
      {
        "number": "200",
        "description": "Religion",
        "level2": [
          {
            "number": "250",
            "description": "Christian orders & local church",
            "level3": [
              {
                "number": "251",
                "description": "Preaching (Homiletics)"
              },
              {
                "number": "252",
                "description": "Texts of sermons"
              },
              {
                "number": "253",
                "description": "Pastoral office (Pastoral theology)"
              },
              {
                "number": "254",
                "description": "Parish government & administration"
              }
            ]
          },
          {
            "number": "260",
            "description": "Christian social theology",
            "level3": [
              {
                "number": "261",
                "description": "Social theology"
              },
              {
                "number": "262",
                "description": "Ecclesiology"
              },
              {
                "number": "263",
                "description": "Times, places of religious observance"
              },
              {
                "number": "264",
                "description": "Public worship"
              }
            ]
          },
          {
            "number": "270",
            "description": "Christian church history",
            "level3": [
              {
                "number": "271",
                "description": "Religious orders in church history"
              },
              {
                "number": "272",
                "description": "Persecutions in church history"
              },
              {
                "number": "273",
                "description": "Heresies in church history"
              },
              {
                "number": "274",
                "description": "Christian church in Europe"
              }
            ]
          },
          {
            "number": "280",
            "description": "Christian denominations & sects",
            "level3": [
              {
                "number": "281",
                "description": "Early church & Eastern churches"
              },
              {
                "number": "282",
                "description": "Roman Catholic Church"
              },
              {
                "number": "283",
                "description": "Anglican churches"
              },
              {
                "number": "284",
                "description": "Protestants of Continental origin"
              }
            ]
          }
        ]
      }
      ,
      {
        "number": "300",
        "description": "Social Sciences",
        "level2": [
          {
            "number": "350",
            "description": "Public administration",
            "level3": [
              {
                "number": "351",
                "description": "Of central governments"
              },
              {
                "number": "352",
                "description": "Of local governments"
              },
              {
                "number": "353",
                "description": "of U.S. federal & state governments"
              },
              {
                "number": "354",
                "description": "Of specific central governments"
              }
            ]
          },
          {
            "number": "360",
            "description": "Social services; association",
            "level3": [
              {
                "number": "361",
                "description": "General social problems & services"
              },
              {
                "number": "362",
                "description": "Social welfare problems & services"
              },
              {
                "number": "363",
                "description": "Other social problems & services"
              },
              {
                "number": "364",
                "description": "Criminology"
              }
            ]
          },
          {
            "number": "370",
            "description": "Education",
            "level3": [
              {
                "number": "371",
                "description": "School management; special education"
              },
              {
                "number": "372",
                "description": "Elementary education"
              },
              {
                "number": "373",
                "description": "Secondary education"
              },
              {
                "number": "374",
                "description": "Adult education"
              }
            ]
          },
          {
            "number": "380",
            "description": "Commerce, communications, transport",
            "level3": [
              {
                "number": "381",
                "description": "Internal commerce (Domestic trade)"
              },
              {
                "number": "382",
                "description": "International commerce (Foreign trade)"
              },
              {
                "number": "383",
                "description": "Postal communication"
              },
              {
                "number": "384",
                "description": "Communications Telecommunication"
              }
            ]
          }
        ]
      }
      ,
      {
        "number": "400",
        "description": "Language",
        "level2": [
          {
            "number": "450",
            "description": "Italian, Romanian, Rhaeto-Romantic",
            "level3": [
              {
                "number": "451",
                "description": "Italian writing system & phonology"
              },
              {
                "number": "452",
                "description": "Italian etymology"
              },
              {
                "number": "453",
                "description": "Italian dictionaries"
              },
              {
                "number": "454",
                "description": "Italian grammar"
              }
            ]
          },
          {
            "number": "460",
            "description": "Spanish & Portuguese languages",
            "level3": [
              {
                "number": "461",
                "description": "Spanish writing system & phonology"
              },
              {
                "number": "462",
                "description": "Spanish etymology"
              },
              {
                "number": "463",
                "description": "Spanish dictionaries"
              },
              {
                "number": "465",
                "description": "Spanish grammar"
              }
            ]
          },
          {
            "number": "470",
            "description": "Italic Latin",
            "level3": [
              {
                "number": "471",
                "description": "Classical Latin writing & phonology"
              },
              {
                "number": "472",
                "description": "Classical Latin etymology & phonology"
              },
              {
                "number": "473",
                "description": "Classical Latin dictionaries"
              },
              {
                "number": "475",
                "description": "Classical Latin grammar"
              }
            ]
          },
          {
            "number": "480",
            "description": "Hellenic languages Classical Greek",
            "level3": [
              {
                "number": "481",
                "description": "Classical Greek writing & phonology"
              },
              {
                "number": "482",
                "description": "Classical Greek etymology"
              },
              {
                "number": "483",
                "description": "Classical Greek dictionaries"
              },
              {
                "number": "485",
                "description": "Classical Greek grammar"
              }
            ]
          }
        ]
      }
      ,
      {
        "number": "500",
        "description": "Natural Sciences & Mathematics",
        "level2": [
          {
            "number": "550",
            "description": "Earth sciences",
            "level3": [
              {
                "number": "551",
                "description": "Geology, hydrology, meteorology"
              },
              {
                "number": "552",
                "description": "Petrology"
              },
              {
                "number": "553",
                "description": "Economic geology"
              },
              {
                "number": "554",
                "description": "Earth sciences of Europe"
              }
            ]
          },
          {
            "number": "560",
            "description": "Paleontology Paleozoology",
            "level3": [
              {
                "number": "561",
                "description": "Paleobotany"
              },
              {
                "number": "562",
                "description": "Fossil invertebrates"
              },
              {
                "number": "563",
                "description": "Fossil primitive phyla"
              },
              {
                "number": "564",
                "description": "Fossil Mollusca & Molluscoidea"
              }
            ]
          },
          {
            "number": "570",
            "description": "Life sciences",
            "level3": [
              {
                "number": "572",
                "description": "Biochemistry"
              },
              {
                "number": "573",
                "description": "Physical anthropology"
              },
              {
                "number": "574",
                "description": "Biology"
              },
              {
                "number": "575",
                "description": "Evolution"
              }
            ]
          },
          {
            "number": "580",
            "description": "Botanical sciences",
            "level3": [
              {
                "number": "581",
                "description": "Botany"
              },
              {
                "number": "582",
                "description": "Spermatophyte (Seed-bearing plants)"
              },
              {
                "number": "583",
                "description": "Dicotyledones"
              },
              {
                "number": "584",
                "description": "Monocotyledons"
              }
            ]
          }
        ]
      }
      ,
      {
        "number": "600",
        "description": "Technology (Applied Sciences)",
        "level2": [
          {
            "number": "650",
            "description": "Management & auxiliary services",
            "level3": [
              {
                "number": "651",
                "description": "Office services"
              },
              {
                "number": "652",
                "description": "Processes of written communication"
              },
              {
                "number": "653",
                "description": "Shorthand"
              },
              {
                "number": "657",
                "description": "Accounting"
              }
            ]
          },
          {
            "number": "660",
            "description": "Chemical engineering",
            "level3": [
              {
                "number": "661",
                "description": "Industrial chemicals technology"
              },
              {
                "number": "662",
                "description": "Explosives, fuels technology"
              },
              {
                "number": "663",
                "description": "Beverage technology"
              },
              {
                "number": "664",
                "description": "Food technology"
              }
            ]
          },
          {
            "number": "670",
            "description": "Manufacturing",
            "level3": [
              {
                "number": "671",
                "description": "Metalworking & metal products"
              },
              {
                "number": "672",
                "description": "Iron, steel, other iron alloys"
              },
              {
                "number": "673",
                "description": "Nonferrous metals"
              },
              {
                "number": "674",
                "description": "Lumber processing, wood products, cork"
              }
            ]
          },
          {
            "number": "680",
            "description": "Manufacture for specific uses",
            "level3": [
              {
                "number": "681",
                "description": "Precision instruments & other devices"
              },
              {
                "number": "682",
                "description": "Small forge work (Blacksmithing)"
              },
              {
                "number": "683",
                "description": "Hardware & household appliances"
              },
              {
                "number": "684",
                "description": "Furnishings & home workshops"
              }
            ]
          }
        ]
      }
      ,
      {
        "number": "700",
        "description": "The Arts",
        "level2": [
          {
            "number": "750",
            "description": "Painting & paintings",
            "level3": [
              {
                "number": "751",
                "description": "Techniques, equipment, forms"
              },
              {
                "number": "752",
                "description": "Color"
              },
              {
                "number": "753",
                "description": "Symbolism, allegory, mythology, legend"
              },
              {
                "number": "754",
                "description": "Genre paintings"
              }
            ]
          },
          {
            "number": "760",
            "description": "Graphic arts Printmaking & prints",
            "level3": [
              {
                "number": "761",
                "description": "Relief processes (Block printing)"
              },
              {
                "number": "763",
                "description": "Lithographic (Planographic) processes"
              },
              {
                "number": "764",
                "description": "Chromolithography & serigraphy"
              },
              {
                "number": "765",
                "description": "Metal engraving"
              }
            ]
          },
          {
            "number": "770",
            "description": "Photography & photographs",
            "level3": [
              {
                "number": "771",
                "description": "Techniques, equipment, materials"
              },
              {
                "number": "772",
                "description": "Metallic salt processes"
              },
              {
                "number": "773",
                "description": "Pigment processes of printing"
              },
              {
                "number": "774",
                "description": "Holography"
              }
            ]
          },
          {
            "number": "780",
            "description": "Music",
            "level3": [
              {
                "number": "781",
                "description": "General principles & musical forms"
              },
              {
                "number": "782",
                "description": "Vocal music"
              },
              {
                "number": "783",
                "description": "Music for single voices The voice"
              },
              {
                "number": "784",
                "description": "Instruments & Instrumental ensembles"
              }
            ]
          }
        ]
      }
      ,
      {
        "number": "800",
        "description": "The Literature & Rhetoric",
        "level2": [
          {
            "number": "850",
            "description": "Italian, Romanian, Rhaeto-Romanic",
            "level3": [
              {
                "number": "851",
                "description": "Early period to 1375"
              },
              {
                "number": "852",
                "description": "Classical learning, 1375-1492"
              },
              {
                "number": "853",
                "description": "1492-1585"
              },
              {
                "number": "854",
                "description": "1585-1814"
              }
            ]
          },
          {
            "number": "860",
            "description": "Spanish & Portuguese literatures",
            "level3": [
              {
                "number": "861",
                "description": "Early to 1400"
              },
              {
                "number": "862",
                "description": "1400-1553"
              },
              {
                "number": "863",
                "description": "Golden age, 1554-1700"
              },
              {
                "number": "864",
                "description": "1700-1800"
              }
            ]
          },
          {
            "number": "870",
            "description": "General works on Latin literature",
            "level3": [
              {
                "number": "871",
                "description": "Latin Authors"
              },
              {
                "number": "872",
                "description": "Collections of Latin prose or poetry"
              },
              {
                "number": "875",
                "description": "Medieval and modern Latin literature"
              },
              {
                "number": "879",
                "description": "Classical literature-History and criticism"
              }
            ]
          },
          {
            "number": "880",
            "description": "Hellenic literatures Classical Greek",
            "level3": [
              {
                "number": "881",
                "description": "Greek Authors"
              },
              {
                "number": "882",
                "description": "Collections of Greek prose or poetry"
              },
              {
                "number": "885",
                "description": "Modern Literature in the Ancient Greek Language"
              },
              {
                "number": "889",
                "description": "Literature in Medieval and Modern Greek"
              }
            ]
          }
        ]
      }
      ,
      {
        "number": "900",
        "description": "Geography & History",
        "level2": [
          {
            "number": "950",
            "description": "General history of Asia Far East",
            "level3": [
              {
                "number": "951",
                "description": "General history of Asia China & adjacent areas"
              },
              {
                "number": "952",
                "description": "General history of Asia Japan"
              },
              {
                "number": "953",
                "description": "General history of Asia Arabian Peninsula & adjacent areas"
              },
              {
                "number": "954",
                "description": "General history of Asia South Asia India"
              }
            ]
          },
          {
            "number": "960",
            "description": "General history of Africa",
            "level3": [
              {
                "number": "961",
                "description": "General history of Africa Tunisia & Libya"
              },
              {
                "number": "962",
                "description": "General history of Africa Egypt & Sudan"
              },
              {
                "number": "963",
                "description": "General history of Africa Ethiopia"
              },
              {
                "number": "964",
                "description": "General history of Africa Morocco & Canary Islands"
              }
            ]
          },
          {
            "number": "970",
            "description": "General history of North America",
            "level3": [
              {
                "number": "971",
                "description": "General history of North America Canada"
              },
              {
                "number": "972",
                "description": "General history of North America Middle America Mexico"
              },
              {
                "number": "973",
                "description": "General history of North America United States"
              },
              {
                "number": "974",
                "description": "General history of North America Northeastern United States"
              }
            ]
          },
          {
            "number": "980",
            "description": "General history of South America",
            "level3": [
              {
                "number": "981",
                "description": "General history of South America Brazil"
              },
              {
                "number": "982",
                "description": "General history of South America Argentina"
              },
              {
                "number": "983",
                "description": "General history of South America Chile"
              },
              {
                "number": "984",
                "description": "General history of South America Bolivia"
              }
            ]
          }
        ]
      }
    ];


    const [level1, setLevel1] = useState([]);
    const [level2, setLevel2] = useState([]);
    const [level3, setLevel3] = useState([]);
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    
    // Fetch JSON data
    useEffect(() => {
      const fetchData = async () => {
        try {
          // simulating API call delay
          // await new Promise(resolve => setTimeout(resolve, 1000));

          // select from data
          let count = 0;
          let count2 = 0;
          let count3 = 0;

          const Level_1 = []; const Level_2 = []; const Level_3 = [];

          let randomIndex = (Math.floor(Math.random() * 6) + 1) - 1;
          let randomIndex2 = (Math.floor(Math.random() * 4) + 1) - 1;
          let randomIndex3 = (Math.floor(Math.random() * 4) + 1) - 1;


          const SelectFromJsonData = () => {
            jsonData.forEach((topLevelObject) => {
              // console.log('Top-level object:', topLevelObject.number, topLevelObject.description);
              if(Level_1.length<4){
                if(count >= randomIndex){
                  Level_1.push(topLevelObject.number +" - "+topLevelObject.description)

                  if(topLevelObject.level2) {
                    topLevelObject.level2.forEach((level2Object) => {
                      // console.log('  Level 2:', level2Object.number, level2Object.description);
                      if(Level_2.length<4){
                        if(count2 > (randomIndex2*4)-1){
                          Level_2.push(level2Object.number +" - "+level2Object.description)

                          if(level2Object.level3) {
                            level2Object.level3.forEach((level3Object) => {
                              // console.log('    Level 3:', level3Object.number, level3Object.description);
                              if(Level_3.length<4){
                                if(count3 > (randomIndex3*4)-1){
                                  Level_3.push(level3Object.number +" - "+level3Object.description)
                                }
                              }
                              ++count3;
                            });
                          }
                        }
                      }
                      ++count2;
                    });
                  }
                }
              }
              ++count;
            });
          }
          SelectFromJsonData();
  
          setLevel1([...Level_1]);
          setLevel2([...Level_2]);
          setLevel3([...Level_3]);
          
          let i = 0;
          while(i < Level_1.length){
            // console.log("Level 1: " + Level_1[i]);
            if(i == randomIndex2){
              setAnswer1(Level_1[i]);
            }
            ++i;
          }
          let x = 0;
          while(x < Level_2.length){
            // console.log("Level 2: " + Level_2[x]);
            if(x == randomIndex3){
              setAnswer2(Level_2[x]);
            }
            ++x;
          }
          let g = 0;
          while(g < Level_3.length){
            // console.log("Level 3: " + Level_3[g]);
            if(g == (Math.floor(Math.random() * 4) + 1) - 1){
              setAnswer3(Level_3[g]);
            }
            ++g;
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  // return data
  return { level1, level2, level3, answer1, answer2, answer3 };
};

export default UseJsonData;