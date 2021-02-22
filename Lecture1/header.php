<?php
session_start();
if (isset($_SESSION['LAST_ACTIVITY']) && time() - $_SESSION['LAST_ACTIVITY'] < 1800) {
    session_regenerate_id(true);
}
$_SESSION['LAST_ACTIVITY'] = time();

$conn = new mysqli('localhost', 'root', '', 'notes_schema');
$conn->set_charset("UTF8");
?>

<html lang="en">
<head>
    <title>Lecture Notes 1</title>
</head>
<body>
<div>
    <span style="float:right">
        <?php
        if (isset($_SESSION["USER_ID"])) {
            ?>
            <a href="logout.php">Logout</a>
            <?php
        } else {
            if (isset($_COOKIE["notes_user"]))
                echo "Welcome back " . $_COOKIE["notes_user"] . "!  ";
            ?>
            <a href="login.php">Login</a>&nbsp;
            <a href="registration.php">Registration</a>
            <?php
        }
        ?>
    </span><br/>
</div>
