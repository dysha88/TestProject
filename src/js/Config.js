var CONFIG = {
    payOut : [{sym : 'SYM0', x3 : 4, x4 : 21, x5 : 75},
        {sym : 'SYM1', x3 : 200, x4 : 1800, x5 : 5500},
        {sym : 'SYM2', x3 : 30, x4 : 1, x5 : 1},
        {sym : 'SYM3', x3 : 50, x4 : 50, x5 : 400},
        {sym : 'SYM4', x3 : 15, x4 : 60, x5 : 175},
        {sym : 'SYM5', x3 : 15, x4 : 60, x5 : 275},
        {sym : 'SYM6', x3 : 10, x4 : 40, x5 : 75},
        {sym : 'SYM7', x3 : 5, x4 : 45, x5 : 50},
        {sym : 'SYM8', x3 : 5, x4 : 20, x5 : 75},
        {sym : 'SYM9', x3 : 2, x4 : 13, x5 : 60},
        {sym : 'SYM10', x3 : 2, x4 : 13, x5 : 60}],
    unexceptableSyms : ['SYM0', 'SYM1', 'SYM2'/*0, 1, 2*/],
    symbol : ['SYM3', 'SYM4', 'SYM5', 'SYM6', 'SYM7', 'SYM8', 'SYM9', 'SYM10', 'SYM11', 'SYM12'/*3, 4, 5, 6, 7, 8, 9*/],
    symsOnReel : 3,
    startPos : 0,
    posOnReel : 1,
    reels : [
        /*[2,2,8,3,5,6,1,4,7,8,9,1,1,4,5,7,9,9,3,4,7],
        [1,3,2,4,5,6,5,4,7,8,9,1,3,4,5,7,9,9,6,4,8],
        [4,2,8,3,5,6,1,4,7,8,9,1,1,4,5,7,9,9,3,4,7,8],
        [2,2,8,4,5,6,1,4,7,8,9,1,1,4,5,7,9,9,3,4,7],
        [2,2,4,3,5,6,1,4,7,8,9,1,1,4,5,7,9,9,3,4,7]*/
        ['SYM6','SYM2','SYM7','SYM3','SYM5','SYM2','SYM3','SYM9','SYM4','SYM10','SYM9','SYM2','SYM10','SYM8','SYM1','SYM0','SYM7','SYM6','SYM2','SYM5','SYM4','SYM9','SYM1','SYM8'],
        ['SYM0','SYM7','SYM6','SYM5','SYM4','SYM2','SYM7','SYM4','SYM8','SYM9','SYM5','SYM1','SYM2','SYM8','SYM4','SYM7','SYM8','SYM10','SYM6','SYM3','SYM9','SYM2','SYM4','SYM6','SYM10','SYM8','SYM3','SYM10'],
        ['SYM10','SYM4','SYM3','SYM9','SYM6','SYM2','SYM10','SYM6','SYM5','SYM7','SYM8','SYM4','SYM9','SYM1','SYM10','SYM4','SYM7','SYM5','SYM9','SYM3','SYM8','SYM6','SYM5','SYM7','SYM6','SYM9','SYM0','SYM10','SYM7','SYM5','SYM9','SYM6','SYM8','SYM2','SYM10','SYM6','SYM5','SYM7','SYM8','SYM4','SYM9','SYM1'],
        ['SYM8','SYM3','SYM7','SYM5','SYM10','SYM9','SYM2','SYM8','SYM7','SYM6','SYM3','SYM5','SYM4','SYM8','SYM3','SYM10','SYM0','SYM9','SYM8','SYM4','SYM6','SYM8','SYM3','SYM9','SYM4','SYM7','SYM10','SYM1','SYM4','SYM9','SYM5','SYM8','SYM3','SYM6','SYM5','SYM7','SYM6','SYM2','SYM10','SYM6'],
        ['SYM5','SYM6','SYM4','SYM8','SYM4','SYM5','SYM9','SYM2','SYM4','SYM6','SYM10','SYM5','SYM3','SYM8','SYM7','SYM5','SYM9','SYM2','SYM4','SYM6','SYM10','SYM5','SYM3','SYM8','SYM1','SYM10','SYM2','SYM9','SYM8','SYM4','SYM3','SYM9','SYM4','SYM0','SYM9','SYM5','SYM6','SYM9','SYM5','SYM7','SYM3','SYM5','SYM6','SYM4','SYM8','SYM4','SYM7','SYM9','SYM2','SYM4','SYM6','SYM10','SYM5','SYM3','SYM9','SYM7','SYM3']
    ],
    betLines : [
        [1,1,1,1,1],
        [0,0,0,0,0],
        [2,2,2,2,2],
        [0,1,2,1,0],
        [2,1,0,1,2],
        [0,0,1,0,0],
        [2,2,1,2,2],
        [1,2,2,2,1],
        [1,0,0,0,1],
        [1,0,1,0,1],
        [1,2,1,2,1],
        [0,1,0,1,0],
        [2,1,2,1,2],
        [1,1,0,1,1],
        [1,1,2,1,1],
        [0,1,1,1,0],
        [2,1,1,1,2],
        [0,1,2,2,2],
        [2,1,0,0,0],
        [0,2,0,2,0],
        [2,0,2,0,2],
        [0,2,2,2,0],
        [2,0,0,0,2],
        [0,0,2,0,0],
        [2,2,0,2,2]]



};


