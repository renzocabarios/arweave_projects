import Arweave from "arweave";

// Needs funds to upload
(async () => {
  const arweave = Arweave.init({
    host: "arweave.net",
    port: 443,
    protocol: "https",
  });

  const jwk = await arweave.wallets.generate();

  const tx = await arweave.createTransaction(
    {
      data: "He",
    },
    jwk
  );

  await arweave.transactions.sign(tx, jwk);

  arweave.transactions.post(tx).then(console.log).catch(console.log);
  console.log(`https://arweave.net/${tx.id}`);
})();
