<?php
session_start();
if (isset($_SESSION['LAST_ACTIVITY']) && time() - $_SESSION['LAST_ACTIVITY'] < 1800) {
    session_regenerate_id(true);
}
$_SESSION['LAST_ACTIVITY'] = time();

$conn = new mysqli('localhost', 'root', '', 'notes_schema');
$conn->set_charset("UTF8");

function get_rows($select)
{
    global $conn;
    $query = $select;
    $res = $conn->query($query);
    $rows = array();
    while ($row = $res->fetch_object()) {
        array_push($rows, $row);
    }
    return $rows;
}

$categories = get_rows("SELECT name FROM note_category");

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

function publish($category, $item, $done)
{
    global $conn;

    if (isset($_SESSION["USER_ID"]) && !empty($_SESSION["USER_ID"])) {
        $user_id = mysqli_real_escape_string($conn, $_SESSION["USER_ID"]);
        $category_id = get_data("SELECT category_id FROM note_category WHERE note_category.name = \"$category\";",
            "category_id");
        $item = mysqli_real_escape_string($conn, $item);
        $doneInt = ($done == "yes") ? 1 : 0;

        $query_item = "INSERT INTO note_item (name) VALUES('$item');";
        if ($conn->query($query_item)) {
            $item_id = get_data("SELECT item_id FROM note_item WHERE note_item.name = \"$item\";", "item_id");
            $query = "INSERT INTO note (user_id, category_id, item_id, done)
				VALUES('$user_id', '$category_id', '$item_id', '$doneInt');";
            return ($conn->query($query)) ? true : false;
        }
    }
    return false;
}

$error = "";
if (isset($_POST["submit"])) {
    if (publish($_POST["category"], $_POST["item"], $_POST["done"])) {
        header("Location: newtask.php");
        die();
    } else {
        $error = "Task not published.";
    }
}
?>

<html lang="en">
<head>
    <title>Connect to notes_schema database</title>
</head>
<body>
<h2>New task</h2>
<form action="newtask.php" method="POST" enctype="multipart/form-data">
    <label>User</label>
    <?php echo $_SESSION["USER_ID"]; ?><br/>
    <label>Category
    <input list="cats" name="category">
        <datalist id="cats">
            <?php
            foreach ($categories as $category)
                echo "<option value=\"$category->name\"/>";
            ?>
        </datalist>
    </label><br/>
    <label>Task
        <input type="text" name="item"/>
    </label>
    <label>Done
        <select id="done" name="done">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select><br/>
    </label>
    <input type="submit" name="submit" value="Send"/><br/>
    <label><?php echo $error; ?></label><br/>

</form>

</body>
</html>