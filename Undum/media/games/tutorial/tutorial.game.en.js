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
        <p>Tras pasar la puerta te encuentras en una habitaci�n con una puerta\ \n\
            por cada pared y encima de cada una de las puertas unos s�mbolos en\ \n\
            la parte superior del marco. Tienes un rayo, lo que parece una mujer\ \n\
            de perfil con los ojos cerrados, una puerta con un c�rculo en el centro\ \n\
            y una carita sonriente. Antes de que te d� tiempo a poder observar mejor\ \n\
            la sala una televisi�n se enciende en una de sus esquinas, comienza a sonar\ \n\
            m�sica cl�sica ya sucederse im�genes de familias felices guerra y varios\ \n\
            temas que no consigues comprender c�mo est�n relacionados, antes de que digas\ \n\
            una palabra una voz familiar sale de ese televisor y la imagen de la silueta se \\n\
            apodera de la pantalla.</p>\
        \
        <p> -Es hora de elegir ratoncito, cada puerta te llevar� a una prueba para conseguir\\n\
             un fragmento de ese delicioso queso que tanto buscas, da igual el orden que \\n\
             elijas, hasta que no acabes todas no podr�s continuar.</p>\
        \
		<p>La imagen de la pantalla desaparece, y ah� est�s t� ante otra elecci�n.</p>\
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
		<p class='transient'><a href='salidafinal'>encuentras otra puerta y pruebas a ver si puedes salir</a>"
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
	electrificado: new undum.SimpleSituation(
	"<p>Te acercas muy bravucon al agua y metes tu mano, siente como la electricidad \ \n\
	te recorre el cuerpo y vuelves atras con el rabo entre las piernas</p><br>\ \n\
	\
	<p class='transient'><a href='derecha'>vuelves a pensar una idea.</p>",
		{
            exit: function(character, system, to) {
                system.setQuality("salud", character.qualities.salud-10);
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
                system.setQuality("salud", character.qualities.salud-10);
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
	<p class='transient'><a href='salidafinal'>abres la puerta</a></p>",
		{
            exit: function(character, system, to) {
                system.setQuality("piezas", character.qualities.piezas+1);
            }
        }
	),
	
	
    


    /*sticky: new undum.SimpleSituation(
        "<p>There are three types of link in Undum. The first two we've seen\
        in previous topics:\
        links to change situation and links to carry out an action. When you\
        include a link in your output, Undum parses it and wires it up\
        correctly. If you create a link with a HTML <em>href</em> attribute\
        containing just a name ('ballroom', for\
        example) this will send the character to the situation with that\
        name. Links\
        with two components ('ballroom/view-painting', for example) send\
        the character to a new situation <em>and then</em> carry out the\
        named action ('view-painting' in this case). To carry out an action\
        in the current situation, you can replace the situation name with a\
        dot (so it would be './view-painting'). In all cases, if the\
        character is already in that situation, then the situation's\
        <em>enter</em> method won't be called again.</p>\
        \
        <img src='media/games/tutorial/woodcut2.png' class='float_left'>\
        <p>The third type of link, then, is a general hyperlink. If your\
        link doesn't consist of a single element or pair of elements, as\
        above, then Undum will guess that you have a normal hyperlink. As\
        <a href='http://news.bbc.co.uk' class='sticky'>in this link</a>.\
        If you have a link that <em>does</em> look like an Undum link, you\
        can still force Undum not to interpret it as an action or situation\
        move, by adding the CSS class <em>raw</em> to the HTML <em>a</em> tag.\
        links that don't have the <em>raw</em> class, but that are considered\
        to be non-Undum links (like the link above), will have <em>raw</em>\
        added to them before display. This could allow you to style external\
        links differently, as we have done here.</p>\
        \
        <p>In the last situation I said you can prevent links from being\
        turned into regular text when you move situations. This is done\
        by another CSS class: <em>sticky</em>. When you\
        <a href='oneshot'>leave this situation</a>, you'll notice the\
        external link stays active. This can allow you to have options that\
        stay valid throughout the narrative, for example, such as a spell to\
        teleport home.</p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Different Kinds of Links"
        }
    ),
    oneshot: new undum.SimpleSituation(
        "<p>There is one final option for links. If you give a link\
        the <em>once</em> CSS class, then that link will disappear\
        after it is clicked. This is  used (as in\
        <a href='./one-time-action' class='once'>this link</a>) for\
        actions that you only want to be possible once. There is no\
        point using 'once' on situation links because they'll be turned\
        into text as soon as you click them anyway (unless they are also\
        <em>sticky</em>, of course).</p><p>Once links are useful\
        for actions such as examining an object more carefully. You\
        don't want lots of repeated descriptions, so making the link\
        a <em>once</em> link is more user friendly.</p>\
        <p>If you have more than one link to the same action, then all\
        matching links will be removed, so you don't have to worry about\
        the player having an alternative way to carry out the action.</p>\
        <p class='transient'>After you've clicked the link, let's\
        <a href='hub'>move on</a>.</p>",
        {
            actions: {
                "one-time-action": "<p>As I said, one time actions are\
                                   mostly used to describe something in\
                                   more detail, where you don't want the\
                                   same descriptive text repeated over and\
                                   over</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<p>Let's talk about the character.\
        The character is described by a series of <em>qualities</em>. These\
        are numeric values that can describe anything from natural abilities\
        to how much of a resource the character controls. Qualities are\
        shown in the box on the right of the text.</p>\
        \
        <p>The qualities there are those you started the game with. When you\
        <a href='quality-types'>go to the next situation</a>, keep your\
        eyes on the character panel. You'll notice I'll give you a boost to\
        your stamina quality. This process is animated and highlighted to\
        draw your attention to it. You could also get a boost of skill\
        by carrying out <a href='./piezas-boost'>this action</a> as many\
        times as you like.</p>",
        {
            heading: "Qualities and the Character",
            tags: ["topic"],
            displayOrder: 4,
            actions: {
                "piezas-boost": function(character, system, action) {
                    system.setQuality("piezas", character.qualities.piezas+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>",
        {
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Saving and Loading"
    }),

    "implicit-boost": new undum.SimpleSituation(
        "<p>Your luck has been boosted<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck+1)
                system.doLink('example-choices');
            },
            optionText: "Boost Your Luck",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.luck < 4;
            }
        }
    ),
    "implicit-drop": new undum.SimpleSituation(
        "<p>Your luck has been reduced<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck-1)
                system.doLink('example-choices');
            },
            optionText: "Reduce Your Luck",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.luck > -4;
            }
        }
    ),
    "high-luck-only": new undum.SimpleSituation(
        "<p>Your luck is higher than 'fair'. The link to this \
        situation would not\
        have appeared if it were lower.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "High Luck Option",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.luck > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Your luck is lower than 'fair'. The link to this situation \
        appears whether\
        it is low or high, but can only be chosen if it is low. It does this\
        by defining a <em>canChoose</em> method.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Low Luck Option (requires low luck to be clickable)",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.luck < 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topic"],
            optionText: "Finish the Tutorial",
            displayOrder: 8,
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )*/
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
