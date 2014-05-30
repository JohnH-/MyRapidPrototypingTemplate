var mongoose         = require('mongoose')
  , express          = require('express')
  , http             = require('http')
  , path             = require('path')
  , app              = express();

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use('/', express.static(__dirname + '/app'));
app.use(express.methodOverride());

mongoose.connect("mongodb://localhost:27017/admin", 
  function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});


/* SOME EXAMPLES
var resumePosts = new mongoose.Schema({
  , tags       : { type: Array
                 , index: true}
  , created    : { type: Date
                 , default: Date.now }
});

var resumePost = mongoose.model('resumePost', resumePosts);
*/
/////////////////////////////////////////////////////////
//API  //////////////////////////////////////////////////
/////////////////////////////////////////////////////////

/*app.post('/api/rPost', function(req, res) {
  var email = req.body.email
  , messageBody = req.body.messageBody
  , zipCode = req.body.zipCode
  , tags = req.body.tags
  , password = req.body.password
  , privateKey = ""
  , ip = req.ip
  , challenge = req.body.recaptcha_challenge_field
  , response = req.body.recaptcha_response_field;
  simple_recaptcha(privateKey, ip, challenge, response, function(err) {
    if (err) { 
        res.send(err.message);    
        console.log(err.message)
    } else {    
      var newResumePost = new resumePost ({
          email: email
        , messageBody: messageBody
        , zipCode: zipCode
        , password: password
        , tags: tags.split(/[\s,#]+/).clean("")
      });
    
      newResumePost.save(function(){
        console.log("Resume post save! " + 
        email + " " + 
        messageBody + " " + 
        zipCode + 
        " ******");
        resumePost.find({$query: {}
                       , $orderby: {created: -1}}
                       , {email: 0, password: 0}
                       , function(err, posts) {
          res.json(posts); 
        });
      });
    }
  });   
});
*/
/////////////////////////////////////////////////////////
//SERVER  ///////////////////////////////////////////////
/////////////////////////////////////////////////////////

var serverConf = {
    port : 4000
  , ip   : "localhost"
  , start: function() { 
    console.log('server started @' + 
    " " + serverConf.ip + ":" + serverConf.port); }
}

http.createServer(app).listen(serverConf.port, serverConf.ip, serverConf.start());







