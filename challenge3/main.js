function removeDuplicated(a){
    
    let i,j,cpt;
    for(i=0;i<a.length;i++){
        j=i+1;
        cpt=0;
        while(j<a.length && a[i]==a[j]){
            cpt++;
            j++;
        }
        a.splice(i+1,cpt);
    }
    return a;
}
console.log(removeDuplicated([1,1,2,2,3,6,7,7]))