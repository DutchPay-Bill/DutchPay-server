import { Client, LocalAuth } from "whatsapp-web.js";

const initializeClient = () => {
  const client = new Client({ authStrategy: new LocalAuth() });
  return client;
};


const client = initializeClient();

const waConfig = {
  getClient: () => client,
  initializeClient: () => client.initialize(),
};

export default waConfig