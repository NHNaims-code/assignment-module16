
function feetToMile(feet) {
    if (feet <= 0) {
        return 'distance cannot be negative or zero.';
    } else {
        var oneFeetToMile = 1 / 5280;
        var resultMile = feet * oneFeetToMile;
        return resultMile;
    }
}

function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return 'chair, table or bed number cannot be negative.';
    } else {
        var totalChairWood = chair * 1;
        var totalTableWood = table * 3;
        var totalBedWood = bed * 5
        var totalWood = totalChairWood + totalTableWood + totalBedWood;
        return totalWood;
    }
}

function brickCalculator(floor) {
    if (floor <= 0) {
        return 'Your input cannot be negative or zero.';
    } else {
        var totalFeet = 0;
        if (floor < 11) {
            totalFeet = floor * 15;
        } else if (floor < 21 && 10 < floor) {
            totalFeet = 10 * 15;
            totalFeet = totalFeet + (floor - 10) * 12;
        } else if (floor > 20) {
            totalFeet = 10 * 15;
            totalFeet = totalFeet + (10 * 12);
            totalFeet = totalFeet + (floor - 20) * 10;
        }
        var totalBrick = totalFeet * 1000;
        return totalBrick;
    }
}

function tinyFriend(nameList) {
    var uniqueNameList = [];
    for (var i = 0; i < nameList.length; i++) {
        if (nameList[i] != ' ') {
            uniqueNameList.push(nameList[i])
        }
    }
    var nameCharacterList = [];
    for (var i = 0; i < uniqueNameList.length; i++) {
        var count = 0;
        var fName = uniqueNameList[i];
        for (var j = 0; j < fName.length; j++) {
            if (fName[j] != " ") {
                count++;
            }
        }
        nameCharacterList.push(count);
    }
    var minCharacter = Math.min(...nameCharacterList);
    var tinyNameIndex = nameCharacterList.indexOf(minCharacter);
    var tinyName = uniqueNameList[tinyNameIndex];
    return tinyName;
}



