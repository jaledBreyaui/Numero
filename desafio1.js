"use strict";

let numero = Math.floor(Math.random() * 30 + 1);
let vidas = 10;
let highScore = localStorage.getItem("highScore");
document.querySelector(".puntajeAlto").textContent = highScore;

console.log(numero);


document.querySelector('#btn-1').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector("#uno").value);
        console.log(guess, typeof guess);

        if (!guess || guess > 30 || guess < 0) {
            document.querySelector(".pista").textContent = "Ingresá un numero válido";
        }
        else if (numero === guess) {
            document.querySelector(".pista").textContent = "Acertaste! 🎯";
            document.querySelector("#numeroMisterioso").textContent = numero;
            document.querySelector(".encabezado").style.backgroundColor = "green";
            document.querySelector(".titulo").textContent = " 🎉 Adivinaste! 🎉 ";

            if (vidas > highScore) {
                highScore = vidas;
                localStorage.setItem("highScore", highScore);
                document.querySelector(".puntajeAlto").textContent = highScore;

            }


        } else if (numero > guess) {
            document.querySelector(".pista").textContent = "Muy bajo 🙄";
            vidas--;
            document.querySelector(".vidas").textContent = vidas;
        } else if (numero < guess) {
            document.querySelector(".pista").textContent = "Muy alto 🥶";
            vidas--;
            document.querySelector(".vidas").textContent = vidas;
        }


        if (vidas === 0) {
            document.querySelector(".encabezado").style.backgroundColor = "red";
            document.querySelector(".titulo").textContent = " 📉  Perdiste! 📉 ";
            document.querySelector("#numeroMisterioso").textContent = numero;
            document.querySelector(".pista").textContent = "Toca F5 para jugar de nuevo!";
            document.querySelector("#btn-1").classList.add("hidden");
        }
    });


// document.querySelector(".puntajeAlto").textContent = localStorage.getItem("highScore");

