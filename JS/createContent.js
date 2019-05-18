function createCategory() {
    json_data = getJsonFile('/weapondata/weaponlist.json');
    console.log(json_data);
    category_data = JSON.parse(json_data);

    console.log(category_data);
}