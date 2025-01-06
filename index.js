let eng = parseFloat(prompt( "Enter Your English Marks"))
let urdu = parseFloat(prompt( "Enter Your Urdu Marks"))
let math = parseFloat(prompt( "Enter Your Math Marks"))

let obtainedmarks = eng+urdu+math;


let perc=(obtainednarks/360)*100

document.write( "Obtained Marks "+ obtainedmarks+"<br>")
document. write("Percentage " + perc + "%" + "<br>")

if (perc <= 100 && perc >= 80) 
    { document. write("Grade Is A+")

}

else if (perc < 80 && perc >= 70)
     { document.write("Grade Is A")}

else if (perc < 70 && perc >= 60) 
    { document. write("Grade Is B")

}
else if (perc < 60 && perc >= 50) 
    { document. write("Grade Is C")

}
else  
    { document. write("Fail")

}

