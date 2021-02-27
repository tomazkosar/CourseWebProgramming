<?php
include_once('header.php');

function get_notes()
{
    global $conn;
    $notes = array();
    if (isset($_SESSION["USER_ID"])) {
        $user_id = $_SESSION["USER_ID"];
        $query = "SELECT user.name as uname, note_item.name as iname, note_category.name as cname, done, note.item_id as item_id FROM note  
        JOIN user ON 
            note.user_id=user.user_id
        JOIN note_item ON 
            note.item_id=note_item.item_id
        JOIN notes_schema.note_category ON 
            note.category_id=note_category.category_id
        WHERE user.user_id = \"$user_id\";";
        $res = $conn->query($query);
        while ($note = $res->fetch_object()) {
            array_push($notes, $note);
        }
    }
    return $notes;
}

$notes = get_notes();
?>

<h2>My tasks</h2>
<table>
    <tr>
        <th>User</th>
        <th>Note</th>
        <th>Category</th>
        <th>Done</th>
        <th>Change</th>
    </tr>
    <?php
    foreach ($notes as $note) {
        ?>
        <tr>
            <td><?php echo $note->uname; ?></td>
            <td><?php echo $note->iname; ?></td>
            <td><?php echo $note->cname; ?></td>
            <td><?php echo(($note->done == 1) ? "Yes" : "No"); ?></td>
            <td> <a href="note.php?id=<?php echo $note->item_id;?>">
                <?php
                    if ($note->done == 0)
                        echo "<button>Change</button>";
                ?>
                </a></td>
        </tr>
        <?php
    }
    ?>
</table>

<?php
include_once('footer.php');
?>
