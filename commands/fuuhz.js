const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fuuhz')
		.setDescription('ALguma coisa'),
	async execute(interaction) {
		await interaction.reply(`${interaction.user.username} joga nada kkk`);
	},
};