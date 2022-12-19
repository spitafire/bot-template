import type { ClientEvent } from "../lib/ClientEvent";

const event: ClientEvent<"error"> = {
	name: "error",
	run(error) {
		console.error(error);
	}
};

export default event;
