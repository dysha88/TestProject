function ReelConfig(){
    var me = this;
    var i,j;
    var reels = [];
    this.text = '';

    var betLineConfig = {
        betLines : [
            [1,1,1,1,1],
            [0,0,0,0,0],
            [2,2,2,2,2],
            [0,1,2,1,0],
            [2,1,0,1,2],
            [0,0,1,0,0],
            [2,2,1,2,2],
            [1,2,2,2,1],
            [1,0,0,0,1],
            [1,0,1,0,1],
            [1,2,1,2,1],
            [0,1,0,1,0],
            [2,1,2,1,2],
            [1,1,0,1,1],
            [1,1,2,1,1],
            [0,1,1,1,0],
            [2,1,1,1,2],
            [0,1,2,2,2],
            [2,1,0,0,0],
            [0,2,0,2,0],
            [2,0,2,0,2],
            [0,2,2,2,0],
            [2,0,0,0,2],
            [0,0,2,0,0],
            [2,2,0,2,2]]
    };

// SYM10,SYM5,SYM6,SYM10,SYM4,SYM9   ---- reel1
// SYM1,SYM5,SYM9,SYM3,SYM7,SYM1   ---- reel2
// SYM2,SYM6,SYM10,SYM4,SYM8,SYM2   ---- reel3
// SYM3,SYM7,SYM1,SYM5,SYM9,SYM3   ---- reel4
// SYM4,SYM8,SYM2,SYM6,SYM10,SYM4   ---- reel5

    me.getText = function(text){
        me.text = text;

    };

    me.getElements = function(){
        for(i = 0; i < 5; i++){
            reels[i] = [];
            reels[i] = document.getElementById('reel' + i).value.split(',');
        }
        console.log(reels);



        function verify(arr, sym){
            for(i = 0; i < arr.length; i++){
                var unacceptableSyms = [GAMECONFIG.SYM0,GAMECONFIG.SYM1,GAMECONFIG.SYM2, arr[i+1]];
                for(j = 0; j < unacceptableSyms.length; j++){
                    if(sym == arr[i+1] && arr[i] != SYM1){
                        return i;
                    }
                }
            }
        }

        // Verifying for 3 win symbols

        for (i = 0; i < reels.length; i++) {
            for(j = 0; j < reels[i].length; j++){

            }
             if ((reel0[i] == "SYM10") && (reel0[i + 1] !== "SYM2") && (reel0[i + 2] !== "SYM2")) {
                    console.log(reel0[i]);
                    console.log(i);
                    //document.write(i);
                    break;
             }
        }

        for (i = 0; i < reel1.length; i++) {
            if ((reel1[i] == "SYM10") && (reel1[i + 1] !== "SYM2") && (reel1[i + 2] !== "SYM2")) {
                console.log(reel1[i]);
                console.log(i);

                break;
            }
        }

        document.write(me.text);
        console.log(me.text);



    };

    addListener('writingTextConfig_setText', me.getText)

}