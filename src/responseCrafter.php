<?php

class responseCrafter {
    public function update () { // do a 'while' loop and run test run the onprog or onreadystatechange

    }

    public function pingTest ($POST) {
        try {
            $pld = array('status'=>'fail');
            $rpt = array('Exception'=>'DoublePhail');
            $msg = array(
                    'pld'=>$pld,
                    'rpt'=>$rpt
                        );
            switch ($POST['pSwitch']) {
                case 'ping':
                    $pld['status'] = 'successssss';

                default:
                    $this->response($msg,$pld,$rpt);
            }
        } catch (Exception $e){
            var_dump($POST);
        }
    }

    public function response($response, $payload=null, $reports=null) {
        while (ob_get_level() > 0) { // clear any existing buffers
            ob_end_flush();
        }
        $this->smpResponse($response,$payload,$reports);
    }

    private function smpResponse($response, $payload=null, $reports=null) { // shift this, make expResponse use this
        echo json_encode($response);
    }

    private function t2($content) { // deal with this later w/ upload, why else have a progress bar?
        echo $content;
//        flush();
        ob_flush();
    }

    private function expResponse() {
    }
}

?>
