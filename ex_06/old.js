
/*

(C) 2024 Dr. Octavio Juárez
octavio.juarez@unison.mx

Todos los derechos reservados.

*/


var QTN;
var ANS;

var usrans;
var trueans;
var fkans = [];

var score;
var oks;
var fails;
var uni;
var RespuestasNegativas='yes';
var RespuestaEspecial = 'no';


// var symbols = [];
// var names = [];
// var PM = [];
//var is_molar_mass;
var z=0;
var zmin=1;
var zmax=15;
var zold=0;
//var z1,z2,z3,z4; //fakes


var act=6; // numero de examen
var uname;
var ii=1; //contador
var iimax=20; //num de preguntas
var maxtleft=iimax*120; //120 s por pregunta
var pnts=5;
var tleft=maxtleft;
var isgameover=false;

//------------------------------------------------------------------------------
var downloadTimer = setInterval(function(){
if(tleft <= 0 && !isgameover){
//clearInterval(downloadTimer);
document.getElementById("info2").innerHTML = "0";
gameover();
} else {
document.getElementById("info2").innerHTML = tleft;
}
tleft -= 1;
}, 1000);

//------------------------------------------------------------------------------
function start(){

ii = 1;
oks = 0;
tleft = maxtleft;
isgameover = false;

uname = document.getElementById("student_name").value;


document.getElementById("questionpanel").style.display = "block";
document.getElementById("user_name").style.display = "none";
document.getElementById("resumenpanel").style.display = "none";
document.getElementById("resumen").style.display = "none";
document.getElementById("mensaje").style.display = "none";
document.getElementById("restart").style.display = "block";    

resetScore();

test();

}

//------------------------------------------------------------------------------
function test(){

updateScore();
RespuestaEspecial = "no";
RespuestasNegativas = "no";


let prob = rndi(1,100);

/*
if(prob<25){
let prob2 = 1;// rndi(10,11);  
if(prob2===1) prob_calor_cambio_de_fase();
}else{
let prob2 = rndi(1,3);
if(prob2===1) prob_ec_clapeyron_fusion();
if(prob2===2) prob_ec_clausius_clapeyron_evaporacion();
if(prob2===3) prob_ec_antonie_evaporacion();
}
*/


//pruebame...
prob_ec_goff_gratch_sublimacion();
//prob_ec_clausius_clapeyron_sublimacion();



document.getElementById("question").innerHTML = QTN;

showAns();



}


//------------------------------------------------------------------------------
function prob_conv_T(){

let opc = rndi(1,4);
let T;

// °C -> K
if(opc===1){
T = rndi(-200,300);
QTN = "Convierte "+T+" °C en K.<br><br>";
ANS = T + 273.15; 
uni = "K";
}

// K -> °C
if(opc===2){
T = rndi(10, 500);
QTN = "Convierte "+T+" K en °C.<br><br>";
ANS = T - 273.15; 
uni = "°C";
} 

// °C -> °F
if(opc===3){
T = rndi(-200,300);
QTN = "Convierte "+T+" °C en °F.<br><br>";
ANS = (9.0/5.0)*T + 32.0; 
uni = "°F";
}

// °F -> °C
if(opc===4){
T = rndi(-100,300);
QTN = "Convierte "+T+" °F en °C.<br><br>";
ANS = (5.0/9.0)*(T - 32.0); 
uni = "°C";
}

}

//------------------------------------------------------------------------------
function prob_conv_P(){

let opt = rndi(1,6);
let P;

/*
1 atm = 760 mmHg
1 atm = 101325 Pa
760 mmHg = 101325 Pa
*/

// atm -> mmHg
if(opt===1){
P = rndi(1,10);
QTN = "Convierte "+P+" atm en mmHg.<br><br>";
ANS = 760*P; uni = "mmHg";
}

// mmHg -> atm
if(opt===2){
P = rndi(200,760*3);
QTN = "Convierte "+P+" mmHg en atm.<br><br>";
ANS = (1.0/760.0)*P; uni = "atm";
}

// atm -> Pa
if(opt===3){
P = rndi(1,10);
QTN = "Convierte "+P+" atm en kPa.<br><br>";
ANS = 101.325*P; uni = "kPa";
}

// Pa -> atm
if(opt===4){
P = rndi(100,999);
QTN = "Convierte "+P+" kPa en atm.<br><br>";
ANS = (1.0/101.325)*P; uni = "atm";
}

// mmHg -> Pa
if(opt===5){
P = rndi(200,760*3);
QTN = "Convierte "+P+" mmHg en kPa.<br><br>";
ANS = (101.325/760.0)*P; uni = "kPa";
}

// Pa -> mmHg
if(opt===6){
P = rndi(100,999);
QTN = "Convierte "+P+" kPa en mmHg.<br><br>";
ANS = (760.0/101.325)*P; uni = "mmHg";
}    

}

//------------------------------------------------------------------------------
function prob_conv_V(){

let opt = rndi(1,3);
let V;

/*
1 cm3 = 1 mL
1 dm3 = 1 L
1 m3 = 1000 L
*/

// m3 -> L
if(opt===1){
V = rndi(1,10);
QTN = "Convierte "+V+" m<sup>3</sup> en L.<br><br>";
ANS = 1000*V; uni = "L";
}

// L -> m3
if(opt===2){
V = rndi(1000,10000);
QTN = "Convierte "+V+" L en m<sup>3</sup>.<br><br>";
ANS = (1.0/1000.0)*V; uni = "m<sup>3</sup>";
}

// cm3 -> mL
if(opt===3){
V = rndi(10,90)*10;
QTN = "Convierte "+V+" cm<sup>3</sup> en mL.<br><br>";
ANS = V; uni = "mL";
}

}


