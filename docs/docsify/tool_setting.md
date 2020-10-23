## Прості налаштування

Практично всі налаштування можна зробити модифікацією індексного файлу у корені документації. Файл доволі маленький і зрозумілий. Нижче приведений його фрагмент, який налаштовано для нашого проєкту:

```html
<!-- ./docs/index.html -->

<head>
  <title>AirZOOM real</title>
  <link rel="icon" href="img/favicon.ico">
</head>
<script>
  window.$docsify = {
    name: 'AirZOOM real!',
    logo: '/img/logo.svg',
    relativePath: true,
    subMaxLevel: 2,
    loadSidebar: true,
    externalLinkTarget: '_blank'
  }
</script>
```

Отже, тут представлені такі налаштування:

- `<title>AirZOOM real</title>` - назва веб-сторінки, що з'являється на вкладці бравзера;
- `<link rel="icon" href="img/favicon.ico">` - шлях до фавікона відносно кореня документації, у нашому випадку це `./docs/img/favicon.ico`;
- `name: 'AirZOOM real!'` - ім'я сайту, що з'являється на бічній панелі;
- `logo: '/img/logo.svg'` - шлях до лого;
- `relativePath: true` - у кожному фолдері посилання на внутрішні ресурси можуть бути записані відносно цього фолдера;
- `subMaxLevel: 2` - дає можливість показувати заголовки зі сторінки на бічній панелі під заголовком відповідного файла до глибини 2;
- `loadSidebar: true` - дозволяє використання файлів опису вмісту бічної панелі `_sidebar.md` у кожному фолдері;
- `externalLinkTarget: '_blank'` - зовнішні посилання відкриватимуться у новій вкладці.

## TODO list

Що хотілось би ще підключити:

- katex
- search over site
- pagination
- previous/next
- to bottom/to top
- navigation bar
- two languages (switch to corresponding page)
