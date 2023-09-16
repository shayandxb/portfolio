const textEL=document.getElementById("text")
const myName="Muhammad shayan khan"

let num=1

writeText()

function writeText()
{
    textEL.innerHTML=myName.slice(0,num)
    num++

    if(num>myName.length)
    {
    num=1
    }

    setTimeout(writeText,100)
}