import { Follow } from '../../generated/schema'
export namespace follows {
  export function getFollow(accountAddress: string): Follow {
    let follow = Follow.load(accountAddress)
    if (follow == null) {
      follow = new Follow(accountAddress)
      follow.save()
    }
    return follow as Follow
  }
}
