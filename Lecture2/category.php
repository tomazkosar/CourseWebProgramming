<?php
class Category{
	public $category_id;
	public $name;

	function __construct($name, $id=null)
	{
		$this->name = $name;
		$this->category_id = $id;
	}

	public static function GetCategoriesArray($db, $id=null) {
		if ($id==null)
			$qs="Select * from note_category";
		else
			$qs="Select * from note_category WHERE category_id=".$id;

		$result=mysqli_query($db,$qs);

		if(mysqli_error($db))
		{
			var_dump(mysqli_error($db));
			exit();
		}
		$categories=array();

		while($row = mysqli_fetch_assoc($result)) {
			$category=new Category($row["name"],$row["category_id"]);
			$categories[]=$category;
		}
		return $categories;
	}

	public static function GetCategory($db, $id) {
		$qs="Select * from note_category WHERE category_id=".$id;
		$result=mysqli_query($db,$qs);

		if(mysqli_error($db))
		{
			var_dump(mysqli_error($db));
			exit();
		}

		$row = mysqli_fetch_assoc($result);
		return new Category($row["name"],$row["category_id"]);
	}

	public function add($db){
		$qs="insert into note_category (name) values('$this->name');";
		$result=mysqli_query($db,$qs);

		if(mysqli_error($db))
		{
			var_dump(mysqli_error($db));
			exit();
		}
		$this->category_id=mysqli_insert_id($db);
	}

	public function update($db){
		$qs="update note_category set name='$this->name' where category_id=$this->category_id;";
		$result=mysqli_query($db,$qs);

		if(mysqli_error($db))
		{
			var_dump(mysqli_error($db));
			exit();
		}
	}
	public function delete($db){
		$qs="delete from note_category where category_id=$this->category_id;";
		$result=mysqli_query($db,$qs);

		if(mysqli_error($db))
		{
			var_dump(mysqli_error($db));
			exit();
		}
	}
}
?>	


