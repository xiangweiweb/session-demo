const str = 'qXj_ovP0vnYm1t227GArO_nY7lRUxhs8OaG4gbR51UkiQOmLhL7paluS3aa1IuwHuyfzqmO_9CMdpzSFbFhNFGG9sCgiVTVcRekdgaah9vDkxUBVGPZedNrLe5A8yVeeNCALp66rOLde66SUizqCDjfeh9px6KElP';

function decode(str){
	const body = Buffer.from(str, 'base64').toString('utf8');
	console.log(body);
    const json = JSON.parse(body);
    return json;
}

console.log(decode(str));


