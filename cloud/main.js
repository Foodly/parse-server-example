
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("iosPushTest", function(request, response) {
  var params = request.params;
  var channel = params.channel;
  var messageText = params.text;
  Parse.Push.send({
    channels: [channel],
    data: {
      alert: messageText,
      badge: 1
    }
  }, { success: function() {
      console.log("#### PUSH OK");
  }, error: function(error) {
      console.log("#### PUSH ERROR" + error.message);
  }, useMasterKey: true});

  response.success('success');
});
