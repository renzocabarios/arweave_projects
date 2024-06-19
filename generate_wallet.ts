import Arweave from "arweave";

(async () => {
  const instance = Arweave.init({});

  const wallet = await instance.wallets.generate();

  console.log(wallet);
})();
