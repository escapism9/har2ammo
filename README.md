# har2ammo 
=============
[![Build Status][travis-img]][travis-url]
[![NPM Downloads][downloads-img]][downloads-url]

Генератор патронов из [.har](http://en.wikipedia.org/wiki/.har) файлов в [ammo.txt](https://yandextank.readthedocs.org/en/latest/tutorial.html#uri-style-uris-in-file) для [yandex-tank](https://github.com/yandex-load/yandex-tank).

## Возможности

* генерация патронов из HAR файла;
* фильтрация по домену (не генерирует патроны к внешним ресурсам);
* возможность заменять оригинальные cookies своими;
* возможность удалять все cookies;
* автоматическое тегирование патронов;
* установка собственных заголовков;
* конфигурирование с помощью `config.json`.

## Описание config.json

**По умолчанию файл** `config.json` имеет следующий вид:

```
{
    "autoTag": true,
    "host": null,
    "excludeHostRegexp": false,
    "pathFilterRegexp": false,
    "excludePathFilterRegexp": false,
    "clearCookies": false,
    "customCookies": false,
    "replaceDateInURL": false,
    "repeat": 0,
    "customHeaders": [{
		"name": "User-Agent",
        "value": "yandex-tank yandex-tank/har2ammo"
    }]
}
```
где:

* `autoTag` - включить автоматическое тегирование патронов, возможные варианты - `true` | `false`. В качестве тега используется относительный путь к цели.
* `host` - имя хоста (мишени), запросы на другие хосты в ленту не попадут, возможные варианты - строка (`youdomain.com`) или регулярное выражение, запросы на который, фильтр не будет блокировать | `false` - выключает фильтрацию | `null` - в качестве базового хоста будет использоваться домен, к которому был **первый** запрос в `har` файле;
* `excludeHostRegexp` - имя хоста (мишени), запросы на другие хосты в ленту не попадут, возможные варианты - строка (`youdomain.com`) или регулярное выражение, запросы на который, фильтр будет блокировать | `false` - выключает фильтрацию;
* `pathFilterRegexp` - регулярное выражение для фильтрации запросов по `path`, не прошедшие фильтр запросы в ленту не попадут, возможные варианты - `false` | `string`. Например, `"^\/api\/(user|config)"` - оставит только запросы, начинающиеся с `/api/user` или `/api/config`;
* `excludePathFilterRegexp` - регулярное выражение для фильтрации запросов по `path`, прошедшие фильтр запросы в ленту не попадут, возможные варианты - `false` | `string`. Например, `"^\/api\/(user|config)"` - исключит все запросы, начинающиеся с `/api/user` или `/api/config`;
* `clearCookies` - удаляет любые cookies из запросов;
* `customCookies` - позволяет использовать собственные cookies, возможные варианты - `string` | `array`. В случаи, когда передается срока - она будет использована во всех запросах. В случаи, когда используется массив - то для каждого элемента массива, будет сгенерирована своя лента и в результате они будет сшиты в конечную ленту.
* `replaceDateInURL` - позволяет заменять в запросах dateStamp на актуальный, возможные варианты - `true` | `false` | `string`. `false` - не заменяет дату, `true` заменяет на текущую, `string` - подставляет указанное значение.
* `repeat` - повторяет генерацию ленты N раз, позволяет увеличить размер ленты за счет многократного ее создания.
* `customHeaders` - массив объектов, которые заменят или добавят новые заголовки.

## Использование

В самом простом случаи достаточно:

`har2ammo -i test.har -o ammo.txt`

Для более тонкой настройки - рекомендую воспользоваться файлом конфигурации `config.json`:

`har2ammo -c config.json -i test.har -o ammo.txt`

## Установка

Для работы `har2ammo` требуются [nodejs](http://nodejs.org/) и [npm](https://npmjs.org).

Установка:

`npm install -g har2ammo`

## Лицензия
[The MIT License (MIT)](LICENSE)



[travis-img]: https://travis-ci.org/banzalik/har2ammo.svg?branch=master
[travis-url]: https://travis-ci.org/banzalik/har2ammo
[downloads-img]: https://img.shields.io/npm/dm/har2ammo.svg
[downloads-url]: https://npmjs.org/package/har2ammo
[license-img]: https://img.shields.io/npm/l/har2ammo.svg
[license-url]: LICENSE
