function CreateCSVFile(data){
    var me = this;
    this.data = data;
    this.text = '';
    this.createCSVFile = function(){
        var me = this;
        var csvContent = "data:text/csv;charset=utf-8,";
        me.data.forEach(function(infoArray, index){

            dataString = infoArray.join(",");
            csvContent += index < me.data.length ? dataString+ "\n" : dataString;

        });

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", CONFIG.csvFileName + ".csv");
        document.body.appendChild(link);

        link.click();
    };
    this.getTXTFile = function(text){
        me.text = text;
    };
    this.createTXTFile = function(){
        var pom = document.createElement('a');
        pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(me.text));
        pom.setAttribute('download', CONFIG.csvFileName);

        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            pom.dispatchEvent(event);
        }
        else {
            pom.click();
        }
    };
    addListener('writingTextConfig_setText', me.getTXTFile);
}