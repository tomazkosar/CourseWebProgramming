<p>Add new item</p>

<form action="?controller=items&action=save" method="post">
<table class="table table-hover">
    <thead>
      <tr>
        <th>Note item</th>
        <th>Done</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
		<tr>		
			<td>
				<input type="text" class="form-control" name="name" placeholder="" />
			</td>
			<td>
				<input class="btn btn-primary" type="submit" name="Add" value="Add"/>
			</td>
		</tr>
    </tbody>
</table>
</form>