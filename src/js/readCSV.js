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

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    let resultsDiv = document.querySelector("#results-col");
    let point1 = document.createElement("p");
    let text = document.createTextNode(allTextLines);
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