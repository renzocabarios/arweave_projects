import Arweave from "arweave";
import Irys from "@irys/sdk";

(async () => {
  const instance = Arweave.init({});

  const jwk = await instance.wallets.generate();
  const url = "https://node2.irys.xyz";
  const token = "arweave";

  const irys = new Irys({
    url, // URL of the node you want to connect to
    token, // Token used for payment and signing
    key: jwk,
  });

  const dataToUpload = "GM world.";

  try {
    const receipt = await irys.upload(dataToUpload);
    console.log(`Data uploaded ==> https://arweave.net/${receipt.id}`);
  } catch (e) {
    console.log("Error uploading data ", e);
  }
})();
