
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("iosPushTest", function(request, response) {
  var params = request.params;
  var channel = params.channel;
  var messageText = params.text;
  var pushQuery = new Parse.Query("_Installation");
  pushQuery.equalTo('channels', channel); // targeting iOS devices only
  Parse.Push.send({
    where: pushQuery, // Set our Installation query
    data: {
      alert: "Message: " + messageText
    }
  }, { success: function() {
      console.log("#### PUSH OK");
  }, error: function(error) {
      console.log("#### PUSH ERROR" + error.message);
  }, useMasterKey: true});

  response.success('success');
});
