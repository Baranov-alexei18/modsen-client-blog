# Modsen client blog

Deploy: 
- https://modsen-client-blog-six.vercel.app/;

UI-kit:
- git: https://github.com/Baranov-alexei18/ui-kit;
- storybook: https://665650138328b7a270bfb6b8-edcvjbhoua.chromatic.com/;

## Пример графического представления

Ссылка на макет: [Макет "Modsen Client Blog"](https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=0%3A1&t=FIUQOCF7mw0vjeF8-0).

## Описание страниц

### 1. [Главная Home](https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=2%3A509&t=5YoUOACNZ3dRVibl-0)

- Все страницы включают в себя верхний блок для перехода между страницами. При нажатии на кнопку "Video about us" открывается модальное окно с проигрыванием видео.
- Реализована загрузка контента с помощью infinity scroll.
- В блоке "Step-by-step" кнопка "read more" переходит на страницу поста.
- В блоке "Featured Post" кнопка "read more" переходит на страницу Blog Post.
- В блоке "All Posts" кнопка "View All" переходит на страницу Blog.
- В блоке "About Us" кнопка "read more" переходит на страницу About Us.
- В блоке "Choose A Category" при нажатии на категорию происходит переход на страницу Category.
- В блоке "Why we started" кнопка "Discover our story" переходит на страницу About Us.
- В блоке "List of Authors" при нажатии на автора происходит переход на страницу Author.
- В блоке "TESTIMONIALS" реализована карусель с навигацией стрелками.
- В блоке "Join our team to be a part of our story" кнопка "Join Now" переходит на страницу Contact.
- В блоке "Subscribe to our newsletter" реализована форма отправки сообщения на электронную почту.
- Ссылка "Privacy Policy" в футере открывает страницу Privacy Policy.

### 2. [Главная Blog](https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A738&t=5YoUOACNZ3dRVibl-0)

- В блоке "Step-by-step" кнопка "Read more" переходит на страницу поста.
- Список постов с разными категориями. Кнопки prev/next для листания.
- При нажатии на пост открывается страница Blog Post.
- В блоке "All Categories" при выборе категории происходит переход на страницу Category.
- В блоке "Join our team to be a part of our story" кнопка "Join Now" переходит на страницу Contact.

### 3. [Главная Blog Post](https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A919&t=5YoUOACNZ3dRVibl-0)

- Содержимое определенного поста.
- В блоке "What to read next" список постов с той же категорией.
- В блоке "Join our team to be a part of our story" кнопка "Join Now" переходит на страницу Contact.
- В блоке "Subscribe to our newsletter" реализована форма отправки сообщения на электронную почту.

### 4. [Главная About Us](https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A1045&t=5YoUOACNZ3dRVibl-0)

- В блоке "List of Authors" список авторов с переходом на их страницы.
- Уникальные иконки социальных сетей для каждого автора.
- В блоке "Join our team to be a part of our story" кнопка "Join Now" переходит на страницу Contact.

### 5. [Главная Category](https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A1304&t=5YoUOACNZ3dRVibl-0)

- Список постов с выбранной категорией.
- В блоке "Search for tag..." поиск постов с определенным тегом с помощью elastic search.
- В блоке "Categories" отображается список постов с выбранной категорией.
- В блоке "All Tags" происходит поиск постов по тегу.
- При отсутствии совпадений отображается альтернативный текст.

### 6. [Главная Author](https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A1483&t=5YoUOACNZ3dRVibl-0)

- Краткая информация об авторе и список его социальных сетей.
- В блоке "My Posts" отображается список его постов.
- При отсутствии постов отображается альтернативный текст.
- При нажатии на пост происходит переход на страницу Blog Post.

### 7. [Главная Contact](https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A1581&t=5YoUOACNZ3dRVibl-0)

- Форма для связи, отправляющая сообщение на почту пользователя.
- Интерактивная карта с минимум 3 точками в разных странах.

### 8. [Главная Privacy Policy](https://www.figma.com/file/fhmK69xjYdFpfoVhY7t6u1/Client-Blog-Modsen-Template?node-id=14%3A1678&t=5YoUOACNZ3dRVibl-0)

- Страница с политикой конфиденциальности.


## Запуск проекта

Чтобы запустить проект, выполните следующие шаги:

1. Склонируйте репозиторий проекта с помощью команды: git clone;
2. Установите зависимости, используя менеджер пакетов yarn: yarn install;
3. Запустите проект: yarn dev.

## Используемые технологии

- **yarn** - менеджер пакетов;
- **TS** - инструмент строгой типизации;
- **email-js** - библиотека, позволяющая отправлять электронные письма на почту;
- **SCSS** - препроцессор, позволяющий писать код для стилей CSS;
- **cypress** - e2e тестирование для web-приложений;
- **jest** - unit-тестирование;
- **yup** - библиотека для валидации форм;
- **nextJS** - фреймворк на JavaScript, использующий React для построения server-side render.
