'use strict'

let ubicacionID = "https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link";
let inicio = ubicacionID.indexOf('1');
let final = ubicacionID.indexOf('/view');
alert(ubicacionID.slice(inicio,final));