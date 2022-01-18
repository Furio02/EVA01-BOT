const Discord=require ("discord.js")
require("dotenv").config()

const client=new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", ()=>{
    console.log('Eva-01 lift off!')
})

client.on("messageCreate", (message)=>{
    if (message.content=="ciao"){
        message.reply("leccamelo")
    }
})

client.login(process.env.TOKEN)