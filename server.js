const express = require('express')
const handler = require('./handler.js')
const app = express()

// DB COnst
const port = process.env.PORT || 8000

app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'public'));
// app.use(express.static(__dirname + '/styles'));
// app.use(express.static(__dirname + '/img'));
app.get('/', function(req, res){
    res.render('video');
});

app.get('/index', function(req, res){
    res.render('video');
});


app.get('/portfolio', function(req, res){
    let video_id = 'mico';
    // let videos = handler.getVideo();
    // handler.getVideo()
    let getVideos = async () => {
        const adminUser = await Realm.Sync.User.login(auth_server, 'test', 'test');
        const realm = await Realm.open({
            sync: {
                user: adminUser,
                url: realm_server,
            }
        });
    
        let videos = realm.objects('Video').filter('videoId = 51AA1AD1-035D-4C53-A8E0-BC85B02892A3).map(function(obj){
            return {
              videoId: obj.videoId,
              views: obj.views,
              timestamp: obj.timestamp,
              source: obj.source             
            }
          });
          console.log('objects', videos);
        
        res.render('portfolio', {videos: videos})
        return videos
    };
    let videos = getVideos();    
    
});

app.locals.videoHelper = function(videoData) {
    console.log(videoData)
}
app.listen(port , function(){
    console.log('Transit Web App Running on port' + port);
});



const auth_server = 'https://transitph-server-2.us1a.cloud.realm.io';
const realm_server = 'realms://transitph-server-2.us1a.cloud.realm.io/transit2';

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
