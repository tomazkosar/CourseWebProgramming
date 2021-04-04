<h2>List of all notes</h2>
<table class="table table-hover">
    <thead>
    <tr>
        <th>Note item</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($items as $item) { ?>
        <tr>
            <td>
                <a href='?controller=items&action=item&id=<?= $item->item_id; ?>'><?= $item->name; ?></a>
            </td>
        </tr>
        <?php
    }
    ?>
    </tbody>
</table>

