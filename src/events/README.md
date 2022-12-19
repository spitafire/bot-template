# Command Example

### TypeScript example

```ts
import type { ClientEvent } from "../lib/ClientEvent";

const event: ClientEvent<"ready"> = {
	name: "ready",
	once: true, // optional
	run(client) {
		console.log(`${client.user.tag} is ready!`);
	}
};

export default event;
```

### CommonJS example

```js
module.exports = {
	name: "ready",
	once: true, // optional
	run(client) {
		console.log(`${client.user.tag} is ready!`);
	}
};
```

### ESM example

```js
export default {
	name: "ready",
	once: true, // optional
	run(client) {
		console.log(`${client.user.tag} is ready!`);
	}
};
```