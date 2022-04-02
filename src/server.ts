process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';

import App from '@/app';
import validateEnv from '@utils/validateEnv';
import UserRoute from '@routes/user.route';

validateEnv();

const app = new App([new UserRoute()]);

app.listen();
