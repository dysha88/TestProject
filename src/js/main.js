var data = new DataHandling();
var text = new WritingText();
var file = new CreateCSVFile(CONFIG.data);

var rl1 = new Reel(CONFIG.reels[0], CONFIG.unexceptableSyms, CONFIG.lessUnexceptableSyms);
var rl2 = new Reel(CONFIG.reels[1], CONFIG.unexceptableSyms, CONFIG.lessUnexceptableSyms);
var rl3 = new Reel(CONFIG.reels[2], CONFIG.unexceptableSyms, CONFIG.lessUnexceptableSyms);
var rl4 = new Reel(CONFIG.reels[3], CONFIG.unexceptableSyms, CONFIG.lessUnexceptableSyms);
var rl5 = new Reel(CONFIG.reels[4], CONFIG.unexceptableSyms, CONFIG.lessUnexceptableSyms);

var pos1 = rl1.findPosition('SYM10', 1, [], true);
var pos2 = rl2.findPosition('SYM10', 1, rl1.getAddSyms('SYM10'));
var pos3 = rl3.findPosition('SYM10', 1, []);
var pos4 = rl4.findPositionWithoutWinSymbol(['SYM10']);
var pos5 = rl5.findPositionWithoutWinSymbol(['SYM10']);
var pos4_1 = rl4.findPosition('SYM10', 1, []);
var pos5_1 = rl5.findPosition('SYM10', 1, []);

var outcomePos = [];
var outcomePos1 = [];
var outcomePos2= [];
var outcomePos3 = [];
outcomePos1.push(pos1, pos2, pos3, pos4, pos5);
outcomePos2.push(pos1, pos2, pos3, pos4_1, pos5);
outcomePos3.push(pos1, pos2, pos3, pos4_1, pos5_1);
outcomePos.push(outcomePos1);
outcomePos.push(outcomePos2);
outcomePos.push(outcomePos3);
//for(var i = 0; i < CONFIG.symbol.length; i++){
//    var pos1 = rl1.findPosition(CONFIG.symbol[i], 1, [], true);
//    var pos2 = rl2.findPosition(CONFIG.symbol[i], 1, rl1.getAddSyms(CONFIG.symbol[i]));
//    var pos3 = rl3.findPosition(CONFIG.symbol[i], 1, []);
//    var pos4 = rl4.findPositionWithoutWinSymbol([CONFIG.symbol[i]]);
//    var pos5 = rl5.findPositionWithoutWinSymbol([CONFIG.symbol[i]]);
//    var pos4_1 = rl4.findPosition(CONFIG.symbol[i], 1, []);
//    var pos5_1 = rl5.findPosition(CONFIG.symbol[i], 1, []);
//    outcomePos1.push(pos1, pos2, pos3, pos4, pos5);
//    outcomePos2.push(pos1, pos2, pos3, pos4_1, pos5);
//    outcomePos3.push(pos1, pos2, pos3, pos4_1, pos5_1);
//    outcomePos.push(outcomePos1);
//    outcomePos.push(outcomePos2);
//    outcomePos.push(outcomePos3);
//}
fireEvent('setPosition', outcomePos);
console.log(outcomePos);
//
//console.log(pos1, pos2, pos3, pos4, pos5);
//console.log(pos1, pos2, pos3, pos4_1, pos5);
//console.log(pos1, pos2, pos3, pos4_1, pos5_1);


function done() {
    data.getData();
    console.log(CONFIG.gameName, CONFIG.csvFileName);
    text.writeText();
    file.createFile();

    //for(var i = 0; i < CONFIG.symbol.length; i++){
    //    reel.getElements(CONFIG.symbol[i], CONFIG.betLines[0], false, false);
    //    reel1.getElements(CONFIG.symbol[i], CONFIG.betLines[0], true, false);
    //    reel2.getElements(CONFIG.symbol[i], CONFIG.betLines[0], true, true);
    //}
    //reel.getElements('SYM9', CONFIG.betLines[0], false, false);
    //reel1.getElements('SYM9', CONFIG.betLines[0], true, false);
    //reel2.getElements('SYM9', CONFIG.betLines[0], true, true);

}