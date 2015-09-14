﻿if (!process.env.PORT) {
    global.isDevelopment = true;
} else {
    if (process.env.PORT === "3000") {
        global.isDevelopment = true;
    } else {
        global.isDevelopment = false;
    }
}
global.isVM = false;
var app = require('./app')();

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(){
	console.log("On PORT:"+app.get('port'));
});
