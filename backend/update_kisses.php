<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $count = $_POST['count'];

    // Salva o número de beijos em um arquivo
    $file = 'kisses.txt';
    file_put_contents($file, $count);

    echo "Kiss count updated to $count!";
}
?>
