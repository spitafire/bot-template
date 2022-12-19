import type { Awaitable, ClientEvents } from "discord.js";

export interface ClientEvent<T extends keyof ClientEvents = keyof ClientEvents> {
	name: T;
	once?: boolean;
	run: (...args: ClientEvents[T]) => Awaitable<void>;
}
