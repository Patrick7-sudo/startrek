const mainComponent = document.getElementById("mainContainer");
const hello = document.getElementById("stars");
const starsBlinking = document.getElementsByClassName("starsCreated");

console.log(starsBlinking)

mainComponent.style.backgroundColor = "black";
mainComponent.style.height= `${window.innerHeight}px`;
mainComponent.style.width = `${window.innerWidth}px`;
hello.style.height = `${window.innerHeight}px`;
hello.style.width = `${window.innerWidth}px`;

// starsContainer.style.backgroundColor = "red";
const arryNum = [];
const randomNums = [];
const cleanNums = [];

const nums = 500;

function createStars() {
  const num = nums;

  //put all the number in an array
  for (let i = 0; i < num; i++) {
    arryNum.push(i);
  }

  for (let i = 0; i < num; i++) {
    const star = document.createElement("div");
    star.className = "starsCreated";
    star.setAttribute("id", i);
    //    star.innerHTML = ;

    document.getElementById("stars").appendChild(star);
  }
}

createStars();

function stars(){
    const num =nums;
    
    
    //math random to select the number and put it an array
    for (let i = 0; i < 20; i++) {
        const random = Math.floor(Math.random() * arryNum.length)
    
        randomNums.push(random);
     
    }

    
    for (let i=0; i<randomNums.length;i++){
        if(cleanNums.indexOf(randomNums[i]) === -1){
            cleanNums.push(randomNums[i])
        }
    }

    function blinkingStars() {
      for(let i =0;i<starsBlinking.length;i++){
          const meh = Number(starsBlinking[i].id);
           if(cleanNums.includes(meh)===true){
               starsBlinking[i].classList.add("blinking");
           }  else{
               starsBlinking[i].classList.remove("blinking");
           }
      }
    }

    blinkingStars();
    console.log(cleanNums);
}

stars()

setInterval(stars,10000)




