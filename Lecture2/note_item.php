<?php
class NoteItem{
	public $item_id;
	public $name;

	function __construct($name, $id=null)
	{
		$this->name = $name;
		$this->item_id = $id;
	}

	public static function allNoteItemsArray($db) {
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
}
?>	


