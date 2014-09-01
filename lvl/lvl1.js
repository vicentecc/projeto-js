function barraLife(t) {
    $('#life').css('width', t + '%');
    if (t == 0) {
        alert('game over');
    }
}

function teste(name) {
    s++;
    $('#ponto').html('ganhou um ponto: ' + s);
    $('canvas').removeLayer(name);
}

function gameStart() {

    setTimeout(function() {
        $('#btnStart').addClass('disabled', 'disabled');
    }, 100);

    t = 100;
    s = 0;

    $('canvas').drawRect({
        name: 'retangulo',
        layer: true,
        bringToFront: true,
        fillStyle: '#6c1',
        x: 250, y: 250,
        width: 800, height: 500,
        click: function() {
            t = t - 10;
            barraLife(t);
        }
    }).drawImage({
        layer: true,
        name: 'imagem1',
        source: 'assets/img/meteor.png',
        x: 20, y: -20,
        groups: ['quadrados1'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem1');
        }
    }).drawImage({
        layer: true,
        name: 'imagem2',
        source: 'assets/img/meteor.png',
        x: 220, y: -60,
        groups: ['quadrados1'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem2');
        }
    }).drawImage({
        layer: true,
        name: 'imagem3',
        source: 'assets/img/meteor.png',
        x: 50, y: -150,
        groups: ['quadrados3'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem3');
        }
    }).drawImage({
        layer: true,
        name: 'imagem4',
        source: 'assets/img/meteor.png',
        x: 100, y: -10,
        groups: ['quadrados1'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem4');
        }
    }).drawImage({
        layer: true,
        name: 'imagem5',
        source: 'assets/img/meteor.png',
        x: 440, y: -250,
        groups: ['quadrados1'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem5');
        }
    }).drawImage({
        layer: true,
        name: 'imagem6',
        source: 'assets/img/meteor.png',
        x: 150, y: -90,
        groups: ['quadrados1'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem6');
        }
    }).drawImage({
        layer: true,
        name: 'imagem7',
        source: 'assets/img/meteor.png',
        x: 200, y: -200,
        groups: ['quadrados1'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem7');
        }
    }).drawImage({
        layer: true,
        name: 'imagem8',
        source: 'assets/img/meteor.png',
        x: 330, y: -250,
        groups: ['quadrados1'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem8');
        }
    }).drawImage({
        layer: true,
        name: 'imagem9',
        source: 'assets/img/meteor.png',
        x: 250, y: -70,
        groups: ['quadrados1'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem9');
        }
    }).drawImage({
        layer: true,
        name: 'imagem10',
        source: 'assets/img/meteor.png',
        x: 300, y: -125,
        groups: ['quadrados1'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem10');
        }
    })


            .drawImage({
                layer: true,
                name: 'imagem11',
                source: 'assets/img/meteor.png',
                x: 100, y: -175,
                groups: ['quadrados2'],
                width: 50,
                height: 50,
                fromCenter: false,
                click: function() {
                    teste('imagem11');
                }
            }).drawImage({
        layer: true,
        name: 'imagem12',
        source: 'assets/img/meteor.png',
        x: 200, y: -75,
        groups: ['quadrados2'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem12');
        }
    }).drawImage({
        layer: true,
        name: 'imagem13',
        source: 'assets/img/meteor.png',
        x: 370, y: -25,
        groups: ['quadrados2'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem13');
        }
    }).drawImage({
        layer: true,
        name: 'imagem14',
        source: 'assets/img/meteor.png',
        x: 400, y: -325,
        groups: ['quadrados2'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem14');
        }
    }).drawImage({
        layer: true,
        name: 'imagem15',
        source: 'assets/img/meteor.png',
        x: 500, y: -225,
        groups: ['quadrados2'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem15');
        }
    }).drawImage({
        layer: true,
        name: 'imagem16',
        source: 'assets/img/meteor.png',
        x: 550, y: -255,
        groups: ['quadrados2'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem16');
        }
    }).drawImage({
        layer: true,
        name: 'imagem17',
        source: 'assets/img/meteor.png',
        x: 600, y: -125,
        groups: ['quadrados2'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem17');
        }
    }).drawImage({
        layer: true,
        name: 'imagem18',
        source: 'assets/img/meteor.png',
        x: 650, y: -200,
        groups: ['quadrados2'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem18');
        }
    }).drawImage({
        layer: true,
        name: 'imagem19',
        source: 'assets/img/meteor.png',
        x: 700, y: -325,
        groups: ['quadrados2'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem19');
        }
    }).drawImage({
        layer: true,
        name: 'imagem20',
        source: 'assets/img/meteor.png',
        x: 670, y: -20,
        groups: ['quadrados2'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem20');
        }
    })






            .drawImage({
                layer: true,
                name: 'imagem21',
                source: 'assets/img/meteor.png',
                x: 100, y: -175,
                groups: ['quadrados3'],
                width: 50,
                height: 50,
                fromCenter: false,
                click: function() {
                    teste('imagem21');
                }
            }).drawImage({
        layer: true,
        name: 'imagem22',
        source: 'assets/img/meteor.png',
        x: 200, y: -75,
        groups: ['quadrados3'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem22');
        }
    }).drawImage({
        layer: true,
        name: 'imagem23',
        source: 'assets/img/meteor.png',
        x: 370, y: -5,
        groups: ['quadrados3'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem23');
        }
    }).drawImage({
        layer: true,
        name: 'imagem24',
        source: 'assets/img/meteor.png',
        x: 400, y: -305,
        groups: ['quadrados3'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem24');
        }
    }).drawImage({
        layer: true,
        name: 'imagem25',
        source: 'assets/img/meteor.png',
        x: 500, y: -425,
        groups: ['quadrados3'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem25');
        }
    }).drawImage({
        layer: true,
        name: 'imagem26',
        source: 'assets/img/meteor.png',
        x: 550, y: -355,
        groups: ['quadrados3'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem26');
        }
    }).drawImage({
        layer: true,
        name: 'imagem27',
        source: 'assets/img/meteor.png',
        x: 600, y: -125,
        groups: ['quadrados3'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem27');
        }
    }).drawImage({
        layer: true,
        name: 'imagem28',
        source: 'assets/img/meteor.png',
        x: 650, y: -285,
        groups: ['quadrados3'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem28');
        }
    }).drawImage({
        layer: true,
        name: 'imagem29',
        source: 'assets/img/meteor.png',
        x: 700, y: -325,
        groups: ['quadrados3'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem29');
        }
    }).drawImage({
        layer: true,
        name: 'imagem30',
        source: 'assets/img/meteor.png',
        x: 670, y: -120,
        groups: ['quadrados3'],
        width: 50,
        height: 50,
        fromCenter: false,
        click: function() {
            teste('imagem30');
        }
    })




            ;

// Animate layer properties
    $('canvas')
            .animateLayerGroup('quadrados1', {
                y: 1000,
                rotate: 1000
            }, 8500);

    // Animate layer properties
    $('canvas')
            .animateLayerGroup('quadrados2', {
                y: 2500,
                rotate: 3000
            }, 20000);

    $('canvas')
            .animateLayerGroup('quadrados3', {
                y: 5500,
                rotate: -5000
            }, 35000);

}
;

