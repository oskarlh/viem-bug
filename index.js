import { createPublicClient, webSocket } from "viem";
import { chiliz } from "viem/chains";

try {
  const client = createPublicClient({
    chain: chiliz,
    transport: webSocket("wss://rpc-ws.chiliz.com/"),
  });

  client.watchBlocks({
    emitOnBegin: true, // Remove this and everything fails cleanly
    onBlock: () => {
      // This never gets logged if you run the script without an Internet connection
      // (as expected)
      console.log("onBlock");
    },
    onError: (error) => {
      // This never gets logged if you run the script without an Internet connection
      console.log("onError %o", error);
    },
  });
} catch (e) {
  // This never gets logged if you run the script without an Internet connection
  console.log("Caught an error %o", e);
}

let seconds = 0;
setInterval(() => {
  // This SHOULD keep going forever, but without an Internet connection,
  // it stops within a minute
  console.log(++seconds + " seconds have passed.");
}, 1_000);