/*
 var i,j,
 unexceptableSyms = [0,1,2],
 symbol = 4,
 symsOnReel = 3,
 startPos = 0
 betLinePos = 1;

 function getStartPos(sym, reelArray, outcomeReelSymPos, startPos){
 var outcomeStartPos;
 for(i = startPos; i < reelArray.length; i++){
 if(sym == reelArray[i] && i - outcomeReelSymPos >= 0){
 outcomeStartPos = i - outcomeReelSymPos;
 return outcomeStartPos;
 }
 }
 }

 function findReelStrip(outcomeStartPos, reelArray, outcomeReelNum){
 var result = [];

 for(i = 0; i < outcomeReelNum; i++){
 result.push(reelArray[outcomeStartPos + i]);
 }

 console.log(outcomeStartPos);
 return result;
 }

 var test1 = [1,3,8,3,5,6,1,4,7,8,9,1,7,4,5,7,9,9,6,4,7];
 var test2 = [1,3,8,4,5,6,5,4,7,8,9,1,3,4,5,7,9,9,6,4,7];

 var startPos1 = getStartPos(symbol, test1, betLinePos, startPos);
 var startPos2 = getStartPos(symbol, test2, betLinePos, startPos);

 var strip1 = findReelStrip(startPos1, test1, symsOnReel);
 var strip2 = findReelStrip(startPos2, test2, symsOnReel);
 console.log(strip1);
 console.log(strip2);

 var newStrip1;

 function verifyReelStrip(reelStrip, unexceptableSyms){
 for(i = 0; i < reelStrip.length; i++){
 for(j = 0; j < unexceptableSyms.length; j++){
 if(reelStrip[i] == unexceptableSyms[j]){
 strip1 = findReelStrip(getStartPos(symbol, test1, betLinePos, startPos1 + symsOnReel), test1, symsOnReel);
 return strip1;
 }
 // console.log(newStrip1);
 }
 return strip1;
 }
 }

 var test = verifyReelStrip(strip1, unexceptableSyms);
 console.log(test);

 function verifyReelStrip2(reelStrip, unexceptableSyms){
 test.splice(betLinePos,1);
 unexceptableSyms.push(test);
 for(i = 0; i < reelStrip.length; i++){
 for(j = 0; j < unexceptableSyms.length; j++){
 if(reelStrip[i] == unexceptableSyms[j]){
 strip2 = findReelStrip(getStartPos(symbol, test2, betLinePos, startPos2 + symsOnReel), test2, symsOnReel);
 return strip2;
 }
 // console.log(newStrip1);
 }
 return strip2;
 }

 }

 var test3 = verifyReelStrip2(strip2, unexceptableSyms);
 console.log(test3);

*/