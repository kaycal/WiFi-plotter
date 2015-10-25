<?php
/* Main logix of the database server / database controller */
    try {
        switch ($_POST['switch']) {

/*
            case 'update':                              // update via csv.
                include 'updateDB.php';                 // only case where database manipulation is appropriate.
                $updateDB = new updateDB($_FILES);      //
                break;
*/                  // TODO WORK ON QUERY NEXT
            case 'query':                               // perform a query
                include 'queryDB.php';                  //
                $queryDB = new queryDB($_POST);         //
                break;
/**/

            case 'ping':                                // proverbial 'keepalive' on the server. testing function.
                include 'responseCrafter.php';          //
                $rc = new responseCrafter();
                $rc->pingTest($_POST);    //

                break;

            default:                                    // this will eventually be used for sanitized queries maybe?

        }
    } catch (Exception $e){
        var_dump($_POST);
        //echo $e;
    }
?>
