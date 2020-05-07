import { Request, Response } from 'express';
import { witClient } from './wit_client';

interface HelloResponse {
  hello: string;
}

type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = name => ({ hello: name });

export const rootHandler = (_req: Request, res: Response) => {
  return res.send('API is working 🤓');
};

export const helloHandler = (req: Request, res: Response) => {
  const { params } = req;
  const { name } = params;
  const response = helloBuilder(name);

  return res.json(response);
};

export const witHandler = async (req: Request, res: Response) => {
  const { body } = req;
  console.log(body.message);
  const response = await witClient.message(body.message, {});
  console.log(response);
  return res.json(response)
};
