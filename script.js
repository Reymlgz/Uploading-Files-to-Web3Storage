import { Web3Storage, getFilesFromPath } from 'web3.storage';

//Change the API_TOKEN 
const client = new Web3Storage({ token: "API_TOKEN" })
const files = await getFilesFromPath('./files');
const cid = await client.put(files, { wrapWithDirectory: false });