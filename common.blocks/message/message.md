# message

Use `message` block for dynamic messages.

```bemjson
{
    block : 'message',
    content : 'message'
}
```

## Block mods

### Type `_type`

Types of message visualisation:

* text (`message_type_text`)

```bemjson
{
    block : 'message',
    mods : { type : 'text' },
    content : 'Text'
}
```

* pupup (`message_type_popup`)

Based on block `popup` from bem-components.

```bemjson
{
    block : 'message',
    mods : { type : 'popup' },
    content : 'Popup'
}
```
