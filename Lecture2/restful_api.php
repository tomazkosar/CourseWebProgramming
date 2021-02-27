<?php
include "note_item.php";
include "category.php";

$method = $_SERVER['REQUEST_METHOD'];

if(isset($_SERVER['PATH_INFO']))
	$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
else
	$request="";

$db=mysqli_connect("localhost","root","","notes_schema");
$db->set_charset("UTF8");

$elements = null;

//restful_api/items
if(isset($request[0])&&($request[0]=='items')) {
    switch ($method) {
        case 'GET':
            $elements = NoteItem::allNoteItemsArray($db);
            break;
        /*
        case 'PUT':
        break;
        case 'POST':
        break;
        case 'DELETE':
        break;
        */
    }
}

//restful_api/categories
if(isset($request[0])&&($request[0]=='categories')) {
    switch ($method) {
        case 'GET':
            if(isset($request[1])&&$request[1]!=='JSONP') // e.g. /restful_api/categories/1
                $elements = Category::GetCategoriesArray($db, $request[1]);
            else
                $elements = Category::GetCategoriesArray($db);    // e.g. /restful_api/categories
            break;
        case 'POST':
            parse_str(file_get_contents('php://input'),$input);
            if(isset($input)){
                $category=new Category($input["name"]);
                $category->add($db);
                $elements=array("info"=>"category ".$category->category_id." added");
            }
            break;
        case 'PUT':
            if(isset($request[1])) {
                $category = Category::GetCategory($db, $request[1]);

                $input = json_decode(file_get_contents('php://input'),true);
                if (isset($input)) {
                    $category->name=$input['name'];
                    $category->update($db);
                    $elements=array("info"=>"category ".$category->category_id." updated");
                }
            }
            break;
        case 'DELETE':
            if(isset($request[1])) {
                $category = Category::GetCategory($db, $request[1]);
                $category->delete($db);
                $elements=array("info"=>"category ".$category->category_id." deleted");
            }
            break;
    }
}

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
echo json_encode($elements);
?>


