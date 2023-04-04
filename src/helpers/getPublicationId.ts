import { BigInt } from '@graphprotocol/graph-ts'

export function getNewPublicationId(profileId: BigInt, pubId: BigInt): string {
  return profileId
    .toString()
    .concat('-')
    .concat(pubId.toString())
}
