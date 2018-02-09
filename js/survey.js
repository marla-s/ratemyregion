$('.choice').on('change', function() {
    var crntQuestion=$(this).closest('.q');
    var nextQuestion = $(this).closest('.q').next();

    if (nextQuestion.length !== 0) {
        $('html, body').animate({
            scrollTop: nextQuestion.offset().top-260
        }, 1000);
    }

    // if ($(this).scrollTop() > 0) {
    $('.q').css('opacity', 1);
    crntQuestion.css('opacity', 0.3);
    nextQuestion.css('opacity', 1);
    var next=nextQuestion.next();
    next.css('opacity', 0.3);
});

$(window).on("mousewheel", function(evt) {
    $('.q').css('opacity', 1);
});


$(document).ready(function() {
    $('#rootwizard').bootstrapWizard({onNext: function(tab, navigation, index) {
        // $('questn').removeClass('alert');
        // $('questn').removeClass('alert-danger');
        // var selctrs=["selector1","selector2","selector3","selector4","selector5","selector6","selector7","selector8","selector9","selector10"];
        // var qselctrs=["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"]
        // var scroollSelctrs=["first","second","third","fourth","fifth","six","seven","eight","nine","ten"];


        if(index==1) {
            var selctrs=["selector1","selector2","selector3"];
            var qselctrs=["alertPostion1","alertPostion2","alertPostion3"]
            var scroollSelctrs=["scrollposition1","scrollposition2","scrollposition3"];

            for (i = 0; i < selctrs.length; i++) {

                if ($('input[name='+selctrs[i]+']:checked').length == 0) {
                    // alert("hi");
                    $('.active').find('a').css('opacity',1);
                    $('.active').next('li').find('a').css('opacity',0.5);
                    $('html,body').animate({
                            scrollTop: $('.'+scroollSelctrs[i]).offset().top-240},
                        'slow');
                    $('.'+qselctrs[i]).addClass('alert alert-danger');
                    $('.'+qselctrs[i]).addClass('alert-danger');
                    return false;

                    // do something here
                }

            }

        }

        if(index==2) {
            var selctrs=["selector4","selector5","selector6"];
            var qselctrs=["alertPostion4","alertPostion5","alertPostion6"]
            var scroollSelctrs=["scrollposition4","scrollposition5","scrollposition6"];

            for (i = 0; i < selctrs.length; i++) {

                if ($('input[name='+selctrs[i]+']:checked').length == 0) {
                    // alert("hi");
                    $('.active').find('a').css('opacity',1);
                    $('.active').next('li').find('a').css('opacity',0.5);
                    $('html,body').animate({
                            scrollTop: $('.'+scroollSelctrs[i]).offset().top-240},
                        'slow');
                    $('.'+qselctrs[i]).addClass('alert alert-danger');
                    $('.'+qselctrs[i]).addClass('alert-danger');
                    return false;

                    // do something here
                }

            }

        }
        if(index==3) {
            var selctrs=["selector7","selector8","selector9"];
            var qselctrs=["alertPostion7","alertPostion8","alertPostion9"]
            var scroollSelctrs=["scrollposition7","scrollposition8","scrollposition9"];

            for (i = 0; i < selctrs.length; i++) {

                if ($('input[name='+selctrs[i]+']:checked').length == 0) {
                    // alert("hi");
                    $('.active').find('a').css('opacity',1);
                    $('.active').next('li').find('a').css('opacity',0.5);
                    $('html,body').animate({
                            scrollTop: $('.'+scroollSelctrs[i]).offset().top-240},
                        'slow');
                    $('.'+qselctrs[i]).addClass('alert alert-danger');
                    $('.'+qselctrs[i]).addClass('alert-danger');
                    return false;

                    // do something here
                }

            }

        }
        if(index==4) {
            var selctrs=["selector10","selector11","selector12"];
            var qselctrs=["alertPostion10","alertPostion11","alertPostion12"]
            var scroollSelctrs=["scrollposition10","scrollposition11","scrollposition12"];

            for (i = 0; i < selctrs.length; i++) {

                if ($('input[name='+selctrs[i]+']:checked').length == 0) {
                    // alert("hi");
                    $('.active').find('a').css('opacity',1);
                    $('.active').next('li').find('a').css('opacity',0.5);
                    $('html,body').animate({
                            scrollTop: $('.'+scroollSelctrs[i]).offset().top-240},
                        'slow');
                    $('.'+qselctrs[i]).addClass('alert alert-danger');
                    $('.'+qselctrs[i]).addClass('alert-danger');
                    return false;

                    // do something here
                }

            }

        }
        if(index==5) {
            var selctrs=["selector13","selector14","selector15"];
            var qselctrs=["alertPostion13","alertPostion14","alertPostion15"]
            var scroollSelctrs=["scrollposition13","scrollposition14","scrollposition15"];
            for (i = 0; i < selctrs.length; i++) {

                if ($('input[name='+selctrs[i]+']:checked').length == 0) {
                    // alert("hi");
                    $('.active').find('a').css('opacity',1);
                    $('.active').next('li').find('a').css('opacity',0.5);
                    $('html,body').animate({
                            scrollTop: $('.'+scroollSelctrs[i]).offset().top-240},
                        'slow');
                    $('.'+qselctrs[i]).addClass('alert alert-danger');
                    $('.'+qselctrs[i]).addClass('alert-danger');
                    return false;

                    // do something here
                }

            }

            $('.sbtBtn').css('display',"inline");

        }
        if(index==6) {
            var selctrs=["selector16","selector17","selector18"];
            var qselctrs=["alertPostion19","alertPostion20","alertPostion21"]
            var scroollSelctrs=["scrollposition19","scrollposition20","scrollposition21"];

            for (i = 0; i < selctrs.length; i++) {

                if ($('input[name='+selctrs[i]+']:checked').length == 0) {
                    // alert("hi");
                    $('.active').find('a').css('opacity',1);
                    $('.active').next('li').find('a').css('opacity',0.5);
                    $('html,body').animate({
                            scrollTop: $('.'+scroollSelctrs[i]).offset().top-240},
                        'slow');
                    $('.'+qselctrs[i]).addClass('alert alert-danger');
                    $('.'+qselctrs[i]).addClass('alert-danger');
                    return false;

                    // do something here
                }

            }

        }



        // for next click
        var tabName= $('.active').next('li').data('tname');
        $('#tMainHeader').text(tabName);
        var sNum= +$('.stepNum').text();
         $('.stepNum').text(sNum+1);




    }, onTabShow: function(tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index+1;
        var $percent = ($current/($total-1)) * 100;
        $('#rootwizard .progress-bar').css({width:$percent+'%'});
    }});
});



$('.previous').click(function (e) {
    var tabName= $('.active').prev('li').data('tname');
    $('#tMainHeader').text(tabName);
    var sNum= +$('.stepNum').text();
    $('.stepNum').text(sNum-1);
    $('.sbtBtn').css('display',"none");
});




$(".q input:radio").click(function() {
    $('.questn').removeClass('alert');
    $('.questn').removeClass('alert-danger');
});