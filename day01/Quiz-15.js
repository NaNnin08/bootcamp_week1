function segitiga(n, Position) {
    if(Position.toLowerCase()==='bawah'){
        for (let i = 0; i < n; i++) {
            for (let k = n-1; k > i; k--) {
                process.stdout.write(' ');              
            }
            for (let j = 0; j < i+1; j++) {
                process.stdout.write('*');          
            }
            process.stdout.write('\n');
        }
    } else {
        for(let i = 0; i < n; i++) {
            for(let k = n; k > i; k--) {
                process.stdout.write('*'); 
            }   
            process.stdout.write('\n');                        
        }        
    }
}

console.log(segitiga(5, 'bawah'));