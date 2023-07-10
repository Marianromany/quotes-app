

function quotes(){

var speaker=['― Albert Einstein' , '― Oscar Wilde', '― Frank Zappa', '― Marcus Tullius Cicero', '― Mae West', '― Mark Twain', '― Elbert Hubbard', '― Oscar Wilde'];
var text=[ "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" ,"“Be yourself; everyone else is already taken.”" , "“So many books, so little time.”" , "“A room without books is like a body without a soul.”" , "“You only live once, but if you do it right, once is enough.”" ,"“If you tell the truth, you don't have to remember anything.”" ,"“A friend is someone who knows all about you and still loves you.”","“Always forgive your enemies; nothing annoys them so much.”",];

     var randomNum = Math.floor(Math.random() * speaker.length);
   
    document.getElementById('text').innerHTML=(text[randomNum]) ;
    document.getElementById('speaker').innerHTML=(speaker[randomNum]);

}
