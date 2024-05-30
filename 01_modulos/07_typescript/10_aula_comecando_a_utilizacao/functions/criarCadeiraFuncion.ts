import { CadeiraClass } from '../classes/CadeiraClass';

export const criarCadeira = (params: { dimensao: string[], estofado: boolean, apoioBraco: boolean }): CadeiraClass => {
    const criarCadeira = {
        dimensao: params.dimensao.map(
            (a) => Number(a)
        ),
        estofado: params.estofado,
        apoioBraco: params.apoioBraco,
    }

    const novaCadeira = new CadeiraClass(
        criarCadeira.dimensao,
        criarCadeira.estofado,
        criarCadeira.apoioBraco,
    );

    return novaCadeira;
}