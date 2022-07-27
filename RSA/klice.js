
//generuj();

var p, q, n, ph, e, d;

function generuj() {
    p = 7;
    q = 17;
    
    n = p*q;
    ph = phi(p, q);
    
    e=setE();
    
}

function setE(){
    
}

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
    // Two random prime numbers
    p = 3;
    q = 7;
    
    p = prompt("Prvočíslo 1");
    q = prompt("Prvočíslo 2");
    
    // First part of public key:
    n = p*q;
  
    // Finding other part of public key.
    // e stands for encrypt
    e = 2;
    ph = (p-1)*(q-1);
    while (e < ph){
        // e must be co-prime to phi and
        // smaller than phi.
        if (gcd(e, ph)==1)break;
        else e++;
    }
  
    // Private key (d stands for decrypt)
    // choosing d such that it satisfies
    // d*e = 1 + k * totient
    
    
    d = eucl(e, ph);
    
    //d = (e-1)%ph;
    
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

