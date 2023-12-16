'use strict'

function generaAsig(codLab) {
    let formatCorr = /^LAB\d#([A-Z])$/.test(codLab);
  
    if (formatCorr) {
      let letFila = codLab.charAt(codLab.length - 1);
      let sgteLetra = String.fromCharCode(letFila.charCodeAt(0) + 1);
  
      return sgteLetra;
    } else {
      return "Formato incorrecto. Por favor, ingresa un código válido.";
    }
}
  
  let entr = "LAB2#B";
  let result = generaAsig(entr);
  alert(result);