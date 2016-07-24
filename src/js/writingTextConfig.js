function WritingText(){
    var me = this;


    me.writeText = function(){
        var csvFileName = document.getElementById('csvFile').value;
        var gameName = document.getElementById('gameId').value;
        var betLines = document.getElementById('betLinesNum').value;
        var betLevel = document.getElementById('betLevelNum').value;
        var text = "!Testing payout combinations in main game from paytable\n!Related testcase id:MEGAJPTWO-361\n!related requirement id:MEGAJPTWO-361\nload ./" + csvFileName + ".csv\n#Register player" +
            "context.set autotest.currency $currency" +
            "context.set autotest.extras channel,bbg" +
            "cm.soapmc.registerPlayer $user" +
            "" +
            "#Deposit money to user account" +
            "cm.soapmc.depositUserMoney 5000" +
            "" +
            "#Login Player" +
            "cm.soapmc.loginPlayer" +
            "mock.game.setRequest action=init&freeroundmode=false&gameId=" + gameName + "&sessid=1320914459356-76-ZNZ2QWVTA594I&wantsfreerounds=true&wantsreels=true&no-cache=1320914462790" +
            "mock.game.send" +
            "assert.mock.game.responseParameter denomination.standard=$defaultdenomination" +
            "mock.game.setReqParameter action=paytable" +
            "mock.game.send" +
            "mock.game.setReqParameter action=jmxinit" +
            "mock.game.send" +
            "mock.game.setReqParameter action=rcinit" +
            "mock.game.send" +
            "assert.mock.game.errorResponse false" +
            "stack.balance.push.cm.soapmc.balance" +
            "" +
            "mock.game.setReqParameter bet.betlevel=" + betLevel +
            "mock.game.setReqParameter bet.betlines=" + betLines +
            "mock.game.setReqParameter bet.denomination=$denomination" +
            "mock.game.setReqParameter freeroundmode=false" +
            "" +
            "stack.balance.push.cm.soapmc.balance";
        fireEvent('writingTextConfig_setText', text);
    }

}