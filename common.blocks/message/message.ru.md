# message

Блок `message` используется для динамического вывода сообщений.

```bemjson
{
    block : 'message',
    content : 'message'
}
```

## Модификаторы блока

### Тип `_type`

Типы визуализации сообщений:

* текст (`message_type_text`)

```bemjson
{
    block : 'message',
    mods : { type : 'text' },
    content : 'Text'
}
```

* попап (`message_type_popup`)

Основан на блоке `popup` из bem-components. 

```bemjson
{
    block : 'message',
    mods : { type : 'popup' },
    content : 'Popup'
}
```
