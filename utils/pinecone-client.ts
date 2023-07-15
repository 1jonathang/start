import { PineconeClient } from '@pinecone-database/pinecone';

const Enviornment = process.env.PINECONE_ENVIRONMENT;
const Api = process.env.PINECONE_API_KEY;

if (!Api || Api.length === 0) 
  throw new Error("Missing PINECONE_API_KEY");
if (!Enviornment || Enviornment.length === 0)
  throw new Error("Missing PINECONE_ENVIRONMENT");

async function initPinecone() {
  try {
    const pinecone = new PineconeClient();

    await pinecone.init({
      environment: process.env.PINECONE_ENVIRONMENT ?? '', //this is in the dashboard
      apiKey: process.env.PINECONE_API_KEY ?? '',
    });

    return pinecone;
  } catch (error) {
    console.log('error', error);
    throw new Error('Failed to initialize Pinecone Client');
  }
}

let pinecone: PineconeClient | undefined;

(async () => {
  pinecone = await initPinecone();
})();

export { pinecone };
