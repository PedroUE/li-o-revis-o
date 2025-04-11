//Declaração da energia dos Pokemóns

let EnergiaPikachu = 80;
let EnergiaCharmander = 80;

// Base do jogo

let round = 1;

//Base dos Ataques dos Pokemóns

let ChoqueDoTrovão = 0;
let ChamaArdente = 0;

//Enquanto estiverem vivos

while (EnergiaPikachu > 0 && EnergiaCharmander > 0){
     console.log("Round", round)


//Geração dos golpes

ChoqueDoTrovão = Math.floor(Math.random() * 25);
ChamaArdente = Math.floor(Math.random() * 22);

//Enquanto lutam 

EnergiaPikachu = EnergiaPikachu - ChamaArdente;
EnergiaCharmander = EnergiaCharmander - ChoqueDoTrovão;

//informações de batalha 

console.log("⚡pikachu deu", ChoqueDoTrovão, "de dano");
console.log("🔥 charmander deu", ChamaArdente, "de dano");

//Informações de vida e divisão de round

console.log("❤️Energia pikachu", EnergiaPikachu);
console.log("❤️Energia charmander", EnergiaCharmander);
console.log('-------------------------------------------');

// Proximo round
round++;
}
//resultados

if(EnergiaPikachu <= 0 && EnergiaCharmander <= 0){
    console.log("empate, os dois cairam!")
} else if( EnergiaCharmander > EnergiaPikachu){
    console.log("🏆charmander venceu com sua Chama Ardente🔥")
} else (EnergiaPikachu > EnergiaCharmander)
    console.log("🏆Pikachu venceu com seu Choque do Trovão⚡")

    
            
    
   