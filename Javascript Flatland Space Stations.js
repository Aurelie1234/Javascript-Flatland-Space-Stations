function flatlandSpaceStations(n, c) {
    
 
let max = 0;


    for (let i = 0; i < n; i++) {
        let result = [];
        for (let j = 0; j < c.length; j++) {
            result.push(Math.abs(i - c[j]))
        }
        let min = Math.min(...result)
        if (max < min) max = min
    }


    return Math.max(...result)
 
}
