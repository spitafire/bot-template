import { opendir } from "node:fs/promises";
import { join } from "node:path";

export async function* walk(path: string): AsyncIterableIterator<string> {
	try {
		const dir = await opendir(path);
		for await (const item of dir) {
			if (item.isFile()) yield join(dir.path, item.name);
			else if (item.isDirectory()) yield* walk(join(dir.path, item.name));
		}
	} catch (error) {
		if ((error as Error & { code: string }).code !== "ENOENT") console.warn(error);
	}
}
