
function chatbox(){
    var tx=document.getElementById("tx");
    var para=document.createElement('p');
    var chat=document.createTextNode(tx.value);
    para.appendChild(chat)
    var msg=document.getElementById("msg");
    msg.appendChild(para)
    tx.value=""
}