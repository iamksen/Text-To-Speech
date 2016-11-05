function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    //alert(text) //just for checking
    window.speechSynthesis.speak( new SpeechSynthesisUtterance(text) );
}

getSelectionText();