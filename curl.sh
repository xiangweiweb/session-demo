#打印响应头信息
curl -i http://localhost:3000/api/test

#访问登录接口 将服务器设置的cookie写入文件中
curl -c cookies.txt -G -d 'nick=amyli' http://localhost:3000/login

curl -i -b 'login-session=eyJ1c2VyIjp7Im5pY2siOiJhbXlsaSJ9LCJfZXhwaXJlIjoxNjQ4NzMxMjQ3NDg4LCJfbWF4QWdlIjoxODAwMDAwfQ==' http://localhost:3000/api/test
curl -i -b 'login-session=eyJ1c2VyIjp7Im5pY2siOiJhbXlsaSJ9LCJfZXhwaXJlIjoxNjQ4NzMxMjQ3NDg4LCJfbWF4QWdlIjoxODAwMDAwfQ==;login-session.sig=UP261EpYrrJ5tbfNmov0ViN2vqk' http://localhost:3000/api/test