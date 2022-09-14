import "./database/dataSource";
import 'reflect-metadata';
import './shared/container';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { createConnection, dataSource } from './database/dataSource';
import { AppError } from './errors/AppError';

import { imovelRotas } from './routes/imovel.routes';
import { inquilinoRotas } from './routes/inquilino.routes';
import { contratoRotas } from './routes/contrato.routes';
import { usuarioRotas } from './routes/usuario.routes';
import { autenticaRotas } from './routes/autentica.routes';
import { lancamentoRotas } from './routes/lancamento.routes';

const app = express();

app.use(express.json());

createConnection()
	.then(() => console.log("banco de dados rodando"))
	.catch((err) => console.log(err));

app.get("/",(request,response) =>{
	return response.json({message: "Hello World"});
});

app.use("/usuario",usuarioRotas);

app.use(autenticaRotas);
app.use("/imovel", imovelRotas);
app.use("/inquilino",inquilinoRotas);
app.use("/contrato",contratoRotas);
app.use("/lancamento",lancamentoRotas);

//aplica tratativa de erro como um midware para ser utilizado na aplicação inteira 
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	if(err instanceof AppError){
		return response.status(err.status).json({message: err.message});
	}

	return response.status(500).json({
		status: "error",
		message: `Internal server error - ${err.message}`
	})
})

app.listen(3333,() => console.log("aplicação rodando"));

