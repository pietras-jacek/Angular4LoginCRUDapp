import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';

import setRoutes from './routes';

const app = express();
dotenv.load({
  path: '.env'
});
app.set('port', (process.env.PORT || 8000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(morgan('dev'));

if (process.env.NODE_ENV === 'test') {
  mongoose.connnect(process.env.MONGODB_TEST_URI);
} else {
  mongoose.connect(process.env.MONGODB_URI);
}

const db = mongoose.connection;
(<any>mongoose).Promise = global.Promise;

db.on('error', console.error.bind(console, 'błąd połączenia: '));
db.once('open', () => {
  console.log('Połączono z MongoDB');

  setRoutes(app);
  
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
  if (!module.parent) {
    app.listen(app.get('port'), () => {
      console.log('Aplikacja działa na porcie ' + app.get('port'));
    });
  }
});

export { app };
