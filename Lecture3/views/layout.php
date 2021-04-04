<DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>

    <script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+" crossorigin="anonymous"></script>
    
    <body>
      <div class="container text-center">    
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">My Notes App</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">             
              <li class="nav-item active">
                <a class="nav-link" href="?controller=pages&action=home">Home </a>
              </li>

              <li class="nav-item active">
                <a class="nav-link" href="?controller=items&action=items">Notes</a>
              </li>
			  
              <li class="nav-itemactive active">
                <a class="nav-link" href="?controller=items&action=add">Add note</a>
              </li>

            </ul>
            <ul class="navbar-nav ml-auto">
              <!--<li class="nav-item"><a  class="nav-link" href="#"><i class="fas fa-user"></i> Registration</a></li>
              <li class="nav-item"><a class="nav-link"  href="#"><i class="fas fa-sign-in-alt"></i> Login</a></li>
              -->
            </ul>

          </div>
        </nav>    
        <div class="row content">
          <div class="col-sm-8 text-left"> 
            <?php require_once('routes.php'); ?> 
          </div>
		  
        </div>
      </div>

      <footer class="container text-center">
        <p>My notes - MVC example</p>
      </footer>
      <body>
</html>