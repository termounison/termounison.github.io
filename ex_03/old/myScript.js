
var QTN;
var ANS;

var ans_user;
var ans_true;

var PFV = []; // Preguntas Falso & Verdadero
var RFV = []; // Respuestas Falso & Verdadero

var score;
var oks;
var fails;

var act=3;
var user_name;
var ii=1; //contador
var PFV_id=1;
var PFV_id_old=-1;
var ii_max=50; //num de preguntas
var time_left_max=ii_max*15; //15 seg por pregunta
var pnts=2;
var time_left=time_left_max;
var isgameover=false;

//------------------------------------------------------------------------------
var downloadTimer = setInterval(function(){
  if(time_left <= 0 && !isgameover){
    //clearInterval(downloadTimer);
    document.getElementById("info2").innerHTML = "0";
	gameover();
  } else {
    document.getElementById("info2").innerHTML = time_left;
  }
  time_left -= 1;
}, 1000);


//------------------------------------------------------------------------------
function start(){
	
	ii = 1;
	oks = 0;
	time_left = time_left_max;
	isgameover = false;

	user_name = document.getElementById("student_name").value;

    document.getElementById("mensaje").style.display = "none";
	document.getElementById("user_name").style.display = "none";
    document.getElementById("restart").style.display = "none";
    document.getElementById("resumen").style.display = "none";
    document.getElementById("questionpanel").style.display = "block";

	resetScore();
	
	load_questions();
		
	test();

}

//------------------------------------------------------------------------------
function test(){
	
	updateScore();

    while(1){
        
        if(rndi(1,100)<70)            
            PFV_id = rndi(   1, 70 ); // preguntas "nuevas"          
        else            
            PFV_id = rndi(   1, 70 ); // preguntas anteriores             
        
        
        if(PFV_id !== PFV_id_old) break;
    }
    
    PFV_id_old = PFV_id;

    QTN = PFV[PFV_id];
    ANS = RFV[PFV_id]; 
        	
	ans_true = ANS;

	//console.log(QTN);
	//console.log(ANS);

	if(ii>ii_max)
		QTN="...";

	if(time_left <= 0)
		QTN="...";
		
	document.getElementById("question").innerHTML = QTN;
    
}



//------------------------------------------------------------------------------

function b1()  { if(time_left>0) { ans_user = "V"; checkAns();} }
function b2()  { if(time_left>0) { ans_user = "F"; checkAns();} }
function reload()  { location.reload(); }

//------------------------------------------------------------------------------
function checkAns(){
	
	ii +=1 ;

	if(ii <= (ii_max+1) )
	{
		if(ans_user === ans_true)
		{
			score+=pnts;
			oks++;
			updateScore();
			test();
		}else{
			fails += 1;
			updateScore();
		}
	}
	else
	{
		updateScore();
		document.getElementById("b1").innerHTML = "...";
		document.getElementById("b2").innerHTML = "...";
		document.getElementById("b3").innerHTML = "...";
		document.getElementById("b4").innerHTML = "...";
		document.getElementById("info1").innerHTML = ii_max + " de " + ii_max;
	}

	if(ii >= ii_max)
	{
		document.getElementById("info1").innerHTML = ii_max + " de " + ii_max;
	}

	if(ii > ii_max)
	{
		document.getElementById("b1").innerHTML = "...";
		document.getElementById("b2").innerHTML = "...";

		gameover();
	}

}



//------------------------------------------------------------------------------
function resetScore(){
	score = 0;
	fails = 0;
	updateScore();
}

//------------------------------------------------------------------------------
function updateScore(){

	document.getElementById("info1").innerHTML = ii + " / " + ii_max;
	document.getElementById("info3").innerHTML = score;
	
	if(ii >= ii_max)
	{
        document.getElementById("info1").innerHTML = ii + " / " + ii_max;
	}
	
}

function round2(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}







//------------------------------------------------------------------------------
function rndi0(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;;
}



