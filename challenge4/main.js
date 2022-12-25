function mergearray(a,b){
    let n1=a.length;
    let n2=b.length;
    let i,j;
    i=0;
    j=0;
    while(i<n1 && j<n2){
        if(a[i]>b[j]){
            let x=a[i];
            a[i]=b[j];
            b[j]=x;
            i++;
            b.sort()
        }else{
            i++;
        }
    }
    console.log(a);
    console.log(b);
}
mergearray([1,4],[2,3,9]);