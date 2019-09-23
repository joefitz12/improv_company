//HTTP Routes//
var path = require("path");

module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/about", function(req, res){
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });
    
    app.get("/contact", function(req, res){
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

    app.get("/hire-us", function(req, res){
        res.sendFile(path.join(__dirname, "../public/hire-us.html"));
    });

    app.get("/meet-the-team", function(req, res){
        res.sendFile(path.join(__dirname, "../public/meet-the-team.html"));
    });
};