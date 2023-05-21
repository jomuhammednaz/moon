let stars1 = document.getElementById('stars');
let moon2 = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat');
let nazir = document.querySelector('.nazir');
window.onscroll =function(){
    let value =scrollY;
    stars1.style.left = value + 'px';
    moon2.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value * 3 + 'px';
    nazir.style.fontSize = value  + 'px';
    if(scrollY >= 67){
        nazir.style.fontSize = 67 +'px';
        nazir.style.position = 'fixed';
        if(scrollY >= 580){
            nazir.style.display = 'none';
        }else{
            nazir.style.display = 'block';
        }
        if(scrollY >= 197){
            document.querySelector('.main').style.background = 'linear-gradient(#055b83,#10001f)'
            }else{
                document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
            }
    }
}