const http = require("http");
const { charsets } = require("mime");
const app = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    if (req.url === "/") {
        res.end("여기는 루트 입니다.");
    } else if (req.url === "/login") {
        res.end("여기는 로그인 화면입니다.");
    }
});

app.listen(3001, () => {
    console.log("htpp로 가동된 서버입니다.")
})