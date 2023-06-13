let inputids=document.getElementById("inputid");
let submits=document.getElementById("submit");
let shopCollecs=document.getElementById("shopCollec");
submits.addEventListener("click",()=>{
         let newitem=document.createElement("li");
         let divs=document.createElement("div");
         let divbtn=document.createElement("div");   
         newitem.append(divs,divbtn);           
     divs.textContent=inputids.value;
        newitem.className="shopitem";
        divbtn.parentElement.setAttribute("onClick","removeItem(event)");
        divbtn.innerHTML=`<i>X</i>`;
        newitem.append(divbtn);
        shopCollecs.append(newitem);
        inputids.value = "";
})
function removeItem(event){ 
let existItem=event.target.parentNode.parentNode;
console.log(event.target.parentNode.parentNode);
existItem.remove();
}

