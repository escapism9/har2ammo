exports = module.exports = {
    'autoTag': true,
    'host': false,
    'pathFilterRegexp': false,
    'clearCookies': false,
    'customCookies': false,
    'replaceDateInURL': false,
    'repeat': 0,
    'customHeaders': [{
        'name': 'User-Agent',
        'value': 'yandex-tank yandex-tank/har2ammo'
    }],
    'replaceData': {
        headers: {
            match: 'Macintosh',
            data: function (data, libs) {
                return 'Windows ' + libs._.VERSION;
            }
        }
    }
};
