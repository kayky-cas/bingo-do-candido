<?php
  $numJogadosArq = fopen("numJogados.txt","a");
  do {
    $numA = rand(0,100);
    $cont = 0;
    for ($i=0; $i < filesize("numJogados.txt"); $i++) {
      if ($numA == fread($numJogadosArq,i)) {
        $cont = 1;
      }
    }

  } while ($cont!=0);
  fwrite($numJogadosArq, $numA+"\n");
  fclose($numJogadosArq);
  // $tabela[$i] = rand(0,100);
  echo json_encode($numA);
?>
