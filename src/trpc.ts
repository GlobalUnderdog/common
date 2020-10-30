import { RpcRet } from '@tianhuil/simple-trpc/dist/type'
import { CollectContactStatus, Contact } from './contact'

export interface IContactCollectionRpc {
  addContact(contact: Contact): Promise<RpcRet<CollectContactStatus>>
}
