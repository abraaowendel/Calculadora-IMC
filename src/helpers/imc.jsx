export const levels = [
    {title: "Magreza", color:"#96A3AB", icon:"down", imc:[0, 18.5]},
    {title: "Peso ideal", color:"#0EAD69", icon:"up", imc:[18.6, 24.9]},
    {title: "Sobrepeso", color:"#E2B039", icon:"down", imc:[25.0, 30.0]},
    {title: "Obesidade", color:"#C3423F", icon:"down", imc:[30.1, Infinity]}
];

export const calculateImc = (height, weight) =>{
    const imc = (weight / (height * height)).toFixed(1);
    for (let i in levels) {
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
            let levelCopy = {...levels[i]}
            levelCopy.yourImc = imc;
            return levelCopy;
        }
    }
    return null
}