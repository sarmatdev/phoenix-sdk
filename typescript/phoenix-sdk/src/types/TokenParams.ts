/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
export type TokenParams = {
  decimals: number
  vaultBump: number
  mintKey: web3.PublicKey
  vaultKey: web3.PublicKey
}

/**
 * @category userTypes
 * @category generated
 */
export const tokenParamsBeet = new beet.BeetArgsStruct<TokenParams>(
  [
    ['decimals', beet.u32],
    ['vaultBump', beet.u32],
    ['mintKey', beetSolana.publicKey],
    ['vaultKey', beetSolana.publicKey],
  ],
  'TokenParams'
)