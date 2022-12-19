import { Client as DiscordClient, Collection } from "discord.js";
import type { Command } from "./Command";

export class Client extends DiscordClient {
	public commands: Collection<string, Command> = new Collection();
}

declare module "discord.js" {
	export interface Client {
		commands: Collection<string, Command>;
	}
}
