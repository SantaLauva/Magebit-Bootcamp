<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<body>
    <form action="/login.php" method="POST">
        <input name="username" placeholder="coolgay@inbox.com">
        <input name="password" placeholder="password" type="password">
        <button type="submit">Login</button>
    </form>
    Register
    <form action="/register.php" method="POST">
        <input name="username" placeholder="coolgay@inbox.com">
        <input name="password" placeholder="password" type="password">
        <button type="submit">Sign-up</button>
    </form>
</body>
