    const Discord = require('discord.js');
    
const client = new Discord.Client();

var prefix = "m"


client.login(process.env.TOKEN);


client.on("ready", () =>{
    console.log("je suis prêt")

});


client.on('message', async message => {

if(message.content === "le message que l'on doit envoyer pourque le bot réponde"){
    message.reply("le message que le bot repond")
    console.log("Le bot dit bonjour")
}

    if(message.content.startsWith("mp")) {
    
        var args = message.content.split(" ").slice(1);
        var msge = args.join(' ');

        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
        if(!msge) return message.channel.send("Precise un message")
        message.delete()
        message.guild.members.map(m => m.send(msge))
    }

    if(message.content.startsWith("msg")) {
    
        var args = message.content.split(" ").slice(1);
        var msge = args.join(' ');

        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("❌ Tu n'as pas la permission d'utiliser cette commande!");
        if(!msge) return message.channel.send("Precise un message")
        message.delete()
        message.channel.send(`${msge}`)
    }

});
