function ReelConfig(){
    var me = this;
    this.unexceptableSyms = ['SYM0', 'SYM1', 'SYM2'];
    this.startPos1 = -1;
    this.startPos2 = -1;
    this.startPos3 = -1;
    this.startPos4 = -1;
    this.startPos5 = -1;
    this.previousReelStrip = [];
    this.strip1 = [];
    this.strip2 = [];
    this.strip3 = [];
    this.strip4 = [];
    this.strip5 = [];
    this.outcomeStartPos = 0;
    this.outcomeStartPos2 = 0;
    this.text = '';
    this.winCombination = [];
    //me.reels = CONFIG.reels;
    //this.finalReelStrip1 = [];
    //this.finalReelStrip2 = [];
    //this.finalReelStrip3 = [];
    //this.finalReelStrip4 = [];
    //this.finalReelStrip5 = [];
    //console.log(me.outcomeStartPos);


    this.getText = function(text){
        me.text = text;
    };

    this.getStartPos = function(symbol, reelSet, posOnReel, startPos){
        var i;

        console.log(symbol, reelSet, posOnReel, startPos);
        console.log(me.outcomeStartPos);

        for(i = startPos + posOnReel + 1; i < reelSet.length; i++){
            if(symbol == reelSet[i]){
                console.log(symbol, reelSet, posOnReel, startPos);
                console.log(me.outcomeStartPos);
                me.outcomeStartPos = i - posOnReel;
                console.log(me.outcomeStartPos);
                return me.outcomeStartPos;
            }
        }
        console.error("No such combinations on reel");
        //return null;
    };

    this.getStartPosForReelStripWithoutConcreteSymbol = function(symbol, reelSet, posOnReel, startPos){
        var i;
        for(i = startPos + posOnReel + 1; i < reelSet.length; i++){
            if(symbol != reelSet[i]){
                me.outcomeStartPos2 = i - posOnReel;
                return me.outcomeStartPos2;
            }
        }
        console.error("No such combinations on reel");
    };

    this.findReelStrip = function(startPos, reelSet, symsOnReel){
        var result = [],
            i;

        for(i = 0; i < symsOnReel; i++){
            result.push(reelSet[startPos + i]);
        }
        return result;
    };

    this.verifyReelStrip = function(symbol, reelStrip, unexceptableSyms, startPos, includeConcreteSymbol, reelSet, posOnReel){
        var i,j;
        //debugger;
        //console.log(includeConcreteSymbol);
        //console.log(unexceptableSyms);
        if(includeConcreteSymbol){
            for(i = 0; i < reelStrip.length; i++){
                for(j = 0; j < unexceptableSyms.length; j++){
                    if(reelStrip[i] == unexceptableSyms[j]){
                        console.log(symbol, reelSet, posOnReel, startPos);
                        startPos = me.getStartPos(symbol, reelSet, posOnReel, startPos);
                        console.log(startPos);
                        reelStrip = me.findReelStrip(startPos, reelSet, CONFIG.symsOnReel);
                        console.log(reelStrip);
                        reelStrip = me.verifyReelStrip(symbol, reelStrip, CONFIG.unexceptableSyms.splice(0), startPos, true, reelSet, posOnReel);
                        console.log(reelStrip);
                        return reelStrip;
                    }
                }
            }
            me.winCombination.push(startPos);
            return reelStrip;
        }
        unexceptableSyms.push(CONFIG.symbol[1]);
        //console.log(unexceptableSyms);
        for(i = 0; i < reelStrip.length; i++){
            for(j = 0; j < unexceptableSyms.length; j++){
                if(reelStrip[i] == unexceptableSyms[j]){
                    startPos = me.getStartPosForReelStripWithoutConcreteSymbol(symbol, reelSet, posOnReel, startPos);
                    console.log(startPos);
                    reelStrip = me.findReelStrip(startPos, reelSet, CONFIG.symsOnReel);
                    console.log(reelStrip);
                    unexceptableSyms.pop();
                    reelStrip = me.verifyReelStrip(symbol, reelStrip, CONFIG.unexceptableSyms.splice(0), startPos, false, reelSet, posOnReel);
                    console.log(reelStrip);
                    return reelStrip;
                }
            }
        }
        me.winCombination.push(startPos);
        return reelStrip;
    };


    this.verifyReelStripForSecondReel = function(symbol, reelStrip, unexceptableSyms, posOnReel){
        var i, j;
        me.previousReelStrip = me.strip1;
        me.previousReelStrip.splice(posOnReel,1);
        console.log(me.previousReelStrip);
        for(i = 0; i < me.previousReelStrip.length; i++){
                unexceptableSyms.push(me.previousReelStrip[i]);
        }
        console.log(unexceptableSyms);
        for(i = 0; i < reelStrip.length; i++){
            for(j = 0; j < unexceptableSyms.length; j++){
                if(reelStrip[i] == unexceptableSyms[j]){
                    me.startPos2 = me.getStartPos(symbol, CONFIG.reels[1], posOnReel, me.startPos2);
                    console.log(me.startPos2);
                    me.strip2 = me.findReelStrip(me.startPos2, CONFIG.reels[1], CONFIG.symsOnReel);
                    console.log(me.strip2);
                    for(i = 0; i < me.previousReelStrip.length; i++){
                        unexceptableSyms.pop();
                    }
                    console.log(unexceptableSyms);
                    me.strip2 = me.verifyReelStripForSecondReel(symbol, me.strip2, me.unexceptableSyms, posOnReel);
                    //console.log(me.finalReelStrip2);
                    return me.strip2;
                }
            }
        }
        me.winCombination.push(me.startPos2);
        return me.strip2;
    };

    this.getElements = function(neededSymbol, betLine, fourWinSymbols, fiveWinSymbols){
        //console.log(CONFIG.reels[0]);
        //console.log(CONFIG.reels[1]);
        //console.log(CONFIG.reels[2]);
        //console.log(CONFIG.reels[3]);
        //console.log(CONFIG.reels[4]);
        //console.log(CONFIG.betLines[1][1]);
        console.log(neededSymbol, betLine, fourWinSymbols, fiveWinSymbols);

        me.startPos1 = me.getStartPos(neededSymbol, CONFIG.reels[0], betLine[0], me.startPos1);
        console.log(me.startPos1);
        //me.winCombination.push(me.startPos1);

        //var cnt = true,
        //    pos = -1,
        //    syms = [];
        //
        //    pos = me.getStartPos(CONFIG.symbol[1], CONFIG.reels[0], CONFIG.posOnReel, pos);
        //
        //    syms = me.findReelStrip(pos, CONFIG.reels[0], CONFIG.symsOnReel);
        //
        //    console.log(pos, syms);
        //
        //    pos = me.getStartPos(CONFIG.symbol[1], CONFIG.reels[0], CONFIG.posOnReel, pos);
        //    console.log(pos);
        //    pos = me.getStartPos(CONFIG.symbol[1], CONFIG.reels[0], CONFIG.posOnReel, pos);
        //    console.log(pos);
        //    pos = me.getStartPos(CONFIG.symbol[1], CONFIG.reels[0], CONFIG.posOnReel, pos);
        //    console.log(pos);
        //    pos = me.getStartPos(CONFIG.symbol[1], CONFIG.reels[0], CONFIG.posOnReel, pos);
        //    console.log(pos);
        //    pos = me.getStartPos(CONFIG.symbol[1], CONFIG.reels[0], CONFIG.posOnReel, pos);
        //    console.log(pos);


        me.strip1 = me.findReelStrip(me.startPos1, CONFIG.reels[0], CONFIG.symsOnReel);
        console.log(me.strip1);

        me.strip1 = me.verifyReelStrip(neededSymbol, me.strip1, CONFIG.unexceptableSyms.splice(0), me.startPos1, true, CONFIG.reels[0], betLine[0]);
        console.log(me.strip1);


        me.startPos2 = me.getStartPos(neededSymbol, CONFIG.reels[1], betLine[1], me.startPos2);
        //console.log(me.startPos2);
        //me.winCombination.push(me.startPos2);

        me.strip2 = me.findReelStrip(me.startPos2, CONFIG.reels[1], CONFIG.symsOnReel);
        //console.log(me.strip2);

        me.strip2 = me.verifyReelStripForSecondReel(neededSymbol, me.strip2, me.unexceptableSyms.splice(0), betLine[1]);
        //console.log(me.strip2);


        me.startPos3 = me.getStartPos(neededSymbol, CONFIG.reels[2], betLine[2], me.startPos3);
        //console.log(me.startPos3);
        //me.winCombination.push(me.startPos3);


        me.strip3 = me.findReelStrip(me.startPos3, CONFIG.reels[2], CONFIG.symsOnReel);
        //console.log(me.strip3);
        //console.log(me.startPos3);

        me.strip3 = me.verifyReelStrip(neededSymbol, me.strip3, CONFIG.unexceptableSyms.splice(0), me.startPos3, true, CONFIG.reels[2], betLine[2]);
        //console.log(me.strip3);


        me.startPos4 = me.getStartPos(neededSymbol, CONFIG.reels[3], betLine[3], me.startPos4);
        //console.log(me.startPos4);


        me.strip4 = me.findReelStrip(me.startPos4, CONFIG.reels[3], CONFIG.symsOnReel);
        //console.log(me.strip4);

        me.strip4 = me.verifyReelStrip(neededSymbol, me.strip4, CONFIG.unexceptableSyms.splice(0), me.startPos4, fourWinSymbols, CONFIG.reels[3], betLine[3]);
        //console.log(me.strip4);


        me.startPos5 = me.getStartPos(neededSymbol, CONFIG.reels[4], betLine[4], me.startPos5);
        //console.log(me.startPos5);


        me.strip5 = me.findReelStrip(me.startPos5, CONFIG.reels[4], CONFIG.symsOnReel);
        //console.log(me.strip5);

        me.strip5 = me.verifyReelStrip(neededSymbol, me.strip5, CONFIG.unexceptableSyms.splice(0), me.startPos5, fiveWinSymbols, CONFIG.reels[4], betLine[4]);
        //console.log(me.strip5);

        console.error(me.winCombination);
        console.error(me.strip1, me.strip2, me.strip3, me.strip4, me.strip5);

        //document.write(me.text);
        //console.log(me.text);

    };

    addListener('writingTextConfig_setText', me.getText)

}