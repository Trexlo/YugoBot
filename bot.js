const Discord = require("discord.js");
const opus = require("opusscript");
const client = new Discord.Client();
const guild= new Discord.Guild();
const config = require("./config.json");

client.on('error', err=>{
	console.log("error is found");
	console.log(err);
	if(err.message.includes("ECONNRESET")  || err.message.includes("getaddrinfo")){
	  console.log("disconnected from network, attempting to reconnect");
	}
  });

client.on("ready", () => {
  
});

client.on('message', msg=>{
    if(!msg.author.bot);
    {
        var mess=msg.content.toLowerCase();
        if(msg.content.startsWith(config.prefix)){

        }

        if(mess.includes("smrt fašizmu") || mess.includes("smrt fasizmu")){
            msg.channel.send(`SLOBODA NARODU DRUŽE <@${msg.author.id}>!`)

        }
    }
});
client.login(config.token);