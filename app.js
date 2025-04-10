const n1=+prompt("birinci reqem yaz");
const o=prompt("operatorlardan birini yaz(+,-,/,*)");
const n2=+prompt("ikinci reqemi daxil et");

if(o==="+"){
    document.getElementById("outcome").innerText=`${n1}+${n2}=${n1 + n2}`;
} else if(o==="-"){
    document.getElementById("outcome").innerText=`${n1}-${n2}=${n1-n2}`;
} else if (o==="/"){
    document.getElementById("outcome").innerText=`${n1}/${n2}=${n1/n2}`;
}else if(o==="*") {
    document.getElementById("outcome").innerText=`${n1}*${n2}=${n1*n2}`;
}
else { document.getElementById("outcome").innerText="Diqqetli oxuyun!!!!!!!!!";}
