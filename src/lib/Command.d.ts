import type { Awaitable, ChatInputCommandInteraction, Message } from "discord.js";

export interface Command {
	name: string;
	description: string;
	aliases?: string[];
	runMessage?: (message: Message, args: string[]) => Awaitable<void>;
	runChatInput?: (interaction: ChatInputCommandInteraction) => Awaitable<void>;
}
