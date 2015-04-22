# form

Блок `form` используется для описания формы.

```bemjson
{
    block : 'form',
    mods : {
        'has-validation' : true,
        message : 'text'
    },
    method : 'GET',
    content : [
        {
            block : 'form-field',
            id : 'input',
            mods : {
                type : 'input',
                'has-validation' : true,
                required : true,
                message : 'text'
            },
            content : [
                {
                    block : 'label',
                    content : 'Input'
                },
                {
                    block : 'input',
                    name : 'firstName'
                }
            ]
        }
    ]
}
```

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>action</td>
        <td>
            <code>String</code>
        </td>
        <td>url формы</td>
    </tr>,
    <tr>
        <td>method</td>
        <td>
            <code>String</code>
        </td>
        <td>протокол</td>
    </tr>
    <tr>
        <td>enctype</td>
        <td>
            <code>String</code>
        </td>
        <td>тип содержимого</td>
    </tr>
</table>

## Модификаторы блока

### Валидация `_has-validation`

Подключаюет логику валидации. Переопределяет событие `submit` и запускает все валидоторы на полях.
Не дает отправить невалидную форму на сервер.

```bemjson
{
    block : 'form',
    mods : {
        'has-validation' : true
    },
    content : [
    ]
}
```

### Вывод сообщений `_message` 

Абстракция надо блоком [message](../message/message.ru.md). Устанавливает логику вывода сообщений валидации.
 
* `text`. Текстовое сообщение.

```bemjson
{
    block : 'form',
    mods : {
        'has-validation' : true,
        message : 'text'
    },
    content : [
    ]
}
```

* `popup`. Попап.

```bemjson
{
    block : 'form',
    mods : {
        'has-validation' : true,
        message : 'popup'
    },
    content : [
    ]
}
```
