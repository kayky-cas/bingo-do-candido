<?php
  for ($i=0; $i < 25; $i++) {
    do {
      $cartela[$i] = rand(0,99);
      $status = 1;
      for ($j = 0; ($j < $i) && ($status == 1); ++$j){
        if ($cartela[$i] == $cartela[$j]){
          $status = 0;
        }
      }
    } while ($status == 0);
  }
  echo json_encode($cartela);
?>
