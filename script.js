window.addEventListener('load', function() {
    var preloader = document.getElementById('preloader');
    var siteContainer = document.getElementById('site-container');
  
    // Скрыть прелоадер и отобразить контент сайта
    function showSiteContent() {
      preloader.style.display = 'none'; // Скрыть прелоадер
      siteContainer.style.display = 'block'; // Отобразить контент сайта
    }
  
    // Проверяем, загрузились ли все изображения на странице
    function checkImagesLoaded() {
      var images = document.getElementsByTagName('img');
      var loadedCount = 0;
  
      // Функция, вызываемая после загрузки каждого изображения
      function imageLoaded() {
        loadedCount++;
  
        // Если все изображения загружены, отображаем контент сайта
        if (loadedCount === images.length) {
          showSiteContent();
        }
      }
  
      // Перебираем все изображения и назначаем обработчик события загрузки
      for (var i = 0; i < images.length; i++) {
        if (images[i].complete) {
          // Если изображение уже загружено, увеличиваем счетчик загруженных изображений
          loadedCount++;
        } else {
          // Если изображение еще не загружено, назначаем обработчик события загрузки
          images[i].addEventListener('load', imageLoaded);
        }
      }
  
      // Если все изображения уже загружены, отображаем контент сайта
      if (loadedCount === images.length) {
        showSiteContent();
      }
    }
  
    // Проверяем, загрузились ли все стили на странице
    function checkStylesLoaded() {
      var stylesheets = document.styleSheets;
      var loadedCount = 0;
  
      // Перебираем все стили и проверяем их загрузку
      for (var i = 0; i < stylesheets.length; i++) {
        if (stylesheets[i].cssRules !== null) {
          loadedCount++;
        }
      }
  
      // Если все стили загружены, проверяем изображения
      if (loadedCount === stylesheets.length) {
        checkImagesLoaded();
      }
    }
  
    // Проверяем, загрузились ли все скрипты на странице
    function checkScriptsLoaded() {
      var scripts = document.getElementsByTagName('script');
      var loadedCount = 0;
  
      // Функция, вызываемая после загрузки каждого скрипта
      function scriptLoaded() {
        loadedCount++;
  
        // Если все скрипты загружены, проверяем стили
        if (loadedCount === scripts.length) {
          checkStylesLoaded();
        }
      }
  
      // Перебираем все скрипты и назначаем обработчик события загрузки
      for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].readyState === 'complete') {
          // Если скрипт уже загружен, увеличиваем счетчик загруженных скриптов
          loadedCount++;
        } else {
          // Если скрипт еще не загружен, назначаем обработчик события загрузки
          scripts[i].addEventListener('load', scriptLoaded);
        }
      }
  
      // Если все скрипты уже загружены, проверяем стили
      if (loadedCount === scripts.length) {
        checkStylesLoaded();
      }
    }
  
    // Запускаем проверку загрузки ресурсов
    checkScriptsLoaded();
  });
  