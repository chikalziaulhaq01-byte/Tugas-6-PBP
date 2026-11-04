const http = require('http');

const server = http.createServer((req, res) => {
    const data = {
        nama: 'Muhammad Chikal Ziaulhaq',
        kelas: 'TI25A',
        matkul: 'Pemrograman Berbasis Platform'
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
});

server.listen(8000, () => {
    console.log('Server Berjalan di http://localhost:8000');
});
