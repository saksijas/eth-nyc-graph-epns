import { BigInt } from '@graphprotocol/graph-ts'
import { Profile } from '../../generated/schema'
import { ONE, ZERO } from '../helpers/constants'

export namespace profiles {
  export function getOrCreateProfile(profileNumber: BigInt, timeStamp: BigInt): Profile {
    let profileId = profileNumber.toString()

    let profile = Profile.load(profileId)
    if (profile == null) {
      // init profile
      profile = new Profile(profileId)
      profile.profileId = profileNumber
      profile.createdAt = timeStamp
      profile.totalComments = ZERO
      profile.totalPosts = ZERO
      profile.totalMirrors = ZERO
      profile.totalFollowers = ZERO
      profile.totalFollowings = ZERO
      profile.followers = new Array<string>()
      profile.followings = new Array<string>()
    }
    return profile as Profile
  }

  export function updateProfilesFollowings(
    accountProfiles: Array<string>,
    newFollowing: Array<string>,
    totalFollowings: BigInt,
  ): void {
    for (let i = 0; i < accountProfiles.length; ++i) {
      let profile = getOrCreateProfile(BigInt.fromString(accountProfiles[i]), BigInt.fromI32(0))
      profile.totalFollowings = totalFollowings
      profile.followings = newFollowing
      profile.save()
    }
  }
}
