// it is use for user and game sequence.if seq is same then level up otherwise gameover.
let gameSeq=[];
let UserSeq=[];
let btns=["Bianca","scini","blue","pink"];
//if game is not started
let Started=false;
let level=0;
let h2=document.querySelector("h2");
//document ke upar eventListener ka use isliye karege because we want jaise hi keypress ho event start ho jaye.
// firrs step is compeleted kreypress+level started.
document.addEventListener("keypress",function(){
    if(Started==false){
    console.log("game started");
    Started=true;
    
    levelUP();
    }
});
// 2nd step
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUP(){
    UserSeq=[];
    level++;
    h2.innerText=`Level ${level}`
    //random button choose
    let randomIdx=Math.floor(Math.random()*3);
    let randColor=btns[randomIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randomIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}
// game and user sequence check
function checkAns(idx){
    // console.log("curr level :",level);
    //  indx=level-1;
    if(UserSeq[idx]===gameSeq[idx]){

        if(UserSeq.length==gameSeq.length){
            setTimeout(levelUP,1000);
        }
    }else{
         h2.innerHTML=`Game Over! your socre was <b>${level}</b> <br> Press any key to start.`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeOut(function(){
            document.querySelector("body").style.backgroundColor="white";},150);
        reset();
    }
}
function reset(){
    Started=false
    gameSeq=[];
    UserSeq=[];
    level=0;
}
function btnPress(){
    let btn=this;//btn
    userFlash(btn);

    userColor=btn.getAttribute("id");
    UserSeq.push(userColor);
    
    checkAns(UserSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}