let angka1;
let angka2;
let mtk;
let hasil;


document.getElementById("mySubmit").onclick = function(){
    angka1 = document.getElementById("angkaAwal").value;
    angka2 = document.getElementById("angkaKedua").value;
    mtk = document.getElementById("mtk").value;

    if(mtk == "+"){
        hasil = Number(angka1) + Number(angka2)
    }else if(mtk == "-"){
        hasil = angka1 - angka2
    }else if(mtk == "*"){
        hasil = angka1 * angka2
    }else if(mtk == "/"){
        hasil = angka1 / angka2
    }else{
        hasil = "Error Ulangi lagi"
    }

    document.getElementById("hasil").innerHTML = `Hasil adalah =
    ${hasil}`
}

let tinggi;
let idealBB;

document.getElementById("mySubmit2").onclick = function(){
    tinggi = document.getElementById("tinggiBadan").value;
    idealBB = Number(tinggi) - 100

    document.getElementById("ideal").innerHTML = idealBB;
}


let tinggi2;
let beratBadan2;
let ideal;
let kondisi;

document.getElementById("mySubmit3").onclick = function(){
    tinggi2 = document.getElementById("tinggiBadan2").value;
    beratBadan2 = document.getElementById("beratBadan2").value;

    ideal = Number(tinggi2) - 100;

    if(beratBadan2 > ideal){
        kondisi = `lebih sedikit berat badan mu ${beratBadan2}, semangat 💪, ideal ${ideal}`
    } else if(ideal > beratBadan2){
        kondisi = `Makan Lebih banyak ya! 😁, berat badan mu ${beratBadan2}, idealnya ${ideal}`
    }

    document.getElementById("ideal2").innerHTML = kondisi;
}


const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const labelCounts = document.getElementById("labelCount");
let count = 0

increaseBtn.onclick = function(){
    count++
    labelCounts.textContent = count;
}

resetBtn.onclick = function(){
    let count = 0
    labelCounts.textContent = count;
}

decreaseBtn.onclick = function(){
    count--
    labelCounts.textContent = count;
}

let angka;
let randomNum;
let answerKamu;
document.getElementById("mySubmit4").onclick = function(){
    angka = document.getElementById("angkaKamu").value;
    randomNum = Math.floor(Math.random() * 10) + 1;

    if(angka==randomNum){
        answerKamu = "Jawaban kamu benar"
    }else{
        answerKamu = "Jawaban kamu salah"
    }

    document.getElementById("answer").textContent = `angka yang benar : ${randomNum}`;
    document.getElementById("answerKamu").textContent = answerKamu;
}