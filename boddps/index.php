<?php

 

$allow_exts = array('jpg', 'jpeg', 'gif', 'png', 'txt');

$upload_dir = 'uploads/';

$max_size = 1024 * 1024;

 

if ($_FILES['file']['error'] != UPLOAD_ERR_OK) {

    echo '上传失败，请稍后再试';

    exit;

}

 

$temp_file = $_FILES['file']['tmp_name'];

$file_name = $_FILES['file']['name'];

$file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));

 

if (!in_array($file_ext, $allow_exts)) {

    echo '文件类型不符合要求，请上传指定类型的文件';

    exit;

}

 

if ($_FILES['file']['size'] > $max_size) {

    echo '文件大小不能超过1MB，请重新上传';

    exit;

}

 

if (!is_uploaded_file($temp_file)) {

    echo '非法上传，请重新上传';

    exit;

}

 

if (!file_exists($upload_dir)) {

    mkdir($upload_dir);

}

 

if (move_uploaded_file($temp_file, $upload_dir . $file_name)) {

    echo '上传成功';

    exit;

}

 

echo '上传失败，请稍后再试';

 

?>