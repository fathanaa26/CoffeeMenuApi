import { networkInterfaces } from "os";

const netInterface = networkInterfaces();
let ips = {}; // or Object.create()

const getExtIp = () => {
  for (const a of Object.keys(netInterface)) {
    // list network interface dari key objek netInterface
    for (const b of netInterface[a]) {
      // list isi dari setiap key netInterface
      const ipv4_obj = typeof b.family === "string" ? "IPv4" : 4; // untuk memfilter adress yang IPv4
      if (b.family === ipv4_obj && !b.internal) {
        // ipv4_obj nya = "IPv4" dan bukan internal ip
        ips.net = a;
        ips.address = b.address;
      }
    }
  }
  return ips;
};

export default getExtIp;
