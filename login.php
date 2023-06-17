<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Получаем введенное имя пользователя и пароль
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Проверяем, соответствуют ли введенные значения заранее определенным
  if ($username === "Allayarov" && $password === "Allayarov") {
    // Перенаправляем на желаемую страницу после успешного входа
    header("Location: main.html");
    exit;
  } else {
    // Отображаем сообщение об ошибке или выполняем другие действия при неудачной попытке входа
    echo "Неверное имя пользователя или пароль. Попробуйте еще раз.";
  }
} else {
  // Если файл HTML был открыт без входа, перенаправляем на страницу index.html
  header("Location: index.html");
  exit;
}
?>
