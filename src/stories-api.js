const _stories = [
	{
		id: '84b496feea04306e1bf8ec5ff8e72a60',
		imageUrl: 'https://i.imgur.com/XgJFuRN.jpg',
		text: '1. Top Things To Do In Ooty',
		duration: 3000,
		weight: 1,
	},
	{
		id: '1cc6936b3c62dfbf138dec9a231d178b',
		imageUrl: 'https://i.imgur.com/Uvo0Rz1.jpg',
		text: '2. Surrounded by the Nilgiris and stunning lakes and forests, the resort town of Ooty in Tamil Nadu is a popular getaway in South India',
		duration: 4000,
		weight: 2,
	},
	{
		id: '4705c2d04b9ea2a5ce13ef95f529f9f5',
		imageUrl: 'https://i.imgur.com/Z7pPmw3.jpg',
		text: '3. A fun way to explore this hill station is to hop on a toy train that will take you across the countryside',
		duration: 5000,
		weight: 3,
	},
	{
		id: '727f86e4427f39efcd58ee8e08db05ee',
		imageUrl: 'https://i.imgur.com/fHQjxkO.jpg',
		text: '4. Once a British Raj summer resort, you can still find Colonial influences in Ooty\'s many historical buildings such as St. Stephen\'s Church',
		duration: 3000,
		weight: 1,
	},
	{
		id: '2228d31bf9cf093b8bdd1af6a31abe40',
		imageUrl: 'https://i.imgur.com/yK81VNq.jpg',
		text: '5. Ooty Lake is a must-visit to enjoy a peaceful boat ride. A major tourist attraction, this artificial lake was constructed in 1824',
		duration: 4000,
		weight: 2,
	},
	{
		id: '2709468982b65ccefca7f8c9b93386fa',
		imageUrl: 'https://i.imgur.com/eyjQqfO.jpg',
		text: '6. To surround yourself with beauty, head to Ooty\'s Rose Garden in Vijayanagaram, which is the largest rose garden in India',
		duration: 5000,
		weight: 3,
	},
	{
		id: '7eb2f186e81e3a62f79073922c8f92e5',
		imageUrl: 'https://i.imgur.com/JmDbu3a.jpg',
		text: '7. If Rose Garden is not enough, then explore the Botanical Garden that houses a wide range of exotic and indigenous plants, shrubs, trees',
		duration: 3000,
		weight: 1,
	},
	{
		id: '8ba13af5525e1f087cb98fe47fe0bcc8',
		imageUrl: 'https://i.imgur.com/WAR0oOy.jpg',
		text: '8. About 28km away from Ooty town is the stunning Avalanche Lake. Trek around to explore the region and enjoy a picnic by the lake',
		duration: 4000,
		weight: 2,
	},
	{
		id: '4b64ead14354d4d21e8793cc7e6941d0',
		imageUrl: 'https://i.imgur.com/lAZQ7JW.jpg',
		text: '9. While there are many treats to indulge in, you cannot miss picking a range of delicious hand-made Ooty chocolates',
		duration: 4000,
		weight: 3,
	},
	{
		id: '2f24a80a2110029153151fadbb54f585',
		imageUrl: 'https://i.imgur.com/E8OBfBA.jpg',
		text: '10. Delhi is home to some of the finest monuments with Islamic architecture like Humayun\'s Tomb and Qutub Minar',
		duration: 3000,
		weight: 1,
	},
	{
		id: 'd139d287966901328fd0e2eec348996b',
		imageUrl: 'https://i.imgur.com/wsBg4T9.jpg',
		text: '11. Delhi is famous for its street food culture with lip smacking delicacies like aloo tikkis, papdi chaat and many more ',
		duration: 3000,
		weight: 2,
	},
	{
		id: '1217eb1e172df4fefbedd29581696287',
		imageUrl: 'https://i.imgur.com/9gen3pL.jpg',
		text: '12. Connaught Place is truly the heart of Delhi that still carries old-school charm with famous shops and restaurants around ',
		duration: 4000,
		weight: 3,
	},
	{
		id: '116be6e8523f60ed7c51e56e846df10e',
		imageUrl: 'https://i.imgur.com/vSFWZ4k.jpg',
		text: '13. Delhi is the perfect example of an urban jungle with a buzzing nightlife that will enthrall you with some foot-tapping music ',
		duration: 5000,
		weight: 1,
	},
	{
		id: '9caaee5aaaff6a014b9c9e8116a15d85',
		imageUrl: 'https://i.imgur.com/s5xDvCJ.jpg',
		text: '14. The city houses a mix of many sacred spots like the famous Bangla Sahib Gurudwara and Jama Masjid that are worth a visit ',
		duration: 3000,
		weight: 2,
	},
	{
		id: '5bdfce6d231b54499dfced7846de3855',
		imageUrl: 'https://i.imgur.com/zG9lImF.jpg',
		text: '15. In the midst of a concrete jungle, Delhi is blessed with green hotspots like Lodi Gardens and The Garden Of Five Senses for a nature stroll ',
		duration: 5000,
		weight: 3,
	},
];

function _api_delay(min = 1, max = 5) {
	const ms = (min + Math.random() * (max - min)) * 1000;
	return new Promise(resolve => setTimeout(resolve, ms));
}

function _api_log(logName, data) {
	if(data) {
		console.log(`[API-CALL] ${ logName }`, data);
	} else {
		console.log(`[API-CALL] ${ logName }`);
	}
}

export function getStoriesMeta() {
	_api_log('getStoriesMeta');
	return {
		length: _stories.length,
		idList: _stories.map(story => story.id),
		weightList: _stories.map(story => story.weight),
	};
}

export function getStories() {
	_api_log('getStories');
	return _stories;
}

export async function ajaxGetStories() {
	_api_log('ajaxGetStories');
	await _api_delay();
	return _stories;
}

export async function ajaxGetStoryById(id) {
	_api_log('ajaxGetStoryById', { id });
	await _api_delay();
	return _stories.find(story => story.id === id);
}

export async function ajaxGetStoryByIdUnstable(id) {
	_api_log('ajaxGetStoryByIdUnstable', { id });
	await _api_delay(1, 2);
	if(Math.random() < 0.5) {
		return false;
	}
	return _stories.find(story => story.id === id);
}
