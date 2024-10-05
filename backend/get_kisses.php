<?php
$file = 'kisses.txt'; // Mude o caminho para subir um nível
if (file_exists($file)) {
    echo file_get_contents($file);
} else {
    echo '0'; // Caso o arquivo não exista ainda
}
?>