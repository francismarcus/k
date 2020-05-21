import * as dotenv from 'dotenv';

dotenv.config();

let path;
switch (process.env.NODE_ENV) {
	case 'production':
		path = `${__dirname}/../.env.production`;
		break;
	default:
		path = `${__dirname}/../.env.development`;
}
dotenv.config({ path: path });

export const PORT = process.env.PORT;
export const MONGO_ATLAS_URI = process.env.MONGO_ATLAS_URI;
