var data = new DataHandling();
var text = new WritingText();

function verify(params){
    for(var k = 0; params[k] == params[k+1]; k++){}
    return k;
}

function findBetlines(outcome) {
    //console.log(outcome);
    var betLinesIds = [],
        i, j, n,
        arr = [];

    for (i = 0; i < CONFIG.betLines.length; i++) {
        arr[i] = [];
        for(j = 0; j < CONFIG.reels.length; j++){
            arr[i].push(outcome[j][CONFIG.betLines[i][j]]);
        }

        //console.log(arr[i]);
        n = verify(arr[i]);
        //console.log(n);

        if (n > 1) {
            betLinesIds.push(i);

        }
        //console.log(betLinesIds);
    }
    return betLinesIds;
}


function calcPayout(outcome, betlinesIds, symbol, numOnPayout) {
    var payout = 0,
        i, j, k, n,
        arr = [];
    //console.log(betlinesIds);

    for (i = 0; i < CONFIG.betLines.length; i++) {
        arr[i] = [];
        for(j = 0; j < CONFIG.reels.length; j++){
            arr[i].push(outcome[j][CONFIG.betLines[i][j]]);
        }

        //console.log(arr[i]);
        n = verify(arr[i]);
        //console.log(symbol);
        //console.log(payout);

        if (n > 1) {

            if(arr[i][0] == symbol){
                payout += CONFIG.payOut[numOnPayout]['x'+(n+1)]*CONFIG.betLevel;
                //console.log(payout);
            }

            //numberOfBetLines.push(i);
            //for(k = 0; k < CONFIG.payOut.length; k++){
            //    if(arr[i][0] == CONFIG.payOut[k].sym){
            //        payout += CONFIG.payOut[k]['x'+(n+1)]*CONFIG.betLevel;
            //    }
            //}
        }
    }
    //console.log(payout);

    return payout;
}

//console.log(outcomePos);
//console.log(payouts);


