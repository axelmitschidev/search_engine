import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const delete_all_data = (req, res) => {
	fs.writeFileSync(path.join(__dirname, '../data/sites.json'), JSON.stringify([]));
	res.redirect('/');
}

export { delete_all_data }