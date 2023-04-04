import { Mirror } from '../../generated/schema'
import { getNewPublicationId } from '../helpers/getPublicationId'
import { BigInt } from '@graphprotocol/graph-ts'
import { ONE } from '../helpers/constants'

export function getMirror(profileId: BigInt, pubId: BigInt): Mirror {
  let publicationId = getNewPublicationId(profileId, pubId)
  let mirror = Mirror.load(publicationId)
  if (mirror == null) {
    mirror = createMirror(publicationId)
  }
  return mirror as Mirror
}

export function createMirror(publicationId: string): Mirror {
  let mirror = new Mirror(publicationId)
  mirror.save()
  return mirror
}
