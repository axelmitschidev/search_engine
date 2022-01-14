import Sites from "../models/Sites.model.js";

const get_search_page = (req, res) => {
	try {
		res.render('search.html.twig');
	} catch (err) {
		console.log(err);
	}
}

export { get_search_page }

const search_word = (req, res) => {
	const word = req.body.word.toLowerCase();
	if (word !== '') {
		let sites_arr = Sites.get_sites();
		let sort_sites_arr = [];

		sites_arr.forEach(site => {
			let site_url = site.url;
			let word_count = 0;
			site.words.forEach(site_word => {
				if (site_word.word === word) {
					word_count = site_word.count;
				}
			})

			sort_sites_arr.push({site_url, word_count});
		});

		res.render('search.html.twig', { word: word, arr: sort_sites_arr.sort((a, b) => { return b.word_count - a.word_count; })});
	} else {
		res.redirect('/search');
	}
}

export { search_word }