//document.getElementById("myForm").addEventListener("submit", myFunction);


$(document).ready(function() {

    $('#myForm1').off("click").on("click", function (e) {
        e.preventDefault();
        var options = {
            'name': $('input[name=name]').val(),
            'height': $('input[name=height]').val(),
            'weight': $('input[name=weight]').val()
        }
        myFunction(options);
    })

})


function myFunction(data) {
    alert(data.name + data.weight + data.height);
    var BMI =  data.weight/ (data.height*data.height)

    $("p:last").html("BMI is =" + BMI+ "<b>world</b>!");

    $(document.body).append('<div class="phnbr"><div class="phtext">hi how are you, <a target="_blank" href="http://www.xyz.com">click here.</a></div></div>');
    /* do what you want with the form */

    // You must return false to prevent the default form behavior
    //return false;
}