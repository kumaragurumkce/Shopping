let inputids=document.getElementById("inputid");
let submits=document.getElementById("submit");
let shopCollecs=document.getElementById("shopCollec");
submits.addEventListener("click",(e)=>{
             e.preventDefault();
            const newlist=document.createElement("li");
           const div=document.createElement("div");
           const divremo=document.createElement("div");
           newlist.append(div,divremo);
           div.textContent=inputids.value;   
           newlist.className="shopitem";
           divremo.parentElement.setAttribute("onClick","removeItem(event)" );
           divremo.innerHTML=`<i>X</i>`;            
         newlist.append(divremo);
         shopCollecs.append(newlist); 
         //div.append(divremo);
               inputids.value="";
})
function removeItem(event){ 
let existItem=event.target.parentNode.parentNode;
existItem.remove();
}