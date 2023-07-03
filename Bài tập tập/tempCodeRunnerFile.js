function uocSo(n){
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            console.log(i);
        }
    }
}
console.log(uocSo(60));