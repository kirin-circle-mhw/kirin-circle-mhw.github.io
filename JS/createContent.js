function createCategory() {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", "/weapondata/weaponlist.json", true);
    rawFile.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json_obj = JSON.parse(this.responseText);
            weapon_list = json_obj.Category;

            html_text = "<h2>Category</h2>" +
                "<ul>"

            for (i = 0; i < weapon_list.length; i++) {
                html_text += '<li class="category_btn" data-name="' + weapon_list[i].name_en + '">' +
                    weapon_list[i].name +
                    '</li>';
            }

            html_text += '</ul>';

            $('#category').html(html_text);
        }
    };
    rawFile.send();
}