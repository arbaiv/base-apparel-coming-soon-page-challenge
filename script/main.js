var $inputEl = $("input#email");
$inputEl.on('invalid', function(e){
    if(e.target.validity.valueMissing || e.target.validity.typeMismatch){
        // Sets the default form validation message to none.
        e.target.setCustomValidity(" ");
        // Adds custom form validation message 
        $("div#input-invalid-box").fadeIn(200);
        $("svg.icon-error").fadeIn(200);
    }
});
$inputEl.on('change', function(e){
    e.target.setCustomValidity(" ");
    $("div#input-invalid-box").fadeOut(200);
    $("svg.icon-error").fadeOut(200);
});