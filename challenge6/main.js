function linearSearch(a,x){
    let i;
    let n = a.length;
    i=0;
    while(i<n){
        if(a[i]==x){
            return i;
        }
        i++;
    }
    return -1;
}