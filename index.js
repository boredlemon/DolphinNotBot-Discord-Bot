const Discord = require(`discord.js`);

const TOKEN = "MTEyMjI4OTc5OTA4OTM2NTAzNA.GpJqil.3pMnrAqZaScOS-Df1LYnui5zgQjhq3J4iUa9wA"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hello world! i am dolphin :)")
    }
})

client.login(TOKEN)