const Discord = require(`discord.js`);

const TOKEN = "put ur token here dude"

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
