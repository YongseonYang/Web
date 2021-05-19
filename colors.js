var Links = {
    setColor:function(color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
        }
        }
    }


var Body = {
    setColor:function(color) {
        document.querySelector('body').style.color = color;
    },

    setBackgroundcolor:function(color) {
        document.querySelector('body').style.backgroundColor = color;
}
}


function nightdayhandler(self) {
var target = document.querySelector('body');
if (self.value === 'Dark Mode') {
    Body.setBackgroundcolor ('black');
    Body.setColor('white');
    self.value = 'Nomal Mode';

    Links.setColor('powderblue');

} else { 
    Body.setBackgroundcolor ('white');
    Body.setColor('black');
    self.value = 'Dark Mode';

    Links.setColor('black');
}
}   