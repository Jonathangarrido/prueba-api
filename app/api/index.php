<?php 
  
  require "vendor/autoload.php";
  require 'lib/mysql.php';

  $app = new Slim\App();
  

  $app->get('/', 'get_productos');
   
  $app->get('/producto/{id}', function($request, $response, $args) {
      get_producto($args['id']);
  });
  $app->post('/add_producto', function($request, $response, $args) {
      add_producto($request->getParsedBody());//Request object’s <code>getParsedBody()</code> method to parse the HTTP request 
  });

  $app->put('/update_producto', function($request, $response, $args) {
      update_producto($request->getParsedBody());
  });
  $app->delete('/delete_producto', function($request, $response, $args) {
      delete_producto($request->getParsedBody());
  });
  $app->run();
  
  function get_productos() {
      $db = connect_db();
      $sql = "SELECT * FROM productos";
      $exe = $db->query($sql);
      $data = $exe->fetch_all(MYSQLI_ASSOC);
      $db = null;
      echo json_encode($data);
  }
   
  function get_producto($producto_id) {
      $db = connect_db();
      $sql = "SELECT * FROM productos WHERE `id` = '$producto_id'";
      $exe = $db->query($sql);
      $data = $exe->fetch_all(MYSQLI_ASSOC);
      $db = null;
      echo json_encode($data);
  }
   
  function add_producto($data) {
      $db = connect_db();
      $sql = "insert into productos (id,name,description,price)"
              . " VALUES('','$data[name]','$data[description]','$data[price]')";
      $exe = $db->query($sql);
      $last_id = $db->insert_id;
      $db = null;
      if (!empty($last_id))
          echo $last_id;
      else
          echo false;
  }
   
  function update_producto($data) {
      $db = connect_db();
      $sql = "update productos SET name='$data[name]',description='$data[description]',price='$data[price]'"
              . " WHERE id = '$data[id]'";
      $exe = $db->query($sql);
      $last_id = $db->affected_rows;
      $db = null;
      if (!empty($last_id))
          echo $last_id;
      else
          echo false;
  }
   
  function delete_producto($producto) {
      $db = connect_db();
      $sql = "DELETE FROM productos WHERE `id` = '$producto[id]'";
      $exe = $db->query($sql);
      $db = null;
      if (!empty($last_id))
          echo $last_id;
      else
          echo false;
  }

?>