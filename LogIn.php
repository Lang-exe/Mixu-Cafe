<?php
$servername = "127.0.0.1:";
$username = "root";
$password = "";
$dbname = "dbproject";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// $first_name =  $_REQUEST['first_name'];
// $last_name = $_REQUEST['last_name'];
// $gender =  $_REQUEST['gender'];
// $address = $_REQUEST['address'];
// $email = $_REQUEST['email'];

// $sqlquery = "INSERT INTO __ VALUES()"
 
// if ($conn->query($sql) === TRUE) {
//     echo "record inserted successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }


?>