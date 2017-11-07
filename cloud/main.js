
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define("ingredientReminderJob", function(request, response) {
  var query = new Parse.Query("Ingredient");
  query.find({
    success: function(ingredients) {
      for(var i = 0; i < users.length; ++i) {
        console.log(ingredients[i].get("name"));
      }
    },
    error: function(error) {
      console.log(error);
    },
  });
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
