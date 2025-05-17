var codes=new Array(
	new Array(944682,981215,562152,51932,62683,66682,62394,6532,1941),
	new Array(536992,555412,864256,72507,74048,90020,10210,8073,5324),
	new Array(100139,133909,875009,12957,10200,75292,45830,7160,4104),
	new Array(259789,218651,100151,79279,67312,18200,95267,3793,9026),
	new Array(298483,726134,100163,33548,84209,76235,10240,5647,9038),
	new Array(556684,100175,701897,10230,97117,40944,93144,7503,6596),
	new Array(600601,347633,877210,10246,48934,10260,19173,2300,5691),
	new Array(334143,307434,483347,64296,69521,60319,21033,4160,2946),
	new Array(532485,632874,210444,96244,84584,42226,90742,1110,9413),
	new Array(153669,404795,100253,15218,35793,62817,22917,3895,1760),
	new Array(810980,602834,100277,83396,59456,46570,62237,6375,1170),
	new Array(924289,256564,902494,22943,73911,87734,32177,8550,1810),
	new Array(100022,873662,889321,77617,92052,90218,77027,8885,5522),
	new Array(922505,100052,461700,10721,89933,49417,89337,3082,1868),
	new Array(876180,100084,987316,90880,17820,23968,56213,7412,8347),
	new Array(250241,537286,758635,76792,97060,15713,2156,7139,7767),
	new Array(975718,313212,124102,10209,18811,16670,90360,2877,8110),
	new Array(776513,100192,298209,69498,10253,65214,84565,3836,1701),
	new Array(100232,228865,462801,86116,87657,31791,76623,9095,3583),
	new Array(153078,137421,834006,76948,88006,10036,10046,5146,6081),
	new Array(444465,382451,800894,17127,10072,10080,71490,5190,6739),
	new Array(157773,850672,270444,69977,71518,22713,26100,1245,3101),
	new Array(877443,100119,780433,10174,10180,93385,47038,7754,9303),
	new Array(336818,743593,991651,90610,70354,10190,36602,9291,3165)
);
var planets=new Array(
	"Arth",
	"Thoss/Eleran",
	"Harrisons Base",
	"Sphexi",
	"Spewta",
	"Earth",
	"Mardan 2",
	"New Scotland",
	"Kloann 3",
	"Heaven",
	"Uhlek Brian World",
	"Gaal",
	"Akteron",
	"Nirvana",
	"The Staff",
	"The Cross",
	"Pythagoras",
	"The 4 Seedlings",
	"The Axe",
	"City of the Ancients",
	"Mars",
	"Crystal Planet",
	"Elan",
	"Votiputox"
);
var artifacts=new Array(
	"Blue Bauble",
	"Crystal Cone",
	"Dodecahedron",
	"Black Box",
	"Mobius Device",
	"Crystal Orb",
	"Flying Apparatus",
	"Rod Device",
	"Red Cylinder",
	"Rubber Widget",
	"Throbbing Mass",
	"Surprising Utensil",
	"Wee Green Bloobie",
	"Tesseract",
	"Whining Orb",
	"Bladed Toy",
	"Nice Thing",
	"Ellipsoid",
	"Humming Gizzy",
	"Glowing Disc",
	"Black Egg",
	"Amazing Artifact",
	"Shimmering Ball",
	"Flat Device"
);
var races=new Array(
	"Velox",
	"Thrynn",
	"Elowan",
	"Mechans",
	"Spemin",
	"Gazurtoid",
	"Uhlek",
	"Minstrels",
	"Mysterions"
);

function printInterface(){document.write("<form name='SFCW'>\n");document.write("<select class='border-shape2' name='Planets' onchange='revealCode();'>\n");for(i=0;i<planets.length;i++){document.write("<option>"+ planets[i]+"</option>\n");}
document.write("</select>\n");document.write("<select class='border-shape' name='Artifacts' onchange='revealCode();'>\n");for(i=0;i<artifacts.length;i++){document.write("<option>"+ artifacts[i]+"</option>\n");}
document.write("</select>\n");document.write("<select class='border-shape2' name='Races' onchange='revealCode();'>\n");for(i=0;i<races.length;i++){document.write("<option>"+ races[i]+"</option>\n");}
document.write("</select>\n");document.write("<input type='text' name='Code' class='codewheel border-shape' size='10'>\n");}

function revealCode(){planet=document.forms.SFCW.Planets.selectedIndex;artifact=document.forms.SFCW.Artifacts.selectedIndex;race=document.forms.SFCW.Races.selectedIndex;codeIndex=(planet- artifact);while(codeIndex<0){codeIndex+=codes.length;}
document.forms.SFCW.Code.value=codes[codeIndex][race];}