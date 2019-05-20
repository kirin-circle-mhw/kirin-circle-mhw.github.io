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
        console.log('btn_top click');

        return false;
    })
});