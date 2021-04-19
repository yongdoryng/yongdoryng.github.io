$(function () {
    var yongSwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'vertical',
        loop: false,
        mousewheel: true,
        on: {
            slideChange: function () {
                var yong = yongSwiper.activeIndex;
                if ($(window).width() >= 768) {
                    if (yong == 0) {
                        $('header').removeClass('active');
                    } else {
                        $('header').addClass('active');
                    }
                }
                $('.main-nav li').eq(yong).addClass('active').siblings().removeClass('active'); //슬라이드 체인지 됐을때, 메뉴바 위치를 work,tip위치에 맞추기 위해작성.두번째 실행
                if ($(window).width() >= 768) {
                    barPos();
                }
            },
        },
        // height: 100,
        speed: 500,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        updateOnWindowResize: true,
        simulateTouch: false,
        draggable: true,
    });

    if ($(window).width() >= 768) {
        barPos(); //function barPos호출
    }
    $(window).resize(function () {
        if ($(window).width() >= 768) {
            barPos(); //barPos함수 호출(이유는 똑같은걸 여러번쓰는걸 방지하기 위해 함수를 만들어서 수정이 편리하게 하기 위해서 펑션 barPos를 만들어서 호출함.)
        }
    });
    function barPos() { //기능 barPos "바포지션 약자로 임의로 지음." 를 만듬. 코드 단축위해서
        var posLeft = $('.main-nav li.active').offset().left; //메뉴 바 위치를 첫번째위치에 맞추기 위해, 그리고 웹일때 실행. 먼저실행
        var barWidth = $('.main-nav li.active').width();
        $('.bar').css({
            left: posLeft,
            width: barWidth,
        });
    }

    // console.log(posLeft)

    $('.main-nav a').click(function (e) {//a태그 동작을 막기위해서 쓴다. a링크동작안함.e랑
        e.preventDefault(); //a태그 동작을 막기위해서 쓴다. a링크동작안함. 펑션e랑 프리벤트디폴트 앞에 e랑 똑같이 쓰기만하면 어떤 알파벳써도 상관없음. 외울것.
        var idx = $(this).parent().index();
        yongSwiper.slideTo(idx); //메인메뉴 이동! idx 는 인덱스 약자
    });

    var yongSwiper2 = new Swiper('.work-slide', {
        //work슬라이더
        loop: false,
        pagination: {
            el: '.work-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 300,
        width: 970,
    });

    $('.tab-list a').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).addClass('active').siblings().removeClass('active');
        $(this).parent().addClass('active').siblings().removeClass('active');
    }); //tab 이벤트

    $('.m-btn').click(function () {
        $(this).toggleClass('active');  // 햄버거메뉴 x 움직임
        $(this).siblings('.main-nav').toggleClass('active');
        // $(this).parent().toggleClass('active');
    }); //모바일버전 메뉴 이벤트
});