function countValley(road) {
    let currentValley = 0;
    let count = 0;
    for (let i = 0; i < road.length; i++) {
        if(road[i]==="U") {
            currentValley += 1;
        } 
        if(road[i]==="D") {
            currentValley -= 1;
        }
        if(currentValley===0 && road[i]==="U") {
            count += 1;
        }
    }
    return `${count} Gunung`;
}

console.log(countValley("UDDDUDUU"));