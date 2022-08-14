import express from 'express';
import { imovelRotas } from './routes/imovel.routes';
import { inquilinoRotas } from './routes/inquilino.routes';
import { contratoRotas } from './routes/contrato.routes';

const app = express();

app.use(express.json());

app.get("/",(request,response) =>{
	return response.json({message: "Hello World"});
});

app.use("/imovel", imovelRotas);
app.use("/inquilino",inquilinoRotas);
app.use("/contrato",contratoRotas);

app.listen(3333);

