import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 100,
  duration: "30s"
};

var randomTicker = function() {
  var ticker = 'A';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 0; i < 4; i++) {
    ticker += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return ticker;
};
var ticker = randomTicker();

export default function() {
  let res = http.get(`http://localhost:6969/api/stocks/${ticker}`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
};