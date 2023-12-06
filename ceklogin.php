    <?php
    session_start();
    include'user.php';
    
    $email=$_POST['username'];
    $password=$_POST['password']; 
    $data=$_POST['data'];
    $login= $qry_login=mysqli_query($koneksi,"select * from siswa where username = '".$email."' and password = '".md5($password)."'"); if(mysqli_num_rows($qry_login)>0);
    $cek=mysqli_num_rows($login);

if($cek > 0){	
    
    if($data['role']=="guru"){
        $_SESSION['email']=$email;
        $_SESSION['role']="guru";
        header("location:guru/home.php");

    }
 
    
    } else {
        echo "<script>alert('Email dan Password tidak
        benar');location.href='login.php';</script>";
        }
    
?>