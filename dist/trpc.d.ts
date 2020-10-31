import { RpcRet } from '@tianhuil/simple-trpc/dist/type';
import { CollectContactStatus, Contact } from './contact';
import { Message } from './message';
export interface IContactCollectionRpc {
    addContact(contact: Contact): Promise<RpcRet<CollectContactStatus>>;
    sendMessage(message: Message): Promise<RpcRet<void>>;
}
