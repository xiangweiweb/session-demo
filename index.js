const Koa = require('koa');
const session = require('koa-session');
const colors = require('colors');

const app = new Koa();
app.keys = ['some secret hurr'];

app.use(
	session(
		{
			key: 'login-session',
			maxAge: 30 * 60 * 1000, // 30min
			// signed: false
		},
		app
	)
);

// set session
app.use(async (ctx, next) => {
	const url = ctx.request.url;
	console.log(colors.bgBlue('***** request url is ' + url + ' *****'));
	// 访问了登录接口
	if(url.indexOf('/login') === 0){
		if(ctx.session.user){
			ctx.body = 'has login';
			return;
		}
		const nick = ctx.query.nick;
		if(!nick || !['amyli', 'carrie', 'shalliexu'].includes(nick)){
			ctx.status = 430;
			ctx.body = 'nick is required';
			return;
		}
		ctx.session.user = {
			nick
		};
		ctx.body = 'successful login';
		return;
	}
	console.log(colors.bgBlue(JSON.stringify(ctx.session)));
	if(url.indexOf('/logout') === 0){
		if(!ctx.session.user){
			ctx.body = 'user not login';
			return;
		}
		ctx.session.user = null;
		ctx.body = 'logout successful';
		return;
	}
	// 访问其他接口
	if(ctx.session.user){
		ctx.body = ctx.session.user.nick + ' visit url ' + ctx.request.url;
		
	}else{
		ctx.status = 420;
		ctx.body = 'user is not logged in\nlogin url is /login?nick=xx';
	}
});

app.listen(3000, () => {
	console.log('app start');
});