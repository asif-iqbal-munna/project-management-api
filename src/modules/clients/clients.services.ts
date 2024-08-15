import Client from "./clients.model";
import { IClient } from "./clients.types";

export const createClient = (client: IClient) => {
  return Client.create(client);
};

export const getClientById = (id: string) => {
  return Client.findById(id);
};

export const getAllClients = () => {
  return Client.find();
};

export const updateClientById = (id: string, client: IClient) => {
  return Client.findByIdAndUpdate(id, client, { new: true });
};
