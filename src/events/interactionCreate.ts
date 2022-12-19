import type { ClientEvent } from "../lib/ClientEvent";

const event: ClientEvent<"interactionCreate"> = {
	name: "interactionCreate",
	async run(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) return;

		if (!command.runChatInput) {
			return console.warn(`Command ${command.name} does not have a runChatInput method.`);
		}

		try {
			await command.runChatInput(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: "There was an error trying to execute that command!" });
		}
	}
};

export default event;
