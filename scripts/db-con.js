import Realm from 'realm';

const auth_server = 'https://transitph-server-2.us1a.cloud.realm.io';
const realm_server = 'https://transitph-server-2.us1a.cloud.realm.io';
const username = 'test';
const password = 'test';

const CarSchema = {
    name: 'Car',
    properties: {
      make:  'string',
      model: 'string',
      miles: {type: 'int', default: 0},
    }
  };

  const CommentSchema = {
      name: 'Comment', 
      properties: {
          commendId: 'string',
          timestamp: 'date',
          user: '',
          comment: 'string',
          video:'id'
      }
  };

  const VideoSchema = {
      name: 'Video',
      properties: {
          videoId: 'string',
          views: 'int',
          timestamp: 'date',
          source: 'data?'
      }
  };

  const ImageSchema = {
    name: 'Image',
    properties: {
        imageId: 'string',
        imageData: 'data?'
    }
};
  

// Realm.open({schema: [CarSchema, PersonSchema]})
//   .then(realm => {
//     // Create Realm objects and write to local storage
//     realm.write(() => {
//       const myCar = realm.create('Car', {
//         make: 'Honda',
//         model: 'Civic',
//         miles: 1000,
//       });
//       myCar.miles += 20; // Update a property value
//     });

// const cars = realm.objects('Car').filtered('miles > 1000');





Realm.Sync.User.login(server, username, password)
.then((user) => {
      let config = user.createConfiguration({
        sync: { url: realm_server,
                error: err => console.log(err)
              },
      });
      config.schema = [Schema];
      Realm.open(config).then((realm) => {
          // ...
      });
})

// Realm.open({
//     path: 'transitph-server-2.us1a.cloud.realm.io',
//     schema: [VideoSchema, ImageSchema]
//   }).then( realm => {
//         let videos = realm.objects('Video');
//         realm.close();
//     }
    
//   );