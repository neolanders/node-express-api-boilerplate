// CUSTOM JS FILE //
$(function(){
    $("#modal-launcher, #modal-background, #modal-close").click(function() {
        $("#modal-content, #modal-background").toggleClass("active");
    });

    $('a[href$="display"]').click(function() {
        $("#modal-content, #modal-background").toggleClass("active");
        $.getJSON('/api/get', function(data) {
            $('#modal-content .inner-content .add-form').hide();
            console.log(data);
            var animals = data.animals;
            animals.forEach(function(e){
                var htmlToAppend = '<p>'+e.name+'</p>';
                $('#modal-content .inner-content').empty().append(htmlToAppend);
            })
        }); 
    });
});