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
          },
          {
            name: 'Lux',
            avatar: '_2',
          },
          {
            name: 'Wukong',
            avatar: '_3',
          },
          {
            name: 'Professor Graves',
            avatar: '_4',
          },
          {
            name: 'Caitlyn',
            avatar: '_5',
          },
          {
            name: 'Katarina',
            avatar:'_6',
          },
          {
            name: 'Darius',
            avatar: '_7',
          },
          {
            name: 'Jayce',
            avatar: '_8',
          }
        ]
      }
});