//------------------------------------------------------------------------------
function prob_conv_E(){



/*
1 cal = 4.186 J
1 atm L = 101.325 J
1 Pa m3 = 1 J
*/


let opt = rndi(1,4);
let E;


// cal -> J
if(opt===1){
E = rndi(100,1000);
QTN = "Convierte "+E+" cal en kJ.<br><br>";

E = E*(4.186/1); // J
E = E/1000; // kJ

ANS = E; uni = "kJ";
}

// J -> cal
if(opt===2){
E = rndi(100,1000);
QTN = "Convierte "+E+" J en cal.<br><br>";

E = E*(1/4.186); // cal

ANS = E; uni = "cal";
}

// atmL -> J
if(opt===3){
E = rndi(10,100);
QTN = "Convierte "+E+" atm L en J.<br><br>";

E = E*(101.325/1); // J

ANS = E; uni = "J";
}

// J -> atm L
if(opt===4){
E = rndi(100,1000);
QTN = "Convierte "+E+" J en atm L.<br><br>";

E = E*(1/101.325); // atm L

ANS = E; uni = "atm L";
}

}

//------------------------------------------------------------------------------
function prob_conv_n(){

let opc = rndi(1,2);

let n, m, M, COMP;

let opc2 = rndi(1,10);

if(opc2===1){ COMP = "H<sub>2</sub>"; M = 2*1.01; }
if(opc2===2){ COMP = "N<sub>2</sub>"; M = 2*14.01; }
if(opc2===3){ COMP = "O<sub>2</sub>"; M = 2*16.0; }
if(opc2===4){ COMP = "CO";             M = 12.01+16.0; }
if(opc2===5){ COMP = "CO<sub>2</sub>"; M = 12.01+2*16.0; }
if(opc2===6){ COMP = "H<sub>2</sub>O"; M = 2*1.01+16.0; }
if(opc2===7){ COMP = "CH<sub>4</sub>"; M = 12.01+4*1.01; }
if(opc2===8) { COMP = "He"; M = 4.0; }
if(opc2===9) { COMP = "Ne"; M = 20.18; }
if(opc2===10){ COMP = "Ar"; M = 39.95; }

// gramos -> mol    
if(opc===1){

n = rndi(1,10)*10;
m = n*M;       

QTN  = "Convierte "+n+" mol de "+COMP+" a gramos.";;
ANS = m;
uni = "g";        
}

// mol -> gramos    
if(opc===2){

m = rndi(1,10)*100;
n = m/M;

QTN  = "Convierte "+m+" g de "+COMP+" a mol.<br>";;
ANS = n;
uni = " mol";
}
}


//------------------------------------------------------------------------------
function prob_conv_d(){

let opc = rndi(1,3);

let d, V, n, m, M, COMP;

let opc2 = rndi(1,7);


// densidades en g/mL

if(opc2===1){ COMP = "N<sub>2</sub>"; M = 2*14.01; d = 0.81 } 
if(opc2===2){ COMP = "O<sub>2</sub>"; M = 2*16.0;  d = 1.43 } 
if(opc2===3){ COMP = "aire";          M = 28.97;   d = 1.30e-3 }
if(opc2===4){ COMP = "agua";          M = 18.0;    d = 1.00 }    
if(opc2===5){ COMP = "NaOH";          M = 40.0;    d = 2.13 } 
if(opc2===6){ COMP = "H<sub>2</sub>SO<sub>4</sub>";   M = 98.01;    d = 1.83 } 
if(opc2===7){ COMP = "C<sub>3</sub>H<sub>6</sub>";    M = 42.01;    d = 1.74 } 

if(opc===1){

m = rndi(10,200)*10;      

QTN  = "Si la densidad del "+COMP+" es igual a "+d+" g/mL, ";
QTN += "calcula el volumen que ocupan " + m + " gramos de " + COMP +"."

V = m/d;

if(V<1000){
ANS = V;
uni = "mL";  
}else{
ANS = V/1000;
uni = "L";  
}

}

if(opc===2){

n = rndi(1,10)*10;
m = n*M;            

QTN  = "Si la densidad del "+COMP+" es igual a "+d+" g/mL, ";
QTN += "calcula el volumen que ocupan " + n + " moles de " + COMP +"."

V = m/d;

if(V<1000){
ANS = V;
uni = "mL";  
}else{
ANS = V/1000;
uni = "L";  
}      
}


if(opc===3){

V = rndi(1,1000);	

QTN  = "Si la densidad del "+COMP+" es igual a "+d+" g/mL, ";
QTN += "calcula la masa de " + V + " L de " + COMP +"."

V = V*1000; //mL
m = d*V;

if(m<1000){
ANS = m;
uni = "g";  
}else{
ANS = m/1000;
uni = "kg";  
}      
}


}



