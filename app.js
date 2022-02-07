$('#home').click(function(){
    $("#home").addClass("info");
    $("#order").removeClass("info");
    $("#company").removeClass("info");
    $("#faq").removeClass("info");
    $("#contact").removeClass("info");
    $('.navbar-box .navbar .link').toggleClass('link-active');  
});
$('#order').click(function(){
    $("#home").removeClass("info");
    $("#order").addClass("info");
    $("#company").removeClass("info");
    $("#faq").removeClass("info");
    $("#contact").removeClass("info");
    $('.navbar-box .navbar .link').toggleClass('link-active');
});
$('#company').click(function(){
    $("#home").removeClass("info");
    $("#order").removeClass("info");
    $("#company").addClass("info");
    $("#faq").removeClass("info");
    $("#contact").removeClass("info");
    $('.navbar-box .navbar .link').toggleClass('link-active');
});
$('#faq').click(function(){
    $("#home").removeClass("info");
    $("#order").removeClass("info");
    $("#company").removeClass("info");
    $("#faq").addClass("info");
    $("#contact").removeClass("info");
    $('.navbar-box .navbar .link').toggleClass('link-active');
});
$('#contact').click(function(){
    $("#home").removeClass("info");
    $("#order").removeClass("info");
    $("#company").removeClass("info");
    $("#faq").removeClass("info");
    $("#contact").addClass("info");
    $('.navbar-box .navbar .link').toggleClass('link-active');
});