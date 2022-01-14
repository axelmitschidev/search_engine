import Sites from '../models/Sites.model.js';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import Util from '../utils/Util.js';

const get_indexing_page = (req, res) => {
	const arr_sites = Sites.get_sites();

	try {
		res.render('indexing.html.twig', { arr_sites });
	} catch (err) {
		console.log(err);
	}
}

export { get_indexing_page }

const post_new_site = async (req, res) => {
	const url = req.body.url;
	if (url !== '') {
		const body = await fetch(url);
		const text_html = await body.text();

		const $ = cheerio.load(text_html);
		const text = $('body').text();
		const title = $('title').text();

		const arr = text.split(/[ ',.?!/\t\n-:·–—«»@$€=;]/g);

		let clean_arr = [];

		arr.forEach( word => {
			if (word != '' && word.length > 3 && word.length < 20) { 
				clean_arr.push(word.toLowerCase());
			}
		});

		const site_obj = {
			url: url,
			title: title,
			words: Util.count_words(clean_arr)
		};

		Sites.push_sites(site_obj);

		res.redirect('/');
	} else {
		res.redirect('/');
	}
}

export { post_new_site }