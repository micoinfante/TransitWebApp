const Realm = require('realm');

const auth_server = 'https://transitph-server-2.us1a.cloud.realm.io';
const realm_server = 'realms://transitph-server-2.us1a.cloud.realm.io/transit2';
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
      primaryKey: 'commentId',
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
      primaryKey: 'videoId',
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

async function main() {
    const adminUser = await Realm.Sync.User.login(auth_server, 'test', 'test');
    const realm = await Realm.open({
        sync: {
            user: adminUser,
            url: realm_server,
        }
    });

    let videos = realm.objects('Video');
    // for (let i = 0; i < videos.length; i++) {
    //     console.log(videos[i].videoId);
    // }
    return videos
}
 
// main()


// for (user in Realm.Sync.User.all) {
//     user.logOut();
// }
// Realm.Sync.User.login(auth_server, 'test', 'test').then(user => {
//   // user is logged in
//   // do stuff ...
// }).catch(error => {
//   // an auth error has occurred
// }

var user1;
var videos;

for (user1 in Realm.Sync.User.all) {
    console.log(user1);
    // user1.logout()
}
// const user = Realm.Sync.User.login(auth_server, username, password)
// .then((user) => {
//     let config = user.createConfiguration({
//         sync: {
//             url: realm_server,
//             error: err => console.log(err)
//         }
//     });
//     config.schema = [VideoSchema, ImageSchema];
//     Realm.open(config).then((realm) => {
//         videos = realm.objects('Video');
//         let sub = videos.subscribe();
        
//         sub.addListener ( (sub, state) => {
//             switch (state) {
//                 case Realm.Sync.SubscriptionState.Creating:
//                     // The subscription has not yet been written to the Realm
//                     break;
//                 case Realm.Sync.SubscriptionState.Pending:
//                     // The subscription has been written to the Realm and is waiting
//                     // to be processed by the server
//                     break;
//                 case Realm.Sync.SubscriptionState.Complete:
//                     done();
//                     break;
//                 case Realm.Sync.SubscriptionState.Invalidated:
//                     // The subscription has been removed
//                     break;
//                 case Realm.Sync.SubscriptionState.Error:
//                     console.log('An error occurred: ', subscription.error);
//                     break;
//                 }
//         }

//         );
//     });
// });


