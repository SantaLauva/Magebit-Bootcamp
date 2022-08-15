<?php

define('DATA_FILE_NAME', 'data.json');

$data =[];

if (file_exists(DATA_FILE_NAME)) {
    $content = file_get_contents(DATA_FILE_NAME);
    $data = json_decode($content, true);
    if (!is_array($data)) {
        $data = [];
    }
}

$output = ['status' => false];

if (
    isset($_POST['new_task']) &&
    is_string($_POST['new_task']) && 
    ($_POST['new_task'] != "")
) {
    $data[] = $_POST['new_task'];

    $content = json_encode($data);
    file_put_contents(DATA_FILE_NAME, $content);

    $output = [
        'status' => true,
        'id' => count($data) - 1
    ];
}

?>