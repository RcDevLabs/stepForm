var nextForm = function(){
	event.preventDefault();
	var proxStep = 	$('.currentStep').next('.formStep');
	var proxGuide = 	$('.step.active').next('.step');
	$('.formStep').last().addClass('formStepLast');
	if(validateStep()){
		if($('.currentStep').hasClass('formStepLast')) {
			console.log("estamos no ultimo step com a classe formStepLast");
			var formId = $('.stepForm').attr('id');
			var formContents = getFormObj(formId);
			console.log('O CONTEUDO É: ', formContents)

		} else {
			$('.currentStep').toggleClass('currentStep');
			proxStep.toggleClass('currentStep');
		}
		$('.step.active').toggleClass('active').toggleClass('completed');
		proxGuide.toggleClass('disabled').toggleClass('active');	
	}
};
var getFormObj = function(formId) {
  var formParams = {};
  $('#' + formId)
    .serializeArray()
    .forEach(function(item) {
      if (formParams[item.name]) {
        formParams[item.name] = [formParams[item.name]];
        formParams[item.name].push(item.value)
      } else {
        formParams[item.name] = item.value
      }
    });
  return formParams;
};
var goToStep = function(step){
	var steps = []
		, stepGuides = [];
	console.log('GOTO : ', step);
	$('.formStep').each(function(i, obj){
		steps.push(obj);
	});
	$('.step').each(function(i, obj){
		stepGuides.push(obj);
	});
	$('.step.active').removeClass('active');
	$('.formStep.currentStep').removeClass('currentStep');
	$(steps[step]).addClass('currentStep');
	$(stepGuides[step]).addClass('active');
}

var validateStep = function(){
	//form validation goes here
	return true;
}
var sendForm = function(){
	//send form goes here
}