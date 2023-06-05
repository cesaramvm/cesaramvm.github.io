
$(document).ready(
    function () {

        perspectiveMode = 0;
        function changeArticle(curPos, nextPos) {
            updateNavs(nextPos);
            updateContent(curPos, nextPos);
        }

        function updateNavs(pos) {
            activeMenuOption(".sideNav", pos);
            activeMenuOption(".outNav", pos);
        }

        function activeMenuOption(menuClass, pos) {
            $(menuClass).children().removeClass('active');
            $(menuClass).children().eq(pos).addClass('active');
        }

        function updateContent(curPos, nextPos) {
            makeContentInvisible(".mainContent", curPos);
            makeContentVisible(".mainContent", nextPos);
        }

        function changeContentClasses(classSelector, pos, claseAdd, claseRemove) {
            $(classSelector).children().eq(pos).addClass(claseAdd);
            $(classSelector).children().eq(pos).removeClass(claseRemove);
        }
        function makeContentVisible(classSelector, pos) {
            changeContentClasses(classSelector, pos, "d-flex", "d-none")
        }
        function makeContentInvisible(classSelector, pos) {
            changeContentClasses(classSelector, pos, "d-none", "d-flex")
        }

        function backToNormalPerspective() {            
            $('.outNavContainer').addClass('d-none');
            $('.outNavContainer').removeClass('d-block');
            setTimeout(function () {
                $('.perspective').removeClass('effect-rotate-left--animate');
            }, 150);
            setTimeout(function () {
                $('.perspective').removeClass('perspective--modalview');
            }, 500);
            setTimeout(function () {
                document.getElementsByClassName("all-fluid")[0].style.cursor = "default";
            }, 50);

            perspectiveMode = 0;
        }

        function goToPerspective() {
            $('.perspective').addClass('perspective--modalview');
            setTimeout(function () {
                $('.perspective').addClass('effect-rotate-left--animate');
            }, 25);
            setTimeout(function () {
                $('.outNavContainer').addClass('d-block');
                $('.outNavContainer').removeClass('d-none');
            }, 400);

            setTimeout(function () {
                perspectiveMode = 1;
            }, 250);

            
            document.getElementsByClassName("all-fluid")[0].style.cursor = "pointer";



        }

        $('.nav>.nav-item').click(function () {
            if (!($(this).hasClass('active'))) {
                var $this = $(this)
                var curActive = $this.parent().find('.active')
                var curPos = $this.parent().children().index(curActive)
                var nextPos = $this.parent().children().index($this)
                changeArticle(curPos, nextPos)
            }
        });

        $('.toggle').click(function () {
            goToPerspective();
        });

        $('.outNav>.nav-item').click(function () {
        });

        $('.back-btn').click(function () {
            backToNormalPerspective();
        });

        $('.all-fluid').hover(function () {
            if(perspectiveMode){
                document.getElementsByClassName("effect-rotate-left--animate")[0].style.transform = "scale(1.2) translateX(7%)";
            };
        }, function () {
            if(perspectiveMode){
                    document.getElementsByClassName("effect-rotate-left--animate")[0].style.transform = "scale(1)";
            };

        });


        $('.all-fluid').click(function () {
            if(perspectiveMode){
                document.getElementsByClassName("effect-rotate-left--animate")[0].style.transform = "scale(1)";
                backToNormalPerspective();
            };
        });

        changeArticle(0, 0);
    });





