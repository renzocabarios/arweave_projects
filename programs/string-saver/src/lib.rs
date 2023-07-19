use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;

declare_id!("B5siGtoGsZmrTdBkeja6tv4YG8mHpPQmsNXp2FhYWkJT");

#[program]
pub mod string_saver {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>, _text: String) -> ProgramResult {
        let stringsaver = &mut _ctx.accounts.saver;
        stringsaver.text = _text;
        Ok(())
    }

    pub fn update(_ctx: Context<Update>, _text: String) -> ProgramResult {
        let stringsaver = &mut _ctx.accounts.saver;
        stringsaver.text = _text;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init,payer=user,space=9000)]
    pub saver: Account<'info, StringSaver>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Update<'info> {
    #[account(mut)]
    pub saver: Account<'info, StringSaver>,
}

#[account]
pub struct StringSaver {
    pub text: String,
}
