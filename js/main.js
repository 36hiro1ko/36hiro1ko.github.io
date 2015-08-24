
$(function(){
    
    setTimeout('rect()'); //アニメーションを実行
    
    
    /* snowfallを実行する */
    $(document).snowfall({
                /* shadow : true,*/
                /* round : true, */
                minSize: 5,
                maxSize: 20,
                
                image : [

                      'http://lib.tree-web.net/image/snow_crystal_b/snow_crystal01.png',
                      'http://lib.tree-web.net/image/snow_crystal_b/snow_crystal02.png',
                      'http://lib.tree-web.net/image/snow_crystal_b/snow_crystal03.png',
                      'http://lib.tree-web.net/image/snow_crystal_b/snow_crystal04.png',
                      'http://lib.tree-web.net/image/snow_crystal_b/snow_crystal05.png',
                      'http://lib.tree-web.net/image/snow_crystal_b/snow_crystal06.png',
                      'http://lib.tree-web.net/image/snow_crystal_b/snow_crystal07.png',
                      'http://lib.tree-web.net/image/snow_crystal_b/snow_crystal08.png',
                      'http://lib.tree-web.net/image/snow_crystal_b/snow_crystal09.png'
                ]               
                
    })
    
});
    
    /* 風船に対してのアクション */
    function rect() {
    $('#cat .inner').animate({
        marginTop: '-=10px'
    }, 800).animate({
        marginTop: '+=10px'
    }, 800);
        setTimeout('rect()', 1600); //アニメーションを繰り返す間隔
    }

    
    
    


