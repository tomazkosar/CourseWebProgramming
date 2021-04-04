
<?php
function call($controller, $action) {
	require_once('controllers/' . $controller . '_controller.php');
	require_once('models/' . $controller . '.php');

	$o=$controller."_controller";
	$controller=new $o;
	$controller->{ $action }();
}

if (isset($_GET['controller']) && isset($_GET['action'])) {
	$controller = $_GET['controller'];
	$action     = $_GET['action'];
} else {

	$controller = 'pages';
	$action     = 'home';
}

$controllers = array('pages' => ['home', 'error'], 
					 'items' => ['items', 'item', 
					             'add', 'save', 'update']);

if (array_key_exists($controller, $controllers)) {
	if (in_array($action, $controllers[$controller])) {
		call($controller, $action);
	}
	else {
		call('pages', 'error');
	}
} else {
	call('pages', 'error');
}
?>


