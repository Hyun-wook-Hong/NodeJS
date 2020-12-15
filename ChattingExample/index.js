
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// form의 send버튼을 누르면 msg string이 생성된다.



app.get('/', function(req, res){
    // sendFile: 특정 파일을 웹으로 전송, 주로 파일시스템 내 html파일을 작성한다
    res.sendFile(__dirname + '/index.html');
});

// I/O기능 추가, 유저가 접속했습니다! 이벤트 콘솔에 출력
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });


http.listen(port, function(){
    console.log(`Server is running at localhost: ${port}`);
});

