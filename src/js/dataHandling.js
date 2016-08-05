function DataHandling(){
    var me = this;
    this.outcomePos = [];

    this.getPosition = function (outcome) {
        me.outcomePos = outcome;
    };

    this.getData = function(){
        var i;
        CONFIG.gameName = document.getElementById('gameId').value;
        CONFIG.csvFileName = document.getElementById('csvFile').value;
        //CONFIG.betLinesNum = document.getElementById('betLinesNum').value;
        //CONFIG.betLevelNum = document.getElementById('betLevelNum').value;
        //CONFIG.denomination.push(document.getElementById('denomination').value);
        //CONFIG.bet = document.getElementById('bet').value;
        //CONFIG.unexceptableSyms.push(document.getElementById('highWinSymbols').value);
        //CONFIG.symbol.push(document.getElementById('symbols').value);
        //CONFIG.reels[0].push(document.getElementById('reel0').value);
        //CONFIG.reels[1].push(document.getElementById('reel1').value);
        //CONFIG.reels[2].push(document.getElementById('reel2').value);
        //CONFIG.reels[3].push(document.getElementById('reel3').value);
        //CONFIG.reels[4].push(document.getElementById('reel4').value);
        //for(i = 0; i < document.getElementById('betLines').value.length; i++){
        //
        //}
    };

    this.verifyBetLines = function(){
        var i, j,
            winSym = [];
        for(i = 0; i < CONFIG.reels.length; i++){
            winSym[i] = [];
            for(j = 0; j < CONFIG.row; j++){
                if((reelStopPos[i] + j) < CONFIG.reels[i].length) {
                    winSym[i].push(CONFIG.reels[i][me.outcomePos[i][j][k][0] + j]);
                }
                if((reelStopPos[i] + j) >= CONFIG.reels[i].length) {
                    winSym[i].push(CONFIG.reels[i][(reelStopPos[i] + j) - CONFIG.reels[i].length]);
                }
            }
        }
        console.log(winSym);

        var arr = [],
            n, k,
            win = 0,
            numberOfBetLines = [];

        function verify(params){
            for(k = 0; params[k] == params[k+1]; k++){}
            return k;
        }


        for(i = 0; i < CONFIG.betLines.length; i++) {
            arr[i] = [];
            for(j = 0; j < CONFIG.reels.length; j++){
                arr[i].push(winSym[j][CONFIG.betLines[i][j]]);
            }

            //console.log(arr[i]);
            n = verify(arr[i]);

            if (n > 1) {
                numberOfBetLines.push(i);
                for(j = 0; j < CONFIG.payOut.length; j++){
                    if(arr[i][0] == CONFIG.payOut[j].sym){
                        win += CONFIG.payOut[j]['x'+n]*CONFIG.betLevel;
                    }
                }
            }
        }
    };

    addListener('setPosition', me.getPosition);

}


