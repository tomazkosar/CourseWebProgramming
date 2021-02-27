<?php
include_once('header.php');

function get_note($id){
	global $conn;
    $notes = array();
    if (isset($_SESSION["USER_ID"])) {
        $note_id = mysqli_real_escape_string($conn, $id);
        $query = "SELECT note_item.name, done FROM note_item LEFT JOIN note ON note_item.item_id = note.item_id WHERE note.task_id = $note_id;";
        $res = $conn->query($query);

        while($note = $res->fetch_object()){
            array_push($notes, $note);
        }
    }
	return $notes;
}

function update_note_item($id){
	global $conn;
    if (isset($_SESSION["USER_ID"])) {
        if (isset($_GET["done"])) {
            $note_item_id = mysqli_real_escape_string($conn, $id);
            $query = "UPDATE note SET done= '1' WHERE task_id = $note_item_id;";
            $res = $conn->query($query);
            header("Location: note.php?id=".$id);
            die();
        }
    }
}

if(!isset($_GET["id"])){
	echo "No parameters!";
	die();
}

$id = $_GET["id"];
$notes = get_note($id);

if($notes == null){
	echo "No access!";
	die();
}

?>

<h2>Change item</h2>
<table>
    <tr>
    <?php
    foreach ($notes as $note) {
        ?>
            <td><?php echo $note->name; ?></td>
            <td align="center">
                <?php
                if ($note->done == 1)
                    echo "✓";
                else {
                ?>
                    <a href="note.php?id=<?php update_note_item($id); echo $id."&done=1";?>"><button>Done</button></a>
                <?php } ?>

            </td>
    <?php } ?>
    </tr>
</table>

<?php
include_once('footer.php');
?>