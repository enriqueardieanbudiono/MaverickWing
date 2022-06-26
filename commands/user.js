const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
            .setName('user')
            .setDescription('Replies with the user info'),
    async execute(interaction) {
        const embed = new MessageEmbed()
                .setColor('#00FF00')
                .setTitle('User Info')
                .setAuthor({ name: 'Maverick Wings', icon_url: 'https://i.imgur.com/uTTspNt.png', url: 'https://discord.gg/WkQjzDT' })
                .setThumbnail('https://i.imgur.com/uTTspNt.png')
                .setDescription('This is an info about you\n\n')
                .addFields(
                    { name: 'Username', value: `${interaction.user.tag}`},
                    { name: 'ID', value: `${interaction.user.id}` },
                    { name: 'Created', value: `${interaction.user.createdAt}` },
                    { name: 'Joined', value: `${interaction.guild.joinedAt}` },
                )
                .setImage(`${interaction.user.avatarURL({ format: 'png', dynamic: true, size: 1024 })}`)
                .setTimestamp()
                .setFooter({ text: 'Made by: @ZRX#0001', icon_url: 'https://i.imgur.com/uTTspNt.png' })
    await interaction.reply({ embeds: [embed] });
    },
};
/*
await interaction.reply(`User name: ${interaction.user.tag}\nUser ID: ${interaction.user.id}\nUser Bot: ${interaction.user.bot}`);
    console.log(`${interaction.user.createdAt}`);
}, */