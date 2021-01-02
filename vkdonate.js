const fetch = require('node-fetch');

class VKDonate {
	constructor(options){
		this.key = options.key;
		this.groupID = options.groupID;
		this.uri = `https://vkdonate.ru/api`;
	}

	/*
		Берёт из конструктора параметр groupID
	*/
	async Link(){
		return `https://vk.com/app6471849_-${Number(this.groupID)}`;
	};

	/*
	Передаваемые параметры:
		1. count - кол-во показов (default : 10)
		2. sort - порядок сортировки донатов ( date - по дате, sum - по сумме доната)
		3. order - 
	*/

	async Donates(count = 10, sort = "date", order = "desc"){
		return new Promise(async (resolve, reject) => {
			await fetch(`${this.uri}?action=donates&key=${this.key}&count=${count}&sort=${sort}&order=${order}`)
			.then(res => res.json())
		    .then(s => {
		    	resolve(s)
			})
		})
	}
}

exports.VKDonate = VKDonate;