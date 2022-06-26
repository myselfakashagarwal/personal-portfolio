
console.log("welcome visitor greetings 🥰")
console.log("i love building minimalistic website 🤗")

let date=new Date()
    console.log(date);
    let week=date.getDay();
    week=Number(week);
    console.log(week);
    if(week==1){
  document.getElementById("day").innerHTML="Have a beautiful Monday";
    }
    else if(week==2)
    {
        document.getElementById("day").innerHTML=
        
        "Have a cheerful Tueseday";
    }
    else if(week==3)
    {
        document.getElementById("day").innerHTML=
        
        "Have a splendid Wednesday";
    }
    else if(week==4){
        document.getElementById("day").innerHTML=
        
        "Have a exciting Thurseday";
    }
    else if(week==5){
        document.getElementById("day").innerHTML=
        
        "Have a lovely Friday";
    }
    else if(week==6){
        document.getElementById("day").innerHTML=
        
        "Have an enjoyable Saturday";
    }
    else{
        
            document.getElementById("day").innerHTML=
            
            "Have a relaxed Sunday";
        
    }


//hello type writer animation

    const hello=document.getElementById("hello").innerText;
   let i=0;
   i=Number(i);
   let x="";
   setInterval(print,300)
   function print(){
    x=x+hello.charAt(i);
    document.getElementById("hello").innerHTML=x;
    i++;
    if(i==5){
        i=0;
        x="";
    }
   }

//quote1 typewriter animation

   const quote1=document.getElementById("quote").innerText;
   let j=0;
   let y="";
   setInterval(print2,100)
   function print2(){
    y=y+quote1.charAt(j);
    document.getElementById("quote").innerHTML=y;
    j++;
    if(j==50){
        j=0;
        y="";
    }
   }

   //quote2 typewriter animation

   const quote2=document.getElementById("quote2").innerText;
   let a=0;
   let b="";
   setInterval(print3,100)
   function print3(){
    b=b+quote2.charAt(a);
    document.getElementById("quote2").innerHTML=b;
    a++;
    if(a==50){
        a=0;
        b="";
    }
   }

// hover animation 

   addEventListener("close",hover())
    function hover(){

    }
   



