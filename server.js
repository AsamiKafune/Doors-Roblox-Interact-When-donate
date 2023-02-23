const { WebSocketServer } = require('ws');
const io = require("socket.io-client");
const wss = new WebSocketServer({
    port: 3006
})
global.syn = null;
const config = {
    // token here! --> https://streamlabs.com/dashboard#/settings/api-settings
    streamlabsToken: "",
    // random ?
    random: false
}
const streamlabs = io(`https://sockets.streamlabs.com?token=${config.streamlabsToken}`, { transports: ['websocket'] });
console.log("ws has been start!")

streamlabs.on("connect", () => {
    console.log("[Logs] streamlabs server => has now connected!")
})
streamlabs.on("event", async (eventData) => {
    if (eventData["type"] === "donation") {
        let amount = eventData.message[0].amount
        if (syn != null) {
            if (config.random) {
                let entity = ["Screech","Glitch"]
                entity = entity[Math.floor(Math.random()*entity.length)]
                syn.send(entity)
            } else {
                if (amount == 10) syn.send("Screech")
                else if (amount == 15) syn.send("Glitch")
            }
        }
        else console.log("[Error] please execute your syn script first!")
    }
})
wss.on("connection", (ws) => {
    console.log("syn has now connect!")
    syn = ws
})