function done() {
    data.getData();
    var file = new CreateCSVFile(CONFIG.data);

    //console.log(CONFIG.gameName);
    //console.log(CONFIG.csvFileName);
    //console.log(CONFIG.denomination);
    //console.log(CONFIG.bet);
    //console.log(CONFIG.unexceptableSyms);
    //console.log(CONFIG.symbol);
    //console.log(CONFIG.reels);
    //console.log(CONFIG.payOut);
    //console.log(CONFIG.betlines);

    var rl1 = new Reel(CONFIG.reels[0], CONFIG.unexceptableSyms, CONFIG.lessUnexceptableSyms);
    var rl2 = new Reel(CONFIG.reels[1], CONFIG.unexceptableSyms, CONFIG.lessUnexceptableSyms);
    var rl3 = new Reel(CONFIG.reels[2], CONFIG.unexceptableSyms, CONFIG.lessUnexceptableSyms);
    var rl4 = new Reel(CONFIG.reels[3], CONFIG.unexceptableSyms, CONFIG.lessUnexceptableSyms);
    var rl5 = new Reel(CONFIG.reels[4], CONFIG.unexceptableSyms, CONFIG.lessUnexceptableSyms);

//var pos1 = rl1.findPosition('SYM10', 1, [], true);
//var pos2 = rl2.findPosition('SYM10', 1, rl1.getAddSyms('SYM10'));
//var pos3 = rl3.findPosition('SYM10', 1, []);
//var pos4 = rl4.findPositionWithoutWinSymbol(['SYM10']);
//var pos5 = rl5.findPositionWithoutWinSymbol(['SYM10']);
//var pos4_1 = rl4.findPosition('SYM10', 1, []);
//var pos5_1 = rl5.findPosition('SYM10', 1, []);
//var outcomePos1 = [];
//var outcomePos2 = [];
//var outcomePos3 = [];
//outcomePos1.push(pos1, pos2, pos3, pos4, pos5);
//outcomePos2.push(pos1, pos2, pos3, pos4_1, pos5);
//outcomePos3.push(pos1, pos2, pos3, pos4_1, pos5_1);
//outcomePos.push(outcomePos1);
//outcomePos.push(outcomePos2);
//outcomePos.push(outcomePos3);

    var outcomePos = [];
    var payouts = [];
    for (var k = 0; k < CONFIG.betLines.length; k++) {
        outcomePos[k] = [];
        payouts[k] = [];
        for (var i = 0; i < CONFIG.symbol.length; i++) {
            outcomePos[k][i] = [];
            payouts[k][i] = [];

            var pos1 = rl1.findPosition(CONFIG.symbol[i], CONFIG.betLines[k][0], [], true);
            var pos2 = rl2.findPosition(CONFIG.symbol[i], CONFIG.betLines[k][1], rl1.getAddSyms(CONFIG.symbol[i]));
            var pos3 = rl3.findPosition(CONFIG.symbol[i], CONFIG.betLines[k][2], []);
            var pos4 = rl4.findPositionWithoutWinSymbol([CONFIG.symbol[i]]);
            var pos5 = rl5.findPositionWithoutWinSymbol([CONFIG.symbol[i]]);
            var pos4_1 = rl4.findPosition(CONFIG.symbol[i], CONFIG.betLines[k][3], []);
            var pos5_1 = rl5.findPosition(CONFIG.symbol[i], CONFIG.betLines[k][4], []);


            var outcomeSet3 = [
                rl1.findWinReelStrip(pos1, CONFIG.reels[0]),
                rl2.findWinReelStrip(pos2, CONFIG.reels[1]),
                rl3.findWinReelStrip(pos3, CONFIG.reels[2]),
                rl4.findWinReelStrip(pos4, CONFIG.reels[3]),
                rl5.findWinReelStrip(pos5, CONFIG.reels[4])
            ];

            var outcomeSet4 = [
                rl1.findWinReelStrip(pos1, CONFIG.reels[0]),
                rl2.findWinReelStrip(pos2, CONFIG.reels[1]),
                rl3.findWinReelStrip(pos3, CONFIG.reels[2]),
                rl4.findWinReelStrip(pos4_1, CONFIG.reels[3]),
                rl5.findWinReelStrip(pos5, CONFIG.reels[4])
            ];

            var outcomeSet5 = [
                rl1.findWinReelStrip(pos1, CONFIG.reels[0]),
                rl2.findWinReelStrip(pos2, CONFIG.reels[1]),
                rl3.findWinReelStrip(pos3, CONFIG.reels[2]),
                rl4.findWinReelStrip(pos4_1, CONFIG.reels[3]),
                rl5.findWinReelStrip(pos5_1, CONFIG.reels[4])
            ];

            for (var j = 0; j < CONFIG.row; j++) {
                outcomePos[k][i][j] = [];
                payouts[k][i][j] = {
                    payout: 0,
                    betlines: 0
                };
            }

            outcomePos[k][i][0].push(pos1, pos2, pos3, pos4, pos5);
            outcomePos[k][i][1].push(pos1, pos2, pos3, pos4_1, pos5);
            outcomePos[k][i][2].push(pos1, pos2, pos3, pos4_1, pos5_1);

            var btlnsSet3 = findBetlines(outcomeSet3),
                btlnsSet4 = findBetlines(outcomeSet4),
                btlnsSet5 = findBetlines(outcomeSet5);

            var payoutSet3 = calcPayout(outcomeSet3, btlnsSet3, CONFIG.symbol[i], i),
                payoutSet4 = calcPayout(outcomeSet4, btlnsSet4, CONFIG.symbol[i], i),
                payoutSet5 = calcPayout(outcomeSet5, btlnsSet5, CONFIG.symbol[i], i);


            payouts[k][i][0].payout = payoutSet3;
            payouts[k][i][1].payout = payoutSet4;
            payouts[k][i][2].payout = payoutSet5;

            payouts[k][i][0].betlines = btlnsSet3.length;
            payouts[k][i][1].betlines = btlnsSet4.length;
            payouts[k][i][2].betlines = btlnsSet5.length;
        }
    }
    fireEvent('setPosition', outcomePos);
    fireEvent('setPayout', payouts);

    console.log(outcomePos);
    console.log(payouts);

    text.writeText();
    file.createCSVFile();
    file.createTXTFile();

    //for(var i = 0; i < CONFIG.symbol.length; i++){
    //    reel.getElements(CONFIG.symbol[i], CONFIG.betLines[0], false, false);
    //    reel1.getElements(CONFIG.symbol[i], CONFIG.betLines[0], true, false);
    //    reel2.getElements(CONFIG.symbol[i], CONFIG.betLines[0], true, true);
    //}
    //reel.getElements('SYM9', CONFIG.betLines[0], false, false);
    //reel1.getElements('SYM9', CONFIG.betLines[0], true, false);
    //reel2.getElements('SYM9', CONFIG.betLines[0], true, true);



}