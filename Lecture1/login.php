<?php
include_once('header.php');

function validate_login($username, $password)
{
    global $conn;
    $username = mysqli_real_escape_string($conn, $username);
    $pass = sha1($password);
    $query = "SELECT * FROM user WHERE username='$username' AND password='$pass'";
    $res = $conn->query($query);
    if ($user_obj = $res->fetch_object()) {
        return $user_obj->user_id;
    }
    return -1;
}

function get_data($select, $col)
{
    global $conn;
    $query = $select;
    $res = $conn->query($query);
    if ($res_obj = $res->fetch_object()) {
        return $res_obj->$col;
    } else
        return false;
}


$error = "";
if (isset($_POST["submit"])) {
    if (($user_id = validate_login($_POST["username"], $_POST["password"])) >= 0) {
        $_SESSION["USER_ID"] = $user_id;
        $cookie_value = get_data("SELECT name FROM user WHERE user.user_id = \"$user_id\";", "name");
        setcookie("notes_user", $cookie_value, time() + (86400), "/");
        header("Location: mytasks.php");
        die();
    } else {
        $error = "Login failed.";
    }
}
?>

    <h2>Login</h2>
    <form action="login.php" method="POST">
        <label>Username <input type="text" name="username"/></label><br/>
        <label>Password <input type="password" name="password"/></label><br/>
        <input type="submit" name="submit" value="Send"/><br/>
        <label><?php echo $error; ?></label><br/>
    </form>

<?php
include_once('footer.php');
?>