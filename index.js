const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection,Intents } = require('discord.js');
const music = require('@koenie06/discord.js-music');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });

module.exports.client = client;

/* This will run when a new song started to play */
music.event.on('playSong', (channel, songInfo, requester) => {
	channel.send({ content: `Started playing the song [${songInfo.title}](${songInfo.url}) - ${songInfo.duration} | Requested by \`${requester.tag}\`` });
});

/* This will run when a new song has been added to the queue */
music.event.on('addSong', (channel, songInfo, requester) => {
	channel.send({ content: `Added the song [${songInfo.title}](${songInfo.url}) - ${songInfo.duration} to the queue | Added by \`${requester.tag}\`` });
});

/* This will run when a song started playing from a playlist */
music.event.on('playList', async (channel, playlist, songInfo, requester) => {
    channel.send({
        content: `Started playing the song [${songInfo.title}](${songInfo.url}) by \`${songInfo.author}\` of the playlist ${playlist.title}.
        This was requested by ${requester.tag} (${requester.id})`
    });
});

/* This will run when a new playlist has been added to the queue */
music.event.on('addList', async (channel, playlist, requester) => {
    channel.send({
        content: `Added the playlist [${playlist.title}](${playlist.url}) with ${playlist.videos.length} amount of videos to the queue.
        Added by ${requester.tag} (${requester.id})`
    });
});

/* This will run when all the music has been played, and the bot disconnects. */
music.event.on('finish', (channel) => {
	channel.send({ content: `All music has been played, disconnecting..` });
});

client.commands = new Collection();
const commandPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandPath, file);
    const command = require(filePath);
    // Set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity("Coming Soon", {type: "COMPETING"});
});

client.on('interactionCreate', async interaction => {
    if(!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if(!command) return;

    try {
        await command.execute(interaction);
    } catch(error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});
client.login(token);