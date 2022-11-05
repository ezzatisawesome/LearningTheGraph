import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  GravatarRegistry,
  NewGravatar,
  UpdatedGravatar,
} from "../generated/GravatarRegistry/GravatarRegistry"
import { Gravatar } from "../generated/schema"

export function handleNewGravatar(event: NewGravatar): void {
  let gravatar = new Gravatar(Bytes.fromHexString(event.params.id.toHex()))
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}

export function handleUpdatedGravatar(event: UpdatedGravatar): void {
  let id = Bytes.fromHexString(event.params.id.toHex())
  let gravatar = Gravatar.load(id)
  if (gravatar == null) {
    gravatar = new Gravatar(id)
  }
  gravatar.owner = event.params.owner
  gravatar.displayName = event.params.displayName
  gravatar.imageUrl = event.params.imageUrl
  gravatar.save()
}