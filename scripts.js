
$(document).ready(

    function () {

        $('.nav-item, .outer-nav li').click(function () {
            console.log("HOLAAA")
            if (!($(this).hasClass('active'))) {

                var $this = $(this)
                var curActive = $this.parent().find('.active')
                var curPos = $this.parent().children().index(curActive)
                var nextPos = $this.parent().children().index($this)
                var lastItem = $(this).parent().children().length - 1;
                console.log(curPos + "-" + nextPos)

                updateNavs(nextPos);
                updateContent(curPos, nextPos, lastItem);

            }

        });



        function updateNavs(nextPos) {
            $('nav').children().removeClass('active');
            $('nav').children().eq(nextPos).addClass('active');
        }


        // update main content area
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


    }
);


