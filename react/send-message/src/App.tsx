import { ConnectButton, useApi } from "arweave-wallet-kit";
import { message, createDataItemSigner, results } from "@permaweb/aoconnect";
import React, { useState } from "react";

const Morpheus = "ajrGnUq9x9-K1TY1MSiKwNWhNTbq7-IdtFa33T59b7s";

function App() {
  const api = useApi();

  const [proccess, setproccess] = useState(Morpheus);

  const onCreateTransaction = async () => {
    if (api) {
      const transaction = await message({
        process: proccess,
        tags: [],
        signer: createDataItemSigner(window.arweaveWallet),
        data: "Morpheus?",
      });

      console.log(transaction);

      setproccess(transaction);
    }
  };

  const onRead = async () => {
    let { pageInfo, edges } = await results({
      process: Morpheus,
      sort: "ASC",
      limit: 25,
    });
    console.log({ pageInfo, edges });
  };

  return (
    <>
      <div className="sticky w-full bg-slate-900 p-4 flex items-center justify-between">
        <p className="text-2xl font-bold text-white">Arweave Scaffold</p>
        <ConnectButton profileModal={true} showBalance={true} />
      </div>

      <button onClick={onCreateTransaction}>Send Now</button>
      <button onClick={onRead}>Read Now</button>
    </>
  );
}

export default App;
