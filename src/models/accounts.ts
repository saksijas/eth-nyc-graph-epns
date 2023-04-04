import { BigInt, Bytes } from '@graphprotocol/graph-ts'
import { Account } from '../../generated/schema'
import { ONE, ZERO } from '../helpers/constants'

export namespace accounts {
  export function getAccount(accountAddress: Bytes): Account {
    let accountId = accountAddress.toHexString()

    let account = Account.load(accountId)
    if (account == null) {
      account = new Account(accountId)
      account.address = accountAddress
      account.totalFollowings = ZERO
      account.following = new Array<string>()
      account.profilesIds = new Array<string>()
      account.save()
    }
    return account as Account
  }

  export function getListProfileOwned(account: Account, profileId: BigInt): Array<string> {
    let newListProfiles = account.profilesIds
    newListProfiles.push(profileId.toString())
    account.profilesIds = newListProfiles

    return newListProfiles
  }
}
