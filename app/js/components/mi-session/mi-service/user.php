<?php  

  $user = json_decode(file_get_contents('php://input')); // get user from json headers

  if($user->name=='jona' && $user->pass=='123'){
    session_start();
    $_SESSION['uid']=uniqid('ang_');
    print $_SESSION['uid'];
  }
    


?>