<?php
  for ($i=0; $i < 75; $i++) {
    do {
      $numJog[$i] = rand(0,100);
      $status = 1;
      for ($j = 0; ($j < $i) && ($status == 1); ++$j){
        if ($numJog[$i] == $numJog[$j]){
          $status = 0;
        }
      }
    } while ($status == 0);
  }
  echo json_encode($numJog);
?>
