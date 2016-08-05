function WritingText(){
    var me = this;
    this.outcomePos = [];


    this.getPosition = function(outcome){
        me.outcomePos = outcome;
    };

    this.writeText = function(lineNum, symbol){
        var text = "!Testing payout combinations in main game from paytable\n!Related testcase id:MEGAJPTWO-361\n!related requirement id:MEGAJPTWO-361\nload ./" + CONFIG.csvFileName + ".csv\n#Register player\ncontext.set autotest.currency $currency\ncontext.set autotest.extras channel,bbg\ncm.soapmc.registerPlayer $user\n#Deposit money to user account\ncm.soapmc.depositUserMoney 5000\n#Login Player\ncm.soapmc.loginPlayer\nmock.game.setRequest action=init&freeroundmode=false&gameId=" + CONFIG.gameName + "&sessid=1320914459356-76-ZNZ2QWVTA594I&wantsfreerounds=true&wantsreels=true&no-cache=1320914462790\nmock.game.send\nassert.mock.game.responseParameter denomination.standard=$defaultdenomination\nmock.game.setReqParameter action=paytable\nmock.game.send\nmock.game.setReqParameter action=jmxinit\nmock.game.send\nmock.game.setReqParameter action=rcinit\nmock.game.send\nassert.mock.game.errorResponse false\nstack.balance.push.cm.soapmc.balance\nmock.game.setReqParameter bet.betlevel=" + CONFIG.betLevelNum +
            "\nmock.game.setReqParameter bet.betlines=" + CONFIG.betLinesNum +
            "\nmock.game.setReqParameter bet.denomination=$denomination\nmock.game.setReqParameter freeroundmode=false\nstack.balance.push.cm.soapmc.balance\n";
        var textForSpin1 = "#####  LINE " + lineNum + " 3 " + symbol + "  ######\nmock.game.setReqParameter jmx.rs.i0.id=basic\nmock.game.setReqParameter jmx.rs.i0.r.i0.pos=" + me.outcomePos[0][0] + "\nmock.game.setReqParameter jmx.rs.i0.r.i1.pos=" + me.outcomePos[0][1] + "\nmock.game.setReqParameter jmx.rs.i0.r.i2.pos=" + me.outcomePos[0][2] + "\nmock.game.setReqParameter jmx.rs.i0.r.i3.pos=" + me.outcomePos[0][3] + "\nmock.game.setReqParameter jmx.rs.i0.r.i4.pos=" + me.outcomePos[0][4] + "\n#Perform Spin\nmock.game.setReqParameter action=spin\nmock.game.send\nassert.mock.game.errorResponse false\nassert.mock.game.responseParameter totalwin.coins=5\nassert.mock.game.responseParameter totalwin.cents=$totalcent7\nstack.balance.push.cm.soapmc.balance\nstack.balance.push.numeric.difference\nstack.balance.assert.numeric.equalsConstant $cash7\nstack.balance.push.cm.soapmc.balance";
        var textForSpin2 = "#####  LINE " + lineNum + " 4 " + symbol + "  ######\nmock.game.setReqParameter jmx.rs.i0.id=basic\nmock.game.setReqParameter jmx.rs.i0.r.i0.pos=" + me.outcomePos[0][0] + "\nmock.game.setReqParameter jmx.rs.i0.r.i1.pos=" + me.outcomePos[0][1] + "\nmock.game.setReqParameter jmx.rs.i0.r.i2.pos=" + me.outcomePos[0][2] + "\nmock.game.setReqParameter jmx.rs.i0.r.i3.pos=" + me.outcomePos[0][3] + "\nmock.game.setReqParameter jmx.rs.i0.r.i4.pos=" + me.outcomePos[0][4] + "\n#Perform Spin\nmock.game.setReqParameter action=spin\nmock.game.send\nassert.mock.game.errorResponse false\nassert.mock.game.responseParameter totalwin.coins=5\nassert.mock.game.responseParameter totalwin.cents=$totalcent7\nstack.balance.push.cm.soapmc.balance\nstack.balance.push.numeric.difference\nstack.balance.assert.numeric.equalsConstant $cash7\nstack.balance.push.cm.soapmc.balance";
        var textForSpin3 = "#####  LINE " + lineNum + " 5 " + symbol + "  ######\nmock.game.setReqParameter jmx.rs.i0.id=basic\nmock.game.setReqParameter jmx.rs.i0.r.i0.pos=" + me.outcomePos[0][0] + "\nmock.game.setReqParameter jmx.rs.i0.r.i1.pos=" + me.outcomePos[0][1] + "\nmock.game.setReqParameter jmx.rs.i0.r.i2.pos=" + me.outcomePos[0][2] + "\nmock.game.setReqParameter jmx.rs.i0.r.i3.pos=" + me.outcomePos[0][3] + "\nmock.game.setReqParameter jmx.rs.i0.r.i4.pos=" + me.outcomePos[0][4] + "\n#Perform Spin\nmock.game.setReqParameter action=spin\nmock.game.send\nassert.mock.game.errorResponse false\nassert.mock.game.responseParameter totalwin.coins=5\nassert.mock.game.responseParameter totalwin.cents=$totalcent7\nstack.balance.push.cm.soapmc.balance\nstack.balance.push.numeric.difference\nstack.balance.assert.numeric.equalsConstant $cash7\nstack.balance.push.cm.soapmc.balance";
        text = text + textForSpin1;
        console.log(text);
        fireEvent('writingTextConfig_setText', text);

    };

    addListener('setPosition', me.getPosition);

}