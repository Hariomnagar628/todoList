// Create a "close" button and append it to each list item
var mynodelist = document.getElementsByTagName("LI");
var i;
for(i=0; i < mynodelist.length;i++)
{
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    mynodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++)
{
    close[i].onclick = function()
        {
            var div = this.parentElement;
            div.style.display = "none";
        }

    }

    // Add a "checked" symbol when clicking on a list item

    var list = document.querySelector('ul');
    list.addEventListener('click',function(ev)
    {
        if(ev.target.tagName==='LI')
        {
            ev.target.classList.toggle('checked');
        }
    },false);


// Create a new list item when clicking on the "Add" button

function newevent()
{
    var li = document.createElement("li");
    var inputvalue = document.getElementById("myinput"). value;
    var t = document.createTextNode(inputvalue);
    li.appendChild(t);
    if(inputvalue === ''){
        alert("You must write something!");
    }
    else{
        document.getElementById("myul").appendChild(li);

    }
    document.getElementById("myinput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for(i=0; i < close.length;i++)
    {
        close[i].onclick = function()
        {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}  
