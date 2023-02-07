<?php
$phone= $_POST['phone'] ?? '996556103039';

$arr = array(
    "name" => "phone",
    "lastname" => "phone",
    "user" => "phone",
    "phone" => $phone,
    "assigned_user_id" => "19x6"
);
$newarr = json_encode($arr);



$url = 'http://doolot.jakypbyx.beget.tech/webservice.php';

$login = $url.'/webservice.php?operation=getchallenge&username=atlas';

$srmLogin = file_get_contents($login, false, stream_context_create([
    'http' => [
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded'
    ]
]));

if($srmLogin) {

$obj = json_decode($srmLogin);
$array = (array) $obj;
$newArray = current((array) next($array)); 

} else {
    echo 'ne ok srmLogin';
}

echo($newArray);
$keyForMd5 = $newArray.'Tmt9oybY2e3QQEcN';
echo($keyForMd5);
$accessKey = md5($keyForMd5);
echo($accessKey);
$auth = 'http://doolot.jakypbyx.beget.tech/webservice.php?operation=login&username=atlas&accessKey='.$accessKey;

echo($auth);
$srmAuth = file_get_contents($auth, false, stream_context_create([
    'http' => [
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded'
    ]
    
]));

if($srmAuth) {

    echo $srmAuth;
    
    } else {
        echo 'ne ok srmLogin';
    }

$params = array(
    'operation' => 'create',
    'sessionName' => '7f84859463abcf0443f64',
    'element' => $newarr,
    'elementType' => 'Leads'
);
$sendToSrm = file_get_contents($url, false, stream_context_create([
    'http' => [
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'content' => http_build_query($params)
    ]
]));



if($sendToSrm) {
    // header('Location: index.html');

    // echo $sendToSrm;
    die();
} else {
    echo 'ne ok';
    die();
}


?>

