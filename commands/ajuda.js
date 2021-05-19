const Discord = require ("discord.js")

module.exports = {
    name: "embed full by ferinha <3",
    description: "o bot vai enviar uma embed full + menção",
    author: "ferinha :))",

    run: async(client, message, args) => {

        let fera = message.author;

        let ferinha = new Discord.MessageEmbed()
        .setTitle(`:bell: Meus comandos!`)
        .setDescription(`➔ Espero ajuda :)`)
        .setColor("RANDOM")
        .setImage(client.user.displayAvatarURL())
        .setThumbnail("https://cdn.discordapp.com/attachments/842077848482349107/842081594532560916/20200812_103342.png") //url de alguma imagem (na direita | parte de cima)
        .setTimestamp()
        .addFields(
            {
                name: "➔ Comando 1",
                value: "sla",
                inline: true
            },
            {
                name: "➔ Comando 2",
                value: "sla 2",
                inline: true
            }
        );

        message.channel.send(fera, ferinha)
  
    }
}
