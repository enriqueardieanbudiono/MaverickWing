const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Replies with the server info'),
    async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor('#00FF00')
            .setTitle('Server Info')
            .setAuthor({ name: 'Maverick Wings', icon_url: 'https://i.imgur.com/uTTspNt.png', url: 'https://discord.gg/WkQjzDT' })
            .setThumbnail('https://i.imgur.com/uTTspNt.png')
            .setDescription('This is an info about the server\n\n')
            .addFields(
                { name: 'Name', value: `${interaction.guild.name}` },
                { name: 'ID', value: `${interaction.guild.id}` },
                { name: 'Owner', value: `${interaction.guild.owner.user.tag}` },
                { name: 'Owner ID', value: `${interaction.guild.owner.user.id}` },
                { name: 'Created', value: `${interaction.guild.createdAt}` },
                { name: 'Members', value: `${interaction.guild.memberCount}` },
                { name: 'Channels', value: `${interaction.guild.channels.cache.size}` },
                { name: 'Roles', value: `${interaction.guild.roles.cache.size}` },
                { name: 'Emojis', value: `${interaction.guild.emojis.cache.size}` },
            )
            .setImage(`${interaction.guild.iconURL({ format: 'png', dynamic: true, size: 1024 })}`)
            .setTimestamp()
            .setFooter({ text: 'Made by: @ZRX#0001', icon_url: 'https://i.imgur.com/uTTspNt.png' })
        await interaction.reply({ embeds: [embed] });
    },
};
/*
await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    }, */