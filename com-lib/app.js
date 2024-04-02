import http from "http";
import { TOTP } from 'otpauth'
import { toDataURL } from 'qrcode'

const hostname = "0.0.0.0";
const port = 5000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;

  res.setHeader("Content-Type", "text/plain");

  const totp = new TOTP();
  const url = totp.toString();
  const qrCode = await toDataURL(url);
  
  console.log(`[+] qrcode generate\n` + qrCode)

  res.end(url);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
