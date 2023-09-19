// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if(blocks>42){
        return blocks-42
    }else if(blocks<42){
        return 42-blocks;
    }
    return blocks ;
}
function distanceFromHqInFeet(blocks){
    
    return distanceFromHqInBlocks(blocks) * 264;
}
function distanceTravelledInFeet(block1,block2){
    if(block2>block1){
    return (block2 - block1) *264
    }else if(block1>block2){
        return (block1-block2)* 264
    }
    
}
function calculatesFarePrice(block1, block2){
    let distance = distanceTravelledInFeet(block1,block2)
    let fare;
    if (distance < 400){
        return(fare = 0)
    }else if (distance > 400 && distance < 2000){
        return (fare = (distance - 400) * 0.02)
    }else if (distance > 2000 && distance < 2500){
        return (fare = 25)
    }else if(distance>2500){
        return "cannot travel that far"
    }

}