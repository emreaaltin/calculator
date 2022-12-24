// GENEL DEĞİŞKENLER
var durum=false, opt="",sonuc=0;

// NESNELERİN OLUŞTURULMASI
let rakam = document.querySelectorAll(".rakam");
let islem = document.querySelector("#islem");
var opr = document.querySelectorAll(".opr");
let gosterge = document.querySelector("#gosterge");
let btnCE = document.querySelector(".btnCE");
let btnC = document.querySelector(".btnC");
let nokta = document.querySelector(".nokta");
let esit = document.querySelector(".esit");

rakam.forEach(function(element){
    
    // forEach ile tüm elemanları gezmesini sağlıyoruz.
    
    // element ile de hangisi seçildiyse ona işlem yapmasını sağlıyoruz.
    
    element.onclick=function(){
        
        // BAŞTAKİ SIFIRI KALDIRMAK  İÇİN
        if(islem.textContent==0 || durum){
            islem.textContent=""
        }
        islem.textContent+=this.textContent
        durum=false;
    }
})
opr.forEach(function(element){
    element.onclick=function(){
        durum=true; //durum haatalı mı , basılıp basılmadığını kontrol eder.
        var opr=this.textContent;
        gosterge.textContent=gosterge.textContent+""+islem.textContent+""+opr;
        // switch case ile işlemler bir defa döner ve bizim istediğimiz kısıma döndürür.
        // switch(opt) hafızaya alınan işlem
        switch(opt){
            case"+":islem.textContent = (sonuc + Number(islem.textContent));break;
            case"-": islem.textContent = (sonuc - Number(islem.textContent));break;
            case"/": islem.textContent = (sonuc / Number(islem.textContent));break;
            case"x": islem.textContent = (sonuc * Number(islem.textContent));break;
        }
        sonuc=Number(islem.textContent);
        opt=opr;
    }
})
btnC.onclick=function(){
    islem.textContent="0"
}
btnCE.onclick=function(){
    islem.textContent="0";
    gosterge.textContent="";
    sonuc="0";
    opt="";
}
esit.onclick=function(){
    gosterge.textContent="";    
    durum=true;
    switch(opt){
        case"+":islem.textContent = (sonuc + Number(islem.textContent));break;
        case"-": islem.textContent = (sonuc - Number(islem.textContent));break;
        case"/": islem.textContent = (sonuc / Number(islem.textContent));break;
        case"x": islem.textContent = (sonuc * Number(islem.textContent));break;
        default:break;
    }
    sonuc=Number(islem.textContent);
    islem.textContent=sonuc;
    sonuc="0"
    opt=""
}
nokta.onclick=function(){
    if(!durum && !islem.textContent.includes(".")){
        islem.textContent+=".";
    }        //içeriyorsa
    else if(durum){
        islem.textContent+="0";
        // durum hatalıysa 0 yap.
    }
    else if(!islem.textContent(".")){
        islem.textContent+=".";
    }
    durum=false
}