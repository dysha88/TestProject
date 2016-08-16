function WritingText() {
    var me = this;
    this.outcomePos = [];
    this.payoutForLine = [];
    this.bet = [];


    this.getPosition = function (outcome) {
        me.outcomePos = outcome;
    };

    this.getPayout = function(payout){
        me.payoutForLine = payout;
    };

    this.getBetArray = function(){
        var i;
        for(i = 0; i < CONFIG.denomination.length; i++){
            me.bet.push(CONFIG.bet*CONFIG.denomination[i]/100);
        }
    };

    this.writeText = function (lineNum, symbol) {
        var i, j, k,
            counter = 1;
        me.getBetArray();
        var text = "!Testing payout combinations in main game from paytable\n!Related testcase id:MEGAJPTWO-361\n!related requirement id:MEGAJPTWO-361\nload ./" +
            CONFIG.csvFileName + ".csv\n#Register player\ncontext.set autotest.currency $currency\ncontext.set autotest.extras channel,bbg\ncm.soapmc.registerPlayer $user\n#Deposit money to user account\ncm.soapmc.depositUserMoney 5000\n#Login Player\ncm.soapmc.loginPlayer\nmock.game.setRequest action=init&freeroundmode=false&gameId=" +
            CONFIG.gameName + "&sessid=1320914459356-76-ZNZ2QWVTA594I&wantsfreerounds=true&wantsreels=true&no-cache=1320914462790\nmock.game.send\nassert.mock.game.responseParameter denomination.standard=$defaultdenomination\nmock.game.setReqParameter action=paytable\nmock.game.send\nmock.game.setReqParameter action=jmxinit\nmock.game.send\nmock.game.setReqParameter action=rcinit\nmock.game.send\nassert.mock.game.errorResponse false\nstack.balance.push.cm.soapmc.balance\nmock.game.setReqParameter bet.betlevel=" +
            CONFIG.betLevelNum + "\nmock.game.setReqParameter bet.betlines=" +
            CONFIG.betLinesNum + "\nmock.game.setReqParameter bet.denomination=$denomination\nmock.game.setReqParameter freeroundmode=false\nstack.balance.push.cm.soapmc.balance\n";

            for (i = 0; i < CONFIG.betLines.length; i++) {
                for (j = 0; j < CONFIG.symbol.length; j++) {
                    for (k = 0; k < CONFIG.row; k++) {
                        var amountOfSymbols = 3 + k;
                        //var counter = 1;
                        var betLineNum = i + 1;
                        var textForOneLine = "#####  LINE " + betLineNum + " " + amountOfSymbols + " " + CONFIG.symbol[j] + "  ######\nmock.game.setReqParameter jmx.rs.i0.id=basic\nmock.game.setReqParameter jmx.rs.i0.r.i0.pos=" +
                            me.outcomePos[i][j][k][0] + "\nmock.game.setReqParameter jmx.rs.i0.r.i1.pos=" +
                            me.outcomePos[i][j][k][1] + "\nmock.game.setReqParameter jmx.rs.i0.r.i2.pos=" +
                            me.outcomePos[i][j][k][2] + "\nmock.game.setReqParameter jmx.rs.i0.r.i3.pos=" +
                            me.outcomePos[i][j][k][3] + "\nmock.game.setReqParameter jmx.rs.i0.r.i4.pos=" +
                            me.outcomePos[i][j][k][4] + "\n#Perform Spin\nmock.game.setReqParameter action=spin\nmock.game.send\nassert.mock.game.errorResponse false\nassert.mock.game.responseParameter totalwin.coins=" +
                            me.payoutForLine[i][j][k].payout + "\nassert.mock.game.responseParameter totalwin.cents=" +
                            "$totalcent" + counter + "\nstack.balance.push.cm.soapmc.balance\nstack.balance.push.numeric.difference\nstack.balance.assert.numeric.equalsConstant " +
                            "$cash" + counter + "\nstack.balance.push.cm.soapmc.balance\n";
                        text = text + textForOneLine;
                        CONFIG.data[0].push("totalcent" + counter);
                        CONFIG.data[0].push("cash" + counter);
                        fireEvent('writingTextConfig_setPayout', me.payoutForLine[i][j][k].payout);
                        counter++;
                    }
                }
            }

        //console.log(text);
        fireEvent('writingTextConfig_setText', text);

    };

    addListener('setPosition', me.getPosition);
    addListener('setPayout', me.getPayout);

}