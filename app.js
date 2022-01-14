import express from 'express';
import routing from './routes/index.js';

const app = express();

app.set('views', './views');
app.set('view engine', 'twig');

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use(express.static('./public'));

app.use(routing);

app.listen(8080, () => {
	console.log('Listen on: http://localhost:8080');
});