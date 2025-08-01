function emailToClipboard(){
    navigator.clipboard.writeText("juliancerrato1@gmail.com");
    document.getElementById("toolTipText").textContent = "copied!";
    setTimeout(()=> document.getElementById("toolTipText").textContent = "copy email", 1500);
}