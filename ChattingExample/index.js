//index.js
//'use strict';

let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

// form의 send버튼을 누르면 msg string이 생성된다.



app.get('/', function(req, res){
    // sendFile: 특정 파일을 웹으로 전송, 주로 파일시스템 내 html파일을 작성한다
    res.sendFile(__dirname + '/index.html');
});

// I/O기능 추가, 유저가 접속했습니다! 이벤트 콘솔에 출력
io.on('connection', function(socket){
    console.log("A client has been connected!");

    // 메세지 전송 socket 이벤트

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });

    // 연결해제 이벤트
    socket.on('disconnect', function(){
        console.log("Client has been disconnected!");
    })
});

http.listen(3000, function(){
    console.log('Server is running at localhost: 3000');
});