<?php
include_once('header.php');
?>

    <h1>Welcome to Notes application!</h1>
    <nav>
        <ul>
            <?php
            if (isset($_SESSION["USER_ID"])) {
                ?>
                <li><a href="newtask.php">New task</a></li>
                <li><a href="mytasks.php">Task list</a></li>
                <?php
            }
            ?>
        </ul>
    </nav>

<?php
include_once('footer.php');
?>