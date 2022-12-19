import { Client } from "./lib/Client";
import { config } from "dotenv";
import { join } from "path";
import { walk } from "./utils";
import type { ClientEvent } from "./lib/ClientEvent";
import type { Command } from "./lib/Command";
config();

async function main() {
	const client = new Client({
		// Add intents here
		intents: ["Guilds", "GuildMessages"]
	});

	// Load events and commands
	for await (const file of walk(join(__dirname, "events"))) {
		if (!file.endsWith(".js")) continue;

		let { default: imported } = await import(file);
		if (imported.default) imported = imported.default;

		const event: ClientEvent = imported;
		event.once
			? client.once(event.name, (...args) => event.run(...args))
			: client.on(event.name, (...args) => event.run(...args));
	}

	for await (const file of walk(join(__dirname, "commands"))) {
		if (!file.endsWith(".js")) continue;

		let { default: imported } = await import(file);
		if (imported.default) imported = imported.default;

		const command: Command = imported;
		client.commands.set(command.name, command);
	}

	// Login
	await client.login();
}

void main();
