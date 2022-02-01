console.log('VUE OK', Vue);

Vue.config.devtool = true;

const boolzapp = new Vue ({
    el: '#root',
    data: {
        user: {
          name: 'Ezreal',
          avatar: '_io'
        },
        contacts: [
          {
            name: 'Leona',
            avatar: '_1',
            visible: true,
            messages:[
              {
                data: '10/01/2020',
                text: 'Oggi ho lezione di combattimento?',
                status: 'sent',
              },
              {
                data: '10/01/2020',
                text: 'Si, con il prof Graves',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Mi sa che me la balzo alla grande',
                status: 'sent',
              }
            ],
          },
          {
            name: 'Lux',
            avatar: '_2',
            visible: true,
            messages:[
              {
                data: '10/01/2020',
                text: 'Hyela!!',
                status: 'sent',
              },
              {
                data: '10/01/2020',
                text: 'Ei Ez, dimmi tutto',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Ti andrebbe oggi di andare a bere qualcosa??',
                status: 'sent',
              },
              {
                data: '10/01/2020',
                text: 'Sì certo, ti devo anche dire una cosa importante...',
                status: 'received',
              }
            ],
          },
          {
            name: 'Wukong',
            avatar: '_3',
            visible: true,
            messages:[
              {
                data: '10/01/2020',
                text: 'Senti brutta scimmia, prova ancora a trattare male Lux che ti concio per le feste',
                status: 'sent',
              },
              {
                data: '10/01/2020',
                text: 'Ti aspetto fuori dalla accademia sfigato, cerca solo di non fare il codardo',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Nessuno può chiamarmi codardo',
                status: 'sent',
              }
            ],
          },
          {
            name: 'Professor Graves',
            avatar: '_4',
            visible: true,
            messages:[
              {
                data: '10/01/2020',
                text: 'Salve prof, mi sa che domani non sarò presente a lezione',
                status: 'sent',
              },
              {
                data: '10/01/2020',
                text: 'Come mai?',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Ho una cosa importante da fare con Wukong.... MOLTO IMPORTANTE',
                status: 'sent',
              },
              {
                data:'10/01/2020',
                text: 'Non metterti nei guai, ti conosco molto bene ormai, la preside Yuumi non te la farà passare liscia di nuovo',
                status: 'received',
              }
            ],
          },
          {
            name: 'Caitlyn',
            avatar: '_5',
            visible: true,
            messages:[
              {
                data: '10/01/2020',
                text: 'Ho saputo quello che vuoi fare con Wukong... Sicuro che sia una buona idea?',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Si, mi ha stufato, continua ad insultare e trattare male la mia Lux e questo non lo posso accettare',
                status: 'sent',
              },
              {
                data: '10/01/2020',
                text: 'Si ma... stai attento, se ti serve ti darò una mano',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Appena sarà finito tutto ti porterò in infermeria, daccordo?',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Si ma la barella non sarà per me!',
                status: 'sent',
              },
            ],
          },
          {
            name: 'Katarina',
            avatar:'_6',
            visible: true,
            messages:[
              {
                data: '10/01/2020',
                text: 'Hey Kata, ho bisogno che mi aiuti con una cosa...',
                status: 'sent',
              },
              {
                data: '10/01/2020',
                text: 'Ti devo tenere Darius occupato per la rissa contro Wukong?',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: '... come lo hai capito?',
                status: 'sent',
              },
              {
                data: '10/01/2020',
                text: 'Intuito... comunque non ci sono problemi, picchia forte quella scimmia schifosa anche da parte mia',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Tranquilla, non si reggerà nemmeno in piedi',
                status: 'sent',
              },
            ],
          },
          {
            name: 'Darius',
            avatar: '_7',
            visible: true,
            messages:[
              {
                data: '10/01/2020',
                text: 'Quello scimmione ti avrà già detto tutto ma ti dico una cosa io... non intrometterti se no le do anche a te',
                status: 'sent',
              },
              {
                data: '10/01/2020',
                text: 'Tranquillo non lo farò, sarà molto divertente vederti tutto pestato in faccia sul giornalino della scuola',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Staremo a vedere chi sarà a picchiare chi',
                status: 'sent',
              }
            ],
          },
          {
            name: 'Jayce',
            avatar: '_8',
            visible: true,
            messages:[
              {
                data: '10/01/2020',
                text: 'Dude, non so chi è il più stupido se tu ad aver fatto questa cosa, o Katarina che ti da corda',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Se lo merita',
                status: 'sent',
              },
              {
                data: '10/01/2020',
                text: 'Si ma non è il modo giusto, e poi a Lux non serve aiuto, sa cavarsela da sola',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Oi?',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Ezreal?',
                status: 'received',
              },
              {
                data: '10/01/2020',
                text: 'Mi rispondi?',
                status: 'received',
              }
            ],
          }
        ]
      }
});