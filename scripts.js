
/*function show(){
  const name=document.getElementById("low").value;
  if (name==""||name===null){
     // document.write("notbnn")
      document.getElementById("write").innerHTML=("tyryyyyrr")
      return;
  }
};


document.getElementById("click").onclick=()=>{
    show()
    console.log(show())
}



*/




let gay=[]
todo=(e)=>{
const add=document.getElementById("add").value;
gay.push(add)
//alert(add)
if(add==""){
    window.alert("input a todo");
     
}else{
    // const hgh=gay.map((item)=>{
      //  item *2
            document.getElementById("getit").innerHTML=(add)
     // document.write(<br/>)
  //  })
    console.log(gay)
   // console.log(hgh) ;
}
console.log(gay)
return gay[add]
}
/*
const getitinput=document.getElementById("getitinput")
document.getElementById("click").onclick=()=>{
todo()
alert("elment "+ add + "hhui"+ gay)
console.log(todo())
console.log(gay)
}*/