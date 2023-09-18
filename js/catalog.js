var cart = {};

$('document').ready(function(){
    loadWallbars();
    loadTreadmils();
    loadTennisTables();
    loadTranpolines();
    checkCart();
});

function loadWallbars(){
    $.getJSON('db.json', function(data){
        var out = '';
        for (var key in data){
            if (('Стенка'.localeCompare(data[key]['category']))==0){
            out+='<div class="goods__single-product">';
            out+='<h2 class="goods__product-name">'+data[key]['name']+'</h2>';
            out+='<img class="goods__img" src="'+data[key]['img']+'" alt="">';
            out+='<h2>'+data[key]['price']+' ₽</h2>';
            out+='<button class="goods__add-btn" articul="'+key+'">Добавить в корзину</button>';
            out+='</div>';
            }
        }
        $('#wallbars').html(out);
    });
}
function loadTreadmils(){
    $.getJSON('db.json', function(data){
        var out = '';
        for (var key in data){
            if (('Дорожка'.localeCompare(data[key]['category']))==0){
            out+='<div class="goods__single-product">';
            out+='<h2 class="goods__product-name">'+data[key]['name']+'</h2>';
            out+='<img class="goods__img" src="'+data[key]['img']+'" alt="">';
            out+='<h2>'+data[key]['price']+' ₽</h2>';
            out+='<button class="goods__add-btn" articul="'+key+'">Добавить в корзину</button>';
            out+='</div>';
            }
        }
        $('#treadmil').html(out);
    });
}
function loadTennisTables(){
    $.getJSON('db.json', function(data){
        var out = '';
        for (var key in data){
            if (('Стол'.localeCompare(data[key]['category']))==0){
            out+='<div class="goods__single-product">';
            out+='<h2 class="goods__product-name">'+data[key]['name']+'</h2>';
            out+='<img class="goods__img" src="'+data[key]['img']+'" alt="">';
            out+='<h2>'+data[key]['price']+' ₽</h2>';
            out+='<button class="goods__add-btn" articul="'+key+'">Добавить в корзину</button>';
            out+='</div>';
            }
        }
        $('#tennis').html(out);
    });
}
function loadTranpolines(){
    $.getJSON('db.json', function(data){
        var out = '';
        for (var key in data){
            if (('Батут'.localeCompare(data[key]['category']))==0){
            out+='<div class="goods__single-product">';
            out+='<h2 class="goods__product-name">'+data[key]['name']+'</h2>';
            out+='<img class="goods__img" src="'+data[key]['img']+'" alt="">';
            out+='<h2>'+data[key]['price']+' ₽</h2>';
            out+='<button class="goods__add-btn" articul="'+key+'">Добавить в корзину</button>';
            out+='</div>';
            }
        }
        $('#tranpoline').html(out);
        $('button.goods__add-btn').on('click', addToCart);
    });
}

function addToCart(){
    var articul = $(this).attr('articul');
    if (cart[articul]!=undefined){
        cart[articul]++;
    }
    else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

function checkCart(){
    if (localStorage.getItem('cart') != null){
        cart = JSON.parse (localStorage.getItem('cart'));
    }
}
