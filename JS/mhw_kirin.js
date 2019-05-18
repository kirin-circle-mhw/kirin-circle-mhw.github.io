createCategory();

$('#weapon section#chargeBlade').show();

$('#category').on('click','li', function () {
    weapon = $(this).data('name')
    targetId = '#' + weapon;
    // location.href = targetId;
    $('#weapon section').hide();
    $(targetId).show();
});

