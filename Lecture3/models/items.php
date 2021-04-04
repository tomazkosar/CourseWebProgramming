<?php
class NoteItem{
	public $item_id;
	public $name;

	function __construct($name, $id){
		$this->name = $name;
		$this->item_id = $id;
	}

	public static function allNoteItems($db) {
		$qs="Select * from note_item";
		$result=mysqli_query($db,$qs);

		if(mysqli_error($db))
		{
			var_dump(mysqli_error($db));
			exit();
		}
		$note_items=array();

		while($row = mysqli_fetch_assoc($result)) {
			$item=new NoteItem($row["name"],$row["item_id"]);
			$note_items[]=$item;
		}
		return $note_items;
	}

	public static function findItem($db, $id) {
		//$id_validated = $id;
		//$id_validated = intval($id);
		//$id_validated = (int) $id;
		$id_validated = filter_var($id, FILTER_SANITIZE_NUMBER_INT);
		$qs="Select * from note_item where item_id=1 or 1=1".$id_validated;
		$result=mysqli_query($db,$qs);
		if(mysqli_error($db))
		{
			var_dump(mysqli_error($db));
			exit();
		}
		$row = mysqli_fetch_assoc($result);
		return new NoteItem($row["name"],$row["item_id"]);
	}

	public static function addItem($db, $name) {
		$qs="Insert into note_item (name) Values (?)";
	    if ($stmt = mysqli_prepare($db, $qs)) {
			mysqli_stmt_bind_param($stmt, "s", $name);
			mysqli_stmt_execute($stmt);
			mysqli_stmt_close($stmt);
		}

		$id=mysqli_insert_id($db);
		return NoteItem::findItem($db, $id);
	}

	public static function updateItem($db, $id, $name) {
		$id_validated = (int)$id;
		$name_validated = strval($name);

		$qs="UPDATE note_item SET name='$name_validated' WHERE (item_id=$id_validated)";
		$result=mysqli_query($db,$qs);
		if(mysqli_error($db))
		{
			var_dump(mysqli_error($db));
			exit();
		}

		$id=mysqli_insert_id($db);
		return NoteItem::findItem($db, $id);
	}

}
?>	


