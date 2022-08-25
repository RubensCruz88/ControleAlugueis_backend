import "./database/dataSource";
import 'reflect-metadata';
import './shared/container';

import express from 'express';
import { createConnection, dataSource } from './database/dataSource';
import { imovelRotas } from './routes/imovel.routes';
import { inquilinoRotas } from './routes/inquilino.routes';
import { contratoRotas } from './routes/contrato.routes';

const app = express();

app.use(express.json());

createConnection()
	.then(() => console.log("banco de dados rodando"))
	.catch((err) => console.log(err));

app.get("/",(request,response) =>{
	return response.json({message: "Hello World"});
});

app.use("/imovel", imovelRotas);
app.use("/inquilino",inquilinoRotas);
app.use("/contrato",contratoRotas);

app.listen(3333,() => console.log("aplicação rodando"));

