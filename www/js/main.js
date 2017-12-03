function id(element){
    return document.getElementById(element);
}

function init () {
    id ("gotoPage2Butt").addEventListener("click", function (){
        gotoPage2();
    });
     id ("loadListButt").addEventListener("click", function (){
        loadList();
    });
        id ("gotoPage3Butt").addEventListener("click", function (){
        gotoPage3();
    });
}

function gotoPage2 (){
    $.mobile.navigate("#page2", {
        info: "info about the var hash"
    });
}

function gotoPage3 (){
    $.mobile.navigate("#page3", {
        info: "info about the var hash"
    });
}

function loadList (){
    var list= id("myList2");
    
    var data = {
        "notifications":["1/12/2017","10/12/2017","23/12/2017"]
    }
    
    var myHtml;
    
    for (i=0; i<data.notifications.length;i++){
        myHtml+="<li>" + data.notifications[i] + "/<li>"
    }
    
    list.innerHTML=myHtml;
}