import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 400,
  duration: '30s',
};
export default function () {
  http.get('https://www.google.com/'); // ganti link yang ingin ditest disini
  sleep(1);
}