const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
          .setName('ban')
          .setDescription('Allow the developer to ban someone')
}