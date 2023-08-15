alert(`Bienvenido!! Calculemos el porcentaje de sus Victorias en combates`)
const TotaldeCombates = parseInt(prompt(`Cuantos combates disputaste?`));
let CombatesVictorias = 0;

for (let Num = 0; Num < TotaldeCombates; Num++) {
    const AfNeg = prompt(`Ganaste el combate numero` + Num + `?`);
    if (AfNeg === `si`) {
        CombatesVictorias++;
    }

}

function Calculo(TotaldeCombates, CombatesVictorias) {

    const Formula = CombatesVictorias * 100 / TotaldeCombates;
    return Formula;
};

const ResultadoFinal = Calculo(TotaldeCombates, CombatesVictorias);
alert(ResultadoFinal + `%`)