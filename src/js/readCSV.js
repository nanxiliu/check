function main() {
    $(document).ready(function() {
        $.ajax({
            type: "GET",
            url: "result.csv",
            dataType: "text",
            success: function(data) {processData(data);}
         });
    });
}; 

function processData(csv) {
    // let allTextLines = allText.split(/\r\n|\n/);
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].split(",");

        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    let json = JSON.stringify(result); 
    
    let resultsDiv = document.querySelector("#results-col");
    let point1 = document.createElement("p");
    let text = document.createTextNode(json);
    point1.append(text);
    resultsDiv.append(point1);

};

window.onload = function() {
    main();

    // Click and alert: http://jsfiddle.net/AMsK9/
    $(document).ready(function (e) {
        $('#sample-ballot').click(function (e) { //Offset mouse Position
            var posX = $(this).offset().left,
                posY = $(this).offset().top;
            alert((e.pageX - posX) + ' , ' + (e.pageY - posY));
        })
    });
};