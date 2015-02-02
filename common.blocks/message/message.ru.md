# label

Блок `message` используется динамического вывода сообщений.

```bemjson
{
    block : 'message',
    content : 'message'
}
```

## Модификаторы блока

### Типы `_type`

Блок представлен следующими типами:

* текст (`message_type_text`)

```bemjson
{
    block : 'message',
    mods : { type : 'text' },
    content : 'Text'
}
```

* попап (`message_type_popup`)

```bemjson
{
    block : 'message',
    mods : { type : 'password' },
    content : 'Popup'
}
```
