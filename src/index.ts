import express, {request, Response } from 'express';
import cors from  'cors' ;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// meu site.com/produtos?nome=moto%g
// encoded - decoded

// GIT É UM VERSIONADOR DE CÓDIGO ( REPOSITÓRIO ONDE PODEMOS COLOCAR VERSÕES)
// GIT HUB É A PLATAFORMA

app.listen(8080, () => {
    console.log('API rodando...');
});

