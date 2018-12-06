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

module.exports = {
    getVideo: async function() {
        const adminUser = await Realm.Sync.User.login(auth_server, 'test', 'test');
        const realm = await Realm.open({
            sync: {
                user: adminUser,
                url: realm_server,
            }
        });
    
        let videos = realm.objects('Video');
        console.log(videos.count)
        return videos
    }
}

// var getVideo = async function() {
//     const adminUser = await Realm.Sync.User.login(auth_server, 'test', 'test');
//     const realm = await Realm.open({
//         sync: {
//             user: adminUser,
//             url: realm_server,
//         }
//     });

//     let videos = realm.objects('Video');
//     console.log(videos.count)
//     return videos
// };
