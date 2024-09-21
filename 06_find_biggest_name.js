const findBiggestName = (arr) => {
    let biggestName = arr[0];

    for (let i = 0; i < arr.length; i++) {
        const tmpName = arr[i];
        if (tmpName.length > biggestName.length) {
            biggestName = tmpName;
        }
    }

    return biggestName;
};

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let biggestName = findBiggestName(friends);

console.log(biggestName);
