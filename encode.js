function encode(body) {
    body = JSON.stringify(body);
    return Buffer.from(body).toString('base64');
}

const maxAge = 10 * 60 * 1000;
const mockData = {
	user: {
		nick: 'test'
	},
	_expire: Date.now() + maxAge,
	_maxAge: maxAge
}
console.log(encode(mockData));