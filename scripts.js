
$(document).ready(
    function () {
        function updateNavs(nextPos) {
            $('nav').children().removeClass('active');
            $('nav').children().eq(nextPos).addClass('active');
        }

        function updateContent(curPos, nextPos, lastItem) {
            $('.mainContent').children().removeClass('is-visible');
            $('.mainContent').children().eq(nextPos).addClass('is-visible');
            if (nextPos !== 0 && nextPos !== lastItem) {
                $('.header--cta').addClass('is-active');
            }
            else {
                $('.header--cta').removeClass('is-active');
            }

        }

        $('.nav>.nav-item').click(function () {
            console.log(".nav>.nav-item")
            if (!($(this).hasClass('active'))) {
                var $this = $(this)
                var curActive = $this.parent().find('.active')
                var curPos = $this.parent().children().index(curActive)
                var nextPos = $this.parent().children().index($this)
                var lastItem = $(this).parent().children().length - 1;
                updateNavs(nextPos);
                updateContent(curPos, nextPos, lastItem);

            }

        });


        $('.toggle').click(function () {
            console.log(".toggle")

            $('.perspective').addClass('perspective--modalview');
            setTimeout(function () {
                $('.perspective').addClass('effect-rotate-left--animate');
            }, 25);
            $('.outNav').addClass('is-visible');

        });

        $('.outNav>.nav-item').click(function () {
            console.log(".outNav>.nav-item")

            $('.perspective').removeClass('effect-rotate-left--animate');
            setTimeout(function () {
                $('.perspective').removeClass('perspective--modalview');
            }, 400);

            $('.outNav').removeClass('is-visible');
        });


    });


