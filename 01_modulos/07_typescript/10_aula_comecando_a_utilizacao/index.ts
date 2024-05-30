import express, { Router, Request, Response } from 'express';
import { criarCadeira } from './functions/criarCadeiraFuncion';

const app = express();
const route = Router();
const port = 3434;

app.use(
    express.json()
);

route.put(
    '/cadeira',
    (req: Request, res: Response) => {
        const cadeira = criarCadeira(
            {
                dimensao: String(req.query.dimensao).split(','),
                estofado: req.query?.estofado === 'true',
                apoioBraco: req.query.apoioBraco === 'true',
            }
        );

        res.send(cadeira);
    }
);

app.use(route);

app.listen(port,
    () => {
        console.log(
            `Servidor executando na porta ${port}`
        );
    }
);