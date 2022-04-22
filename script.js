$(document).ready(function(){
    $("#sub-form").validate({
        rules:{
            f_name:{
                required:true,
                minlenght: 4
            }
        }
    })
})