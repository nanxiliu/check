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
            obj[headers[j].replace("\r", "")] = currentline[j];
        }
        result.push(obj);
    }
    let resultsDiv = document.querySelector("#results-col");

    for(var i=0; i<result.length; i++){
        let para1 = document.createElement("button");
        para1.className = "btn btn" + i.toString();
        let para2 = document.createElement("p");
        para2.className = "para" + i.toString();
        let candidateText = document.createTextNode(result[i]["Candidates"]);
        let prioritiesText = document.createTextNode(result[i]["Priorities"]);
        para1.append(candidateText);
        resultsDiv.append(para1);
        para2.append(prioritiesText);
        resultsDiv.append(para2);
    }

    $(".btn0").click(function(){
        var x = document.querySelector(".para0");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    });

    $(".btn1").click(function(){
        var x = document.querySelector(".para1");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    });
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