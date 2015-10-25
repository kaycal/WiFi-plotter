    /*  ==================
        = Demo functions =
        ================== */
function pingTest() { // demonstrates courting a response from the PHP server
    fields = {
        "switch": "ping",
        "pSwitch": "update",
    };
    serverRequest(fields);
}


    /*  ==============
        = Page setup =
        ============== */
function globalSet(){
    // bind functions to htmelements
    $( '#ping' ).click(pingTest);
}


    /*  ==================
        = Tool functions =
        ================== */
function serverRequest(xfields) { // include payload in xfields
    $.ajax({
        // function call-specific settings
        data: xfields,

        // Global settings
        type: "POST",
        url: "src/logix.php",
        datatype: 'json',

        // events
        xhrFields: { onprogress: reqProg },
        success: reqSucc, // reqSucc,    // ...the two of these?
        error: reqErr,
    });
}

function consoleLog(msg,parsing,suffix){
    suffix = (typeof suffix == 'undefined') ? "<br>" : suffix;
    if ((typeof parsing == 'undefined') ? false : parsing) { // this msg needs to be sanitized
        var re = new RegExp("^.*?({.*})$");
        msg = JSON.stringify(JSON.parse(msg.match(re)[1]),null,4);
        $( '#console' ).append("<pre>" + msg + suffix + "</pre>");
    } else {
        $( '#console' ).append(msg + suffix);
    }
}


    /*  =======================
        = Behaviour Functions =
        ======================= */
function reqComp (data) {} // TODO triggers on completion of ajax (regardless of success or failure)

function reqSucc (data,textStatus,jqXHR) { // triggers on the successful completion of an ajax request (status 200 OK)
    consoleLog("");
    consoleLog(data,true);
}

function reqProg (data) {} // TODO triggers on request progress. why isn't ob_flush working?

function reqErr (data) { // TODO triggers on some error?
    console.log("reqErr");
}


    /*  ==============
        = Initialize =
        ============== */
$(function() {
    globalSet();
});
