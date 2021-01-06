let low=1;
let high=10;
let count=0;
for( let i=0;i<3;i++){
    let guess=parseInt(prompt(`Enter a number between ${low} to ${high}`));
    let random= getRandom();
    if (guess === random){
        alert("You Win!");
        count+=1;
        break;
    }
    else if(guess<random){
        alert("Correct answer is greater!")
        ;
    }
    else if(guess>random){
        alert("Correct answer is smaller");
    }
    

}
if(count===0){
    alert("You lose!");
}

function getRandom(){
    let rand=Math.floor((Math.random()*10)+1);
    console.log(rand);
    return rand
}

