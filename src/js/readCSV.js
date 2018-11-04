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
    // CSV to JSON
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){
        var obj = {};
        var currentline=lines[i].replace(/,/,'&').split('&');
        console.log(currentline)
        
        for(var j=0;j<headers.length;j++){
            obj[headers[j].replace("\r", "")] = currentline[j].replace(/['"]+/g, '');
        }
        result.push(obj);
    }
    let resultsDiv = document.querySelector("#results-col");

    // Iterate through every candidate in the CSV file, putting their name as a button and priorities toggleable
    for(var i=0; i<result.length-1; i++){
        let button1 = document.createElement("button");
        button1.className = "results-btn btn btn" + i.toString();
        let para2 = document.createElement("p");
        para2.className = "para" + i.toString();
        para2.style.display = "none";
        let br = document.createElement("br");
        let candidateText = document.createTextNode(result[i]["Candidates"]);
        let prioritiesText = document.createTextNode(result[i]["Priorities"]);
        button1.append(candidateText);
        resultsDiv.append(button1);
        resultsDiv.append(br);
        para2.append(prioritiesText);
        resultsDiv.append(para2);
    }

    // Toggle showing a candidate's priorities with a click
    $(".btn").click(function(){
        var x = this.nextElementSibling.nextElementSibling;
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