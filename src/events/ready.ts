import type { ClientEvent } from "../lib/ClientEvent";

const event: ClientEvent<"ready"> = {
	name: "ready",
	once: true,
	run(client) {
		console.log(`Logged in as ${client.user?.tag}`);
	}
};

export default event;
