# form-field

Блок `form-field` используется для описания поля формы.

```bemjson
{
    block : 'form-field',
    id : 'input',
    mods : {
        type : 'input',
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
        <td>id</td>
        <td>
            <code>String</code>
        </td>
        <td>id поля ввода</td>
    </tr>
</table>

## Модификаторы блока

### Типы `_type`

Блок представлен следующими типами:

* `input`. текстовое поле - [input](https://github.com/bem/bem-components/blob/v2/common.blocks/input/input.ru.md)(`form-field_type_input`)

```bemjson
{
    block : 'form-field',
    mods : {
        type : 'input'
    },
    content : [
        {
            block : 'input',
            name : 'firstName'
        }
    ]
}
```

* `textarea`. текстовая область - [textarea](https://github.com/bem/bem-components/blob/v2/common.blocks/textarea/textarea.ru.md)(`form-field_type_textarea`)

```bemjson
{
    block : 'form-field',
    mods : {
        type : 'textarea'
    },
    content : [
        {
            block : 'textarea',
            name : 'text'
        }
    ]
}
```

* `checkbox`. «чекбокс», «флажок», «переключатель» [checkbox](https://github.com/bem/bem-components/blob/v2/common.blocks/checkbox/checkbox.ru.md)(`form-field_type_checkbox`)

```bemjson
{
    block : 'form-field',
    mods : {
        type : 'checkbox'
    },
    content : [
        {
            block : 'checkbox',
            text : 'Вариант 1',
            name: 'name1',
            val: '1'
        }
    ]
}
```

* `checkbox-group`. группа переключателей - [checkbox-group](https://github.com/bem/bem-components/blob/v2/common.blocks/checkbox-group/checkbox-group.ru.md) (`form-field_type_checkbox-group`)

```bemjson
{
    block : 'form-field',
    mods : {
        type : 'checkbox-group'
    },
    content : [
        {
            block : 'checkbox-group',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        }
    ]
}
```

* `radio`. «радиопереключатель», «радиокнопка» - [radio](https://github.com/bem/bem-components/blob/v2/common.blocks/radio/radio.ru.md) (`form-field_type_radio`)

```bemjson
{
    block : 'form-field',
    mods : {
        type : 'radio'
    },
    content : [
        {
            block : 'radio',
            text : 'Radio switch'
        }
    ]
}
```

* `radio-group`. группа зависимых переключателей - [radio-group](https://github.com/bem/bem-components/blob/v2/common.blocks/radio-group/radio-group.ru.md) (`form-field_type_radio-group`)

```bemjson
{
    block : 'form-field',
    mods : {
        type : 'radio-group'
    },
    content : [
        {
            block : 'radio-group',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second' }
            ]
        }
    ]
}
```

* `hidden` - поле, не имеющее визуального представления. Используется для привязки дополнительных, скрытых для пользователя, данных к форме. Значение можно менять через JavaScript используя метод `setVal`.

```bemjson
{
    block : 'form-field',
    mods : {
        type : 'hidden'
    },
    name : 'some-name',
    val : 'some-value'
}
```
 
### Обязательное поле `_required` 

Устанавливает логику наличия значения в поле.

```bemjson
{
    block : 'form-field',
    mods : {
        type : 'input',
        required : true
    },
    content : [
        {
            block : 'input',
            name : 'firstName'
        }
    ]
}
```

### Базовые валидации `_validate` 

Абстракция над ванильными методами валидаций блока [validation](../validation/validation.ru.md) применимо к значению в поле.
Значение модификатора должно полностью описывать валидацию возвращаемого значения.

* `card`. Проверка номера карты

```bemjson
{
    block : 'form-field',
    mods : {
        type : 'input',
        validate : 'card'
    },
    content : [
        {
            block : 'input',
            name : 'firstName'
        }
    ]
}
```

### Вывод сообщений `_message` 

Абстракция надо блоком [message](../message/message.ru.md). Устанавливает логику вывода сообщений валидации.
 
* `text`. Текстовое сообщение.

```bemjson
{
    block : 'form-field',
    mods : {
        type : 'input',
        required : true,
        message : 'text'
    },
    content : [
        {
            block : 'input',
            name : 'firstName'
        }
    ]
}
```

* `popup`. Попап.

```bemjson
{
    block : 'form-field',
    mods : {
        type : 'input',
        required : true,
        message : 'popup'
    },
    content : [
        {
            block : 'input',
            name : 'firstName'
        }
    ]
}
```
