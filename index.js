const Koa = require('koa');
const session = require('koa-session');

const app = new Koa();

app.use(
	session(
		{
			key: 'test-session',
			maxAge: 5 * 60 * 1000, // 5min
		},
		app
	)
);

// set session
app.use(async (ctx, next) => {
	console.log('request url is ' + ctx.request.url);
	// let n = ctx.session.views || 0;
	// ctx.session.views = ++n;
	let n = 10;
	console.log(ctx.session.views);
	ctx.session.views = n;
	ctx.body = n + ' views';
});

app.listen(3000, () => {
	console.log('app start');
});