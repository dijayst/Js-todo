
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
let getit=document.getElementById("getit");

todo=(e)=>{
const add=document.getElementById("add").value;
gay.push(add +"<br/>")
if(add==""){
    window.alert("input a todo");
     
}else{
           getit.innerHTML=gay
          
    console.log(gay)
}
console.log(gay)
return gay[add]
}
decrease=()=>{
  
  gay.pop()
  getit.innerHTML=gay 
    
console.log(gay)
}
