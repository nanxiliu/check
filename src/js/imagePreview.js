function main() { 
    $(document).ready( function() {
        $(document).on('change', '.btn-file :file', function() {
        var input = $(this),
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [label]);
        });

        $('.btn-file :file').on('fileselect', function(event, label) {
            
            var input = $(this).parents('.input-group').find(':text'),
                log = label;
            
            if( input.length ) {
                input.val(log);
            } else {
                if( log ) alert(log);
            }
        
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#img-upload').attr('src', e.target.result);
                }
                
                reader.readAsDataURL(input.files[0]);
                console.log(reader);
                console.log($('#img-upload').attr('src', e.target.result));
            }
        }

        $("#imgInp").change(function(){
            readURL(this);
        }); 
        
        // Click and alert: http://jsfiddle.net/AMsK9/
        $(document).ready(function (e) {
            $('#img-upload').click(function (e) { //Offset mouse Position
                var posX = $(this).offset().left,
                    posY = $(this).offset().top;
                alert((e.pageX - posX) + ' , ' + (e.pageY - posY));
            })
        });
    });
};

window.onload = function() {
    main();
};