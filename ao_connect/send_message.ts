import { readFileSync } from "node:fs";

import { message, createDataItemSigner } from "@permaweb/aoconnect";
import { result } from "@permaweb/aoconnect";
(async () => {
  const wallet = JSON.parse(readFileSync("./wallet.json").toString());
  const Morpheus = "ajrGnUq9x9-K1TY1MSiKwNWhNTbq7-IdtFa33T59b7s";
  // The only 2 mandatory parameters here are process and signer
  const tx = await message({
    process: Morpheus,
    tags: [{ name: "Data", value: "Morpheus?" }],
    signer: createDataItemSigner(wallet),
  });

  console.log("TX ID", tx);

  let { Messages, Spawns, Output, Error } = await result({
    // the arweave TXID of the message
    message: tx,
    // the arweave TXID of the process
    process: Morpheus,
  });

  console.log({ Messages, Spawns, Output, Error });
})();
