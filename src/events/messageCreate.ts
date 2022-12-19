import type { ClientEvent } from "../lib/ClientEvent";

const event: ClientEvent<"messageCreate"> = {
	name: "messageCreate",
	async run(message) {
		const prefix = message.client.user.toString();

		if (!message.content.startsWith(prefix) || message.author.bot || message.webhookId) return;

		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift()?.toLowerCase();

		if (!commandName) return;

		const command =
			message.client.commands.get(commandName) ||
			message.client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) return;

		if (!command.runMessage) {
			return console.warn(`Command ${command.name} does not have a runMessage method.`);
		}

		try {
			await command.runMessage(message, args);
		} catch (error) {
			console.error(error);
			await message.reply({ content: "There was an error trying to execute that command!" });
		}
	}
};

export default event;
