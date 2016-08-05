function Reel(reelStrip, unexceptableSyms, lessUnexceptableSym) {

    this.reelStrip = reelStrip;
    this.position = null;
    //this.strictMode = true;
    this.outcome = [];

    this.findPosition = function (symbol, outcomePos, additionalUnexceptableSyms, dbg) {
        var me = this,
            reelStripLength = me.reelStrip.length,
            i;

        if(dbg){
            //debugger;
        }

        for (i = 0; i < reelStripLength; i++) {
            if (me.reelStrip[i + outcomePos] != undefined && me.reelStrip[i + outcomePos] == symbol) {

                if (me.isNotInUnexSyms(i, unexceptableSyms) && me.isNotInUnexSyms(i, additionalUnexceptableSyms)) {
                    this.position = i;
                    return me.position;
                }

            }
        }

        if (me.position == null) {

            for (i = 0; i < reelStripLength; i++) {
                if (me.reelStrip[i + outcomePos] != undefined && me.reelStrip[i + outcomePos] == symbol) {

                    if (me.isNotInUnexSyms(i, [lessUnexceptableSym])) {
                        this.position = i;
                        return me.position;
                    }

                }
            }

        }


        return me.position;
    };


    this.getAddSyms = function (symbol) {
        var me = this,
            result = [],
            i;

        for (i = me.position; i < me.position + CONFIG.symsOnReel; i++) {
            if (me.reelStrip[i] != symbol) {
                result.push(me.reelStrip[i]);
            }
        }

        return result;
    };

    this.isNotInUnexSyms = function (posOnReelStrip, unexceptableSyms) {
        var me = this,
            i, j;

        for (i = posOnReelStrip; i < posOnReelStrip + CONFIG.symsOnReel; i++) {
            for (j = 0; j < unexceptableSyms.length; j++) {
                if (me.reelStrip[i] == unexceptableSyms[j]) {
                    return false;
                }
            }
        }

        return true;
    };

    this.findPositionWithoutWinSymbol = function(additionalUnexceptableSyms){
        var me = this,
            reelStripLength = me.reelStrip.length,
            i;

        for (i = 0; i < reelStripLength; i++) {
            if (me.isNotInUnexSyms(i, unexceptableSyms) && me.isNotInUnexSyms(i, additionalUnexceptableSyms)) {
                this.position = i;
                return me.position;
            }
        }
    };

}




