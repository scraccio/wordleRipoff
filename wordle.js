function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
prompt();
let min = Math.ceil(0);
let max = Math.floor(dictionary.length-1);
let randWord = dictionary[Math.floor(Math.random() * (max - min) + min)];
//console.log(randWord);

let i=0;
let j=0;
let curr;
let string = '';
document.addEventListener('keydown', logKey);
let element;
let finish = false;

function logKey(e) {
    curr = (j+1).toString() + (i+1).toString();
    if(e.code == 'Backspace'){
        if(i>0){
            i-=1;
        }
        curr = (j+1).toString() + (i+1).toString();
        element = document.getElementById(curr);
        element.textContent = '' ;
        string = string.slice(0, -1);
        //console.log(string);
        
    }
    if(e.code == 'Enter' && i==5 && j<=5 && (accepted.includes(string) || dictionary.includes(string))) {
        if(string == randWord){
            for(let i=0; i<5; i++){
                if(string[i] == randWord[i]){
                    let curr1 = (j+1).toString() + (i+1).toString();
                    //console.log(curr1);
                    elementX = document.getElementById(curr1);
                    elementX.style.backgroundColor = "green";
                }
            }
            element = document.getElementById("title");
            element.textContent = element.textContent.replace("WordleRipoff","GODO");
            console.log("GODO");
            finish=true;
        }
        else{
            if(j==5){
                element = document.getElementById("title");
                element.textContent = "The word was: " + randWord +  " :(";
            }
            for(let x=0; x<5; x++){
                for(let y=0; y<5; y++){
                    if(randWord[y] == string[x]){
                        let curr1 = (j+1).toString() + (x+1).toString();
                        //console.log(curr1);
                        elementX = document.getElementById(curr1);
                        if(x==y){
                            elementX.style.backgroundColor = "green";
                        }
                        else{
                            elementX.style.backgroundColor = "rgb(200,170,0)";
                        }
                        
                    }
                }
            }

            i=0;
            j+=1;
            string = '';
            //curr = (j+1).toString() + (i+1).toString();
            console.log(i);
        }
        if(j==6){
            element = document.getElementById("retry");
            element.textContent = "Press 'r' to retry";
            finish=true;
            console.log(e.code[e.code.length-1]);
        }

    }

    if(isLetter(e.code[e.code.length-1]) && e.code[0]=='K' && i<=4 && j<6){
        element = document.getElementById(curr);
        element.textContent = ` ${e.code[e.code.length-1]}`;
        i+=1;
        curr = (j+1).toString() + (i+1).toString();
        string += e.code[e.code.length-1].toLowerCase();
        //console.log(string);
    }
    //console.log(i);
    if(e.code == 'KeyR' && finish==true){
        for(let j=0; j<6; j++){
            for(let i=0; i<5; i++){
                let curr = (j+1).toString() + (i+1).toString();
                console.log((j+1).toString() + (i+1).toString());
                element = document.getElementById(curr);
                element.textContent = '';
                element.style.backgroundColor = "#292929";
            }
        }
        i=0;
        j=0;
        finish = false;
        element = document.getElementById("title");
        element.textContent = "WordleRipoff";
        element = document.getElementById("retry");
        element.textContent = "";
        min = Math.ceil(0);
        max = Math.floor(dictionary.length-1);
        randWord = dictionary[Math.floor(Math.random() * (max - min) + min)];
        string = '';
    }
}
