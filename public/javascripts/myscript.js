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



$(function(){

	$('#bmi_button').on('click', function(){

		var cur_weight = $('#cur_weight').val();
		var cur_height = $('#cur_height').val();

		if(cur_height <= 0 || cur_weight <= 0 || cur_weight === '' || cur_height === ''){
			alert("Height or Weight cannot be <= 0 or nothing");
		}else{
			var bmi = parseFloat(cur_weight / ((cur_height/100) * (cur_height/100))).toFixed(2);

			var output = "Your BMI is: " + bmi + "<br>";

			$('#bmi_output').html(output);
		}



	});

	var $select = $(".ages");
	for (var i=1; i<=100; i++){
		$select.append($('<option></option>').val(i).html(i));
	}

	function getTDEE(bmr){
		var activity_level = $('#activity_level').val();

		var tdee = 0;
		switch(activity_level){
			case "Sedentary":
				tdee = 1.2 * bmr;
				break;
			case "Light Active":
				tdee = 1.375 * bmr;
				break;
			case "Moderately Active":
				tdee = 1.55 * bmr;
				break;
			case "Very Active":
				tdee = 1.725 * bmr;
				break;
			case "Extremely Active":
				tdee = 1.9 * bmr;
				break;
		}

		return tdee;
	}

	$('#macro_button').on('click', function(){
		var weight = $('#macro_weight').val();

		if(weight <= 0){
			alert("Weight cannot be <= 0 or nothing");
		}else{
			$('#macro_output').html("<br>You should be eating:<br>Protein: " + weight + " - " + 2.2 * weight + " grams<br>Fats: " + (0.9 * weight) + " - " + (1.1 * weight) + " grams<br>Carbs: 0 - " + (4.8 * weight) + " grams");
		}

	});

	$('#bmr').on('click', function(){

		//Women BMR = 655 + (9.6 X weight in kg) + (1.8 x height in cm) – (4.7 x age in yrs)
		//Men BMR = 66 + (13.7 X weight in kg) + (5 x height in cm) – (6.8 x age in yrs)

		let bmr = 0;
		let weight = $('#weight').val();
		let height = $('#height').val();
		let age = parseInt($('.ages').val());

		if(weight <= 0 || height <= 0){

			alert("Height or Weight cannot be <= 0 or nothing");

		}else{

			weight = parseInt(weight);
			height = parseInt(height);

			if($('#gender').val() === "Male"){
				bmr = 66 + (13.7 * weight) + (1.8 * height) - (6.8 * age);
			}else{
				bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
			}

			$('#tdee_output').html("Your TDEE is: " + getTDEE(bmr));

		}



	});

});

            