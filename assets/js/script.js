var hours = new Date(); //'new Date()' seems to be similar to a module, it allows me to get minutes and seconds and stuff using .getHours() etc
var minutes = new Date();
var seconds = new Date();

const hoursImage = document.getElementById("hours")
const minutesImage = document.getElementById("minutes")
const secondsImage = document.getElementById("seconds")

window.setInterval(function() { //calls the clock function once every second
clock()
}, 1000)

function clock() { //switch statements that change the image of the hours/minutes/seconds depending on the time
switch(hours.getHours()) {
    case 0:
        hoursImage.src="assets/images/0.png";
        break;
    case 1:
        hoursImage.src="assets/images/1.png";
        break;
    case 2:
        hoursImage.src="assets/images/2.png";
        break;
    case 3:
        hoursImage.src="assets/images/3.png";
        break;
    case 4:
        hoursImage.src="assets/images/4.png";
        break;
    case 5:
        hoursImage.src="assets/images/5.png";
        break;
    case 6:
        hoursImage.src="assets/images/6.png";
        break;
    case 7:
        hoursImage.src="assets/images/7.png";
        break;
    case 8:
        hoursImage.src="assets/images/8.png";
        break;
    case 9:
        hoursImage.src="assets/images/9.png";
        break;
    case 10:
        hoursImage.src="assets/images/10.png";
        break;
    case 11:
        hoursImage.src="assets/images/11.png";
        break;
    case 12:
        hoursImage.src="assets/images/12.png";
        break;
    case 13:
        hoursImage.src="assets/images/13.png";
        break;
    case 14:
        hoursImage.src="assets/images/14.png";
        break;
    case 15:
        hoursImage.src="assets/images/15.png";
        break;
    case 16:
        hoursImage.src="assets/images/16.png";
        break;
    case 17:
        hoursImage.src="assets/images/17.png";
        break;
    case 18:
        hoursImage.src="assets/images/18.png";
        break;
    case 19:
        hoursImage.src="assets/images/19.png";
        break;
    case 20:
        hoursImage.src="assets/images/20.png";
        break;
    case 21:
        hoursImage.src="assets/images/21.png";
        break;
    case 22:
        hoursImage.src="assets/images/22.png";
        break;
    case 23:
        hoursImage.src="assets/images/23.png";
        break;
    default:
        hoursImage.src="assets/images/0.png"
} 
switch(minutes.getMinutes()) {
    case 0:
        minutesImage.src="assets/images/0.png";
        break;
    case 1:
        minutesImage.src="assets/images/1.png";
        break;
    case 2:
        minutesImage.src="assets/images/2.png";
        break;    
    case 3:
        minutesImage.src="assets/images/3.png";
        break;
    case 4:
        minutesImage.src="assets/images/4.png";
        break;
    case 5:
        minutesImage.src="assets/images/5.png";
        break;
    case 6:
        minutesImage.src="assets/images/6.png";
        break;
    case 7:
        minutesImage.src="assets/images/7.png";
        break;    
    case 8:
        minutesImage.src="assets/images/8.png";
        break;
    case 9:
        minutesImage.src="assets/images/9.png";
        break;
    case 10:
        minutesImage.src="assets/images/10.png";
        break;
    case 11:
        minutesImage.src="assets/images/11.png";
        break;
    case 12:
        minutesImage.src="assets/images/12.png";
        break;    
    case 13:
        minutesImage.src="assets/images/13.png";
        break;
    case 14:
        minutesImage.src="assets/images/14.png";
        break;
    case 15:
        minutesImage.src="assets/images/15.png";
        break;
    case 16:
        minutesImage.src="assets/images/16.png";
        break;
    case 17:
        minutesImage.src="assets/images/17.png";
        break;    
    case 18:
        minutesImage.src="assets/images/18.png";
        break;
    case 19:
        minutesImage.src="assets/images/19.png";
        break;
    case 20:
        minutesImage.src="assets/images/20.png";
        break;
    case 21:
        minutesImage.src="assets/images/21.png";
        break;
    case 22:
        minutesImage.src="assets/images/22.png";
        break;    
    case 23:
        minutesImage.src="assets/images/23.png";
        break;
    case 24:
        minutesImage.src="assets/images/24.png";
        break;
    case 25:
        minutesImage.src="assets/images/25.png";
        break;
    case 26:
        minutesImage.src="assets/images/26.png";
        break;
    case 27:
        minutesImage.src="assets/images/27.png";
        break;    
    case 28:
        minutesImage.src="assets/images/28.png";
        break;
    case 29:
        minutesImage.src="assets/images/29.png";
        break;
    case 30:
        minutesImage.src="assets/images/30.png";
        break;
    case 31:
        minutesImage.src="assets/images/31.png";
        break;
    case 32:
        minutesImage.src="assets/images/32.png";
        break;    
    case 33:
        minutesImage.src="assets/images/33.png";
        break;
    case 34:
        minutesImage.src="assets/images/34.png";
        break;
    case 35:
        minutesImage.src="assets/images/35.png";
        break;
    case 36:
        minutesImage.src="assets/images/36.png";
        break;
    case 37:
        minutesImage.src="assets/images/37.png";
        break;    
    case 38:
        minutesImage.src="assets/images/38.png";
        break;
    case 39:
        minutesImage.src="assets/images/39.png";
        break;
    case 40:
        minutesImage.src="assets/images/30.png";
        break;
    case 41:
        minutesImage.src="assets/images/41.png";
        break;
    case 42:
        minutesImage.src="assets/images/42.png";
        break;    
    case 43:
        minutesImage.src="assets/images/43.png";
        break;
    case 44:
        minutesImage.src="assets/images/44.png";
        break;
    case 45:
        minutesImage.src="assets/images/45.png";
        break;
    case 46:
        minutesImage.src="assets/images/46.png";
        break;
    case 47:
        minutesImage.src="assets/images/47.png";
        break;    
    case 48:
        minutesImage.src="assets/images/48.png";
        break;
    case 49:
        minutesImage.src="assets/images/49.png";
        break;
    case 50:
        minutesImage.src="assets/images/50.png";
        break;
    case 51:
        minutesImage.src="assets/images/51.png";
        break;
    case 52:
        minutesImage.src="assets/images/52.png";
        break;    
    case 53:
        minutesImage.src="assets/images/53.png";
        break;
    case 54:
        minutesImage.src="assets/images/54.png";
        break;
    case 55:
        minutesImage.src="assets/images/55.png";
        break;
    case 56:
        minutesImage.src="assets/images/56.png";
        break;
    case 57:
        minutesImage.src="assets/images/57.png";
        break;    
    case 58:
        minutesImage.src="assets/images/58.png";
        break;
    case 59:
        minutesImage.src="assets/images/59.png";
        break;
    default:
        minutesImage.src="assets/images/o.png"
}
switch(seconds.getSeconds()) {
    case 0:
        secondsImage.src="assets/images/0.png";
        break;
    case 1:
        secondsImage.src="assets/images/1.png";
        break;
    case 2:
        secondsImage.src="assets/images/2.png";
        break;    
    case 3:
        secondsImage.src="assets/images/3.png";
        break;
    case 4:
        secondsImage.src="assets/images/4.png";
        break;
    case 5:
        secondsImage.src="assets/images/5.png";
        break;
    case 6:
        secondsImage.src="assets/images/6.png";
        break;
    case 7:
        secondsImage.src="assets/images/7.png";
        break;    
    case 8:
        secondsImage.src="assets/images/8.png";
        break;
    case 9:
        secondsImage.src="assets/images/9.png";
        break;
    case 10:
        secondsImage.src="assets/images/10.png";
        break;
    case 11:
        secondsImage.src="assets/images/11.png";
        break;
    case 12:
        secondsImage.src="assets/images/12.png";
        break;    
    case 13:
        secondsImage.src="assets/images/13.png";
        break;
    case 14:
        secondsImage.src="assets/images/14.png";
        break;
    case 15:
        secondsImage.src="assets/images/15.png";
        break;
    case 16:
        secondsImage.src="assets/images/16.png";
        break;
    case 17:
        secondsImage.src="assets/images/17.png";
        break;    
    case 18:
        secondsImage.src="assets/images/18.png";
        break;
    case 19:
        secondsImage.src="assets/images/19.png";
        break;
    case 20:
        secondsImage.src="assets/images/20.png";
        break;
    case 21:
        secondsImage.src="assets/images/21.png";
        break;
    case 22:
        secondsImage.src="assets/images/22.png";
        break;    
    case 23:
        secondsImage.src="assets/images/23.png";
        break;
    case 24:
        secondsImage.src="assets/images/24.png";
        break;
    case 25:
        secondsImage.src="assets/images/25.png";
        break;
    case 26:
        secondsImage.src="assets/images/26.png";
        break;
    case 27:
        secondsImage.src="assets/images/27.png";
        break;    
    case 28:
        secondsImage.src="assets/images/28.png";
        break;
    case 29:
        secondsImage.src="assets/images/29.png";
        break;
    case 30:
        secondsImage.src="assets/images/30.png";
        break;
    case 31:
        secondsImage.src="assets/images/31.png";
        break;
    case 32:
        secondsImage.src="assets/images/32.png";
        break;    
    case 33:
        secondsImage.src="assets/images/33.png";
        break;
    case 34:
        secondsImage.src="assets/images/34.png";
        break;
    case 35:
        secondsImage.src="assets/images/35.png";
        break;
    case 36:
        secondsImage.src="assets/images/36.png";
        break;
    case 37:
        secondsImage.src="assets/images/37.png";
        break;    
    case 38:
        secondsImage.src="assets/images/38.png";
        break;
    case 39:
        secondsImage.src="assets/images/39.png";
        break;
    case 40:
        secondsImage.src="assets/images/30.png";
        break;
    case 41:
        secondsImage.src="assets/images/41.png";
        break;
    case 42:
        secondsImage.src="assets/images/42.png";
        break;    
    case 43:
        secondsImage.src="assets/images/43.png";
        break;
    case 44:
        secondsImage.src="assets/images/44.png";
        break;
    case 45:
        secondsImage.src="assets/images/45.png";
        break;
    case 46:
        secondsImage.src="assets/images/46.png";
        break;
    case 47:
        secondsImage.src="assets/images/47.png";
        break;    
    case 48:
        secondsImage.src="assets/images/48.png";
        break;
    case 49:
        secondsImage.src="assets/images/49.png";
        break;
    case 50:
        secondsImage.src="assets/images/50.png";
        break;
    case 51:
        secondsImage.src="assets/images/51.png";
        break;
    case 52:
        secondsImage.src="assets/images/52.png";
        break;    
    case 53:
        secondsImage.src="assets/images/53.png";
        break;
    case 54:
        secondsImage.src="assets/images/54.png";
        break;
    case 55:
        secondsImage.src="assets/images/55.png";
        break;
    case 56:
        secondsImage.src="assets/images/56.png";
        break;
    case 57:
        secondsImage.src="assets/images/57.png";
        break;    
    case 58:
        secondsImage.src="assets/images/58.png";
        break;
    case 59:
        secondsImage.src="assets/images/59.png";
        break;
    default:
        secondsImage.src="assets/images/o.png"
}
}