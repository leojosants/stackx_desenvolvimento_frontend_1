export const vender = <T>(objeto: T, valor: number) => {
    console.log(
        `Produto sendo vendido por R$${valor}:`, objeto
    );
};