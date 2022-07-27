function gcd(a, b){
    let temp;
    while(true){
        temp = a%b;
        if (temp == 0) return b;
        a = b;
        b = temp;
    }
}

function gen(){
    p = prompt("Prvočíslo 1");
    q = prompt("Prvočíslo 2");
    n = p*q;
    e = 2;
    ph = (p-1)*(q-1);
    while (e < ph){
        if (gcd(e, ph)==1)break;
        else e++;
    }
    d = eucl(e, ph);
    s("sk", d);
    s("vk", e);
    s("mod", n);
    prt();
}

const tb = g("tb");
function prt() {
    var tr = tb.insertRow(-1);
    col(tr, p);
    col(tr, q);
    col(tr, n);
    col(tr, d);
    col(tr, e);
}

function col(tr, txt) {
    var td = document.createElement('td');
    td.innerHTML = txt;
    tr.appendChild(td);
}