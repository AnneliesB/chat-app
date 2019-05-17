const Primus = require("primus");

let go = (server) => {
    let primus = new Primus(server, {/* options */});
    primus.on("connection", (spark) => {
        console.log('received spark!');

        spark.on("data", (data) => {
            console.log(data);
            console.log("🅱🅱🚀🚀🚀");
            primus.write(data);
        });
    });
}

module.exports.go = go;