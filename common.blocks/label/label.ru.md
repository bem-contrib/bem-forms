# label

Блок `label` используется в качестве компонента формы и указателя на поля ввода.

В HTML представлен тегом `<label>`.

```bemjson
{
    block : 'label',
    for : 'firstName'
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
        <td>for</td>
        <td>
            <code>String</code>
        </td>
        <td>Указатель на id поля ввода</td>
    </tr>
</table>
