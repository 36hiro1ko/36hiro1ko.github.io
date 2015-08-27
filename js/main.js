
$(function(){
    
   

    setTimeout('rect()'); //アニメーションを実行
    setTimeout('grape()');
    setTimeout('topimage()'); //アニメーションを実行
    setTimeout('topimage2()'); //アニメーションを実行
    setTimeout('topimage3()'); 
    setTimeout('leaf1()');
    
    
    
    /* snowfallを実行する */
    
    $(document).snowfall({ 
                minSize: 5,
                maxSize: 20,              
                image : [

                      './img/sakura.png',
                      './img/sakura2.png',
                      './img/sakura3.png',
                      './img/sakura4.png'
                ]               
                
    }) 
    
    

     
});

/*
$(function() {
  $(window).scroll(function() {
    var value = $(this).scrollTop();  //スクロール値を取得
    $('#scrollValue').text(value);
  });
});
*/


    
/* 風船に対してのアクション */
function rect() {
    $('#cat .inner').animate({
        marginTop: '-=5px'
    }, 800).animate({
        marginTop: '+=5px'
    }, 800);
        setTimeout('rect()', 1600); //アニメーションを繰り返す間隔
}

/* ヘッド画像(grape)に対してのアクション */
function grape() {
    $('#grape').animate({
       backgroundPosition:'-=10px'
    },1600).animate({
      backgroundPosition:'+=10px'
    },1600);
        setTimeout('grape()', 1600); //アニメーションを繰り返す間隔
}


/* ヘッド画像に対してのアクション */
function topimage() {
    $('#topimage').animate({
       backgroundPosition:'-=10px'
    },1000).animate({
      backgroundPosition:'+=10px'
    },1000);
        setTimeout('topimage()', 1600); //アニメーションを繰り返す間隔
}

/* ヘッド画像に対してのアクション */
function topimage2() {
    $('#topimage2').animate({
       backgroundPosition:'-=10px'
    },1500).animate({
      backgroundPosition:'+=10px'
    },1500);
        setTimeout('topimage2()', 1600); //アニメーションを繰り返す間隔

}

/* ヘッド画像に対してのアクション */
function topimage3() {
    $('#topimage3').animate({
       backgroundPosition:'-=10px'
    },1300).animate({
      backgroundPosition:'+=10px'
    },1300);
        setTimeout('topimage3()', 1600); //アニメーションを繰り返す間隔

}

/* sakura1に対してのアクション */
function leaf1() {
    $('#leaf1').animate({
       backgroundPosition:'-=5px'
    },1000).animate({
      backgroundPosition:'+=5px'
    },1000);
        setTimeout('leaf1()', 1600); //アニメーションを繰り返す間隔

}







    
    
    


