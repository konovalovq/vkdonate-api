```js
const { VKDonate } = require('vkdonate-api');
const api = new VKDonate({ key: "", groupID: 1 })

/*
	
	Как получить "Key" ? -> Заходим в приложение https://vk.com/app6471849_-ID вашей группы -> Настройки -> Прочие : и там снизу ключ апи (надо сгенерировать)
	
	groupID -> ID вашей группы.
*/

function getLink(){
	const link = await api.Link();

	console.log(link); // Выведит ссылку на приложение (в Вашем сообществе)
}

getLink();


function getDonates(){
	const donates = await api.Donates();

	console.log(donates); // Вывод { count: 0, donates: [] /* Если нету донатов */, success: true }
}

getDonates();

```