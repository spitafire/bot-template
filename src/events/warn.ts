import type { ClientEvent } from "../lib/ClientEvent";

const event: ClientEvent<"warn"> = {
	name: "warn",
	run(warning) {
		console.warn(warning);
	}
};

export default event;
