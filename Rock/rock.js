let inputids=document.getElementById("inputid");
let submits=document.getElementById("submit");
let shopCollecs=document.getElementById("shopCollec");
submits.addEventListener("click",()=>{
      const li=document.createElement("li");
      const text=document.createTextNode(inputids.value);
      li.className="shopitem";
      li.append(text);
      shopCollecs.append(li);
    })
function removeItem(event){ 
let existItem=event.target.parentNode.parentNode;
console.log(event.target.parentNode.parentNode);
existItem.remove();
}