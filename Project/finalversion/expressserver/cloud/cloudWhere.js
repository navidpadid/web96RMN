
Parse.Cloud.beforeSave("Waitingroom",function (req,res){
    var obj = req.object;
    var Waitingroom = Parse.Object.extend("Waitingroom");
    var query = new Parse.Query(Waitingroom);
    query.equalTo("Userid", obj.get("Userid"));
    query.first({
        success: function(results) {
            if (results) {
                console.log("cloud prevented in success");
                res.error("user already waiting");
            }
                else {
                res.success();
            }
        },
        error: function(error) {
            console("Error in cloud: " + error.code + " " + error.message);
            res.error();
        }
    });
});

Parse.Cloud.beforeSave("Online",function (req,res){
    var obj = req.object;
    var Online = Parse.Object.extend("Online");
    var query = new Parse.Query(Online);

    query.equalTo("UsersHash", obj.get("UsersHash"));
    query.find({
        success: function(results) {
            if (results && results.length>0) {
                if (obj.get("POneLast") === 0 || obj.get("POneLast")){
                    res.success();
                }
                else {
                    console.log("cloud prevented in success");
                    res.error("user already online");
                }

            }
            else {
                res.success();
            }
        },
        error: function(error) {
            console("Error in cloud: " + error.code + " " + error.message);
            res.success();
        }
    });
});
Parse.Cloud.beforeSave("Leaderboards",function (req,res){

    var leaderboards = Parse.Object.extend("Leaderboards");
    var query = new Parse.Query(leaderboards);
    var obj = req.object;

    query.equalTo("Username", obj.get("Username"));

    query.first({
        success: function(result) {
            if (result) {
                var beforeScore = result.get('Score');
                //todo ask y not works!!! :\
                //var nowScore = obj.get('Score');
                // req.object.set('Score',nowScore + beforeScore);
                req.object.increment('Score',beforeScore);
                result.destroy();
                req.object.save();
                res.error("object updated");
            }
            else {
                res.success();
            }
        },
        error: function(error) {
            console("Error in cloud: " + error.code + " " + error.message);
            res.success();
        }
    });
});

Parse.Cloud.beforeDelete("Session",function (req,res){

    var waitingroom = Parse.Object.extend("Waitingroom");
    var query = new Parse.Query(waitingroom);
    var obj = req.object;

    query.equalTo("Userid", obj.id);

    query.first({
        success: function(result) {
            if (result) {
                result.destroy();
                res.success();
            }
            else {
                res.success();
            }
        },
        error: function(error) {
            console("Error in cloud: " + error.code + " " + error.message);
            res.success();
        }
    });
});