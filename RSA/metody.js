
function sam(n, e, m){ // Square and multiply
    var out = 1;
    var b = binary(e);
    for(let i = 0; i < b.length; i++){
        out *= out;
        if(b.charAt(i)=="1"){
            out *= n;
        }else{
            out*n;
        }
        out = out % m;
    }
    console.log(out);
    return out;
}


function binary(dec) {
  return (dec >>> 0).toString(2);
}


function phi(p, q) {
    return (p-1)*(q-1);
}

function g(id){
    return document.getElementById(id);
}

function x(id){
    return g(id).value;
}

function s(id, val){
    g(id).value = val;
}
