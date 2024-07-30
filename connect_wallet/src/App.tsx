import { ConnectButton } from "arweave-wallet-kit";

function App() {
  return (
    <>
      <div className="sticky w-full bg-slate-900 p-4 flex items-center justify-between">
        <p className="text-2xl font-bold text-white">Arweave Connect Wallet </p>
        <ConnectButton profileModal={true} showBalance={true} />
      </div>
    </>
  );
}

export default App;
