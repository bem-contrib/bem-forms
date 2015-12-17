BEM Forms Library
==================

Библиотека компонент для создания форм.

* <a href="#content">Состав</a>
  * <a href="#levels">Уровни</a>
  * <a href="#blocks">Блоки</a>
* <a href="#usage">Использование</a>
* <a href="https://github.com/bem/bem-components/blob/v2/README.ru.md#supported-browsers">Поддерживаемые браузеры</a>
* <a href="#development">Разработка</a>
  * <a href="#working-copy">Рабочая копия</a>

<a name="content"></a>

## Состав

<a name="levels"></a>
### Уровни

* `common.blocks` — поддержка всех устройств и браузеров.

<a name="blocks"></a>
### Блоки

* [form](common.blocks/form/form.ru.md)
* [form-field](common.blocks/form-field/form-field.ru.md)
* [label](common.blocks/label/label.ru.md)
* [message](common.blocks/message/message.ru.md)
* [validation](common.blocks/validation/validation.ru.md)

<a name="development"></a>
## Разработка

<a name="working-copy"></a>
### Рабочая копия

Получаем исходники:

```bash
$ git clone git://github.com/bem-incubator/bem-forms.git
$ cd bem-forms
```

Устанавливаем зависимости:

```bash
$ npm install
```
Для последующего запуска локально установленных `enb` нам потребуется `export PATH=./node_modules/.bin:$PATH` или любой альтернативный способ.

Устанавливаем зависимые библиотеки:

```bash
$ bower install
```

Собираем примеры и тесты:

```bash
$ npm run build-all
```

Запускаем сервер для разработки:

```bash
$ npm start
$ open http://localhost:8080/
```

Проверяем стиль кода:

```bash
$ npm run lint
```

### [MIT](http://en.wikipedia.org/wiki/MIT_License) Лицензия
