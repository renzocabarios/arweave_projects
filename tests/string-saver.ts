import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { StringSaver } from "../target/types/string_saver";
import { assert } from "chai";
const { SystemProgram } = anchor.web3

describe("string-saver", () => {
  const provider = anchor.AnchorProvider.local();
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.StringSaver as Program<StringSaver>;
  const temp = anchor.web3.Keypair.generate();

  it("Is initialized!", async () => {

    await program.rpc.initialize('hello', {
      accounts: {
        saver: temp.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId
      },
      signers: [temp]

    })
    const account = await program.account.stringSaver.fetch(temp.publicKey)
    assert.ok(account.text === "hello")
  });

  it("Has Update!", async () => {
    await program.rpc.update('test', {
      accounts: {
        saver: temp.publicKey
      },
    })
    const account = await program.account.stringSaver.fetch(temp.publicKey)
    assert.ok(account.text === "test")
  });
});
