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
  * <a href="#how-to-contribute">Внесение изменений</a>
  * <a href="https://github.com/bem/bem-components/blob/v2/README.ru.md#modular-tests">Модульное тестирование</a>

<a name="content"></a>

## Состав

<a name="levels"></a>
### Уровни

* `common.blocks` — поддержка всех устройств и браузеров.
* `desktop.blocks` — поддержка всех десктопных браузеров.
* `touch.blocks` — реализация специфических особенностей для touch-платформ.

<a name="blocks"></a>
### Блоки

* [form](common.blocks/form/form.ru.md)
* [form-field](common.blocks/form-field/form-field.ru.md)
* [message](common.blocks/message/message.ru.md)
* [validation](common.blocks/validation/validation.ru.md)

<a name="development"></a>
## Разработка

<a name="working-copy"></a>
### Рабочая копия

Получаем исходники:

```bash
$ git clone git://github.com/bem/bem-forms.git
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
<a name="how-to-contribute"></a>
### Внесение изменений

1. [Создать issue](https://github.com/bem/bem-forms/issues/new) с описанием сути изменений.
1. Определить, в какую версию проекта необходимо внести изменения.
1. Создать отдельную ветку с указанием номера issue и версии (`issues/<номер issue>@v<номер версии>`) на основе ветки версии.
Например, для issue с номером 42 и версией 2: `git checkout -b issues/42@v2`. Если изменения нужно внести в несколько версий, то для каждой из версий создается отдельная ветка.
1. Внести изменения. Локально проверить, что ничего не сломалось, запустив `npm test`.
1. Сделать коммит и отправить изменения в удаленный репозиторий (`push`). Если это необходимо, то нужно сделать `rebase` от базовой ветки версии.
1. Создать pull request на основе созданной ветки. Для случая изменений в нескольких версиях необходимо создать pull request для каждой версии.
1. Любым способом связать pull request и issue (например, c помощью [комментария](https://github.com/blog/1506-closing-issues-via-pull-requests)).
1. Ждать закрытия pull request и issue ;-)

### [MIT](http://en.wikipedia.org/wiki/MIT_License) Лицензия
