var GAMECONFIG = {
    SYM0 : 'SYM0',
    SYM1 : 'SYM1',
    SYM2 : 'SYM2'


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