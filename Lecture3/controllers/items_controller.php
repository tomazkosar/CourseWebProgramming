
<?php
class items_controller {	
	public function items() {
		$items = NoteItem::allNoteItems(NotesDB::getInstance());
		require_once('views/items/items.php');
	}

	public function item() {
		if (!isset($_GET['id'])){
			return call('pages', 'error');
		}
		
		$item = NoteItem::findItem(NotesDB::getInstance(), $_GET['id']);
		require_once('views/items/item.php');
	}

	public function add() {
		require_once('views/items/item_add.php');
	}

	public function save() {
		$item=NoteItem::addItem(NotesDB::getInstance(), $_POST["name"]);
		require_once('views/items/item_add_ok.php');
	}

	public function update() {
		if (!isset($_GET['id'])){
			return call('pages', 'error');
		}

		$item=NoteItem::updateItem(NotesDB::getInstance(), $_GET['id'], $_POST["name"]);
		require_once('views/items/item_update_ok.php');
	}
}
?>
  