
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Icon Font Stylesheet -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

        <!-- Customized Bootstrap Stylesheet -->
         <link rel="stylesheet" href="style.css">
  
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Pattern Printing</title>
</head>
<body>
    <section class=" py-5 border">
        <h1 class="text-center text-ftcolor">Pattern Printing</h1>
        <div class="container mt-5 pt-5">
        <div class="row justify-content-center mb-5">
                <div class="col-md-12 text-center border py-3">
                    <h3 class="">Practice </h3>
                    <script src="js/patterns/test.js"></script>
                </div>
            </div>
            <div class="row">
                 <?php 
                 $b = [48, 49, 50, 51, 52, 53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70, 71, 72, 73,74, 75,76,77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,91];
                 for($iCnt = 0; $iCnt < count($b); $iCnt++){
                 ?>
                <div class="col-md-3 text-center border py-3">
                    <h3 class="">Pattern - <?= $b[$iCnt] ;?></h3>
                    <script src="js/patterns/<?= $b[$iCnt] ;?>.js"></script>
                </div>
                <?php 
                }
                ?>  
            </div>
        </div>
    </section>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</html>