function createCategory() {
    json_data = getJsonFile('/weapondata/weaponlist.json');
    category_data = JSON.parse(json_data);

    console.log(category_data);
}