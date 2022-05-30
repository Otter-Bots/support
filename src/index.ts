import './lib/setup';
import { sharedClientMessageListenerEnabled } from "@otterbots/sapphire-components";

const client = new sharedClientMessageListenerEnabled();

const main = async () => {
	try {
		client.logger.info('Logging in');
		await client.login();
		client.logger.info('logged in');
	} catch (error) {
		client.logger.fatal(error);
		client.destroy();
		process.exit(1);
	}
};

main();
