
<form action="?controller=items&action=update&id=<?= $item->item_id; ?>" method="post">
<table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Note item</th>
      </tr>
    </thead>
    <tbody>
		<tr>		
			<td><?= $item->item_id; ?></td>
			<td><input type="text" class="form-control" name="name" placeholder="" value ="<?= $item->name; ?>"/></td>
            <td>
				<input type="submit" class="btn btn-primary" name="Change" value="Change"/>
			</td>
		</tr>
    </tbody>
</table>
</form>
