function CreateCSVFile(data){
    this.data = data;
    this.createFile = function(){
        var me = this;
        var csvContent = "data:text/csv;charset=utf-8,";
        me.data.forEach(function(infoArray, index){

            dataString = infoArray.join(",");
            csvContent += index < me.data.length ? dataString+ "\n" : dataString;

        });

//var encodedUri = encodeURI(csvContent);
//window.open(encodedUri);

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", CONFIG.csvFileName + ".csv");
        document.body.appendChild(link);

        link.click();
    }
}