//------------------------------------------------------------------------------
function prob_conv_Vm(){

let d, V, n, m, M, COMP, Vm;


// densidades en g/mL
let opc2 = rndi(1,10);
if(opc2===1){ COMP = "N<sub>2</sub>"; M = 2*14.01; d = 0.81 } 
if(opc2===2){ COMP = "O<sub>2</sub>"; M = 2*16.0;  d = 1.43 } 
if(opc2===3){ COMP = "aire";          M = 28.97;   d = 1.30e-3 }
if(opc2===4){ COMP = "agua";          M = 18.0;    d = 1.00 }    
if(opc2===5){ COMP = "hielo";         M = 18.0;    d = 0.92 } 
if(opc2===6){ COMP = "NaOH";          M = 40.0;    d = 2.13 } 
if(opc2===7){ COMP = "H<sub>2</sub>SO<sub>4</sub>";   M = 98.01;    d = 1.83 } 
if(opc2===8){ COMP = "C<sub>3</sub>H<sub>6</sub>";    M = 42.01;    d = 1.74 } 
if(opc2===9){ COMP = "CH<sub>3</sub>OH";              M = 32.04;    d = 0.792 } 

if(opc2===10){ COMP = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>";   M = 180.2;    d = 1.54 } 



m = rndi(10,200)*10;      

QTN  = "Si la densidad del "+COMP+" es igual a "+d+" g/mL, ";
QTN += "calcula el volumen molar del " + COMP +"."

Vm = M/d;

if(Vm<1000){
ANS = Vm;
uni = "mL/mol"; 
}else{
ANS = Vm/1000;
uni = "L/mol"; 
}  	


}

//------------------------------------------------------------------------------
function prob_calor(){

let q, C, c, Cm, T1, T2, dT, m, M, n;

let op = rndi(1,4);

if( op === 1 ){


m = rndi(1,10)*10;
T1 = rndi(1,99);
T2 = T1 + rndi(2,8);

dT = T2 - T1;

q = rndi(50,100)*10;

C = q / (m * dT);

QTN  = m+" g de cierta sustancia se calienta desde "+T1+" °C hasta "+T2+" °C, ";
QTN += "absorbiendo " + q +" cal de calor. ";
QTN += " Calcula el calor específico de la sustancia. <br><br>";

ANS = C; uni = "cal / g °C"                

}


if(op ===2){

m = rndi(10,100)*10; // gramos

T1 = rndi(1,25);
T2 = T1 + rndi(10,50);
dT = T2 - T1;		

c = 1; // cal / g °C

q = m*c*dT; // cal

q = q*(4.186/1); // J

q = q/1000.0; //kJ

QTN  = "Calcula el calor necesario para calentar "+ m +" g de agua líquida (c = 1 cal/g °C) "
QTN += "desde "+ T1 + " °C hasta " + T2 + " °C.<br><br>";

ANS = q; uni = "kJ"

}

if(op ===3){

n = rndi(10,50)*10; // moles

m = 18*n; // gramos

T1 = rndi(1,25);
T2 = T1 + rndi(10,50);
dT = T2 - T1;		

c = 1; // cal / g °C

q = m*c*dT; // cal

q = q/1000.0; // kcal


QTN  = "Calcula el calor necesario para calentar "+ n +" moles de agua líquida (c = 1 cal/g °C) "
QTN += "desde "+ T1 + " °C hasta " + T2 + " °C.<br><br>";

ANS = q; uni = "kcal"

}	

if(op ===4){

m = rndi(10,100)*10; // gramos

T1 = rndi(1,25);
T2 = T1 + rndi(10,50);
dT = T2 - T1;		

c = 1; // cal / g °C

q = m*c*dT; // cal

q = q/1000.0; // kcal

//T2 = q*1000/(m*c) + T1;		

QTN  =  m +" gramos de agua líquida (c = 1 cal/g °C) "
QTN += "absorben " + q + " kcal de calor. Si la temperatura inical eran "
QTN += T1 + " °C ¿Cuál es la temperatura final? <br><br>";

ANS = T2; uni = "°C ";



}		

}

//------------------------------------------------------------------------------
function prob_rx_quim_calor_1(){ 

let dH, q;
let m, n , M;
let pquim, fact, comp;
let opc = rndi(1,4);
let opc2 = rndi(1,2);

if(opc === 1){  
dH = 890.25;
pquim = "CH<sub>4</sub> + 2O<sub>2</sub> &rarr; CO<sub>2</sub> + 2H<sub>2</sub>O; &Delta;H = &minus;"+dH+" kJ/mol; <br>";        
if(coin()===1){
comp = "CH<sub>4</sub>";
fact = 1;
M = 12.01 + 4*1.01;
}else{
comp = "O<sub>2</sub>";
fact = 2;
M = 2*16.0;
}
dH = -dH;
}
if(opc === 2){  
dH = 2801.0;
pquim = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O; &Delta;H = &minus;"+dH+" kJ/mol; <br>";        
if(coin()===1){
comp = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>";
fact = 1;
M = 6*12.01 + 12*1.01 + 6*16;
}else{
comp = "O<sub>2</sub>";
fact = 6;
M = 2*16.0;
}
dH = -dH;
}    
if(opc === 3){  
dH = 2220.0;
pquim = "C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> &rarr; 3CO<sub>2</sub> + 4H<sub>2</sub>O; &Delta;H = &minus;"+dH+" kJ/mol; <br>";        
if(coin()===1){
comp = "C<sub>3</sub>H<sub>8</sub>";
fact = 1;
M = 3*12.01 + 8*1.01;
}else{
comp = "O<sub>2</sub>";
fact = 5;
M = 2*16.0;
}
dH = -dH;
}  
if(opc === 4){  
dH = 1368.0;
pquim = "C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> &rarr; 2CO<sub>2</sub> + 3H<sub>2</sub>O; &Delta;H = &minus;"+dH+" kJ/mol; <br>";        
if(coin()===1){
comp = "C<sub>2</sub>H<sub>5</sub>OH";
fact = 1;
M = 2*12.01 + 5*1.01 + 16 + 1.01;
}else{
comp = "O<sub>2</sub>";
fact = 3;
M = 2*16.0;
}
dH = -dH;
} 

if(opc2 === 1){
n = rndi(2,9);
}else{
m = rndi(10,100)*10;
n = m/M;
}

QTN  = "";
QTN += "Considera el siguiente proceso químico: <br>"
QTN += pquim;
if(opc2 === 1) QTN += "Calcula el calor que producen "+n+" mol de "+comp+".";
if(opc2 === 2) QTN += "Calcula el calor que producen "+m+" g de "+comp+".";
QTN += "<br><br>";

q = n*dH/fact;

ANS = q;
uni = " kJ";

}

//------------------------------------------------------------------------------
function prob_rx_quim_calor_2(){ 

let dH, q;
let m, n , M;
let pquim, fact, comp;
let opc = rndi(1,4);
let opc2 = rndi(1,2);

if(opc === 1){  
dH = 890.25;
pquim = "CH<sub>4</sub> + 2O<sub>2</sub> &rarr; CO<sub>2</sub> + 2H<sub>2</sub>O; &Delta;H = &minus;"+dH+" kJ/mol; <br>";        
if(coin()===1){
comp = "CH<sub>4</sub>";
fact = 1;
M = 12.01 + 4*1.01;
}else{
comp = "O<sub>2</sub>";
fact = 2;
M = 2*16.0;
}
dH = -dH;
}
if(opc === 2){  
dH = 2801.0;
pquim = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O; &Delta;H = &minus;"+dH+" kJ/mol; <br>";        
if(coin()===1){
comp = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>";
fact = 1;
M = 6*12.01 + 12*1.01 + 6*16;
}else{
comp = "O<sub>2</sub>";
fact = 6;
M = 2*16.0;
}
dH = -dH;
}    
if(opc === 3){  
dH = 2220.0;
pquim = "C<sub>3</sub>H<sub>8</sub> + 5O<sub>2</sub> &rarr; 3CO<sub>2</sub> + 4H<sub>2</sub>O; &Delta;H = &minus;"+dH+" kJ/mol; <br>";        
if(coin()===1){
comp = "C<sub>3</sub>H<sub>8</sub>";
fact = 1;
M = 3*12.01 + 8*1.01;
}else{
comp = "O<sub>2</sub>";
fact = 5;
M = 2*16.0;
}
dH = -dH;
}  
if(opc === 4){  
dH = 1368.0;
pquim = "C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> &rarr; 2CO<sub>2</sub> + 3H<sub>2</sub>O; &Delta;H = &minus;"+dH+" kJ/mol; <br>";        
if(coin()===1){
comp = "C<sub>2</sub>H<sub>5</sub>OH";
fact = 1;
M = 2*12.01 + 5*1.01 + 16 + 1.01;
}else{
comp = "O<sub>2</sub>";
fact = 3;
M = 2*16.0;
}
dH = -dH;
} 

q = rndi(10,50)*100;


QTN  = "";
QTN += "Considera el siguiente proceso químico: <br>"
QTN += pquim;
if(opc2 === 1) QTN += "Calcula los moles necesarios de "+comp+" para producir &minus;"+q+" kJ de calor.";
if(opc2 === 2) QTN += "Calcula los gramos necesarios de "+comp+" para producir &minus;"+q+" kJ de calor.";
QTN += "<br><br>";

if(opc2 === 1){
n = -q*fact/dH;
ANS = n;
uni = " mol";        
}else{
n = -q*fact/dH;
m = n*M;
ANS = m;
uni = " g"; 
}    

}

//------------------------------------------------------------------------------
function prob_calor_cambio_de_fase(){

let q_total, q1, q2, q3;
let dH_fus, dH_vap;
let T1, T2, m, n;
let c_agua, c_hielo, c_vap;
let unidad, x;

dH_fus =  80;     // cal/g
dH_vap = 540;

c_agua  = 1.0;    // cal/g°C
c_hielo = 0.5;
c_vapor = 0.5;

let op = rndi(1,3);

// cambio de fase
if( op===1 ){


if(rndi(1,2)===1){

x = rndi(10,100)*10; // gramos
unidad = "gramos";

m = x;

}else{

x = rndi(10,100)*10; // moles
unidad = "moles";

m = x*18; //gramos

}


if(rndi(1,2)===1){


q_total = m*dH_fus; // cambio de fase, fusion

QTN  = x+" " + unidad + " de agua sólida (hielo) se derriten completamente a 0 °C y 1 atm. ";
QTN += " Calcula el calor total del proceso. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += " &Delta;H<sub>fus</sub> = 80 cal/g";              

}else{

q_total = m*dH_vap; // cambio de fase, evaporacion

QTN  = x+" " + unidad + " de agua líquida se evaporan completamente a 100 °C y 1 atm. ";
QTN += " Calcula el calor total del proceso. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += " &Delta;H<sub>vap</sub> = 540 cal/g";             

}


if(q_total<1000){		
ANS = q_total;
uni = " cal";        
}else{
ANS = q_total/1000;
uni = " kcal";        
}  		

}	

// derretir hielo
if( op===2 ){

m = rndi(10,100)*10; // gramos
T1 = -rndi(5,40); // °C
T2 =  rndi(5,80); // °C 

q1 = c_hielo*m*(0 - T1); // desde T1 hasta 0 °C

q2 = m*dH_fus; // cambio de fase, fusion

q3 = c_agua*m*(T2 - 0); // desde 0 °C hasta T2

q_total = q1 + q2 + q3;

QTN  = m+" g de agua sólida (hielo) se calientan desde "+T1+" °C hasta "+T2+" °C a 1 atm de presión. ";
QTN += " Calcula el calor total del proceso. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += "c<sub>liq</sub> = 1 cal/g °C, c<sub>sol</sub> = 0.5 cal/g °C,";
QTN += " &Delta;H<sub>fus</sub> = 80 cal/g";         


if(q_total<1000){		
ANS = q_total;
uni = " cal";        
}else{
ANS = q_total/1000;
uni = " kcal";        
}  		

}

// evaporar agua
if( op===3 ){

m = rndi(10,100)*10; // gramos
T1 = rndi(5,40); // °C
T2 = rndi(102,200); // °C 

q1 = c_agua*m*(100 - T1); // desde T1 hasta 100 °C

q2 = m*dH_vap; // cambio de fase, evaporacion

q3 = c_vapor*m*(T2 - 100); // desde 100 °C hasta T2

q_total = q1 + q2 + q3;


QTN  = m+" g de agua líquida se calientan desde "+T1+" °C hasta "+T2+" °C a 1 atm de presión. ";
QTN += " Calcula el calor total del proceso. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += "c<sub>liq</sub> = 1 cal/g °C, c<sub>gas</sub> = 0.5 cal/g °C,";
QTN += " &Delta;H<sub>vap</sub> = 540 cal/g"; 


if(q_total<1000){		
ANS = q_total;
uni = " cal";        
}else{
ANS = q_total/1000;
uni = " kcal";        
}  


}    

}


//------------------------------------------------------------------------------
function prob_ec_clapeyron_fusion(){

let dH,dP,dV,dT,T1,T2,P1,P2,V1,V2,d1,d2;

let op = rndi(1,2);

if(op===1){

T1 = 273.15;
T2 = T1 - rndi(10,80)/10;      
dT = T2- T1;
P1 = 101325

V1 = 0.000020;  // m3/mol  volumen molar hielo
V2 = 0.000018;  // m3/mol  volumen molar agua

dH = 6023.52; // J/mol                   
dV = V2 - V1;


QTN  = "Utiliza la ecuación de Clapeyron para ";
QTN += "calcular la presión necesaria para fundir agua a " + round2(T2-273.15) + " °C. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += "d<sub>liq</sub> = 1 g/mL, d<sub>sol</sub> = 0.9 g/mL,";
QTN += " &Delta;H<sub>fus</sub> = 80 cal/g";   

P2 = P1 + dH/dV * Math.log(T2/T1);

negativos="no";

ANS = P2/101325; uni = "atm";




}else{

T1 = 273.15;
T2 = T1 - rndi(10,80)/10;      
dT = T2 - T1;
P1 = 101325

V1 = 0.000020;  // m3/mol  volumen molar hielo
V2 = 0.000018;  // m3/mol  volumen molar agua

dH = 6023.52; // J/mol                   
dV = V2 - V1;

P2 = P1 + dH/dV * Math.log(T2/T1);

P2 = P2/101325;

QTN  = "Utiliza la ecuación de Clapeyron para ";
QTN += "calcular el punto de fusión del agua a " + round2(P2) + " atm. <br>";        
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += "d<sub>liq</sub> = 1 g/mL, d<sub>sol</sub> = 0.9 g/mL,";
QTN += " &Delta;H<sub>fus</sub> = 80 cal/g";        

ANS = T2-273.15; uni = " °C";    

RespuestaEspecial = "yes";     


/*
La ecuación de Simon-Glatzel no parece servir para 
la fusión del hielo. Tal vez los params son erróneos
console.log("Simon-Glatzel:");        
T2 = -0.0000897*P2**2  - 0.072*P2; 
T2 = - 0.072*P2;
console.log(T2);
*/

}


}



//------------------------------------------------------------------------------
function prob_ec_clapeyron_evaporacion(){

let dH,dP,dV,dT,T1,T2,P1,P2,V1,V2,d1,d2,R;

let op = rndi(1,2);

if(op===1){


V1 = 0.000018;  // m3/mol  volumen molar agua
V2 = 0.03;      // vapor
dV = V2 -V1;

dH = 40658.76; // J/mol

T1 = 373.15;

if(coin()==1)
T2 = T1 + rndi(1,100);
else
T2 = T1 - rndi(1,25); 


P1 = 101325;   

P2 = P1 + dH/dV * Math.log(T2/T1);       
P2 = P2*(760.0/101325.0);

QTN  = "Utiliza la ecuación de Clapeyron para ";
QTN += "calcular la presión necesaria para evaporar agua a " + (T2-273.15) + " °C.<br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += "d<sub>liq</sub> = 1 g/mL, d<sub>gas</sub> = 0.6 g/L,";
QTN += " &Delta;H<sub>vap</sub> = 540 cal/g"; 

RespuestaEspecial = 'yes';
ANS = P2; uni = "mmHg";


}

if(op===2){

V1 = 0.000018;  // m3/mol  volumen molar agua
V2 = 0.03;      // vapor
dV = V2 -V1;

dH = 40658.76; // J/mol

T1 = 373.15;

if(coin()==1)
T2 = T1 + rndi(1,100);
else
T2 = T1 - rndi(1,25);


P1 = 101325;   

P2 = P1 + dH/dV * Math.log(T2/T1);       
P2 = P2*(760.0/101325.0);

QTN  = "Utiliza la ecuación de Clapeyron para ";
QTN += "calcular el punto de ebullición del agua a " + round2(P2) + " mmHg. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += "d<sub>liq</sub> = 1 g/mL, d<sub>gas</sub> = 0.6 g/mL,";
QTN += " &Delta;H<sub>vap</sub> = 540 cal/g"; 

RespuestaEspecial = 'yes';
ANS = T2 - 273.15; uni = " °C";




}

}


//------------------------------------------------------------------------------
function prob_ec_clausius_clapeyron_evaporacion(){

let dH,dP,dV,dT,T1,T2,P1,P2,V1,V2,d1,d2,R;

let op = rndi(1,3);

if(op===1){


dH = 40658.76; // J/mol

T1 = 373.15;

if(coin()==1)
T2 = T1 + rndi(1,100);
else
T2 = T1 - rndi(1,25);


P1 = 101325;   
R = 8.314;

P2 = P1*Math.exp( -(dH/R)*( 1/T2 - 1/T1 ) );		
P2 = P2*(760.0/101325.0);          


QTN  = "Utiliza la ecuación de Clausius-Clapeyron para ";
QTN += "calcular la presión necesaria para evaporar agua a " + (T2-273.15) + " °C. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += " &Delta;H<sub>vap</sub> = 540 cal/g";         

RespuestaEspecial = 'yes';
ANS = P2; uni = "mmHg"; 


}

if(op===2){


dH = 40658.76; // J/mol

T1 = 373.15;

if(coin()==1)
T2 = T1 + rndi(1,100);
else
T2 = T1 - rndi(1,25);                    

P1 = 101325;    

P2 = P1/Math.exp( (dH/8.134)*( 1/T2 - 1/T1 ) );		
P2 = P2*(760.0/101325.0); 

//despeje:
//T2 = 1/(  1/T1 - R*Math.log(P2/P1)/dH );

QTN  = "Utiliza la ecuación de Clausius-Clapeyron para ";
QTN += "calcular el punto de ebullición del agua a " + round2(P2) + " mmHg. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += " &Delta;H<sub>vap</sub> = 540 cal/g";         

RespuestaEspecial = 'yes';
ANS = T2 - 273.15; uni = " °C";        		

}

if(op===3){



dH = rndi(10,100)*100; // J/mol

T1 = rndi(50,110);
T2 = T1 + rndi(5,50);


T1 = T1 + 273.15;
T2 = T2 + 273.15;        
P1 = 101325;    
P2 = P1/Math.exp( (dH/8.134)*( 1/T2 - 1/T1 ) );		


P1 = P1*(760.0/101325.0);
P2 = round2(P2*(760.0/101325.0));
T1 = T1 - 273.15;
T2 = T2 - 273.15;



QTN  = "Cierta sustancia hierve a " + T1 + " °C cuando su presión de vapor es igual a ";
QTN += P1 + " mmHg. Pero cuando la presión de vapor es igual a "+ P2 + " mmHg, la sustancia ";
QTN += "se evapora a " + T2 + " °C. Utiliza la ecuación de Clausius-Clapeyron para calcular ";
QTN += "el calor de evaporación de dicha sustancia desconocida.";

//RespuestaEspecial = 'yes';
ANS = dH; uni = " J/mol"; 

}        

}


//------------------------------------------------------------------------------
function prob_ec_antonie_evaporacion(){

let P, T, A, B, C;

let op = 1; //rndi(1,2);

if(op===1){

if(coin()===1){

T = rndi(50,98); // °C
A = 8.07131;
B = 1730.63;
C = 233.426;

}else{

T = rndi(102,300); // °C
A = 8.14019;
B = 1810.94;
C = 244.485;

}


P = 10**(A - B/(C+T));


QTN  = "Utiliza la ecuación de Antonie para ";
QTN += "calcular la presión necesaria para evaporar agua a " + T + " °C. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += "A = " + A + ", B = " + B + " y C = " + C;

RespuestaEspecial = 'yes';
ANS = P; uni = "mmHg";          



}

if(op===2){


if(coin()===1){

T = rndi(50,98); // °C
A = 8.07131;
B = 1730.63;
C = 233.426;

}else{

T = rndi(102,300); // °C
A = 8.14019;
B = 1810.94;
C = 244.485;

}              

P = 10**( A - B/(C + T) );

//despeje:
//T = B/(-Math.log10(P) + A) - C;


QTN  = "Utiliza la ecuación de Antonie para ";
QTN += "calcular la temperatura necesaria para evaporar agua a " + round2(P) + " mmHg. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += "A = " + A + ", B = " + B + " y C = " + C;


RespuestaEspecial = 'yes';
ANS = T; uni = " °C";        		

}

}


//------------------------------------------------------------------------------
function prob_ec_clausius_clapeyron_sublimacion(){

let dH,dP,dV,dT,T1,T2,P1,P2,V1,V2,d1,d2,R;

let op = rndi(1,3);

if(op===1){


dH = 46693.44; // J/mol

T1 = 273.16;

T2 = -4; //-rndi(1,20);

T2 = T2 + 273.15;

P1 = 611.657;   
R = 8.314;

P2 = P1*Math.exp( -(dH/R)*( 1/T2 - 1/T1 ) );	



QTN  = "Utiliza la ecuación de Clausius-Clapeyron para ";
QTN += "calcular la presión necesaria para sublimar agua a " + (T2-273.15) + " °C. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += " &Delta;H<sub>sub</sub> = 620 cal/g";         

RespuestaEspecial = 'yes';
ANS = P2; uni = "Pa"; 


}




if(op===2){


dH = 46693.44; // J/mol

T1 = 273.16;

T2 = -rndi(1,20);

T2 = T2 + 273.15;

P1 = 611.657;   
R = 8.314;

P2 = P1*Math.exp( -(dH/R)*( 1/T2 - 1/T1 ) );

//despeje:
//T2 = 1/(  1/T1 - R*Math.log(P2/P1)/dH );

QTN  = "Utiliza la ecuación de Clausius-Clapeyron para ";
QTN += "calcular el punto de sublimación del agua a " + round2(P2) + " Pa. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += " &Delta;H<sub>sub</sub> = 620 cal/g";         

RespuestaEspecial = 'yes';
ANS = T2 - 273.15; uni = " °C";        		

}

if(op===3){



dH = rndi(10,100)*100; // J/mol

T1 = -rndi(1,4);
T2 = T1 - rndi(5,15);


T1 = T1 + 273.15;
T2 = T2 + 273.15;        
P1 = rndi(40,60)*10; //Pa    
P2 = P1/Math.exp( (dH/8.134)*( 1/T2 - 1/T1 ) );		              
P2 = round2(P2);

T1 = T1 - 273.15;
T2 = T2 - 273.15;



QTN  = "Cierta sustancia sublima a " + T1 + " °C cuando su presión de vapor es igual a ";
QTN += P1 + " Pa. Pero cuando la presión de vapor es igual a "+ P2 + " Pa, la sustancia ";
QTN += "se sublima a " + T2 + " °C. Utiliza la ecuación de Clausius-Clapeyron para calcular ";
QTN += "el calor de sublimación de dicha sustancia desconocida.";

//RespuestaEspecial = 'yes';
ANS = dH; uni = " J/mol"; 

}        

}

//------------------------------------------------------------------------------
function prob_ec_goff_gratch_sublimacion(){
let T0,T,P0,P,A,B,C,D;

let op = 1;

if(op===1){

T0 = 273.16;        
T = -rndi(1,20) + 273.15;

A = -9.09718;
B = -3.56654;
C = 0.876793;
D = 0.78614;


P = 10**( A*(T0/T - 1) + B*Math.log10(T0/T) + C*(1 - T/T0) + D ); //hPa, hecto pascales

for(T=2; T<=20; T+=2){
T *= -1;
T += 273.15;
P = 10**( A*(T0/T - 1) + B*Math.log10(T0/T) + C*(1 - T/T0) + D ); //hPa, hecto pascales
P = P*(100/1); //Pa
T -= 273.15;
T *= -1;
console.log(T, P);

}


P = P*(100/1);

console.log(P);


QTN  = "Utiliza la ecuación de Goff-Gratch para ";
QTN += "calcular la presión necesaria para sublimar agua a " + (T-273.15) + " °C. <br>";
QTN += "Considera los siguientes datos para el agua: <br>";
QTN += " &Delta;H<sub>sub</sub> = 620 cal/g";         

RespuestaEspecial = 'yes';
ANS = P; uni = "Pa"; 

}		


}
//------------------------------------------------------------------------------
function bR()  { start(); start();}
function b1()  { if(tleft>0) { usrans = 1; checkAns();} }
function b2()  { if(tleft>0) { usrans = 2; checkAns();} }
function b3()  { if(tleft>0) { usrans = 3; checkAns();} }
function b4()  { if(tleft>0) { usrans = 4; checkAns();} }
function b0()  { if(tleft>0) { usrans = 5; checkAns();} }
function reload()  { location.reload(); }

//------------------------------------------------------------------------------
function checkAns(){

ii +=1 ;

if(ii <= (iimax+1) )
{
if(usrans === trueans)
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
document.getElementById("info1").innerHTML = iimax + " / " + iimax;
}

if(ii >= iimax)
{
document.getElementById("info1").innerHTML = iimax + " / " + iimax;
}

if(ii > iimax)
{
document.getElementById("b1").innerHTML = "...";
document.getElementById("b2").innerHTML = "...";
document.getElementById("b3").innerHTML = "...";
document.getElementById("b4").innerHTML = "...";	

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

document.getElementById("info1").innerHTML = ii + " / " + iimax;
document.getElementById("info3").innerHTML = score;

if(ii >= iimax)
{
document.getElementById("info1").innerHTML = iimax + " / " + iimax;
}

}

function round2(num) {
return +(Math.round(num + "e+2")  + "e-2");
}

function round4(num) {
return +(Math.round(num + "e+4")  + "e-4");
}

//------------------------------------------------------------------------------
function showAns(){

//console.log("ANS: ", ANS);

var trueANS = "";

if( RespuestasNegativas==='yes'){
if( ANS%2 === 0){
fkans[0] = round2( ANS / 2) +" "+ uni;	
fkans[1] = round2(-ANS / 4) +" "+ uni;
fkans[2] = round2( ANS * 2) +" "+ uni;
fkans[3] = round2(-ANS * 3   ) +" "+ uni;
trueANS =  round2( ANS       ) +" "+ uni;   
}else if(ANS%5 === 0){        
fkans[0] = round2( ANS / 5) +" "+ uni;	
fkans[1] = round2(-ANS / 10) +" "+ uni;
fkans[2] = round2( ANS * 2) +" "+ uni;
fkans[3] = round2(-ANS * 3   ) +" "+ uni;
trueANS =  round2( ANS       ) +" "+ uni;         

}else{
fkans[0] = round2( ANS * 0.75) +" "+ uni;	
fkans[1] = round2(-ANS * 0.50) +" "+ uni;
fkans[2] = round2( ANS * 1.50) +" "+ uni;
fkans[3] = round2(-ANS * 1.75) +" "+ uni;
trueANS =  round2( ANS       ) +" "+ uni;  
}  
}else{
if( ANS%2 === 0){
fkans[0] = round2( ANS / 2) +" "+ uni;	
fkans[1] = round2( ANS / 4) +" "+ uni;
fkans[2] = round2( ANS * 2) +" "+ uni;
fkans[3] = round2( ANS * 4   ) +" "+ uni;
trueANS =  round2( ANS       ) +" "+ uni;   
}else if(ANS%5 === 0){        
fkans[0] = round2( ANS / 5) +" "+ uni;	
fkans[1] = round2( ANS / 10) +" "+ uni;
fkans[2] = round2( ANS * 2) +" "+ uni;
fkans[3] = round2( ANS * 4   ) +" "+ uni;
trueANS =  round2( ANS       ) +" "+ uni;         

}else{
fkans[0] = round2( ANS * 0.50) +" "+ uni;		
fkans[1] = round2( ANS * 0.75) +" "+ uni;
fkans[2] = round2( ANS * 1.50) +" "+ uni;
fkans[3] = round2( ANS * 2.0 ) +" "+ uni;
trueANS =  round2( ANS       ) +" "+ uni;  
}     
}

if( RespuestaEspecial === 'yes'){
fkans[0] = round2( ANS +2) +" "+ uni;		
fkans[1] = round2( ANS -2) +" "+ uni;
fkans[2] = round2( ANS +3) +" "+ uni;
fkans[3] = round2( ANS -3) +" "+ uni;
trueANS =  round2( ANS      ) +" "+ uni; 
}

RespuestasNegativas==='yes'; // mirame


// if(ANS===0){
// fkans[0] = ANS + rndi(10,99) +" " + uni;		
// fkans[1] = ANS - rndi(10,99)+" " + uni;
// fkans[2] = ANS + rndi(100,120) +" " + uni;
// fkans[3] = ANS - rndi(100,120) +" " + uni;
// trueANS = round2(ANS) +" " + uni  ; 
// }else{
// fkans[0] = round2( ANS * 0.75) +" " + uni;		
// fkans[1] = round2(-ANS * 0.75)+" " + uni;
// fkans[2] = round2( ANS * 1.50) +" " + uni;
// fkans[3] = round2( ANS * 2.00) +" " + uni;
// trueANS =  round2( ANS) +" " + uni  ;   
// }

trueans = rndi(1,4);

if(trueans === 1){
if(coin()===1){
document.getElementById("b1").innerHTML = trueANS;
document.getElementById("b2").innerHTML = fkans[2];
document.getElementById("b3").innerHTML = fkans[1];
document.getElementById("b4").innerHTML = fkans[0];
}else{
document.getElementById("b1").innerHTML = trueANS;
document.getElementById("b2").innerHTML = fkans[0];
document.getElementById("b3").innerHTML = fkans[1];
document.getElementById("b4").innerHTML = fkans[2];
}		
}
if(trueans === 2){
if(coin()===1){
document.getElementById("b1").innerHTML = fkans[3];
document.getElementById("b2").innerHTML = trueANS;
document.getElementById("b3").innerHTML = fkans[0];
document.getElementById("b4").innerHTML = fkans[1];
}else{
document.getElementById("b1").innerHTML = fkans[0];
document.getElementById("b2").innerHTML = trueANS;
document.getElementById("b3").innerHTML = fkans[1];
document.getElementById("b4").innerHTML = fkans[2];
}
}
if(trueans === 3){
if(coin()===1){
document.getElementById("b1").innerHTML = fkans[3];
document.getElementById("b2").innerHTML = fkans[2];
document.getElementById("b3").innerHTML = trueANS;
document.getElementById("b4").innerHTML = fkans[0];
}else{
document.getElementById("b1").innerHTML = fkans[0];
document.getElementById("b2").innerHTML = fkans[1];
document.getElementById("b3").innerHTML = trueANS;
document.getElementById("b4").innerHTML = fkans[2];
}
}
if(trueans === 4){
if(coin()===1){
document.getElementById("b1").innerHTML = fkans[2];
document.getElementById("b2").innerHTML = fkans[1];
document.getElementById("b3").innerHTML = fkans[3];
document.getElementById("b4").innerHTML = trueANS;

}else{
document.getElementById("b1").innerHTML = fkans[0];
document.getElementById("b2").innerHTML = fkans[1];
document.getElementById("b3").innerHTML = fkans[2];
document.getElementById("b4").innerHTML = trueANS;
}
}

if(trueans === 5){
//console.log("ANS: NINGUNO");
if(coin()===1){
document.getElementById("b1").innerHTML = fkans[3];
document.getElementById("b2").innerHTML = fkans[2];
document.getElementById("b3").innerHTML = fkans[1];
document.getElementById("b4").innerHTML = fkans[0];
}else{
document.getElementById("b1").innerHTML = fkans[0];
document.getElementById("b2").innerHTML = fkans[1];
document.getElementById("b3").innerHTML = fkans[2];
document.getElementById("b4").innerHTML = fkans[3];
}
}

if(ii > iimax){
document.getElementById("b1").innerHTML = "...";
document.getElementById("b2").innerHTML = "...";
document.getElementById("b3").innerHTML = "...";
document.getElementById("b4").innerHTML = "...";
}

if(tleft <= 0){
document.getElementById("b1").innerHTML = "...";
document.getElementById("b2").innerHTML = "...";
document.getElementById("b3").innerHTML = "...";
document.getElementById("b4").innerHTML = "...";
}

}





/*
function makeFakeZ(){

while(1)
{
z1 = rndi(zmin,zmax);

if(z1!==z)break;
}

while(1)
{
z2 = rndi(zmin, zmax);

if(z2 !== z1 &&
z2 !== z) 
break;
}

while(1)
{
z3 = rndi(zmin, zmax);

if(z3 !== z1 &&
z3 !== z2 &&
z3 !== z)
break;
}

while(1)
{

z4 = rndi(zmin, zmax);

if(z4 !== z1 &&
z4 !== z2 &&
z4 !== z3 &&
z4 !== z)
break;
}

}
*/


//------------------------------------------------------------------------------
function rndi0(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;;
}



//------------------------------------------------------------------------------
function rndi(min, max) {

return Math.floor(Math.random() * (max - min + 1) ) + min;;
}


//------------------------------------------------------------------------------
function coin(){ return rndi(1,2);}

//------------------------------------------------------------------------------
function gameover(){

isgameover = true;

let dddd = new Date();
let yy = dddd.getFullYear();
let mh = dddd.getMonth();
let dd = dddd.getDate();
let hhutc = dddd.getUTCHours();
let hh = 1;
let mm = dddd.getUTCMinutes();

let resumen = "";
let _tleft_ = tleft;
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

firma[0] = uname.length;firma[1] = R[1];firma[2] = R[0];
firma[3] = R[2];firma[4] = R[3];firma[5]=hh+mm;firma[6]=act+dd;;firma[7]=act+oks;


document.getElementById("questionpanel").style.display = "none";
document.getElementById("resumen").style.display = "block";
document.getElementById("resumenpanel").style.display = "block";
document.getElementById("restart").style.display = "block";


resumen +="Examen "+ act +" (ejercicios).<br>";
resumen +="Estudiante: "+uname+"<br>";
resumen +="Calificación: "+score+"<br>";
resumen +="Aciertos: "+oks+"<br>";
resumen +="Fecha: "+dd+"/"+mh+"/"+yy+"<br>";
resumen +="Hora: "+hh+":"+mm+"<br>";
resumen +="Tiempo restante: "+tleft+" segundos.<br>";
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
function loadData(){


symbols[1]="H<sub>2</sub>";PM[1]=2.02;
symbols[2]="H<sub>2</sub>O";PM[2]=18.02;
symbols[3]="O<sub>2</sub>";PM[3]=32;
symbols[4]="CO";PM[4]=28.01;
symbols[5]="CO<sub>2</sub>";PM[5]=44.01;

symbols[6]="CH<sub>4</sub>";PM[6]=16.05;
symbols[7]="C<sub>3</sub>H<sub>6</sub>";PM[7]=42.09;
symbols[8]="C<sub>2</sub>H<sub>6</sub>";PM[8]=30.08;
symbols[9]="C<sub>3</sub>H<sub>8</sub>";PM[9]=44.11;
symbols[10]="HCl";PM[10]=36.46;

symbols[11]="NaCl";PM[11]=58.44;
symbols[12]="NaOH";PM[12]=40.01;
symbols[13]="Cl<sub>2</sub>";PM[13]=70.9;
symbols[14]="F<sub>2</sub>";PM[14]=38;
symbols[15]="NH<sub>3</sub>";PM[15]=17.04;

}


/*
Sublimacion de hielo

Clausius-Clapeyron
°C y Pa
-2 525.21
-4 450.3
-6 385.19
-8 328.72
-10 279.85
-12 237.66
-14 201.33
-16 170.1
-18 143.34
-20 120.47


Experimental:
517.72
437.47
368.73
309.98
259.90

Goff-Gratch
2 517.2682768547807
4 437.0869204185433
6 368.39573103649263
8 309.69330770272626
10 259.6536404421213
12 217.1083500872249
14 181.03040294813567
16 150.51921202474915
18 124.78703852159687
20 103.14660976730875


*/