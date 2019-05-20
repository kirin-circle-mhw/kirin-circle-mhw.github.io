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
});

$(window).scroll(function () {
    var scrollValue = $(document).scrollTop();
    if (scrollValue > 200) {
        $("#btn_top").show();
    } else {
        $("#btn_top").hide();
    }
});