//------------------------------------------------------------------------------
function rndi(min, max) { 

    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


//------------------------------------------------------------------------------
function coin(){ return rndi(1,2);}

//------------------------------------------------------------------------------
function gameover(){
	
	isgameover = true;
	
	let dddd = new Date();
	// let yy = dddd.getFullYear();
	// let mh = dddd.getMonth();
	// let dd = dddd.getDate();
	// let hh = dddd.getHours() - 1;
	// let mm = dddd.getMinutes();
	let yy = dddd.getFullYear();
	let mh = dddd.getMonth();
	let dd = dddd.getDate();
	let hhutc = dddd.getUTCHours();
	let hh = 1;
	let mm = dddd.getUTCMinutes();
	
	let resumen = "";
	let _tleft_ = time_left;
	let _counter_ = ii -1;
	let firma = [];
	let R = [];

	if(hhutc===0)hh=17;
	if(hhutc===1)hh=18;
	if(hhutc===2)hh=19;
	if(hhutc===3)hh=20;
	if(hhutc===4)hh=21;
	if(hhutc===5)hh=22;
	if(hhutc===6)hh=23;
	if(hhutc===7)hh=0;
	if(hhutc===8)hh=1;
	if(hhutc===9)hh=2;
	if(hhutc===10)hh=3;
	if(hhutc===11)hh=4;
	if(hhutc===12)hh=5;
	if(hhutc===13)hh=6;
	if(hhutc===14)hh=7;
	if(hhutc===15)hh=8;
	if(hhutc===16)hh=9;
	if(hhutc===17)hh=10;
	if(hhutc===18)hh=11;
	if(hhutc===19)hh=12;
	if(hhutc===20)hh=13;
	if(hhutc===21)hh=14;
	if(hhutc===22)hh=15;
	if(hhutc===23)hh=16;
	
	if(_counter_>1){R[0] = rndi(1,_tleft_);R[1] = _tleft_-R[0];}
	if(_counter_===1){R[0] = 1;R[1] = 0;}
	if(_counter_===0){_counter_ = 0;R[2] = rndi(10,20);;R[3] = R[0];}
	if(mm>1){R[2] = rndi(1,mm);R[3] = mm-R[2];}
	if(mm===1){R[2] = 1;R[3] = 0;}
	if(mm===0){_counter_ = 0;R[2] = rndi(10,20);;R[3] = R[0];}
	
	firma[0] = user_name.length;firma[1] = R[1];firma[2] = R[0];
	firma[3] = R[2];firma[4] = R[3];firma[5]=hh+mm;firma[6]=act+dd;;firma[7]=act+oks;
	

	document.getElementById("questionpanel").style.display = "none";
	document.getElementById("resumenpanel").style.display = "block";
    document.getElementById("resumen").style.display = "block";
    document.getElementById("restart").style.display = "block";
	
    resumen +="Examen "+act+" (conceptos).<br>";
	resumen +="Estudiante: "+user_name+"<br>";
	resumen +="Calificación: "+score+"<br>";
	resumen +="Aciertos: "+oks+"<br>";
	resumen +="Fecha: "+dd+"/"+mh+"/"+yy+"<br>";
	resumen +="Hora: "+hh+":"+mm+"<br>";
	resumen +="Tiempo restante: "+time_left+" segundos.<br>";
	resumen +="Firma: "+firma[6]+","+firma[0]+","+firma[5]+","+firma[3]+","+firma[1]+","+firma[4]+","+firma[2]+","+firma[7]+".<br>";
	
	
	document.getElementById("resumen").innerHTML = resumen;

}




/*
function loadData()
{

	symbols[1]="H"
	symbols[2]="He"
	symbols[3]="Li"
	symbols[4]="Be"
	symbols[5]="B"
	symbols[6]="C"
	symbols[7]="N"
	symbols[8]="O"
	symbols[9]="F"
	symbols[10]="Ne"
	symbols[11]="Na"
	symbols[12]="Mg"
	symbols[13]="Al"
	symbols[14]="Si"
	symbols[15]="P"
	symbols[16]="S"
	symbols[17]="Cl"
	symbols[18]="Ar"
	symbols[19]="K"
	symbols[20]="Ca"
	symbols[21]="Sc"
	symbols[22]="Ti"
	symbols[23]="V"
	symbols[24]="Cr"
	symbols[25]="Mn"
	symbols[26]="Fe"
	symbols[27]="Co"
	symbols[28]="Ni"
	symbols[29]="Cu"
	symbols[30]="Zn"
	symbols[31]="Ga"
	symbols[32]="Ge"
	symbols[33]="As"
	symbols[34]="Se"
	symbols[35]="Br"
	symbols[36]="Kr"
	symbols[37]="Rb"
	symbols[38]="Sr"
	symbols[39]="Y"
	symbols[40]="Zr"
	symbols[41]="Nb"
	symbols[42]="Mo"
	symbols[43]="Tc"
	symbols[44]="Ru"
	symbols[45]="Rh"
	symbols[46]="Pd"
	symbols[47]="Ag"
	symbols[48]="Cd"
	symbols[49]="In"
	symbols[50]="Sn"
	symbols[51]="Sb"
	symbols[52]="Te"
	symbols[53]="I"
	symbols[54]="Xe"
	symbols[55]="Cs"
	symbols[56]="Ba"
	symbols[57]="La"
	symbols[58]="Ce"
	symbols[59]="Pr"
	symbols[60]="Nd"
	symbols[61]="Pm"
	symbols[62]="Sm"
	symbols[63]="Eu"
	symbols[64]="Gd"
	symbols[65]="Tb"
	symbols[66]="Dy"
	symbols[67]="Ho"
	symbols[68]="Er"
	symbols[69]="Tm"
	symbols[70]="Yb"
	symbols[71]="Lu"
	symbols[72]="Hf"
	symbols[73]="Ta"
	symbols[74]="W"
	symbols[75]="Re"
	symbols[76]="Os"
	symbols[77]="Ir"
	symbols[78]="Pt"
	symbols[79]="Au"
	symbols[80]="Hg"
	symbols[81]="Tl"
	symbols[82]="Pb"
	symbols[83]="Bi"
	symbols[84]="Po"
	symbols[85]="At"
	symbols[86]="Rn"
	symbols[87]="Fr"
	symbols[88]="Ra"
	symbols[89]="Ac"
	symbols[90]="Th"
	symbols[91]="Pa"
	symbols[92]="U"
	symbols[93]="Np"
	symbols[94]="Pu"
	symbols[95]="Am"
	symbols[96]="Cm"
	symbols[97]="Bk"
	symbols[98]="Cf"
	symbols[99]="Es"
	symbols[100]="Fm"
	symbols[101]="Md"
	symbols[102]="No"
	symbols[103]="Lr"
	symbols[104]="Rf"
	symbols[105]="Db"
	symbols[106]="Sg"
	symbols[107]="Bh"
	symbols[108]="Hs"
	symbols[109]="Mt"
	symbols[110]="Ds"
	symbols[111]="Rg"
	symbols[112]="Cn"
	symbols[113]="Nh"
	symbols[114]="Fl"
	symbols[115]="Mc"
	symbols[116]="Lv"
	symbols[117]="Ts"
	symbols[118]="Og"

	names[1]="Hidrógeno"
	names[2]="Helio"
	names[3]="Litio"
	names[4]="Berilio"
	names[5]="Boro"
	names[6]="Carbono"
	names[7]="Nitrógeno"
	names[8]="Oxígeno"
	names[9]="Flúor"
	names[10]="Neón"
	names[11]="Sodio"
	names[12]="Magnesio"
	names[13]="Aluminio"
	names[14]="Silicio"
	names[15]="Fósforo"
	names[16]="Azufre"
	names[17]="Cloro"
	names[18]="Argón"
	names[19]="Potasio"
	names[20]="Calcio"
	names[21]="Escandio"
	names[22]="Titanio"
	names[23]="Vanadio"
	names[24]="Cromo"
	names[25]="Manganeso"
	names[26]="Hierro"
	names[27]="Cobalto"
	names[28]="Niquel"
	names[29]="Cobre"
	names[30]="Zinc"
	names[31]="Galio"
	names[32]="Germanio"
	names[33]="Arsénico"
	names[34]="Selenio"
	names[35]="Bromo"
	names[36]="Kriptón"
	names[37]="Rubidio"
	names[38]="Estroncio"
	names[39]="Itrio"
	names[40]="Circonio"
	names[41]="Niobio"
	names[42]="Molibdeno"
	names[43]="Tecnecio"
	names[44]="Rutenio"
	names[45]="Rodio"
	names[46]="Paladio"
	names[47]="Plata"
	names[48]="Cadmio"
	names[49]="Indio"
	names[50]="Estaño"
	names[51]="Antimonio"
	names[52]="Telurio"
	names[53]="Yodo"
	names[54]="Xenón"
	names[55]="Cesio"
	names[56]="Bario"
	names[57]="Lantano"
	names[58]="Cerio"
	names[59]="Praseodimio"
	names[60]="Neodimio"
	names[61]="Prometio"
	names[62]="Samario"
	names[63]="Europio"
	names[64]="Gadolinio"
	names[65]="Terbio"
	names[66]="Disprosio"
	names[67]="Holmio"
	names[68]="Erbio"
	names[69]="Tulio"
	names[70]="Iterbio"
	names[71]="Lutecio"
	names[72]="Hafnio"
	names[73]="Tántalo"
	names[74]="Wolframio"
	names[75]="Renio"
	names[76]="Osmio"
	names[77]="Iridio"
	names[78]="Platino"
	names[79]="Oro"
	names[80]="Mercurio"
	names[81]="Talio"
	names[82]="Plomo"
	names[83]="Bismuto"
	names[84]="Polonio"
	names[85]="Astato"
	names[86]="Radón"
	names[87]="Francio"
	names[88]="Radio"
	names[89]="Actinio"
	names[90]="Torio"
	names[91]="Protactinio"
	names[92]="Uranio"
	names[93]="Neptunio"
	names[94]="Plutonio"
	names[95]="Americio"
	names[96]="Curio"
	names[97]="Berkelio"
	names[98]="Californio"
	names[99]="Einstenio"
	names[100]="Fermio"
	names[101]="Mendelevio"
	names[102]="Nobelio"
	names[103]="Lawrencio"
	names[104]="Rutherfordio"
	names[105]="Dubnio"
	names[106]="Seaborgio"
	names[107]="Bohrio"
	names[108]="Hasio"
	names[109]="Meitnerio"
	names[110]="Darmstatio"
	names[111]="Roentgenio"
	names[112]="Copernicio"
	names[113]="Nihonio"
	names[114]="Flerovio"
	names[115]="Moscovio"
	names[116]="Livermorio"
	names[117]="Teneso"
	names[118]="Oganessón"

	PM[1]=1.01;
	PM[2]=4.00;
	PM[3]=6.94;
	PM[4]=9.01;
	PM[5]=10.81;
	PM[6]=12.01;
	PM[7]=14.01;
	PM[8]=16.00;
	PM[9]=19.00;
	PM[10]=20.18;
	PM[11]=22.99;
	PM[12]=24.31;
	PM[13]=26.98;
	PM[14]=28.09;
	PM[15]=30.97;
	PM[16]=32.07;
	PM[17]=35.45;
	PM[18]=39.10;
	PM[19]=39.95;
	PM[20]=40.08;
	PM[21]=44.96;
	PM[22]=47.87;
	PM[23]=50.94;
	PM[24]=52.00;
	PM[25]=54.94;
	PM[26]=55.85;
	PM[27]=58.69;
	PM[28]=58.93;
	PM[29]=63.55;
	PM[30]=65.39;
	PM[31]=69.72;
	PM[32]=72.64;
	PM[33]=74.92;
	PM[34]=78.96;
	PM[35]=79.90;
	PM[36]=83.80;
	PM[37]=85.47;
	PM[38]=87.62;
	PM[39]=88.91;
	PM[40]=91.22;
	PM[41]=92.91;
	PM[42]=95.94;
	PM[43]=98.00;
	PM[44]=101.07;
	PM[45]=102.91;
	PM[46]=106.42;
	PM[47]=107.87;
	PM[48]=112.41;
	PM[49]=114.82;
	PM[50]=118.71;
	PM[51]=121.76;
	PM[52]=126.90;
	PM[53]=127.60;
	PM[54]=131.29;
	PM[55]=132.91;
	PM[56]=137.33;
	PM[57]=138.91;
	PM[58]=140.12;
	PM[59]=140.91;
	PM[60]=144.24;
	PM[61]=145.00;
	PM[62]=150.36;
	PM[63]=151.96;
	PM[64]=157.25;
	PM[65]=158.93;
	PM[66]=162.50;
	PM[67]=164.93;
	PM[68]=167.26;
	PM[69]=168.93;
	PM[70]=173.04;
	PM[71]=174.97;
	PM[72]=178.49;
	PM[73]=180.95;
	PM[74]=183.84;
	PM[75]=186.21;
	PM[76]=190.23;
	PM[77]=192.22;
	PM[78]=195.08;
	PM[79]=196.97;
	PM[80]=200.59;
	PM[81]=204.38;
	PM[82]=207.20;
	PM[83]=208.98;
	PM[84]=209.00;
	PM[85]=210.00;
	PM[86]=222.00;
	PM[87]=223.00;
	PM[88]=226.00;
	PM[89]=227.00;
	PM[90]=231.04;
	PM[91]=232.04;
	PM[92]=237.00;
	PM[93]=238.03;
	PM[94]=243.00;
	PM[95]=244.00;
	PM[96]=247.00;
	PM[97]=247.00;
	PM[98]=251.00;
	PM[99]=252.00;
	PM[100]=257.00;
	PM[101]=258.00;
	PM[102]=259.00;
	PM[103]=261.00;
	PM[104]=262.00;
	PM[105]=262.00;
	PM[106]=264.00;
	PM[107]=266.00;
	PM[108]=268.00;
	PM[109]=277.00;

	names[1]="Hydrogen"
	names[2]="Helium"
	names[3]="Lithium"
	names[4]="Beryllium"
	names[5]="Boron"
	names[6]="Carbon"
	names[7]="Nitrogen"
	names[8]="Oxygen"
	names[9]="Fluorine"
	names[10]="Neon"
	names[11]="Sodium"
	names[12]="Magnesium"
	names[13]="Aluminium"
	names[14]="Silicon"
	names[15]="Phosphorus"
	names[16]="Sulfur"
	names[17]="Chlorine"
	names[18]="Argon"
	names[19]="Potassium"
	names[20]="Calcium"
	names[21]="Scandium"
	names[22]="Titanium"
	names[23]="Vanadium"
	names[24]="Chromium"
	names[25]="Manganese"
	names[26]="Iron"
	names[27]="Cobalt"
	names[28]="Nickel"
	names[29]="Copper"
	names[30]="Zinc"
	names[31]="Gallium"
	names[32]="Germanium"
	names[33]="Arsenic"
	names[34]="Selenium"
	names[35]="Bromine"
	names[36]="Krypton"
	names[37]="Rubidium"
	names[38]="Strontium"
	names[39]="Yttrium"
	names[40]="Zirconium"
	names[41]="Niobium"
	names[42]="Molybdenum"
	names[43]="Technetium"
	names[44]="Ruthenium"
	names[45]="Rhodium"
	names[46]="Palladium"
	names[47]="Silver"
	names[48]="Cadmium"
	names[49]="Indium"
	names[50]="Tin"
	names[51]="Antimony"
	names[52]="Tellurium"
	names[53]="Iodine"
	names[54]="Xenon"
	names[55]="Caesium"
	names[56]="Barium"
	names[57]="Lanthanum"
	names[58]="Cerium"
	names[59]="Praseodymium"
	names[60]="Neodymium"
	names[61]="Promethium"
	names[62]="Samarium"
	names[63]="Europium"
	names[64]="Gadolinium"
	names[65]="Terbium"
	names[66]="Dysprosium"
	names[67]="Holmium"
	names[68]="Erbium"
	names[69]="Thulium"
	names[70]="Ytterbium"
	names[71]="Lutetium"
	names[72]="Hafnium"
	names[73]="Tantalum"
	names[74]="Tungsten"
	names[75]="Rhenium"
	names[76]="Osmium"
	names[77]="Iridium"
	names[78]="Platinum"
	names[79]="Gold"
	names[80]="Mercury"
	names[81]="Thallium"
	names[82]="Lead"
	names[83]="Bismuth"
	names[84]="Polonium"
	names[85]="Astatine"
	names[86]="Radon"
	names[87]="Francium"
	names[88]="Radium"
	names[89]="Actinium"
	names[90]="Thorium"
	names[91]="Protactinium"
	names[92]="Uranium"
	names[93]="Neptunium"
	names[94]="Plutonium"
	names[95]="Americium"
	names[96]="Curium"
	names[97]="Berkelium"
	names[98]="Californium"
	names[99]="Einsteinium"
	names[100]="Fermium"
	names[101]="Mendelevium"
	names[102]="Nobelium"
	names[103]="Lawrencium"
	names[104]="Rutherfordium"
	names[105]="Dubnium"
	names[106]="Seaborgium"
	names[107]="Bohrium"
	names[108]="Hassium"
	names[109]="Meitnerium"
	names[110]="Darmstadtium"
	names[111]="Roentgenium"
	names[112]="Copernicium"
	names[113]="Nihonium"
	names[114]="Flerovium"
	names[115]="Moscovium"
	names[116]="Livermorium"
	names[117]="Tennessine"
	names[118]="Oganesson"
*/


//------------------------------------------------------------------------------
function load_questions(){

	PFV = [];
    RFV = [];         

    // TEMPERATURA

	PFV[1] = "El cero absoluto de temperatura se encuentra a 0 K.";
	RFV[1] = "V";

	PFV[2] = "El cero absoluto de temperatura se encuentra a -273.15 K.";
	RFV[2] = "F";

	PFV[3] = "El cero absoluto de temperatura se encuentra a -273.15 °C.";
	RFV[3] = "V";

	PFV[4] = "El cero absoluto de temperatura se encuentra a 0 °C.";
	RFV[4] = "F";

	PFV[5] = "La escala de temperatura Celcius es relativa.";
	RFV[5] = "V";

	PFV[6] = "La escala de temperatura Celcius es absoluta.";
	RFV[6] = "F";
	
	PFV[7] = "La escala de temperatura Kelvin es absoluta.";
	RFV[7] = "V";

	PFV[8] = "La escala de temperatura Kelvin es relativa.";
	RFV[8] = "F";
	
	PFV[9] = "Una escala de temperatura absoluta sólo puede tener valores &ge; 0.";
	RFV[9] = "V";

	PFV[10] = "Una escala de temperatura absoluta puede tener valores negativos.";
	RFV[10] = "F";
    
	PFV[11] = "Dos objetos en contacto térmico transfieren calor entre ellos cuando no están en equilibrio térmico.";
	RFV[11] = "V";    

	PFV[12] = "Dos objetos en contacto térmico transfieren calor entre ellos cuando están en equilibrio térmico.";
	RFV[12] = "F";

	PFV[13] = "Dos objetos en contacto térmico que se encuentran en equilibrio térmico,  tienen la misma temperatura.";
	RFV[13] = "V"; 

	PFV[14] = "Dos objetos en contacto térmico que no se encuentran en equilibrio térmico,  tienen la misma temperatura.";
	RFV[14] = "F"; 
    
    // LEY DE CHARLES

	PFV[15] = "La Ley de Charles afirma que, a presión constante, el volumen de un gas es directamente proporcional a su temperatura.";
	RFV[15] = "V";

	PFV[16] = "La Ley de Charles afirma que, a presión constante, el volumen de un gas es inversamente proporcional a su temperatura.";
	RFV[16] = "F";
	
	PFV[17] = "A presión constante, el volumen de un gas es directamente proporcional a su temperatura.";
	RFV[17] = "V";

	PFV[18] = "A presión constante, el volumen de un gas es inversamente proporcional a su temperatura.";
	RFV[18] = "F";	

	PFV[19] = "Un proceso a isobárico ocurre a presión constante.";
	RFV[19] = "V";	

	PFV[20] = "Un proceso a isobárico ocurre a volumen constante.";
	RFV[20] = "F";
    
    // PRESION
    
	PFV[21] = "La presión se define como fuerza entre área.";
	RFV[21] = "V";	

	PFV[21] = "La presión se define como fuerza por distancia.";
	RFV[21] = "F";

	PFV[22] = "El barómetro se utiliza para medir la presión atmosférica.";
	RFV[22] = "V";

	PFV[22] = "El barómetro se utiliza para medir la presión de un gas confinado.";
	RFV[22] = "F";
	
	PFV[23] = "El manómetro se utiliza para medir la presión de un gas confinado.";
	RFV[23] = "V";

	PFV[24] = "El manómetro se utiliza para medir la presión atmosférica.";
	RFV[24] = "F";
	
	PFV[25] = "Es preferible utilizar un manómetro de tubo U abierto si la presión del gas es superior a la atmosférica.";
	RFV[25] = "V";

	PFV[26] = "Es preferible utilizar un manómetro de tubo U cerrado si la presión del gas es superior a la atmosférica.";
	RFV[26] = "F";
	
	PFV[27] = "Es preferible utilizar un manómetro de tubo U cerrado si la presión del gas es menor a la atmosférica.";
	RFV[27] = "V";

	PFV[28] = "Es preferible utilizar un manómetro de tubo U abierto si la presión del gas es menor a la atmosférica.";
	RFV[28] = "F";  
    
    // LEY DE BOYLE
    
	PFV[29] = "La Ley de Boyle afirma que, a temperatura constante, el volumen de un gas es inversamente proporcional a su presión.";
	RFV[29] = "V";

	PFV[30] = "La Ley de Boyle afirma que, a temperatura constante, el volumen de un gas es directamente proporcional a su presión.";
	RFV[30] = "F";
	
	PFV[31] = "A temperatura constante, el volumen de un gas es inversamente proporcional a su presión.";
	RFV[31] = "V";

	PFV[32] = "A temperatura constante, el volumen de de un gas es directamente proporcional a su presión.";
	RFV[32] = "F";    
    
    // TROLLEANDO
    
    PFV[33] = "La Ley de Boyle afirma que, a presión constante, el volumen de un gas es directamente proporcional a su temperatura.";
    RFV[33] = "F";

	PFV[34] = "La Ley de Charles afirma que, a temperatura constante, el volumen de un gas es inversamente proporcional a su presión.";
	RFV[34] = "F";
    
    // MOL
    
    PFV[35] = "Un mol de pelotas equivale a 6.022&#215;10<sup>23</sup> pelotas.";
    RFV[35] = "V";
    
    PFV[36] = "Un mol de pelotas equivale a 6.022&#215;10<sup>22</sup> pelotas.";
    RFV[36] = "F";

    PFV[37] = "Un mol de objetos contiene el mismo número de átomos que hay en exactamente 12 g de C-12";
    RFV[37] = "V";

    PFV[38] = "Un mol de objetos contiene el mismo número de átomos que hay en exactamente 13 g de C-13";
    RFV[38] = "F";

    PFV[39] = "6.022&#215;10<sup>23</sup> es el número de Avogadro.";
    RFV[39] = "V";

    PFV[40] = "6.022&#215;10<sup>23</sup> mol<sup>-1</sup> es el número de Avogadro.";
    RFV[40] = "F";

    PFV[41] = "6.022&#215;10<sup>23</sup> mol<sup>-1</sup> es la constante de Avogadro.";
    RFV[41] = "V";

    PFV[42] = "6.022&#215;10<sup>23</sup> mol es la constante de Avogadro.";
    RFV[42] = "F";

    // LEY DE AVOGADRO

    PFV[43] = "La ley de Avogadro afirma que, a temperatura y presión constante, el volumen de un gas es directamente proporcional a la cantidad de sustancia del gas.";
    RFV[43] = "V";

    PFV[44] = "La ley de Avogadro afirma que, a temperatura y presión constante, el volumen de un gas es inversamente proporcional a la cantidad de sustancia del gas.";
    RFV[44] = "F";
    
    // 2a LEY DE CHARLES
    
    PFV[45] = "La segunda ley de Charles afirma que, a volumen constante, la presión de una cantidad fija de gas es directamente proporcional a su temperatura.";
    RFV[45] = "V";

    PFV[46] = "La segunda ley de Charles afirma que, a volumen constante, la presión de una cantidad fija de gas es inversamente proporcional a su temperatura.";
    RFV[46] = "F";
    
    PFV[47] = "A volumen constante, la presión de una cantidad fija de gas es directamente proporcional a su temperatura.";
    RFV[47] = "V";    

    PFV[48] = "A volumen constante, la presión de una cantidad fija de gas es inversamente proporcional a su temperatura.";
    RFV[48] = "F";

    // TROLLEANDO

	PFV[49] = "La Ley de Boyle afirma que, a volumen constante, la presión de una cantidad fija de gas es directamente proporcional a la temperatura.";
	RFV[49] = "F";

    PFV[50] = "La ley de Charles afirma que, a volumen constante, la presión de una cantidad fija de gas es directamente proporcional a la temperatura.";
    RFV[50] = "F";
    
	PFV[51] = "La Ley de Avogadro afirma que, a presión constante, el volumen de un gas es directamente proporcional a su temperatura.";
	RFV[51] = "F";    

	PFV[52] = "La segunda Ley de Charles afirma que, a presión constante, el volumen de un gas es directamente proporcional a su temperatura.";
	RFV[52] = "F"; 

    PFV[53] = "Un proceso isocórico es un proceso a volumen constante.";
    RFV[53] = "V";

    PFV[54] = "Un proceso isobárico es un proceso a volumen constante.";
    RFV[54] = "F";
    
    // ECUACION GAS IDEAL, V = nRT / P
    
    PFV[55] = "En un gas ideal, si la temperatura aumenta: el volumen aumenta.";
    RFV[55] = "V";

    PFV[56] = "En un gas ideal, si la temperatura aumenta: el volumen disminuye.";
    RFV[56] = "F";

    PFV[57] = "En un gas ideal, si la presión aumenta: el volumen disminuye.";
    RFV[57] = "V";

    PFV[58] = "En un gas ideal, si la presión aumenta: el volumen aumenta.";
    RFV[58] = "F";
    
    // ECUACION GAS IDEAL, P = nRT / V
    
    PFV[59] = "En un gas ideal, si la temperatura aumenta: la presión aumenta.";
    RFV[59] = "V";    

    PFV[60] = "En un gas ideal, si la temperatura aumenta: la presión disminuye.";
    RFV[60] = "F";    

    PFV[61] = "En un gas ideal, si el volumen aumenta: la presión disminuye.";
    RFV[61] = "V"; 

    PFV[62] = "En un gas ideal, si el volumen aumenta: la presión aumenta.";
    RFV[62] = "F"; 

    // ECUACION GAS IDEAL, T = PV / RT
    
    PFV[63] = "En un gas ideal, si la presión aumenta: la temperatura aumenta.";
    RFV[63] = "V";  

    PFV[64] = "En un gas ideal, si la presión aumenta: la temperatura disminuye.";
    RFV[64] = "F";  

    PFV[65] = "En un gas ideal, si el volumen aumenta: la temperatura aumenta.";
    RFV[65] = "V";  

    PFV[66] = "En un gas ideal, si el volumen aumenta: la temperatura disminuye.";
    RFV[66] = "F"; 

    // ECUACION GAS IDEAL, d = PM / RT
    
    PFV[67] = "En un gas ideal, si la presión aumenta: la densidad aumenta.";
    RFV[67] = "V";  

    PFV[68] = "En un gas ideal, si la presión aumenta: la densidad disminuye.";
    RFV[68] = "F";

    PFV[69] = "En un gas ideal, si la temperatura aumenta: la densidad disminuye.";
    RFV[69] = "V"; 

    PFV[70] = "En un gas ideal, si la temperatura aumenta: la densidad aumenta.";
    RFV[70] = "F"; 
    
    // MEZCLA DE GASES, LEY DE DALTON, LEY DE AMAGAT
    
    PFV[71] = "La ley de Dalton establece que, a temperatura y volumen constantes, la presión total de una mezcla de gases es igual a la suma de sus presiones parciales.";
    RFV[71] = "V";

    PFV[72] = "La ley de Amagat establece que, a temperatura y volumen constantes, la presión total de una mezcla de gases es igual a la suma de sus presiones parciales.";
    RFV[72] = "F";
    
    PFV[73] = "La ley de Amagat establece que, a temperatura y presión constantes, el volumen total de una mezcla de gases es igual a la suma de sus volúmenes parciales.";
    RFV[73] = "V";    

    PFV[74] = "La ley de Dalton establece que, a temperatura y presión constantes, el volumen total de una mezcla de gases es igual a la suma de sus volúmenes parciales.";
    RFV[74] = "F"; 

    PFV[75] = "A temperatura y volumen constantes, la presión total de una mezcla de gases es igual a la suma de sus presiones parciales.";
    RFV[75] = "V";

    PFV[76] = "A temperatura y volumen constantes, la presión total de una mezcla de gases es igual al producto de sus presiones parciales.";
    RFV[76] = "F";

    PFV[77] = "A temperatura y presión constantes, el volumen total de una mezcla de gases es igual a la suma de sus volúmenes parciales.";
    RFV[77] = "V";

    PFV[78] = "A temperatura y volumen constantes, el volumen total de una mezcla de gases es igual al producto de sus volúmenes parciales.";
    RFV[78] = "F";
    
    PFV[79] = "La suma de las fracciones molares es igual a uno.";
    RFV[79] = "V";    

    PFV[80] = "La suma de las fracciones molares es igual a dos.";
    RFV[80] = "F";  
      
    PFV[81] = "La presión parcial de un gas es la presión que ejercería dicho gas si estuviera solo."
    RFV[81] = "V";

    PFV[82] = "La presión parcial de un gas es la presión que ejercería dicho gas si la temperatura se elevara al doble."
    RFV[82] = "F";

    PFV[83] = "El volumen parcial de un gas es el volumen que ocuparía dicho gas si estuviera solo."
    RFV[83] = "V";

    PFV[84] = "El volumen parcial de un gas es el volumen que ocuparía dicho gas si la temperatura se reduce a la mitad."
    RFV[84] = "F";
    
    // TEORIA CINETICA    
    
    PFV[85] = "Un gas ideal está compuesto por partículas de volumen insignificante.";
    RFV[85] = "V";

    PFV[86] = "Un gas real está compuesto por partículas de volumen insignificante.";
    RFV[86] = "F";

    PFV[87] = "Las colisiones entre las particulas de un gas ideal son elásticas.";
    RFV[87] = "V";

    PFV[88] = "Las colisiones entre las particulas de un gas real son elásticas.";
    RFV[88] = "F";

    PFV[89] = "Las partículas de un gas ideal no ejercen entre sí fuerzas de atracción o de repulsión.";
    RFV[89] = "V";

    PFV[90] = "Las partículas de un gas ideal ejercen entre sí fuerzas de atracción o de repulsión.";
    RFV[90] = "F";

    PFV[91] = "La temperatura de un gas ideal es directamente proporcional a la energía cinética promedio de sus partículas.";
    RFV[91] = "V";

    PFV[92] = "La temperatura de un gas real es inversamente proporcional a la energía cinética promedio de sus partículas.";
    RFV[92] = "F";   

	// FACTOR Z, COMPRESIBILIDAD

    PFV[93] = "Las fuerzas de <b>repulsión</b> entre las partículas de un gas predominan cuando el factor de compresibilidad del gas es mayor que uno (Z > 1).";
    RFV[93] = "V";

    PFV[94] = "Las fuerzas de <b>repulsión</b> entre las partículas de un gas predominan cuando el factor de compresibilidad del gas es menor que uno (Z < 1).";
    RFV[94] = "F";

    PFV[95] = "Las fuerzas de <b>atracción</b> entre las partículas de un gas predominan cuando el factor de compresibilidad del gas es menor que uno (Z < 1).";
    RFV[95] = "V";

    PFV[96] = "Las fuerzas de <b>atracción</b> entre las partículas de un gas predominan cuando el factor de compresibilidad del gas es mayor que uno (Z > 1).";
    RFV[96] = "F";

    PFV[97] = "Bajo las mismas condiciones de temperatura y presión, el volumen de un gas real es <b>mayor</b> que el ideal si su factor de compresibilidad es mayor que uno (Z > 1).";
    RFV[97] = "V";

    PFV[98] = "Bajo las mismas condiciones de temperatura y presión, el volumen de un gas real es <b>mayor</b> que el ideal si su factor de compresibilidad es menor que uno (Z < 1).";
    RFV[98] = "F";

    PFV[99] = "Bajo las mismas condiciones de temperatura y presión, el volumen de un gas real es <b>menor</b> que el ideal si su factor de compresibilidad es menor que uno (Z < 1).";
    RFV[99] = "V";

    PFV[100] = "Bajo las mismas condiciones de temperatura y presión, el volumen de un gas real es <b>menor</b> que el ideal si su factor de compresibilidad es mayor a uno (Z > 1).";
    RFV[100] = "F";    
    
    // OTRAS
    
    PFV[101] = "Si la temperatura de un gas aumenta, también aumenta la energía cinética promedio de sus partículas.";
    RFV[101] = "V";    
    
    PFV[102] = "Si la temperatura de un gas aumenta, la energía cinética promedio de sus partículas disminuye.";
    RFV[102] = "F";     

	// ####### SISTEMAS Y FRONTERAS #######

    PFV[103] = "Un sistema abierto permite la transferencia de materia y energía con sus alrededores.";
    RFV[103] = "V";

    PFV[104] = "Un sistema abierto no permite la transferencia de materia con sus alrededores.";
    RFV[104] = "F";

    PFV[105] = "Un sistema cerrado permite sólo la transferencia de energía con sus alrededores.";
    RFV[105] = "V";

    PFV[106] = "Un sistema cerrado no permite la transferencia de energía con sus alrededores.";
    RFV[106] = "F";

    PFV[107] = "Un sistema cerrado no permite la transferencia de materia con sus alrededores.";
    RFV[107] = "V";

    PFV[108] = "Un sistema cerrado permite la transferencia de materia con sus alrededores.";
    RFV[108] = "F";

    PFV[109] = "Un sistema aislado no permite la transferencia de energía con sus alrededores.";
    RFV[109] = "V";

    PFV[110] = "Un sistema aislado permite la transferencia de energía con sus alrededores.";
    RFV[110] = "F";

    PFV[111] = "Una frontera diatérmica permite la transferencia de calor entre el sistema y sus alrededores.";
    RFV[111] = "V";
    
    PFV[112] = "Una frontera diatérmica no permite la transferencia de calor entre el sistema y sus alrededores.";
    RFV[112] = "F";

    PFV[113] = "Una frontera adiabática no permite la transferencia de calor entre el sistema y sus alrededores.";
    RFV[113] = "V";

    PFV[114] = "Una frontera adiabática permite la transferencia de calor entre el sistema y sus alrededores.";
    RFV[114] = "F";

    PFV[115] = "Una frontera permeable permite la transferencia de materia entre el sistema y sus alrededores.";
    RFV[115] = "V";
    
    PFV[116] = "Una frontera permeable no permite la transferencia de materia entre el sistema y sus alrededores.";
    RFV[116] = "F";

    // ####### CALOR #######

    PFV[117] = "El calor se transfiere desde una región de alta temperatura hacia una región de baja temperatura.";
    RFV[117] = "V";
    
    PFV[118] = "El calor se transfiere desde una región de baja temperatura hacia una región de alta temperatura.";
    RFV[118] = "F";

    
    // ####### TRABAJO #######

    PFV[119] = "Cuando se expande un gas: el gas pierde energía en forma de trabajo.";
    RFV[119] = "V";
    
    PFV[120] = "Cuando se expande un gas: el gas gana energía en forma de trabajo.";
    RFV[120] = "F";
    
    PFV[121] = "Cuando se comprime un gas: el gas gana energía en forma de trabajo.";
    RFV[121] = "V";
    
    PFV[122] = "Cuando se comprime un gas: el gas pierde energía en forma de trabajo.";
    RFV[122] = "F";
    
    // 
    
    PFV[123] = "Un proceso reversible ocurre mediante cambios infinitesimales.";
    RFV[123] = "V";
    
    PFV[124] = "Un proceso irreversible ocurre mediante cambios infinitesimales.";
    RFV[124] = "F";

    PFV[125] = "Todos los procesos naturales son irreversibles.";
    RFV[125] = "V";

    PFV[126] = "Todos los procesos naturales son reversibles.";
    RFV[126] = "F";
  
    //
    
    let rnd = rndi(1,4);
    let word;
    
    if(rnd===1) word = "La energía interna";
    if(rnd===2) word = "La temperatura";
    if(rnd===3) word = "La presión";
    if(rnd===4) word = "El volumen";

    
    PFV[127] = word+" es una variable de estado."; 
    RFV[127] = "V";    
    
    PFV[128] = word+" es una variable de trayectoria."; 
    RFV[128] = "F";  

    let rnd2 = rndi(1,2);
    let word2;
    
    if(rnd2===1) word2 = "El calor";
    if(rnd2===2) word2 = "El trabajo";

    PFV[129] = word2+" es una variable de trayectoria."; 
    RFV[129] = "V";       

    PFV[130] = word2+" es una variable de estado."; 
    RFV[130] = "F"; 
    
    //
    
    PFV[131] = "La primera ley de la Termodinámica establece que la energía se conserva."; 
    RFV[131] = "V";     

    PFV[132] = "La primera ley de la Termodinámica establece que la materia se conserva."; 
    RFV[132] = "F";  

    // ####### PROCESO ISOBARICO #######

    PFV[133] = "En un proceso isobárico la transferencia de calor es igual al cambio de entalpía.";
    RFV[133] = "V";

    PFV[134] = "En un proceso isobárico la transferencia de calor es igual al cambio de la energía interna.";
    RFV[134] = "F";

    // ####### PROCESO ISOCORICO #######

    PFV[135] = "En un proceso isocórico la transferencia de calor es igual al cambio de la energía interna.";
    RFV[135] = "V";

    PFV[136] = "En un proceso isocórico la transferencia de calor es igual al cambio de entalpía.";
    RFV[136] = "F";

    PFV[137] = "En un proceso isocórico el trabajo PV es cero.";
    RFV[137] = "V";

    PFV[138] = "En un proceso isocórico el trabajo PV es mayor que cero.";
    RFV[138] = "F";

	// ####### INDICE POLITROPICO #######

    PFV[139] = "Si el índice politrópico es igual a 0 el proceso es isobárico.";
    RFV[139] = "V";    

    PFV[140] = "Si el índice politrópico es igual a 0 el proceso es isotérmico.";
    RFV[140] = "F";    

    PFV[141] = "Si el índice politrópico es igual a 1 el proceso es isotérmico.";
    RFV[141] = "V";    

    PFV[142] = "Si el índice politrópico es igual a 1 el proceso es isobárico.";
    RFV[142] = "F"; 

    PFV[143] = "Si el índice politrópico es muy grande el proceso es isocórico.";
    RFV[143] = "V";    

    PFV[144] = "Si el índice politrópico es muy grande el proceso es isobárico.";
    RFV[144] = "F"; 

	//
	
    PFV[145] = "La capacidad calorífica se puede medir en J/K.";
    RFV[145] = "V";

    PFV[146] = "El calor específico se puede medir en J/K.";
    RFV[146] = "F";

    PFV[147] = "La capacidad calorífica de un gas real depende de la temperatura.";
    RFV[147] = "V";    

    PFV[148] = "La capacidad calorífica de un gas real siempre es constante.";
    RFV[148] = "F";
    
    PFV[149] = "La capacidad calorífica de un gas ideal es independiente de la temperatura.";
    RFV[149] = "V";     

    PFV[150] = "La capacidad calorífica de un gas ideal depende de la temperatura.";
    RFV[150] = "F"; 
	
	// explicar los siguiente para la tarea de deducir Cv = 3/2 n R 

    PFV[151] = "La energía interna de un gas ideal sólo depende de la temperatura.";
    RFV[151] = "V";

    PFV[152] = "La energía interna de un gas ideal depende de la temperatura y el volumen.";
    RFV[152] = "F";

    //

    PFV[153] = "Si un gas ideal se expande libremente en el vacío (presión de oposición cero), entonces el gas no realiza trabajo PV.";
    RFV[153] = "V";

    PFV[154] = "Si un gas ideal se expande libremente en el vacío (presión de oposición cero), entonces el gas sí realiza trabajo PV.";
    RFV[154] = "F";
    
    //

    PFV[155] = "El cambio en la energía interna en un gas ideal que se somete a un proceso isotérmico reversible es igual a cero.";
    RFV[155] = "V";

    PFV[156] = "El cambio en la energía interna en un gas ideal que se somete a un proceso isotérmico reversible es mayor que cero.";
    RFV[156] = "F";
    
    //
    
    PFV[157] = "En un proceso adiabatico no hay transferencia de calor.";
    RFV[157] = "V";    
    
    PFV[158] = "En un proceso adiabatico la transferencia de calor es mayor que cero.";
    RFV[158] = "F";    

    PFV[159] = "En un proceso adiabatico el cambio en la energía interna es igual al trabajo.";
    RFV[159] = "V";    
    
    PFV[160] = "En un proceso adiabatico el cambio en la energía interna es igual a la transferencia de calor.";
    RFV[160] = "F"; 


	// ####### 2a LEY #######

    PFV[161] = "Los enunciados de Clausius y de Kelvin-Planck de la 2a Ley de la Termodinámica son matemáticamente equivalentes.";
    RFV[161] = "V";

    //

    PFV[162] = "El enunciado de Kelvin-Planck de la 2a Ley de la Termodinámica asegura que que es imposible construir una máquina térmica con una eficiencia del 100%.";
    RFV[162] = "V";

    PFV[163] = "El enunciado de Clausius de la 2a Ley de la Termodinámica asegura que que es imposible construir una máquina térmica con una eficiencia del 100%.";
    RFV[163] = "F";

    PFV[164] = "El enunciado de Clausius de la 2a Ley de la Termodinámica asegura que es imposible construir un refrigerador que funcione sin un suministro de energía.";
    RFV[164] = "V";

    PFV[165] = "El enunciado de Kelvin-Planck de la 2a Ley de la Termodinámica asegura que es imposible construir un refrigerador que funcione sin un suministro de energía.";
    RFV[165] = "F";

    PFV[166] = "Es imposible construir una máquina térmica con una eficiencia del 100%.";
    RFV[166] = "V";

    PFV[167] = "Es posible construir una máquina térmica con una eficiencia del 100%.";
    RFV[167] = "F";  

    PFV[168] = "Todas las máquinas térmicas operan con una eficiencia menor al 100%.";
    RFV[168] = "V";  

    PFV[169] = "Todas las máquinas térmicas operan con una eficiencia mayor al 100%.";
    RFV[169] = "F";  

    PFV[170] = "Es imposible crear una máquina de movimiento perpétuo.";
    RFV[170] = "V"; 

    PFV[171] = "Es posible crear una máquina de movimiento perpétuo.";
    RFV[171] = "F";  

    PFV[172] = "Una máquina de movimiento perpetuo del tipo 1 produce trabajo sin energía de entrada.";
    RFV[172] = "V";  

    PFV[173] = "Una máquina de movimiento perpetuo del tipo 2 produce trabajo sin energía de entrada.";
    RFV[173] = "F"; 

    PFV[174] = "Una máquina de movimiento perpetuo del tipo 2 transforma el 100% de la energía de entrada en trabajo.";
    RFV[174] = "V"; 

    PFV[175] = "Una máquina de movimiento perpetuo del tipo 1 transforma el 100% de la energía de entrada en trabajo.";
    RFV[175] = "F"; 

    PFV[176] = "El primer principio de Carnot asegura que la máquina de Carnot es la máquina térmica más eficiente";
    RFV[176] = "V";      

    PFV[177] = "El segundo principio de Carnot asegura que la máquina de Carnot es la máquina térmica más eficiente";
    RFV[177] = "F";

    PFV[178] = "El segundo principio de Carnot establece que si dos máquinas de Carnot operan con las mismas temperaturas entonces tienen la misma eficiencia.";
    RFV[178] = "V";

    PFV[179] = "El primer principio de Carnot establece que si dos máquinas de Carnot operan con las mismas temperaturas entonces tienen la misma eficiencia.";
    RFV[179] = "F";

    PFV[180] = "El ciclo de Carnot consta de 4 etapas: dos isotérmicas y dos adiabáticas.";
    RFV[180] = "V";  

    PFV[181] = "El ciclo de Carnot consta de 4 etapas: dos isotérmicas y dos isobáricas.";
    RFV[181] = "F"; 

    PFV[182] = "El ciclo de Carnot consta de 4 etapas: dos isobáricas y dos adiabáticas.";
    RFV[182] = "F";

    PFV[183] = "En el ciclo de Carnot, el calor ingresa durante la expansión isotérmica.";
    RFV[183] = "V";  

    PFV[184] = "En el ciclo de Carnot, el calor sale durante la expansión isotérmica.";
    RFV[184] = "F"; 

    PFV[185] = "En el ciclo de Carnot, el calor sale durante la compresión isotérmica.";
    RFV[185] = "V"; 

    PFV[186] = "En el ciclo de Carnot, el calor ingresa durante la compresión isotérmica.";
    RFV[186] = "F"; 

    PFV[187] = "En el ciclo de Carnot, el cambio de la energía interna es igual a cero.";
    RFV[187] = "V";

    PFV[188] = "En el ciclo de Carnot, el cambio de la energía interna es mayor que cero.";
    RFV[188] = "F";

    // ####### 3a LEY #######

    PFV[189] = "La entropía de un sólido cristalino perfecto es cero a T = 0 K.";
    RFV[189] = "V";

    PFV[190] = "La entropía de un sólido cristalino perfecto es cero a T = 0 °C.";
    RFV[190] = "F";
    
    PFV[191] = "Todo proceso se detiene al llegar al cero absoluto de temperatura.";
    RFV[191] = "V";

    PFV[192] = "Es posible alcanzar el cero absoluto de temperatura (T = 0 K) mediante una serie finita de etapas.";
    RFV[192] = "F";
    
    // ####### 2a LEY #######

    PFV[193] = "Desde un punto de vista MACROscópico, el cambio de entropía se define como la transferencia de calor reversible entre la temperatura.";
    RFV[193] = "V";

    PFV[194] = "Desde un punto de vista microscópico, el cambio de entropía se define como la transferencia de calor reversible entre la temperatura.";
    RFV[194] = "F";

    PFV[195] = "Desde un punto de vista microscópico, la entropía se interpreta como una medida del <i>desorden</i> de un sistema.";
    RFV[195] = "V";

    PFV[196] = "Desde un punto de vista MACROscópico, la entropía se interpreta como una medida del <i>desorden</i> de un sistema.";
    RFV[196] = "F";

    PFV[197] = "La entropía es una función de estado.";
    RFV[197] = "V";

    PFV[198] = "La entropía es una función de trayectoria.";
    RFV[198] = "F";

    PFV[199] = "Los cambios de entropía se pueden medir en J/K.";
    RFV[199] = "V";

    PFV[200] = "Los cambios de entropía se pueden medir en J.";
    RFV[200] = "F";

    PFV[201] = "Un proceso isoentrópico es un proceso adiabático.";
    RFV[201] = "V";

    PFV[202] = "Un proceso isoentrópico no es un proceso adiabático.";
    RFV[202] = "F";

    PFV[203] = "En un proceso isoentrópico no hay transferencia de calor.";
    RFV[203] = "V";

    PFV[204] = "En un proceso isoentrópico la transferencia de calor es mayor que cero.";
    RFV[204] = "F";

    PFV[205] = "La entropía de un mol de vapor de agua es mayor que la entropía de un mol de agua congelada.";
    RFV[205] = "V";
    
    PFV[206] = "La entropía de un mol de vapor de agua es menor que la entropía de un mol de agua congelada.";
    RFV[206] = "F";    

    PFV[207] = "La entropía de un mol de agua líquida es mayor que la entropía de un mol de agua congelada.";
    RFV[207] = "V";
    
    PFV[208] = "La entropía de un mol de agua líquida es menor que la entropía de un mol de agua congelada.";
    RFV[208] = "F";

    //

    PFV[209] = "La entropía del universo aumenta en un proceso espontáneo.";
    RFV[209] = "V";

    PFV[210] = "La entropía del universo disminuye en un proceso espontáneo.";
    RFV[210] = "F";

    PFV[211] = "La entropía del universo se mantiene constante en un proceso en equilibrio.";
    RFV[211] = "V";

    PFV[212] = "La entropía del universo aumenta en un proceso en equilibrio.";
    RFV[212] = "F";

    PFV[213] = "Si &Delta;S<sub>total</sub> > 0 el proceso es espontáneo.";
    RFV[213] = "V";

    PFV[214] = "Si &Delta;S<sub>total</sub> < 0 el proceso es espontáneo.";
    RFV[214] = "F";

    PFV[215] = "Si &Delta;S<sub>total</sub> = 0 el proceso está en equilibrio.";
    RFV[215] = "V";

    PFV[216] = "Si &Delta;S<sub>total</sub> > 0 el proceso está en equilibrio.";
    RFV[216] = "F";

    PFV[217] = "Si &Delta;S<sub>total</sub> < 0 el proceso NO es posible.";
    RFV[217] = "V";

    PFV[218] = "Si &Delta;S<sub>total</sub> > 0 el proceso NO es posible.";
    RFV[218] = "F";

    // ####### REACCIONES QUÍMICAS #######


    PFV[219] = "En una reacción química, si &Delta;H < 0 la reacción es exotérmica.";
    RFV[219] = "V";

    PFV[220] = "En una reacción química, si &Delta;H < 0 la reacción es endotérmica.";
    RFV[220] = "F";

    PFV[221] = "En una reacción química, si &Delta;H > 0 la reacción es endotérmica.";
    RFV[221] = "V";

    PFV[222] = "En una reacción química, si &Delta;H > 0 la reacción es exotérmica.";
    RFV[222] = "F";

    PFV[223] = "Una reacción química exotérmica libera calor.";
    RFV[223] = "V";

    PFV[224] = "Una reacción química exotérmica absorbe calor.";
    RFV[224] = "F";

    PFV[225] = "Una reacción química endotérmica absorbe calor.";
    RFV[225] = "V";

    PFV[226] = "Una reacción química endotérmica libera calor.";
    RFV[226] = "F";

    //

    PFV[227] = "En una reacción química, si &Delta;G < 0 la reacción es espontánea.";
    RFV[227] = "V";

    PFV[228] = "En una reacción química, si &Delta;G < 0 la reacción no es espontánea.";
    RFV[228] = "F";

    PFV[229] = "En una reacción química, si &Delta;G > 0 la reacción no es espontánea.";
    RFV[229] = "V";

    PFV[230] = "En una reacción química, si &Delta;G > 0 la reacción es espontánea.";
    RFV[230] = "F";

    PFV[231] = "En una reacción química, si &Delta;G = 0 la reacción está en equilibrio.";
    RFV[231] = "V";

    PFV[232] = "En una reacción química, si &Delta;G = 0 la reacción es espontánea.";
    RFV[232] = "F";

    //

    PFV[233] = "En una reacción química, si &Delta;A < 0 la reacción es espontánea.";
    RFV[233] = "V";

    PFV[234] = "En una reacción química, si &Delta;A < 0 la reacción no es espontánea.";
    RFV[234] = "F";

    PFV[235] = "En una reacción química, si &Delta;A > 0 la reacción no es espontánea.";
    RFV[235] = "V";

    PFV[236] = "En una reacción química, si &Delta;A > 0 la reacción es espontánea.";
    RFV[236] = "F";

    PFV[237] = "En una reacción química, si &Delta;A = 0 la reacción está en equilibrio.";
    RFV[237] = "V";

    PFV[238] = "En una reacción química, si &Delta;A = 0 la reacción es espontánea.";
    RFV[238] = "F";

    //

    PFV[239] = "&Delta;A se interpreta como el trabajo máximo (a T y P constantes) que se puede realizar en un proceso.";
    RFV[239] = "V";

    PFV[240] = "&Delta;A se interpreta como el trabajo mínimo que se puede realizar en un proceso.";
    RFV[240] = "F";

	//console.log("Questions: ", PFV.length);




}

