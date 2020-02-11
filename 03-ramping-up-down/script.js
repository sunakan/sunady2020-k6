import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
 stages: [
    { duration: "2s", target: 10 },
    { duration: "2s", target: 0 },
    { duration: "2s", target: 0 },
  ]
};

export default function() {
  let res = http.get("http://demo-site:8080/hello");
  check(res, {
    "status was 200": (r) => r.status == 200
  });
  sleep(1);
}
