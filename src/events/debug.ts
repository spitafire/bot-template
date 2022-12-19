import type { ClientEvent } from "../lib/ClientEvent";

const event: ClientEvent<"debug"> = {
	name: "debug",
	run(info) {
		console.debug(info);
	}
};

export default event;
