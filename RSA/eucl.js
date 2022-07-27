function eucl(a, b) {
    var zb, cis, ka, kb, i;

    zb = [a, b];
    cis = [0, 0];
    ka = [1, 0];
    kb = [0, 1];
    
    i=2;
    
    while(true){
        cis.push(Math.floor(zb[i-2]/zb[i-1]));
        zb.push(zb[i-2]-(zb[i-1]*cis[i]));
        ka.push(ka[i-2]-(cis[i]*ka[i-1]));
        kb.push(kb[i-2]-(cis[i]*kb[i-1]));
        if(zb[i]==1)break;
        i++;
    }
    
    return ((ka[i]+b)%b);
}