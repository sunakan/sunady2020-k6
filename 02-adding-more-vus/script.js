import http from "k6/http";
import { sleep } from "k6";

export default function() {
  http.get("http://demo-site:8080/hello");
  sleep(1);
};
