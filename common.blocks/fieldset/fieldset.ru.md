# fieldset

Блок `fieldset` используется в качестве компонента формы для группировки областей

В HTML представлен тегом `<fieldset>`.

```bemjson
{
    block : 'fieldset',
    legend : 'form part 1',
    content: [
        // ... form fields here
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
        <td>legend</td>
        <td>
            <code>String|Object|Array</code>
        </td>
        <td>Заголовок группы контролов</td>
    </tr>
</table>
