function DataHandling() {
    var me = this;
    this.outcomePos = [];
    this.bets = [];

    this.getPosition = function (outcome) {
        me.outcomePos = outcome;
    };

    document.forms[0].addEventListener("submit", onSubmit);

    function onSubmit(e) {
        e.preventDefault();

        var value = document.forms[0].betLines.value;

        value = "[" + value.replace(/\n/g, '').replace(/\{/g, '[').replace(/\}/g, ']') + "]";

        CONFIG.betLines = JSON.parse(value);

        done();
    }

    this.getData = function () {
        var i, j, k,
            denomination = [],
            reel1 = [],
            reel2 = [],
            reel3 = [],
            reel4 = [],
            reel5 = [],
            symbols = [],
            unexceptable = [];
        CONFIG.gameName = document.getElementById('gameId').value;
        CONFIG.csvFileName = document.getElementById('csvFile').value;
        CONFIG.betLinesNum = document.getElementById('betLinesNum').value;
        CONFIG.betLevelNum = document.getElementById('betLevelNum').value;
        denomination = document.getElementById('denomination').value;
        CONFIG.denomination = denomination.split(',');
        CONFIG.bet = document.getElementById('bet').value;
        unexceptable = document.getElementById('highWinSymbols').value;
        CONFIG.unexceptableSyms = unexceptable.split(',');
        //CONFIG.unexceptableSyms.push(document.getElementById('highWinSymbols').value);
        symbols = document.getElementById('symbols').value;
        CONFIG.symbol = symbols.split(',');
        //CONFIG.symbol.push(document.getElementById('symbols').value);
        reel1 = document.getElementById('reel0').value;
        CONFIG.reels[0] = reel1.split(',');
        //CONFIG.reels[0].push(document.getElementById('reel0').value);
        reel2 = document.getElementById('reel1').value;
        CONFIG.reels[1] = reel2.split(',');
        //CONFIG.reels[1].push(document.getElementById('reel1').value);
        reel3 = document.getElementById('reel2').value;
        CONFIG.reels[2] = reel3.split(',');
        //CONFIG.reels[2].push(document.getElementById('reel2').value);
        reel4 = document.getElementById('reel3').value;
        CONFIG.reels[3] = reel4.split(',');
        //CONFIG.reels[3].push(document.getElementById('reel3').value);
        reel5 = document.getElementById('reel4').value;
        CONFIG.reels[4] = reel5.split(',');
        //CONFIG.reels[4].push(document.getElementById('reel4').value);

        var pay = document.getElementById('payOut').value;
        var payo = pay.split(/\n/);
        var payou = [];

        for (j = 0; j < payo.length; j++) {
            payou[j] = payo[j].split('	');
        }

        for (k = 0; k < payou.length; k++) {
            CONFIG.payOut[k] = {};
            CONFIG.payOut[k].sym = payou[k][0];
            CONFIG.payOut[k].x3 = +payou[k][1];
            CONFIG.payOut[k].x4 = +payou[k][2];
            CONFIG.payOut[k].x5 = +payou[k][3];
        }

        for (i = 0; i < CONFIG.data.length - 1; i++) {
            CONFIG.data[i + 1].push(CONFIG.denomination[i]);
            CONFIG.data[i + 1].push(CONFIG.denomination[i]);
            CONFIG.data[i + 1].push(+((CONFIG.denomination[i] * CONFIG.bet / 100).toFixed(2)));
            me.bets.push(+((CONFIG.denomination[i] * CONFIG.bet / 100).toFixed(2)));
        }
    };

    this.addPayouts = function (payout) {
        var i;
        for (i = 0; i < CONFIG.data.length - 1; i++) {
            CONFIG.data[i + 1].push(+((CONFIG.denomination[i] * payout).toFixed(2)));
            CONFIG.data[i + 1].push(
                +(CONFIG.denomination[i] * payout / 100 - me.bets[i]).toFixed(2)
            );
        }
    };

    //this.verifyBetLines = function(){
    //    var i, j,
    //        winSym = [];
    //    for(i = 0; i < CONFIG.reels.length; i++){
    //        winSym[i] = [];
    //        for(j = 0; j < CONFIG.row; j++){
    //            if((reelStopPos[i] + j) < CONFIG.reels[i].length) {
    //                winSym[i].push(CONFIG.reels[i][me.outcomePos[i][j][k][0] + j]);
    //            }
    //            if((reelStopPos[i] + j) >= CONFIG.reels[i].length) {
    //                winSym[i].push(CONFIG.reels[i][(reelStopPos[i] + j) - CONFIG.reels[i].length]);
    //            }
    //        }
    //    }
    //    console.log(winSym);
    //
    //    var arr = [],
    //        n, k,
    //        win = 0,
    //        numberOfBetLines = [];
    //
    //    function verify(params){
    //        for(k = 0; params[k] == params[k+1]; k++){}
    //        return k;
    //    }
    //
    //
    //    for(i = 0; i < CONFIG.betLines.length; i++) {
    //        arr[i] = [];
    //        for(j = 0; j < CONFIG.reels.length; j++){
    //            arr[i].push(winSym[j][CONFIG.betLines[i][j]]);
    //        }
    //
    //        //console.log(arr[i]);
    //        n = verify(arr[i]);
    //
    //        if (n > 1) {
    //            numberOfBetLines.push(i);
    //            for(j = 0; j < CONFIG.payOut.length; j++){
    //                if(arr[i][0] == CONFIG.payOut[j].sym){
    //                    win += CONFIG.payOut[j]['x'+n]*CONFIG.betLevel;
    //                }
    //            }
    //        }
    //    }
    //};

    addListener('setPosition', me.getPosition);
    addListener('writingTextConfig_setPayout', me.addPayouts);

}


//var input = document.getElementById("input");
//var out = document.getElementById("result");
//var isListening = false;
//
//input.addEventListener("change", onPaste);
//
//function onPaste(e) {
//    var value = e.target.value;
//
//    value = "[" + value.replace(/\n/g, '').replace(/\{/g, '[').replace(/\}/g, ']') + "]";
//
//    out.innerHTML = JSON.stringify(value, null, 2);
//
//    console.log(JSON.parse(value))
//}



