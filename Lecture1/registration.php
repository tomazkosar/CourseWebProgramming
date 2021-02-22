<?php
include_once('header.php');

function register_user($name, $username, $password)
{
    global $conn;
    $username = mysqli_real_escape_string($conn, $username);
    $pass = sha1($password);
    $query = "INSERT INTO user (name, username, password) VALUES ('$name', '$username', '$pass');";
    if ($conn->query($query)) {
        return true;
    } else {
        echo mysqli_error($conn);
        return false;
    }
}

$error = "";
if (isset($_POST["submit"])) {
    if ($_POST["password"] != $_POST["repeat_password"]) {
        $error = "Passwords don't match";
    } else if (register_user($_POST["name"], $_POST["username"], $_POST["password"])) {
        header("Location: index.php");
        die();
    } else {
        $error = "Registration failed.";
    }
}
?>

    <h2>Registration</h2>
    <form action="registration.php" method="POST">
        <label>Name <input type="text" name="name"/></label><br/>
        <label>Username <input type="text" name="username"/></label><br/>
        <label>Password <input type="password" name="password"/></label><br/>
        <label>Retype password <input type="password" name="repeat_password"/></label><br/>
        <input type="submit" name="submit" value="Send"/><br/>
        <label><?php echo $error; ?></label><br/>
    </form>

<?php
include_once('footer.php');
?>