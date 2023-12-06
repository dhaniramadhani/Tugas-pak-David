<?php
    $hostname="localhost";
    $username="root";
    $password="";
    $database="login";

    $koneksi=mysqli_connect($hostname,$username,$password,$database);
    if($koneksi){