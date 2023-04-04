import { BigInt } from '@graphprotocol/graph-ts'
import { Post, Comment } from '../../generated/schema'
import { getNewPublicationId } from '../helpers/getPublicationId'
import { ONE } from '../helpers/constants'

export function getOrCreatePost(profileId: BigInt, pubId: BigInt): Post {
  let publicationId = getNewPublicationId(profileId, pubId)
  let post = Post.load(publicationId)
  if (post == null) {
    post = new Post(publicationId)
  }
  return post as Post
}

export function getOrCreateComment(profileId: BigInt, pubId: BigInt): Comment {
  let publicationId = getNewPublicationId(profileId, pubId)
  let comment = Comment.load(publicationId)
  if (comment == null) {
    comment = new Comment(publicationId)
  }
  return comment as Comment
}
