<?php

class NotesDB {
	private static $singleton = NULL;
	
	public static function getInstance() {
		if (!isset(self::$singleton)) {
			self::$singleton = mysqli_connect("localhost", "root", "", "notes_schema");
			self::$singleton->set_charset("UTF8");
		}
		return self::$singleton;
	}
}
?>