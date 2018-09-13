// $("ul").on("mouseover", "li", function() {
//     $(this).children('img.projectImages').toggleClass("hideProject");

// });

//SHOW HIDE PROJECTS
$(".projectList").find('.expansion').hide();

$(".indiProjects").on("click", ".findOutMore", function () {
    $(this).parents(".row").siblings('.expansion').slideDown();
    var replacement = '<button type="button" class="btn btn-large btn-primary-light btn-square hideThisButton"><i class="fa fa-angle-up" aria-hidden="true"></i> Hide</button>';
    $(replacement).replaceAll(this);

});

$(".indiProjects").on("click", ".hideThisButton", function () {
    $(this).parents(".row").siblings('.expansion').slideUp();
    var replacement = '<button type="button" class="btn btn-large btn-primary-light btn-square findOutMore"><i class="fa fa-angle-down" aria-hidden="true"></i>Find out more</button>';
    $(replacement).replaceAll(this);
});




$("#submitBtn").click(function () {
    var completeText;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('messageBox').value;
    alert(name + " " + email + " " + message);
    window.open('mailto:jnisitha@gmail.com?subject=subject&body=message');
});


$('a[href="#toProjects"]').click(function () {
    $(window).scrollTo($("#Projects"));
});

$('a[href="#toSkills"]').click(function () {
    $(window).scrollTo($("#Skills"));
});

$('a[href="#toAbout"]').click(function () {
    $(window).scrollTo($("#About"));
});

$('a[href="#toContact"]').click(function () {
    $(window).scrollTo($("#Contact"));
});

