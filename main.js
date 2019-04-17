$(document).ready(function () {
	$("#btn").click(function () {
		var mon = $("input[name=monday]:checked").val();
		var tues = $("input[name=tuesday]:checked").val();
		var wed = $("input[name=wednesday]:checked").val();
		var thur = $("input[name=thursday]:checked").val();
		var fri = $("input[name=friday]:checked").val();
		var sat = $("input[name=saturday]:checked").val();
		var sun = $("input[name=sunday]:checked").val();
		$(".cost").addClass("active");

		console.log(mon);
		console.log(tues);
		console.log(wed);
		console.log(thur);
		console.log(fri);
		console.log(sat);
		console.log(sun);

		let finalmon = parseFloat(mon);
		let finaltues = parseFloat(tues);
		let finalwed = parseFloat(wed);
		let finalthurs = parseFloat(thur);
		let finalfri = parseFloat(fri);
		let finalsat = parseFloat(sat);
		let finalsun = parseFloat(sun);

		let finalvalue = finalmon + finaltues + finalwed + finalthurs + finalfri + finalsat + finalsun;
		let avalue = finalvalue * 52
		let mvalue = avalue / 12
		console.log("finalvalue");
		console.log(finalvalue);
		console.log("avalue");
		console.log(avalue);
		console.log("mvalue");
		console.log(mvalue);


		$("#tcost").find("span").text(finalvalue);
		$("#mcost").find("span").text(mvalue);
		$("#acost").find("span").text(avalue);

	});

	$("#rst-btn").on("click", function () {
		$("input[type=radio]").prop("checked", function () {
			return this.getAttribute("checked") == "checked";
		});

		$(".cost.active").removeClass("active");

	});

});