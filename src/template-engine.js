/**
 * @param  {object} obj — Структура блоков интерфейса в формате BEMJSON
 * @return {string} HTML разметка страницы
 */
var bemjson = new (require('bem-json-to-html'))();

export default function (obj) {
    return bemjson.toHtml(obj)
}
