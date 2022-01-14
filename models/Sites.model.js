import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Sites {
	static get_sites () {
		let sites;
		try {
			sites = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/sites.json')));
		} catch (err) {
			console.log(err);
			fs.writeFileSync(path.join(__dirname, '../data/sites.json'), JSON.stringify([]));
			sites = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/sites.json')));
		}
		return sites;
	}

	static push_sites(site_obj) {
		const sites_arr = Sites.get_sites();

		if (sites_arr.length === 0) {
			sites_arr.push(site_obj);
		} else {
			let exist = false

			sites_arr.forEach(site => {
				console.log(site.title);
				if (site.title === site_obj.title) {
					exist = true;
				}
			});

			if (!exist) {
				sites_arr.push(site_obj);
			}
		}

		fs.writeFileSync(path.join(__dirname, '../data/sites.json'), JSON.stringify(sites_arr));
	}
}

export default Sites;