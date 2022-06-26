const quote1=document.getElementById("message").innerText;
   let j=0;
   let y="";
   setInterval(print2,100)



   function print2()
   {
    y=y+quote1.charAt(j);
    document.getElementById("message").innerHTML=y;
    j++;



    if(j==40)
    {
        j=0;
        y="";
    }



   }