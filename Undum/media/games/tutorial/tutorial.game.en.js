
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

undum.game.version = "1.0";

undum.game.mobileHide = 2000

undum.game.fadeSpeed = 1500

undum.game.slideUpSpeed = 500

undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Escena 1: Comienza el juego</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Te despiertas desorientado, tu vista esta nublada y parece que te va \
		la cabeza, no entiendes que haces hay ni cómo has llegado a donde quiera que estes\
		Tus ojos comienzan a adaptarse a la luz, la niebla que te impedía ver nada\
		a tu alrededor empieza a disiparse y cuando intentas mover tus manos\
		te das cuentas que estás sentado, atado de alguna forma a una silla.\
		Un televisor antiguo puesto en lo que intuyes de una persona pero no\
		puedes distinguir su cara o alguno de sus rasgos, una silueta.</p>\
        \
        <p> -Bienvenido al divertido juego del ratón y el queso, tú, amigo mio, eres el ratón\
		y tu queso será salir de aqui con vida, pero claro no te lo pondré fácil, seguro que \
		te preguntaras miles de cosas pero con el tiempo las descubrirás,\
		se un ratón bueno y empieza a buscar tu querido queso.</p>\
        \
		<p>Las ataduras que te retenían en la silla se sueltan, la televisión\
		se apaga y una puerta enfrente de ti se abre, quizás sea hora de ver a\
		qué se refería con el queso</p>\
		\
        <p class='transient'>Ves una puerta. <br><a href='hub'>Salir\
        por la puerta</a><br><a href='buscar'>buscar por la sala</a></p>"
    ),
	buscar: new undum.SimpleSituation(
		"<p> Buscas por la extraña sala en busca de alguna pista,\ \n\
		pero solo encuentras unos guantes</p>\ \n\
		\
		<p class='transient'><a href='start'>coger los guantes y seguir pensando</a></p>",
		{
            exit: function(character, system, to) {
                system.setQuality("guantes", true);
            }
        }
	),

    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "Salir por la puerta",
        displayOrder: 1
    }),
    introduccion: new undum.SimpleSituation(
        "<img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Tras pasar la puerta te encuentras en una habitación con una puerta\ \n\
            por cada pared y encima de cada una de las puertas unos símbolos en\ \n\
            la parte superior del marco. Tienes un rayo, lo que parece una mujer\ \n\
            de perfil con los ojos cerrados, una puerta con un círculo en el centro\ \n\
            y una carita sonriente. Antes de que te dé tiempo a poder observar mejor\ \n\
            la sala una televisión se enciende en una de sus esquinas, comienza a sonar\ \n\
            música clásica ya sucederse imágenes de familias felices guerra y varios\ \n\
            temas que no consigues comprender cómo están relacionados, antes de que digas\ \n\
            una palabra una voz familiar sale de ese televisor y la imagen de la silueta se \\n\
            apodera de la pantalla.</p>\
        \
        <p> -Es hora de elegir ratoncito, cada puerta te llevará a una prueba para conseguir\\n\
             un fragmento de ese delicioso queso que tanto buscas, da igual el orden que \\n\
             elijas, hasta que no acabes todas no podrás continuar.</p>\
        \
		<p>La imagen de la pantalla desaparece, y ahí estás tú ante otra elección.</p>\
		\
        <p class='transient'<br><a href='observar'>Continuar</a></p>"
        

    ),
    observar: new undum.SimpleSituation(
        "<img src='media/games/tutorial/door.jpg' class='float_right'>\
        <p class='transient'>Ves tres puertas.\n <br><a href='derecha' class='once'>elegir\
        la puerta de la derecha</a><br><a href='izquierda'>elegir\
        la puerta de la izquierda</a><br><a href='centro'>elegir\
        la puerta del centro</a></p>"

    ),
	observarizquierda: new undum.SimpleSituation(
        "<img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p class='transient'>Ves tres puertas.\n <br><a href='derecha' class='once'>elegir\
        la puerta de la derecha</a><br><a href='centro'>elegir\
        la puerta del centro</a></p>"

    ),
	observarderecha: new undum.SimpleSituation(
        "<img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p class='transient'>Ves tres puertas.\n <br><a href='izquierda'>elegir\
        la puerta de la izquierda</a><br><a href='centro'>elegir\
        la puerta del centro</a></p>"

    ),
     derecha: new undum.SimpleSituation(
        "<p>decides pasar la puerta de la derecha, te acercas a ella y se va\ \n\
		abriendo cada vez más por cada paso que das.En su interior ves un acuario, pero tiene\ \n\
		algo raro, unos cables van desde las paredes hasta el. En el interior del acuario puedes ver\ \n\
		una caja, con un simbolo de queso donde debería de estar el ojo de la cerradura\ \n\
		,ya has encontrado tu queso, ahora solo tienes que cogerlo.</p>\ \n\
			\
		<p class='transient'><a href='electrificado'>meter la mano directamente para intentar sacar la caja\ \n\
		</a>.<br><a href='cables'>Observas la habitaci�n en busca del origen de los cables</a><br>\ \n\
		<a href='observar'>volver a la habitaci�n anterior</a></p>"
	
    ),
	izquierda: new undum.SimpleSituation(
        "<p>Decides pasar la puerta de la izquierda, te encuentras en una \ \n\
		habitación con na estatua en el centro, era una mujer con los ojos\ \n\
		vendados y una espada en cada mano, si hubieses ido a clase de historia\ \n\
		reconocerías a quien representa la estatua pero como no fuiste solo\ \n\
		puedes observar preguntandote que pasará.\ \n\
		Una televisión se enciende y la sileta parece alog mas nitida pero aun asi\ \n\
		no puedes distinguirla\ \n\
		'Ratoncito, esta dama está ciega, pero no sorda, debes de ser muy silencioso\ \n\
		si no quieres conocerla de cerca.'\ \n\</p>\ \n\
			\
		<p class='transient'><br>\ \n\
		<a href='izqierdaobservar'>Mirar detenidamente</a></p>"
	
    ),
	izqierdaobservar: new undum.SimpleSituation(
		"<p>Ves que es suelo está formado por unas baldosas extrañas, estas emiten un pequeño\
		sonido al tocarlas y ves que la estatua se gira y avanza un poco en función de qué\
		baldosa toques. Al final de la sala hay una caja en un pedestal</p>\ \n\
		\
		<p class='transient'><br>\ \n\
		<a href='muerteestatua'>intentar avanzar despacio baldosa a baldosa tratando\
		de que la estatua no se mueva rápido.</a></p>\
		<p class='transient'><br>\ \n\
		<a href='izqierdalento'>intentar avanzar despacio pero saltándose baldosas\
		para que asi el numero de movimientos de la estatua sea menor</a></p>\
		<p class='transient'><br>\ \n\
		<a href='observarestatua'>Observar detenidamente</a></p>"
		
		
		
	),
	observarestatua: new undum.SimpleSituation(
		"<p>Al mirar más detenidamente una de las baldosas te das cuenta de que puedes\
		levantarla y al hacerlo ves un cable que se enreda en una pieza y se extiende\
		a las demás baldosas. </p>\
		<p class='transient'><br>\ \n\
		<a href='izqierdaobservar'>Dejar la baldosa como estaba</a><br>\ \n\
		<a href='./cortar'>cortar los cables</a></p>",
	{	
	actions:{
		cortar:function(character,system,action){
			if(character.qualities.alicates == true){
				system.write("<p class='transient'><a href='izquierdacontinua'>Puedes cortar el cable con unos alicates</a></p>");
			}else{
			system.write("<p class='transient'><a href='observar'> no puedes continuar sin unos alicates por tanto vuelves en busca de unos</a></p>");
			}
		}
	},
	}
		
	),
	muerteestatua: new undum.SimpleSituation(
		"<p>La estatua va muy rápido así que te aplasta y mueres, GAME OVER</p>"
	),
	izqierdalento: new undum.SimpleSituation(
		"<p>Consiges llegar hasta el final, pero la estatua de daña a la salida de la sala</p>\
		<p class='transient'><br>\ \n\
		<a href='izquierdacontinua'>Continuar</a></p>"
	),
	izquierdacontinua: new undum.SimpleSituation(
		"<p>Has conseguido que la estatua no te mate,ahora tienes otro fragmento de la llave,\
		solo puedes continuar hasta llegar al final.</p>\ \n\
		\
		<p class='transient'><a href='salidafinalizq'>encuentras otra puerta y pruebas a ver si puedes salir</a>"
		,{
            exit: function(character, system, to) {
                system.setQuality("piezas", character.qualities.piezas+1);
            }
        }
	),
	centro: new undum.SimpleSituation(
        "<p>Decides pasar la puerta de la centro, te encuentras en una \ \n\
		sala vacía, lo único que puedes hacer es volver atras.\ \n\</p>\ \n\
			\
		<p class='transient'><br>\ \n\
		<a href='observar'>volver a la habitaci�n anterior</a></p>"
	
    ),
	salidafinal: new undum.SimpleSituation(
        "<p>Con la llave que has entontrado <a href='./comprobar' class = 'once'>intentas abrir la puerta</a>\ \n\
		",
		{
		actions:{
		"comprobar":function(character,system,action){
				if(character.qualities.piezas == 2){
				system.write("<p>encajas las piezas en la puerta y empieza abrirse la puerta, por fin podras salir de este infierno</p>");
				}else{
				system.write("<p class='transient'><a href='observar'> Parece ser que aun falta alguna pieza, el infierno continua</a></p>");
				}
			}
			}
		}
	
    ),
	salidafinalizq: new undum.SimpleSituation(
        "<p>Con la llave que has entontrado <a href='./comprobar' class = 'once'>intentas abrir la puerta</a>\ \n\
		",
		{
		actions:{
		"comprobar":function(character,system,action){
				if(character.qualities.piezas == 2){
				system.write("<p>encajas las piezas en la puerta y empieza abrirse la puerta, por fin podras salir de este infierno</p>");
				}else{
				system.write("<p class='transient'><a href='observarizquierda'> Parece ser que aun falta alguna pieza, el infierno continua</a></p>");
				}
			}
			}
		}
	
    ),
	salidafinalder: new undum.SimpleSituation(
        "<p>Con la llave que has entontrado <a href='./comprobar' class = 'once'>intentas abrir la puerta</a>\ \n\
		",
		{
		actions:{
		"comprobar":function(character,system,action){
				if(character.qualities.piezas == 2){
				system.write("<p>encajas las piezas en la puerta y empieza abrirse la puerta, por fin podras salir de este infierno</p>");
				}else{
				system.write("<p class='transient'><a href='observarderecha'> Parece ser que aun falta alguna pieza, el infierno continua</a></p>");
				}
			}
			}
		}
	
    ),
	electrificado: new undum.SimpleSituation(
	"<p>Te acercas muy bravucon al agua y metes tu mano, siente como la electricidad \ \n\
	te recorre el cuerpo y vuelves atras con el rabo entre las piernas</p><br>\ \n\
	\
	<p class='transient'><a href='derecha'>vuelves a pensar una idea.</p>",
		{
            exit: function(character, system, to) {
                if(character.qualities.guantes == true){
					system.setQuality("salud", character.qualities.salud-5);
            }else{
				system.setQuality("salud", character.qualities.salud-10);
			}
        }
		}
	),
	cables: new undum.SimpleSituation(
	"<p>Al seguir los cables hasta su origen ves que están conectados a una baterías en la parte\ \n\
	trasera del acuario, pero no tienes herramientas para cortar el cable pero ves unos <a href='./alicates' class='once'>alicates</a>.<br> </p> \ \n\
	\
	<p class='transient'><a href='electrificado2'>intentas arrancar uno de los cables con tu manos</a><br> \ \n\
	<a href='interruptor'>Te fijas en el dispositivo</a><br><a href='derecha'>vuelves frente al acuario</a></p>",
	    {

            actions: {
                "alicates": function(character, system, action) {
                    system.setQuality("alicates", true);
                }
            },
        }
	),
	electrificado2: new undum.SimpleSituation(
	"<p> Te sigues sin enterar que la electricidad no es tu aliada <br></p> \ \n\
		\
	<p class='transient'><a href='cables'> seguir pensando</a></p>",
		{
            exit: function(character, system, to) {
                if(character.qualities.guantes == true){
					system.setQuality("salud", character.qualities.salud-5);
            }else{
				system.setQuality("salud", character.qualities.salud-10);
			}
        }
		}
	),
	interruptor: new undum.SimpleSituation(
	"<p>Te das cuenta que entre las baterías hay un pequeño interruptor  \ \n\
	, hay algo extraño en esta situación pero parece que la suerte acaba de sonreirte.</p> \ \n\
	\
	<br><p class='transient'><a href='electrificado2'>Usar el interruptor</a><br><a href='./cortar'>Cortar los cables</a><br> \ \n\
	",
	{	
	actions:{
		cortar:function(character,system,action){
			if(character.qualities.alicates == true){
				system.write("<p class='transient'><a href='final3'>cortar los cables y pulsar el interruptor</a></p>");
			}else{
			system.write("<p class='transient'><a href='electrificado2'> no puedes cortar los cables sin unos alicates</a></p>");
			}
		}
	},
	}
	),
		final3: new undum.SimpleSituation(
	"<p> Has conseguido cortar la corriente que te impide coger la caja del acuario \ \n\
	Tras cogerla y abrirla en el interior, ves un fragmento de algún tipo de simbolo, es la \ \n\
	llave de tu libertad.(Consigues un fragmento del puzle final para escapar).<br></p> \ \n\
	\
	<p class='transient'><a href='salidafinalder'>abres la puerta</a></p>",
		{
            exit: function(character, system, to) {
                system.setQuality("piezas", character.qualities.piezas+1);
            }
        }
	),
	
	
    



};

// ---------------------------------------------------------------------------

undum.game.start = "start";

// ---------------------------------------------------------------------------

undum.game.qualities = {
    piezas: new undum.NumericQuality(
        "Piezas de llave", {priority:"0001", group:'inventario'}
    ),
    stamina: new undum.NumericQuality(
        "Antorchas", {priority:"0002", group:'stats'}
    ), 
	salud: new undum.NumericQuality(
        "Salud", {priority:"0003", group:'stats'}
    ),
	alicates: new undum.OnOffQuality(
		"Alicates", {priority:"0004", group:'inventario', onDisplay:"✓"}
	),
	guantes: new undum.OnOffQuality(
		"Guantes", {priority:"0005", group:'inventario', onDisplay:"✓"}
	),
	

};

// ---------------------------------------------------------------------------

undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"}),
	inventario: new undum.QualityGroup('Inventario',{priority:"0003"})
};

// ---------------------------------------------------------------------------

undum.game.init = function(character, system) {
    system.setQuality("alicates",false);
	character.qualities.piezas = 0;
    character.qualities.stamina = 0;
    character.qualities.salud = 100;
};
