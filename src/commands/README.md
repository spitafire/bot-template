# Command Example

### TypeScript example

```ts
import type { Command } from "../lib/Command";

const command: Command = {
	name: "example",
	description: "Example command",
	aliases: ["ex"],
	runMessage(message, args) {
		void message.channel.send({ content: `Ran command \`${this.name}\` with args: ${args.join(" ")}` });
	},
	runChatInput(interaction) {
		void interaction.reply({ content: `Ran command \`${this.name}\`` });
	}
};

export default command;
```

### CommonJS example

```js
module.exports = {
	name: "example",
	description: "Example command",
	aliases: ["ex"],
	runMessage(message, args) {
		void message.channel.send({ content: `Ran command \`${this.name}\` with args: ${args.join(" ")}` });
	},
	runChatInput(interaction) {
		void interaction.reply({ content: `Ran command \`${this.name}\`` });
	}
};
```

### ESM example

```js
export default {
	name: "example",
	description: "Example command",
	aliases: ["ex"],
	runMessage(message, args) {
		void message.channel.send({ content: `Ran command \`${this.name}\` with args: ${args.join(" ")}` });
	},
	runChatInput(interaction) {
		void interaction.reply({ content: `Ran command \`${this.name}\`` });
	}
};
```