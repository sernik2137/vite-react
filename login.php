<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"));

$conn = new mysqli("localhost", "root", "", "react");

if ($conn->connect_error) {
  echo json_encode(["success" => false]);
  exit;
}

$stmt = $conn->prepare("SELECT * FROM logowanie WHERE login=? AND haslo=?");
$stmt->bind_param("ss", $data->login, $data->haslo);
$stmt->execute();
$result = $stmt->get_result();

echo json_encode(["success" => $result->num_rows === 1]);
