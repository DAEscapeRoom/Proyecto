// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
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
        por la puerta</a></p>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "Salir por la puerta",
        displayOrder: 1
    }),
    observar: new undum.SimpleSituation(
        "<h1>Escena 2: Corre Raton</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
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
        <p> -Es hora de elegir ratoncito, cada puerta te llevará a una prueba para conseguir\
             un fragmento de ese delicioso queso que tanto buscas, da igual el orden que \\n\
             elijas, hasta que no acabes todas no podrás continuar.</p>\
        \
		<p>La imagen de la pantalla desaparece, y ahí estás tú ante otra elección.</p>\
		\
        <p class='transient'>Ves tres puertas. <br><a href='derecha' class='once'>elegir\
        la puerta de la derecha</a><br><a href='izquierda'>elegir\
        la puerta de la izquierda</a><br><a href='centro'>elegir\
        la puerta del centro</a></p>\
<p class='transient'>Hacer Hub de las decisiones 2</p>",

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
		<a href='observar'>volver a la habitación anterior</a></p>"
	
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
		<a href='izqierdaobservar'>Dejar la baldosa como estaba</a></p>\
		",
		{	
	actions:{
		cortar:function(character,system,action){
			if(character.qualities.alicates == true){
				system.write("<p class='transient'><a href='izquierdacontinua'>Puedes cortar el cable con unos alicates</a></p>");
			}else{
			system.write("<p class='observarestatua'><a href='electrificado2'> no puedes cortar los cables sin unos alicates</a></p>");
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
		"<p>Has conseguido que la estatua no te mate, <a href='./fragmento' class='once'>ahora tienes otro fragmento de la llave</a>,\
		solo puedes continuar hasta llegar al final.</p>\ \n\
		\
		<p class='transient'><a href='observar'>volver a la zona central</a>"
		,{
		  actions: {
                fragmento: function(character, system, action) {
                    system.setQuality("piezas", character.qualities.piezas+1);
                }
            },
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
		cortar:function(character,system,action){
			if(character.qualities.piezas=>2){
				system.write("<p>encajas las piezas en la puerta y empieza abrirse la puerta, por fin podras salir de este infierno</p>");
			}else{
			system.write("<p class='transient'><a href='observar'> Parece ser que aun falta alguna pieza, el infierno continua</a></p>");
			}
		}
	
    ),
	electrificado: new undum.SimpleSituation(
	"<p>Te acercas muy bravucon al agua y metes tu mano, siente como la electricidad \ \n\
	te recorre el cuerpo y vuelves atras con el rabo entre las piernas</p><br>\ \n\
	\
	<p class='transient'><a href='derecha'>vuelves a pensar una idea.</p>"
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
	<p class='transient'><a href='cables'> seguir pensando</a></p>"
	),
	interruptor: new undum.SimpleSituation(
	"<p>Te das cuenta que entre las baterías hay un pequeño interruptor  \ \n\
	, hay algo extraño en esta situación pero parece que la suerte acaba de sonreirte.</p> \ \n\
	\
	<br><p class='transient'><a href='electrificado2'>Usar el interruptor</a><br> \ \n\
	<a href='./cortar'>cortar los cables</a>",
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
	llave de tu libertad.<a href='./fragmento' class='once'>(Consigues un fragmento del puzle final para escapar)</a>.<br></p> \ \n\
	\
	<p class='transient'><a href='observar'>volver a la zona de las puertas.</a></p>",
	{
	        actions: {
                fragmento: function(character, system, action) {
                    system.setQuality("piezas", character.qualities.piezas+1);
                }
            },
	}
	),
	
	
	
    



};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
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
	

};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"}),
	inventario: new undum.QualityGroup('Inventario',{priority:"0003"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setQuality("alicates",false);
	character.qualities.piezas = 0;
    character.qualities.stamina = 0;
    character.qualities.salud = 100;
};