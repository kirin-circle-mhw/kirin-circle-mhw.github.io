$(document).ready(function () {
    createCategory();
    createWeaponInfo('chargeBlade');

    $('#category').on('click', 'li', function () {
        weapon = $(this).data('name')
        // targetId = '#' + weapon;
        // $('#weapon section').hide();
        // $(targetId).show();

        createWeaponInfo(weapon);
    });
    // $('#weapon section#chargeBlade').show();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#btn_top").fadeIn();
        } else {
            $("#btn_top").fadeOut();
        }
    });

    $('#btn_top').click(function () {
        $('html, body').animate( { scrollTop : 0 }, 400 );
        return false;
    })

    youtubBoxResize();
});

function youtubBoxResize() {
    if ($(window).width() >= 560) {
        $(".youtube_box").css("height", '315px').css('padding-bottom', '0');
    } else {
        $(".youtube_box").css("height", '0').css('padding-bottom', '56.25%');
    }
}