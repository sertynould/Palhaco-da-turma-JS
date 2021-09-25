const Discord = ("discord.js");
const client = new Discord.client();
const { ClientUser } = require("discord.js");
const config = require("./config.json");


client.on("ready", () => {
    console.log(`Bot foi iniciado em ${client.channels.size} canais e em ${client.guilds.size} servidores com ${client.users.size} pessoas`);
    Client.User.setgame(`Eu estou ativo em ${clent.guilds.size} servidores`);
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou um server! ebaaa, parece que server foi...espera...${guild.name} e tem...isso é dificil...legal até que é bastante gente eles tem ${guild.memberCount} membros!`;
    client.user.setActivy(`Agora estou em ${client.guild.size}`);
});

client.on("guildDelete", guild =>{
    console.log(`Expulsaram a gente da festa do ${guild.name} (id: ${guild.id})) :(`)
    client.user.setActivy(`Mas ainda estamos em ${client.guild.size} festas `)
    
});

client.on("message", async message => {
    
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    
    if(comando == "piada") {
      const Piada = await message.channel.send("piada?");
       Piada.edit (`é prave ou pra come?`);
    }
});

client.login(config.token);
