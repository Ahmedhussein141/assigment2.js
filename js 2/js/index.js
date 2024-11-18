
var old= -1;
function getWords(){
    var words = [
        {
name:"“I'm selfish, impatient and a little insecure. I make mistakes,  then you sure as hell don't deserve me"
        },
        {
name:"So many books, so little time.”"
        },
        {
name:"Live as if you were to die tomorrow. Learn as if you were to live forever.”"
        },
        {
name:"“A friend is someone who knows all about you and still loves you.”"
        },
        {
name:"“To live is the rarest thing in the world. Most people exist, that is all.”"
        },
        {
name:"Always forgive your enemies; nothing annoys them so much"
        },
        {
name:"“In three words I can sum up everything I've learned about life: it goes on.”"
        }
    ];
var num = Math.floor(Math.random()*words.length);

while(old==num){
num = Math.floor(Math.random()*words.length);
}

old=num;
 var element =document.getElementById("p").innerHTML= words[num].name
 
    
}