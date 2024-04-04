
// versión 1

var QTN;
var ANS;

var usrans;
var trueans;
var fkans = [];

var score;
var oks;
var fails;
var uni;
var negativos='yes';


// var symbols = [];
// var names = [];
// var PM = [];
//var is_molar_mass;
var z=0;
var zmin=1;
var zmax=15;
var zold=0;
//var z1,z2,z3,z4; //fakes


var act=10;
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
    
    if( rndi(1,100) <= 85 ){
        
        let prob = rndi(1,4); 
        if(prob===1) prob_rx_quim_calor_1();
        if(prob===2) prob_rx_quim_calor_2();
        if(prob===3) prob_epsilon();
        if(prob===4) prob_entropia();
        		
    }else{
        
        let prob = rndi(1,17);
        
		if( prob === 1){
			
			let prob2 = rndi(1,4);
			if(prob2===1) prob_conv_T();
			if(prob2===2) prob_conv_P();
			if(prob2===3) prob_conv_n(); 
			if(prob2===4) prob_P_abs();  
		}
			
        if(prob===2) prob_2a_ley_charles()
        if(prob===3) prob_ley_charles();
		if(prob===4) prob_ley_boyle();
        if(prob===5) prob_ley_avogadro();
		if(prob===6) prob_gas_ideal();	
		if(prob===7) prob_frac_molar();
		if(prob===8) prob_ley_Dalton();
		if(prob===9) prob_ley_Amagat();    
		if(prob===10) prob_Van_der_Waals();
		if(prob===11) prob_1a_ley();
        if(prob===12) prob_calor_isobarico();
        if(prob===13) prob_calor_isocorico();
        if(prob===14) prob_trabajo_isobarico();	
        if(prob===15) prob_trabajo_calor_isotermico();        
        if(prob===16) prob_trabajo_adiabatico();  
        if(prob===17) prob_Cp_Cv();	
        
    }
		
	document.getElementById("question").innerHTML = QTN;

	showAns();

}

//------------------------------------------------------------------------------
function prob_ley_charles(){
    
    let P,V,R,T,M,n,d,m,e;
    let w,q,dU,dH,dG,dS;
    let P1,P2,V1,V2,T1,T2,n1,n2;
    let GAS1;
    let opc = rndi(1,3);
    
    QTN = "";
    ANS = 1;

	if(opc===1){
		
		T1 = rndi(250,500); // K
		
		while(1){
            V1 = rndi(1,80); // L
			V2 = rndi(1,80);
			if(Math.abs(V1-V2)>10) break;
		}
		
		QTN = "Durante un proceso isobárico, el volumen de un gas cambia de "+V1+ " L a "+V2+" L. Si la temperatura inicial del gas era igual a "+T1+" K, estima la temperatura final del gas.<br><br>";
		
		T2 = V2*T1/V1;
		
		ANS = T2;
		uni = "K";
	}

	if(opc===2){
		
		V1 = rndi(1,50); // L
		while(1){
            T1 = rndi(250,500); // K
			T2 = rndi(250,500); // K
			if(Math.abs(T1-T2)>10) break;
		}
		
        QTN = "Durante un proceso isobárico, la temperatura de un gas cambia de "+T1+ " K a "+T2+" K. Si el volumen inicial del gas era igual a "+V1+" L, estima el volumen final del gas.<br><br>";		
		
		V2 = V1*T2/T1;
		
		ANS = V2;
		uni = "L";
	}

	if(opc===3){
		
		let opc2 = rndi(1,3);		
		
		T1 = rndi(250,500); // K

		if(opc2===1){
			QTN = "Durante un proceso isobárico, un gas disminuye su volumen a la mitad. Si la temperatura del gas al inicio del proceso es igual a "+T1+" K, estima la temperatura final del gas.<br><br>";		
			T2 = T1/2;			
		}
		
		if(opc2===2){
			QTN = "Durante un proceso isobárico, un gas duplica su volumen. Si la temperatura del gas al inicio del proceso es igual a "+T1+" K, estima la temperatura final del gas.<br><br>";		
			T2 = 2*T1;			
		}

		if(opc2===3){
			QTN = "Durante un proceso isobárico, un gas triplica su volumen. Si la temperatura del gas al inicio del proceso es igual a "+T1+" K, estima la temperatura final del gas.<br><br>";		
			T2 = 3*T1;			
		}
		
		ANS = T2;
		uni = "K";
	}           
}  
    
//------------------------------------------------------------------------------
function prob_ley_boyle(){
    
    let P,V,R,T,M,n,d,m,e;
    let w,q,dU,dH,dG,dS;
    let P1,P2,V1,V2,T1,T2,n1,n2;
    let GAS1;
    let opc = rndi(1,4);
    
    QTN = "";
    ANS = 1;

	if(opc===1){
		
		P1 = rndi(1,20); // atm
		
		while(1){
            V1 = rndi(1,100); // L
			V2 = rndi(1,100);
			if(Math.abs(V1-V2)>15) break;
		}
		
		QTN = "Durante un proceso isotérmico, el volumen de un gas cambia de "+V1+ " L a "+V2+" L. Si la presión inicial del gas era igual a "+P1+" atm, estima la presión final del gas.<br><br>";
		
		P2 = P1*(V1/V2);
		
		ANS = P2;
		uni = "atm";
	}

	if(opc===2){
		
		V1 = rndi(1,50); // L
		while(1){
            P1 = rndi(250,2*760); // mmHg
			P2 = rndi(250,2*760); // mmHg
			if(Math.abs(P1-P2)>250) break;
		}
		
        QTN = "Durante un proceso isotérmico, la presión de un gas cambia de "+P1+ " mmHg a "+P2+" mmHg. Si el volumen inicial del gas era igual a "+V1+" L, estima el volumen final del gas.<br><br>";		
		
		V2 = V1*(P1/P2);
		
		ANS = V2;
		uni = "L";
	}

	if(opc===3){
		
		let opc2 = rndi(1,3);		
		
		P1 = rndi(100,1000); // kPa

		if(opc2===1){
			QTN = "Durante un proceso isotérmico, un gas disminuye su volumen a la mitad. Si la presión del gas al inicio del proceso es igual a "+P1+" kPa, estima la presión final del gas.<br><br>";		
			P2 = 2*P1;			
		}
		
		if(opc2===2){
			QTN = "Durante un proceso isotérmico, un gas duplica su volumen. Si la presión del gas al inicio del proceso es igual a "+P1+" kPa, estima la presión final del gas.<br><br>";		
			P2 = P1/2;			
		}

		if(opc2===3){
			QTN = "Durante un proceso isotérmico, un gas triplica su volumen. Si la presión del gas al inicio del proceso es igual a "+P1+" kPa, estima la presión final del gas.<br><br>";		
			P2 = P1/3;			
		}
		
		ANS = P2;
		uni = "kPa";
	}    


	if(opc===4){
		
		let opc2 = rndi(1,3);		
		
		V1 = rndi(100,1000); // L

		if(opc2===1){
			QTN = "Durante un proceso isotérmico, un gas disminuye su presión a la mitad. Si volumen del gas al inicio del proceso es igual a "+V1+" L, estima el volumen final del gas.<br><br>";		
			V2 = 2*V1;			
		}
		
		if(opc2===2){
			QTN = "Durante un proceso isotérmico, un gas duplica su presión. Si el volumen del gas al inicio del proceso es igual a "+V1+" L, estima el volumen final del gas.<br><br>";		
			V2 = V1/2;			
		}

		if(opc2===3){
			QTN = "Durante un proceso isotérmico, un gas triplica su presión. Si el volumen del gas al inicio del proceso es igual a "+V1+" L, estima el volumen final del gas.<br><br>";		
			V2 = V1/3;			
		}
		
		ANS = V2;
		uni = "L";
	}   
        
} 

//------------------------------------------------------------------------------
function prob_2a_ley_charles(){
    
    let P,V,R,T,M,n,d,m,e;
    let w,q,dU,dH,dG,dS;
    let P1,P2,V1,V2,T1,T2,n1,n2;
    let GAS1;
    let opc = rndi(1,3);
    
    QTN = "";
    ANS = 1;

	if(opc===1){
		
		T1 = rndi(250,500); // K
		
		while(1){
            P1 = rndi(1,80); // atm
			P2 = rndi(1,80);
			if(Math.abs(P1-P2)>10) break;
		}
		
		QTN = "Durante un proceso isocórico, la presión de un gas cambia de "+P1+ " atm a "+P2+" atm. Si la temperatura inicial del gas era igual a "+T1+" K, estima la temperatura final del gas.<br><br>";
		
		T2 = T1*(P2/P1);
		
		ANS = T2;
		uni = "K";
	}

	if(opc===2){
		
		P1 = rndi(1,50); // atm
		while(1){
            T1 = rndi(250,500); // K
			T2 = rndi(250,500); // K
			if(Math.abs(T1-T2)>10) break;
		}
		
        QTN = "Durante un proceso isocórico, la temperatura de un gas cambia de "+T1+ " K a "+T2+" K. Si la presión inicial del gas era igual a "+P1+" atm, estima la presión final del gas.<br><br>";		
		
		P2 = P1*(T2/T1);
		
		ANS = P2;
		uni = "atm";
	}

	if(opc===3){
		
		let opc2 = rndi(1,3);		
		
		T1 = rndi(250,500); // K

		if(opc2===1){
			QTN = "Durante un proceso isocórico, un gas disminuye su presión a la mitad. Si la temperatura del gas al inicio del proceso es igual a "+T1+" K, estima la temperatura final del gas.<br><br>";		
			T2 = T1/2;			
		}
		
		if(opc2===2){
			QTN = "Durante un proceso isocórico, un gas duplica su presión. Si la temperatura del gas al inicio del proceso es igual a "+T1+" K, estima la temperatura final del gas.<br><br>";		
			T2 = 2*T1;			
		}

		if(opc2===3){
			QTN = "Durante un proceso isocórico, un gas triplica su presión. Si la temperatura del gas al inicio del proceso es igual a "+T1+" K, estima la temperatura final del gas.<br><br>";		
			T2 = 3*T1;			
		}
		
		ANS = T2;
		uni = "K";
	}           
}  

//------------------------------------------------------------------------------
function prob_ley_avogadro(){
    
    let P,V,R,T,M,n,d,m,e;
    let w,q,dU,dH,dG,dS;
    let P1,P2,V1,V2,T1,T2,n1,n2;
    let GAS1;
    let opc = rndi(1,2);
    
    QTN = "";
    ANS = 1;

	if(opc===1){
		
		V1 = rndi(1,100); // L
		
		while(1){
            n1 = rndi(1,20); // mol
			n2 = rndi(1,20);
			if(Math.abs(n1-n2)>4) break;
		}
		
		QTN = "A cierta temperatura y presión, "+n1+ " mol de gas ocupan un volumen igual a "+V1+" L. Calcula el volumen que ocuparán "+n2+" mol de gas a la misma temperatura y presión.<br><br>";
		
		V2 = V1*(n2/n1);
		
		ANS = V2;
		uni = "L";
	}

	if(opc===2){
		
		n1 = rndi(1,20); // mol
		
		while(1){
            V1 = rndi(1,100); // L
			V2 = rndi(1,100);
			if(Math.abs(V1-V2)>15) break;
		}
		
		QTN = "A cierta temperatura y presión, "+n1+ " mol de gas ocupan un volumen igual a "+V1+" L. Calcula la cantidad de sustancia necesaria para un volumen igual a "+V2+" L de gas a la misma temperatura y presión.<br><br>";
		
		n2 = n1*(V2/V1);
		
		ANS = n2;
		uni = "mol";
	}

}  



//------------------------------------------------------------------------------
function prob_gas_ideal(){

	let P,V,n,R,T,m,M,w,q,Cv,Cp,dU,dH,GAS;
    let P1,P2,V1,V2,T1,T2;
    let opc = rndi(1,8);
    let opc2 = rndi(2,10);
    
    if(opc2===1){ GAS = "H<sub>2</sub>"; M = 2*1.01; }
    if(opc2===2){ GAS = "N<sub>2</sub>"; M = 2*14.01; }
    if(opc2===3){ GAS = "O<sub>2</sub>"; M = 2*16.0; }
    if(opc2===4){ GAS = "CO";             M = 12.01+16.0; }
    if(opc2===5){ GAS = "CO<sub>2</sub>"; M = 12.01+2*16.0; }
    if(opc2===6){ GAS = "H<sub>2</sub>O"; M = 2*1.01+16.0; }
    if(opc2===7){ GAS = "CH<sub>4</sub>"; M = 12.01+4*1.01; }
    if(opc2===8) { GAS = "He"; M = 4.0; }
    if(opc2===9) { GAS = "Ne"; M = 20.18; }
    if(opc2===10){ GAS = "Ar"; M = 39.95; }
    
    
    if(opc===1){        
        while(1){        
            R = 0.08206;
            n = rndi(1,10);
            T = rndi(-100,400); //°C
            P = rndi(1,20); //atm            
            V = n*R*(T+273.15)/P;   
            if(V >= 4) break;
        }
        
        QTN = "Calcula el volumen de "+n+" mol de gas ideal a "+P+" atm y "+T+" °C.";
        
        ANS = V;
        uni = "L";        
    }

    if(opc===2){        
        while(1){        
            R = 8.314; //Pa m3 / mol K
            m = rndi(10,1000)*10; //gramos
            n = m/M; //mol
            T = rndi(150,800); //K
            P = rndi(1,100); //kPa   
            V = n*R*T/(1000*P); //m3   
            if(V >= 1 && n>= 1) break;
        }
        
        QTN = "Suponiendo que el "+GAS+" se comporta como un gas ideal, calcula el volumen de "+m+" gramos de "+GAS+" a "+P+" kPa y "+T+" K.";
        
        ANS = V;
        uni = "m<sup>3</sup>";        
    }

    if(opc===3){        
        while(1){        
            R = 0.08206;
            n = rndi(1,10);
            T = rndi(-100,400); //°C
            V = rndi(1,50); //L
            P = n*R*(T+273.15)/V;   
            if(P >= 1) break;
        }
        
        QTN = "Calcula la presión que ejercen "+n+" mol de gas ideal a "+T+" °C en un contenedor de "+V+" L.";
        
        ANS = P;
        uni = "atm";        
    }

    if(opc===4){        
        while(1){        
            R = 8.314; //Pa m3 / mol K
            m = rndi(10,1000)*10; //gramos
            n = m/M; //mol
            T = rndi(150,800); //K
            V = rndi(1,100); //m3   
            P = ( n*R*T/V )/1000; // kPa
            if(P >= 1 && n>= 1) break;
        }
        
        QTN = "Suponiendo que el "+GAS+" se comporta como un gas ideal, calcula la presión que ejercen "+m+" gramos de "+GAS+" a "+T+" K en un contenedor de "+V+" m<sup>3</sup>.";
        
        ANS = P;
        uni = "kPa";        
    }

    if(opc===5){        
        while(1){        
            R = 0.08206;
            n = rndi(10,100);
            V = rndi(1,50); //L
            P = rndi(1,10); //atm   
            T = P*V/(n*R);    
            T = T - 273.15;            
            if(T >= -50) break;
        }
                
        QTN = "Calcula la temperatura de "+n+" mol de gas ideal a "+P+" atm en un contenedor de "+V+" L.";
                
        ANS = T;
        uni = "°C";        
    }

    if(opc===6){        
        while(1){        
            R = 8.314; //Pa m3 / mol K
            m = rndi(10,100)*10; //gramos
            n = m/M; //mol
            P = rndi(1,200); //kPa
            V = rndi(1,10); //m3   
            T = 1000*P*V/(n*R);
            if(T >= 200 && T<= 800&&n>= 1) break;
        }
        
        QTN = "Suponiendo que el "+GAS+" se comporta como un gas ideal, calcula la temperatura de "+m+" gramos de "+GAS+" a "+P+" kPa en un contenedor de "+V+" m<sup>3</sup>.";
        
        ANS = T;
        uni = "K";        
    }

    if(opc===7){        
        while(1){        
            R = 0.08206;
            d = rndi(1,100); // g/L
            P = rndi(100,760*2) // mmHg
            T = rndi(15,30); // °C            
            M = ( d*R*(T+273.15) )/( P*(1/760) );
            if(M >= 1 && M <= 300) break;
        }
        
        QTN = "La densidad de un gas desconocido es igual a "+d+" g/L a "+T+" °C y "+P+" mmHg. Estima la masa molar del gas (suponiendo un comportamiento ideal).";
        
        ANS = M;
        uni = "g/mol";        
    }

    if(opc===8){        
       while(1){        
            R = 0.08206;
            P = rndi(1,10)*760 // mmHg
            T = rndi(-100,15); // °C   
            d = (P/760)*M/(R*(T+273.15));
           if(d >= 1) break;
       }
        
        QTN = "Suponiendo que el "+GAS+" se comporta como un gas ideal, estima su densidad a "+T+" °C y "+P+" mmHg.";
        
        ANS = d;
        uni = "g/L";        
    }

    
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
function prob_P_abs(){
    
    let Pabs, Pmano, Patm;
    let opc = rndi(1,2);
    
    QTN = "";
    ANS = 1;


    // manometro tubo U cerrado.
	if(opc===1){
		
		Pmano = rndi(10,720); // mmHg
        Patm = rndi(740,760); // mmHg
		Pabs = Pmano;
		
		QTN = "Se desea medir la presión absoluta de un gas confinado. La lectura del manómetro de tubo en U (cerrado) es igual a "+Pmano+ " mmHg. La lectura del barómetro es igual a "+Patm+" mmHg. Calcula la presión absoluta del gas confinado.<br><br>";
		
		ANS = Pabs;
		uni = "mmHg";
	}

    // manometro tubo U abierto.
	if(opc===2){
		
        while(1){
            Pmano = rndi(300,2*760); // mmHg
            Patm = rndi(740,760); // mmHg
            Pabs = Pmano + Patm;            
            if(Pabs > Patm) break;
        }

		
		QTN = "Se desea medir la presión absoluta de un gas confinado. La lectura del manómetro de tubo en U (abierto) es igual a "+Pmano+ " mmHg. La lectura del barómetro es igual a "+Patm+" mmHg. Calcula la presión absoluta del gas confinado.<br><br>";
		
		Pabs = Pmano + Patm;
		
		ANS = Pabs;
		uni = "mmHg";
	}    



    
}



//------------------------------------------------------------------------------
function prob_frac_molar(){

	//Fracción molar
	    
    let M=[];
    let GAS=[];
    let gas_A,gas_B,gas_C;
    let m_A, m_B, m_C;
    let n_A, n_B, n_C, n_total;
    let X_A, X_B, X_C;
    
    GAS[1] = "N<sub>2</sub>"; M[1] = 28.02;
    GAS[2] = "O<sub>2</sub>"; M[2] = 32.0;
    GAS[3] = "Ne";            M[3] = 20.18;
    GAS[4] = "Ar";            M[4] = 39.95;
    GAS[5] = "CO";            M[5] = 28.01;
    GAS[6] = "CO<sub>2</sub>"; M[6] = 44.01;
    GAS[7] = "CH<sub>4</sub>"; M[7] = 16.05;
    
	let op = rndi(1,2);

	if(op===1){      
        
        while(1){
            gas_A = rndi(1,7);
            gas_B = rndi(1,7);
            if(gas_A !== gas_B) break;
        }
		
		while(1){
			m_A = rndi(1,10)*10; // gramos
			m_B = rndi(1,10)*10; // gramos
			
			n_A = m_A/M[gas_A];
			n_B = m_B/M[gas_B];
			
			n_total = n_A + n_B;
			
			X_A = n_A/n_total;
			X_B = n_B/n_total;           
			
			if(X_A >= 0.1 && X_B >= 0.1) break;
		}
		
		// console.log("X_A: ", X_A);
        // console.log("X_B: ", X_B);
		
        QTN = "Se mezclan "+m_A+" g de "+GAS[gas_A]+" y "+m_B+" g de "+GAS[gas_B]+". <br>Calcular la fracción molar de "+GAS[gas_A]+".<br><br>";		
        ANS = X_A; uni = "";
	}
	
	if(op===2){       

        while(1){
            gas_A = rndi(1,7);
            gas_B = rndi(1,7);
            gas_C = rndi(1,7);
            if(gas_A !== gas_B && gas_A !== gas_C && gas_B !==gas_C) break;
        }
		
		while(1){
			X_A = rndi(20,85)/100;
			X_B = rndi(20,85)/100;
			if((X_A+X_B)<0.8) break;
		}
		
		X_C = 1 - X_A - X_B;
				
		X_A = round2(X_A);
		X_B = round2(X_B);
		X_C = round2(X_C);

		// console.log("X_A: ", X_A);
        // console.log("X_B: ", X_B);
		// console.log("X_C: ", X_C);       
		// console.log("SUMA: ",X_A+X_B+X_C);
		
        QTN = "Una mezcla de gases se compone de "+GAS[gas_A]+", "+GAS[gas_B]+" y "+GAS[gas_C]+". La fracción molar del "+GAS[gas_A]+" y del "+GAS[gas_B]+" es igual a "+X_A+" y "+X_B+", respectivamente. Calcula la fracción molar del "+GAS[gas_C]+".<br>"
        ANS = X_C; uni = "";

	}

}


//------------------------------------------------------------------------------
function prob_ley_Dalton(){

	//Ley de Dalton

    let M=[];
    let GAS=[];
    let gas_A,gas_B,gas_C;
    let m_A, m_B, m_C;
    let n_A, n_B, n_C, n_total;
    let X_A, X_B, X_C;
    let P_A, P_B, P_C, P_total;    
    
    GAS[1] = "N<sub>2</sub>"; M[1] = 28.02;
    GAS[2] = "O<sub>2</sub>"; M[2] = 32.0;
    GAS[3] = "Ne";            M[3] = 20.18;
    GAS[4] = "Ar";            M[4] = 39.95;
    GAS[5] = "CO";            M[5] = 28.01;
    GAS[6] = "CO<sub>2</sub>"; M[6] = 44.01;
    GAS[7] = "CH<sub>4</sub>"; M[7] = 16.05;
	
    let op = rndi(1,5);
    
	if(op===1){
		
		let T = rndi(5,150); // °C
		let V = rndi(20,80); // L
		let R = 0.08206;

        while(1){
            gas_A = rndi(1,7);
            gas_B = rndi(1,7);
            if(gas_A !== gas_B) break;
        }
		
        while(1){
            n_A = rndi(1,8);
            n_B = rndi(1,8);
            if(n_A !== n_B) break;
        }		
        
		QTN = "Se mezclan (a "+T+" °C) "+n_A+" mol de "+GAS[gas_A]+" y "+n_B+" mol de "+GAS[gas_B]+" en un recipiente rígido de "+V+" L. Suponiedo que los gases se comportan idealmente,  estima la presión total de la mezcla.";
		
		P_A = n_A*R*(T+273.15)/V; //atm
		P_B = n_B*R*(T+273.15)/V; //atm
		
		P_total = P_A + P_B;
		
		ANS = P_total; uni = " atm";
		
	}    

	if(op===2){
		
		let T = rndi(300,400); //K
		let V = rndi(20,80); //L
		let R = 0.08206;

        while(1){
            gas_A = rndi(1,7);
            gas_B = rndi(1,7);
            if(gas_A !== gas_B) break;
        }
		
        
        m_A = rndi(1,20)*10; // gramos
        m_B = rndi(1,20)*10; // gramos
        
        n_A = m_A/M[gas_A];
        n_B = m_B/M[gas_B];

        P_A = n_A*R*T/V; //atm
        P_B = n_B*R*T/V; //atm
        
        P_total = P_A + P_B;
        
        
		
		QTN = "Se mezclan (a "+T+" K) "+m_A+" g de "+GAS[gas_A]+" y "+m_B+" g de "+GAS[gas_B]+" en un recipiente rígido de "+V+" L. Suponiedo que los gases se comportan idealmente, estima la presión total de la mezcla.";
				
		ANS = P_total; uni = " atm";
		
	}


	if(op===3){
		
        while(1){
            gas_A = rndi(1,7);
            gas_B = rndi(1,7);
            if(gas_A !== gas_B) break;
        }
		
		X_A = rndi(10,90)/100;
		X_B = 1 - X_A;

        P_total = rndi(200,760*2); //mmHg
        
		QTN = "Se mezclan (a temperatura y volumen constantes) los siguientes gases: "+GAS[gas_A]+" y "+GAS[gas_B]+". La presión total de la mezcla es igual a "+P_total+" mmHg. Si la fracción molar del "+GAS[gas_A]+" es igual a "+X_A+", estima la presión parcial del "+GAS[gas_B]+" considerando un comportamiento de gas ideal.";
		
        P_B = X_B * P_total;
		
		ANS = P_B; uni = " mmHg";
		
	}   


	if(op===4){		

        while(1){
            gas_A = rndi(1,7);
            gas_B = rndi(1,7);
            if(gas_A !== gas_B) break;
        }
		
        while(1){
            n_A = rndi(1,10);
            n_B = rndi(1,10);
            if(n_A !== n_B) break;
        }		
        
        X_A = n_A/(n_A + n_B);
        
        P_total = rndi(200,760*3); //mmHg
        
		QTN = "Se mezclan (a temperatura y volumen constantes) "+n_A+" mol de "+GAS[gas_A]+" y "+n_B+" mol de "+GAS[gas_B]+". La presión total de la mezcla de los dos gases es igual a "+P_total+" mmHg. Estima la presión parcial del "+GAS[gas_A]+" considerando un comportamiento de gas ideal.";
		
		P_A = X_A * P_total;
		
		ANS = P_A; uni = " mmHg";
		
	} 


	if(op===5){		

        while(1){
            gas_A = rndi(1,7);
            gas_B = rndi(1,7);
            if(gas_A !== gas_B) break;
        }
		
        m_A = rndi(1,20)*10; // gramos
        m_B = rndi(1,20)*10; // gramos
        
        n_A = m_A/M[gas_A];
        n_B = m_B/M[gas_B];		
        
        X_A = n_A/(n_A + n_B);
        
        P_total = rndi(200,760*3); //mmHg
        
		QTN = "Se mezclan (a temperatura y volumen constantes) "+m_A+" g de "+GAS[gas_A]+" y "+m_B+" g de "+GAS[gas_B]+". La presión total de la mezcla de los dos gases es igual a "+P_total+" mmHg. Estima la presión parcial del "+GAS[gas_A]+" considerando un comportamiento de gas ideal.";
		
		P_A = X_A * P_total;
		
		ANS = P_A; uni = " mmHg";
		
	} 

}

//------------------------------------------------------------------------------
function prob_ley_Amagat(){

	//Ley de Amagat

    let M=[];
    let GAS=[];
    let gas_A,gas_B,gas_C;
    let m_A, m_B, m_C;
    let n_A, n_B, n_C, n_total;
    let X_A, X_B, X_C;
    let V_A, V_B, V_C, V_total;    
    
    GAS[1] = "N<sub>2</sub>"; M[1] = 28.02;
    GAS[2] = "O<sub>2</sub>"; M[2] = 32.0;
    GAS[3] = "Ne";            M[3] = 20.18;
    GAS[4] = "Ar";            M[4] = 39.95;
    GAS[5] = "CO";            M[5] = 28.01;
    GAS[6] = "CO<sub>2</sub>"; M[6] = 44.01;
    GAS[7] = "CH<sub>4</sub>"; M[7] = 16.05;
	
    let op = rndi(1,5);
    
	if(op===1){
		
		let T = rndi(5,150); // °C
		let P = rndi(1,10); // atm
		let R = 0.08206;

        while(1){
            gas_A = rndi(1,7);
            gas_B = rndi(1,7);
            if(gas_A !== gas_B) break;
        }
		
        while(1){
            n_A = rndi(1,8);
            n_B = rndi(1,8);
            if(n_A !== n_B) break;
        }		
        
		QTN = "Se mezclan (a "+T+" °C) "+n_A+" mol de "+GAS[gas_A]+" y "+n_B+" mol de "+GAS[gas_B]+". La presión de la mezcla de gases es igual a "+P+" atm. Suponiedo que los gases se comportan idealmente,  estima el volumen total de la mezcla.";
		
		V_A = n_A*R*(T+273.15)/P; // L
		V_B = n_B*R*(T+273.15)/P; // L
		
		V_total = V_A + V_B;
		
		ANS = V_total; uni = " L";
		
	}    

	if(op===2){
		
		let T = rndi(300,400); //K
		let P = rndi(1,10); // atm
		let R = 0.08206;

        while(1){
            gas_A = rndi(1,7);
            gas_B = rndi(1,7);
            if(gas_A !== gas_B) break;
        }
		
        
        m_A = rndi(1,20)*10; // gramos
        m_B = rndi(1,20)*10; // gramos
        
        n_A = m_A/M[gas_A];
        n_B = m_B/M[gas_B];

        V_A = n_A*R*T/P; // L
        V_B = n_B*R*T/P; // L
        
        V_total = V_A + V_B;               
		
		QTN = "Se mezclan (a "+T+" K) "+m_A+" g de "+GAS[gas_A]+" y "+m_B+" g de "+GAS[gas_B]+". La presión de la mezcla de gases es igual a "+P+" atm. Suponiedo que los gases se comportan idealmente,  estima el volumen total de la mezcla.";
				
		ANS = V_total; uni = " L";
		
	}


	if(op===3){
		
        while(1){
            gas_A = rndi(1,7);
            gas_B = rndi(1,7);
            if(gas_A !== gas_B) break;
        }
		
		X_A = rndi(10,90)/100;
		X_B = 1 - X_A;

        V_total = rndi(10,1000); // L
        
		QTN = "Se mezclan (a temperatura y presión constantes) los siguientes gases: "+GAS[gas_A]+" y "+GAS[gas_B]+". El volumen total de la mezcla es igual a "+V_total+" L. Si la fracción molar del "+GAS[gas_A]+" es igual a "+X_A+", estima el volumen parcial del "+GAS[gas_B]+" considerando un comportamiento de gas ideal.";
		
        V_B = X_B * V_total;
		
		ANS = V_B; uni = " L";
		
	}   


	if(op===4){

        while(1){
            gas_A = rndi(1,7);
            gas_B = rndi(1,7);
            if(gas_A !== gas_B) break;
        }
		
        while(1){
            n_A = rndi(1,10);
            n_B = rndi(1,10);
            if(n_A !== n_B) break;
        }		
        
        X_A = n_A/(n_A + n_B);
        
        V_total = rndi(10,1000); // L
        
		QTN = "Se mezclan (a temperatura y presión constantes) "+n_A+" mol de "+GAS[gas_A]+" y "+n_B+" mol de "+GAS[gas_B]+". El volumen de la mezcla de los dos gases es igual a "+V_total+" L. Estima el volumen parcial del "+GAS[gas_A]+" considerando un comportamiento de gas ideal.";
		
        V_A = X_A * V_total;
		
		ANS = V_A; uni = " L";
		
	} 


	if(op===5){		

        while(1){
            gas_A = rndi(1,7);
            gas_B = rndi(1,7);
            if(gas_A !== gas_B) break;
        }
		
        m_A = rndi(1,20)*10; // gramos
        m_B = rndi(1,20)*10; // gramos
        
        n_A = m_A/M[gas_A];
        n_B = m_B/M[gas_B];		
        
        X_A = n_A/(n_A + n_B);
        
        V_total = rndi(10,1000); // L
        
		QTN = "Se mezclan (a temperatura y presión constantes) "+m_A+" g de "+GAS[gas_A]+" y "+m_B+" g de "+GAS[gas_B]+". El volumen de la mezcla de los dos gases es igual a "+V_total+" L. Estima el volumen parcial del "+GAS[gas_A]+" considerando un comportamiento de gas ideal.";
		
        V_A = X_A * V_total;
		
		ANS = V_A; uni = " L";
		
	} 

}

//------------------------------------------------------------------------------
function prob_Z(){
    
    // PV = ZnRT

	let P, V, n, R, T, Z;
    let Vmi, Vm;

    let op = rndi(1,2);

	if(op===1){
        
        T = rndi(10,500); //°C
        P = rndi(1,10); //atm
        R = 0.08206;        
        
        if(coin()===1)
            Z = rndi(50,90)/100.0;
        else
            Z = rndi(110,180)/100.0;
        
        Vmi = 1*R*(T+273.15)/P;  
        Vm = Z*Vmi;
		
		QTN = "A "+T+" °C y "+P+" atm, el volumen molar de un gas real es igual a "+round2(Vm)+" L/mol. Calcula el factor de compresibilidad del gas.";
		
		ANS = Z;
		uni = "";
	}

	if(op===2){
        
        T = rndi(10,500); //°C
        P = rndi(1,10); //atm
        R = 0.08206;        
        
        if(coin()===1)
            Z = rndi(50,90)/100.0;
        else
            Z = rndi(110,180)/100.0;
        
        Vmi = 1*R*(T+273.15)/P;  
        Vm = Z*Vmi;
		
        QTN = "A "+T+" °C y "+P+" atm, el factor de compresibilidad de cierto gas real es "+Z+"; "+
              "calcula el volumen molar del gas en las condiciones mencionadas.";
		
		ANS = Vm;
		uni = " L";
	}
    
}

//------------------------------------------------------------------------------
function prob_Van_der_Waals(){

	
	    
    let V, V_, P, P_, T, R, n;
    let UnGas, aa, bb;
    
    let chooseGas = rndi(1,6);
    
    if(chooseGas===1){ UnGas = "N<sub>2</sub>";  aa = 1.39;  bb = 0.0391; }
    if(chooseGas===2){ UnGas = "CO<sub>2</sub>"; aa = 3.59;  bb = 0.0427; }
    if(chooseGas===3){ UnGas = "CH<sub>4</sub>"; aa = 2.25;  bb = 0.0428; }
    if(chooseGas===4){ UnGas = "O<sub>2</sub>";  aa = 1.36;  bb = 0.0318; }
    if(chooseGas===5){ UnGas = "Ar";             aa = 1.34;  bb = 0.0322; }
    if(chooseGas===6){ UnGas = "Ne";             aa = 0.211; bb = 0.0171; }

    let op = rndi(1,2);

	if(op===1){
        
        T = rndi(300,800); //K
        n = rndi(1,10); //mol
        V = rndi(5,50); //L
        R = 0.08206;
        
        V_ = n*bb;
        P_ = aa*(n*n)/(V*V);
        
        P = (n*R*T)/(V - V_) - P_;
		
        QTN = "Mediante la ecuación de van der Waals "+
              "(a = "+aa+" atm L<sup>2</sup>/mol<sup>2</sup>, b  = "+bb+"L/mol) "+
              "calcula la presión de "+n+" mol de "+UnGas+
              " a "+T+" K dentro de un recipiente de "+V+" L.";

        ANS = P; uni = " atm";
	}

	if(op===2){
        
        
        while(1){
                        
            P = rndi(1,10); //atm
            n = rndi(1,10); //mol
            V = rndi(50,100); //L
            R = 0.08206;
            
            V_ = n*bb;
            P_ = aa*(n*n)/(V*V);
            
            T = (P + P_)*(V - V_)/(n*R);
            
            if(T <= 1000) break;
            
        }
		
        QTN = "Mediante la ecuación de van der Waals "+
              "(a = "+aa+" atm L<sup>2</sup>/mol<sup>2</sup>, b  = "+bb+"L/mol) "+
              "calcula la temperatura de "+n+" mol de "+UnGas+
              " a "+P+" atm dentro de un recipiente de "+V+" L.";

        ANS = T; uni = " K";
	}
}


//------------------------------------------------------------------------------
function prob_1a_ley(){
    
    let op = rndi(1,8);
    
    let w, q, dU;

    if(op===1) // expansion
    {
        
        while(1){
            w = rndi(10,90); //kJ
            q = rndi(2,4)*w; //kJ
            dU = q + (-w);
            if(dU%2 === 0) break;
        }
                
        QTN  = "Un gas ideal absorbe "+q+" kJ en forma de calor. ";
        QTN += "Debido a esto, el gas se expande y realiza "+w+" kJ de trabajo. ";
        QTN += "Calcula el cambio en la energía interna del gas.";

        
        
        ANS = dU; uni=" kJ";

    }

    if(op===2) // compresion
    {
        while(1){
            w = rndi(10,90); //kJ
            q = rndi(2,4)*w; //kJ
            dU = w + (-q);
            if(dU%2 === 0) break;
        }
                
        QTN  = "Los alrededores realizan "+w+" kJ de trabajo sobre un gas ideal. ";
        QTN += "Debido a esto, el gas se comprime y libera "+q+" kJ en forma de calor. ";
        QTN += "Calcula el cambio en la energía interna del gas.";            
                       
        ANS = dU; uni=" kJ";
        
    }


    if(op===3) // expansion
    {
        
        while(1){
            w = rndi(10,90); //kJ
            dU = 0
            q = dU - (-w); //kJ
            if(q%2===0) break;
        }
                
        QTN  = "Un gas ideal se expande manteniendo su energía interna constante. ";
        QTN += "El trabajo asociado al proceso es igual a "+w+" kJ. ";
        QTN += "Calcula cuánto calor absorbe el gas.";        

        ANS = q; uni=" kJ";
        
    }


    if(op===4) // compresión
    {
        
        while(1){
            w = rndi(10,90); //kJ
            dU = 0
            q = dU - w; //kJ
            if(q%2 === 0) break;
            
        }
        
        QTN  = "Un gas ideal se comprime manteniendo su energía interna constante. ";
        QTN += "El trabajo asociado al proceso es igual a "+w+" kJ. ";
        QTN += "Calcula cuánto calor pierde el gas.";      
                
        ANS = q; uni=" kJ";
        
    }    

    if(op===5) // expansión
    {
        
        while(1){
            dU = rndi(100, 250);        
            q =  rndi(300, 500);        
            w = dU - q;   
            
            if(w%2 === 0) break;
        }
        
        QTN  = "Un gas ideal se expande al recibir "+q+" kJ en forma de calor. ";
        QTN += "Calcula la cantidad trabajo que debe realizar el gas ";
        QTN += "para que el cambio en su energía interna sea igual a "+dU+" kJ.";    
        
		ANS = w; uni=" kJ";
        
        
    }    

    if(op===6) // compresion
    {
        
        while(1){
            dU = rndi(300, 500);        
            q =  rndi(100, 250);        
            w = dU - (-q);    
            if(w%2 === 0) break;
        }
        
        QTN  = "Un gas ideal se comprime liberando "+q+" kJ en forma de calor. ";
        QTN += "Calcula la cantidad de trabajo que debe realizar el gas ";
        QTN += "para que el cambio en su energía interna sea igual a "+dU+" kJ.";    
        
		ANS = w; uni=" kJ";
        
    }

    if(op===7) // expansión
    {
        while(1){
            dU = rndi(300, 500);        
            w =  rndi(100, 250);        
            q = dU - (-w);  
            if(q%2===0) break;
        }
        
        QTN  = "Un gas ideal se expande realizando "+w+" kJ de trabajo. ";
        QTN += "El cambio en la energía interna es igual a "+dU+" kJ. ";    
        QTN += "Calcula la cantidad de calor que absorbió el gas.";
        
		ANS = q; uni=" kJ";
        
        
    }  

    if(op===8) // compresión
    {
        while(1){
            dU = -rndi(300, 500);        
            w =  rndi(100, 250); // w > 0        
            q = dU - w;  // q < 0
            if(q%2===0) break;
        }
        
        QTN  = "Los alrededores realizan "+w+" kJ de trabajo para comprimir un gas ideal. ";
        QTN += "El cambio en la energía interna del gas es igual a "+dU+" kJ. ";    
        QTN += "Calcula la cantidad de calor que perdió el gas.";
        
		ANS = q; uni=" kJ";
        
        
    } 

}

//------------------------------------------------------------------------------
function prob_Cp_Cv(){
    
    let op = rndi(1,2);
    
    let Cp, Cv, dU, dH, T2, T1, dT, n, R, T;
    
    R = 8.314; // J / mol K
    
    
    if( op === 1 ){
        
        T = rndi(5, 50);
        
        let op2 = rndi(1,7);
        
        if( op2 === 1 ){ GAS = "H<sub>2</sub>"; Cp = (7/2)*R; }
        if( op2 === 2 ){ GAS = "N<sub>2</sub>"; Cp = (7/2)*R; }
        if( op2 === 3 ){ GAS = "O<sub>2</sub>"; Cp = (7/2)*R; }
        if( op2 === 4 ){ GAS = "CO";            Cp = (7/2)*R; }
        
        if( op2 === 5 ){ GAS = "He";            Cp = (5/2)*R; }        
        if( op2 === 6 ){ GAS = "Ar";            Cp = (5/2)*R; }
        if( op2 === 7 ){ GAS = "Ne";            Cp = (5/2)*R; }
                          
        QTN  = "Estima la capacidad calorífica (a presión constante) de 1 mol del gas "+GAS;
        QTN += " a "+T+" °C considerando un comportamiento ideal.";

        ANS = Cp; uni=" J / K";        
        
    }

    if( op === 2 ){
        
        T = rndi(5, 50);
        
        let op2 = rndi(1,7);
        
        if( op2 === 1 ){ GAS = "H<sub>2</sub>"; Cv = (5/2)*R; }
        if( op2 === 2 ){ GAS = "N<sub>2</sub>"; Cv = (5/2)*R; }
        if( op2 === 3 ){ GAS = "O<sub>2</sub>"; Cv = (5/2)*R; }
        if( op2 === 4 ){ GAS = "CO";            Cv = (5/2)*R; }
        
        if( op2 === 5 ){ GAS = "He";            Cv = (3/2)*R; }        
        if( op2 === 6 ){ GAS = "Ar";            Cv = (3/2)*R; }
        if( op2 === 7 ){ GAS = "Ne";            Cv = (3/2)*R; }
                          
        QTN  = "Estima la capacidad calorífica (a volumen constante) de 1 mol del gas "+GAS;
        QTN += " a "+T+" °C considerando un comportamiento ideal.";

        ANS = Cv; uni=" J / K";        
        
    }       
    
}


//------------------------------------------------------------------------------
function prob_calor_isobarico(){
    
    let q_p, C_p, n, R, T1, T2, dT, P, V1, V2;
    
    R = 8.314;
    
    let op = rndi(1,2);
    
    if( op === 1 ){
        
            
        n = 1; //rndi(2,10);
        P = rndi(100,500); //kPa
        
        C_p = (5/2)*n*R;
        
        T1 = rndi( 5, 25);
        T2 = rndi(40, 80);
        
        q_p = C_p * (T2 - T1);
            
        
        if( coin() === 1 ){        
            QTN  = n+" mol de gas ideal monoatómico se calienta desde "+T1+" °C hasta "+T2+" °C, manteniendo la presión constante.";
            QTN += " Calcula la cantidad de calor que absorbió el gas.";
            
        }else{
            QTN  = n+" mol de gas ideal monoatómico se calienta desde "+T1+" °C hasta "+T2+" °C, manteniendo la presión constante.";
            QTN += " Calcula el cambio de entalpía del gas.";  
        }
                       
        ANS = q_p; uni = " J"                
        
    }

    if( op === 2 ){
        
        while(1){
            
            console.log('calor isobárico, 2');
            
            n = 1;
            P = rndi(10,50); //kPa            
            C_p = (5/2)*n*R;
            
            V1 = rndi( 1, 10);
            V2 = rndi(15, 20);            
            q_p = ( C_p*P*1000/(n*R) )*(V2 - V1);
            q_p = q_p/1000;
            
            if ( q_p%2 === 0 || q_p%5 === 0 ) break;
            
        }
        
        if( coin() === 1 ){        
            QTN  = n+" mol de gas ideal monoatómico se somete a un proceso isobárico ("+P+" kPa). El volumen del gas cambia desde "+V1+" m<sup>3</sup> hasta "+V2+" m<sup>3</sup>.";
            QTN += " Calcula la cantidad de calor que absorbió el gas.";
            
        }else{
            QTN  = n+" mol de gas ideal monoatómico se somete a un proceso isobárico ("+P+" kPa). El volumen del gas cambia desde "+V1+" m<sup>3</sup> hasta "+V2+" m<sup>3</sup>.";
            QTN += " Calcula el cambio de entalpía del gas.";
        }             
        
        ANS = q_p; uni = " kJ"                
        
    }    
    
}

//------------------------------------------------------------------------------
function prob_calor_isocorico(){
    
    let q_v, C_v, n, R, P1, P2, V, T1, T2;
    
    R = 8.314;
    
    let op = rndi(1,2);
    
    if( op === 1 ){
        
            
        n = 1; //rndi(2,10);
        
        C_v = (3/2)*n*R;
        
        T1 = rndi( 5, 25);
        T2 = rndi(40, 80);
        
        q_v = C_v * (T2 - T1);
            
        
        if( coin() === 1 ){        
            QTN  = n+" mol de gas ideal monoatómico se calientan desde "+T1+" °C hasta "+T2+" °C, manteniendo el volumen constante.";
            QTN += " Calcula la cantidad de calor que absorbió el gas.";
            
        }else{
            QTN  = n+" mol de gas ideal monoatómico se calientan desde "+T1+" °C hasta "+T2+" °C, manteniendo el volumen constante.";
            QTN += " Calcula el cambio de la energía interna del gas.";  
        }
                       
        ANS = q_v; uni = " J"                
        
    }

    if( op === 2 ){       
            
        console.log('calor isocórico, 2');
        
        n = 1;
        V = rndi(10,50); // m3
        C_v = (3/2)*n*R;
        
        P1 = rndi( 10, 100);
        P2 = rndi(150, 200); //kPa
        
        q_v = ( C_v*V/(n*R) )*(P2*1000 - P1*1000);
        
        q_v = q_v/1000;            
        
        if( coin() === 1 ){        
            QTN  = n+" mol de gas ideal monoatómico se somete a un proceso isocórico ("+V+" m<sup>3</sup>). La presión del gas cambia desde "+P1+" kPa hasta "+P2+" kPa.";
            QTN += " Calcula la cantidad de calor que absorbió el gas.";
            
        }else{
            QTN  = n+" mol de gas ideal monoatómico se somete a un proceso isocórico ("+V+" m<sup>3</sup>). La presión del gas cambia desde "+P1+" kPa hasta "+P2+" kPa.";
            QTN += " Calcula el cambio de la energía interna del gas.";
        }             
        
        ANS = q_v; uni = " kJ"                
        
    }  

}    

//------------------------------------------------------------------------------
function prob_trabajo_isobarico(){
    
    let P, V1, V2, T1, T2, R, n;
    
    let op = rndi(1,2);
    
    if( op === 1 ){
        
        P = rndi(10,100)*10; // kPa
        
        while(1){
            V1 = rndi(1,20); // m3
            V2 = rndi(1,20); // m3
            if( Math.abs(V2 - V1) > 0 ) break;
        }
        
        w = -P*(V2 - V1);
        
        QTN  = "Un gas ideal se somete a un proceso isobárico ("+P+" kPa). ";
        QTN += "El volumen del gas cambia desde "+V1+" m<sup>3</sup> hasta "+V2+" m<sup>3</sup>. ";
        QTN += "Calcula el trabajo PV asociado al gas. ";
        
        ANS = w; uni = " kJ";
        
    }
    
    if( op === 2 ){
        
        n = rndi(2,10);
        R = 8.314;
        
        while(1){
            T1 = rndi(5, 80);
            T2 = rndi(5, 80);
            if( Math.abs(T2 - T1) > 10 ) break;
        }
        
        w = -n*R*(T2 - T1);

        QTN  = n+" mol de gas ideal se someten a un proceso isobárico. ";
        QTN += "La temperatura del gas cambia desde "+T1+" °C hasta "+T2+" °C. ";
        QTN += "Calcula el trabajo PV. ";
        
        ANS = w; uni = " J";        
        
    }
}


//----------------------------------------------------- PROCESO ISOTERMICO
function prob_trabajo_calor_isotermico(){
	
	let P1, P2;
	let V1, V2;
	let q, w;
	let T;
    let NAME, ans;

    let op = rndi(1,8);

    if(op===1)
    {
        while(1)
        {
            V1 = rndi(1,20)*100.0; //L
            V2 = rndi(1,20)*100.0; //L
            if(Math.abs(V2-V1)>=300) break;
        }

        T = rndi(25,400); //°C
        R = 8.314; 
        w = -1*R*(T+273.15)*Math.log(V2/V1); //J
		w = w/1000.0; //J -> kJ
        
        if( coin()===1 ) { NAME = 'trabajo'; ans =  w; }
        else             { NAME = 'calor';   ans = -w; }

        QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
        QTN += "El volumen del gas cambia desde "+V1+" L hasta "+V2+" L. ";
        QTN += "Calcular el "+NAME+" asociado al proceso.";

		ANS = round4(ans); uni=" kJ";
    }

    if(op===2)
    {
        while(1)
        {
            P1 = rndi(1,10)*10.0; //kPa
            P2 = rndi(1,10)*10.0; //kPa
            if(Math.abs(P1-P2)>=20) break;
        }

        T = rndi(25,400); //°C

        R = 8.314; 
        w = -1*R*(T+273.15)*Math.log(P1/P2); //J
		w = w/1000.0; //J -> kJ

        if( coin()===1 ) { NAME = 'trabajo'; ans =  w; }
        else             { NAME = 'calor';   ans = -w; }
        
        QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
        QTN += "La presión del gas cambia desde "+P1+" kPa hasta "+P2+" kPa. ";
        QTN += "Calcular el "+NAME+" asociado al proceso.";

		ANS = round4(ans); uni=" kJ";
		
    }

    if(op===3)
    {

        T = rndi(25,400); //°C
        R = 8.314; 
        w = -1*R*(T+273.15)*Math.log(2); //J
		w = w/1000.0; //J -> kJ
        
        if( coin()===1 ) { NAME = 'trabajo'; ans =  w; }
        else             { NAME = 'calor';   ans = -w; }

        QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
        QTN += "El volumen del gas se duplica. ";
        QTN += "Calcular el "+NAME+" asociado al proceso.";

		ANS = round4(ans); uni=" kJ";
    }

    if(op===4)
    {

        T = rndi(25,400); //°C
        R = 8.314; 
        w = -1*R*(T+273.15)*Math.log(1/2); //J
		w = w/1000.0; //J -> kJ
        
        if( coin()===1 ) { NAME = 'trabajo'; ans =  w; }
        else             { NAME = 'calor';   ans = -w; }

        QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
        QTN += "El volumen del gas se reduce a la mitad. ";
        QTN += "Calcular el "+NAME+" asociado al proceso.";

		ANS = round4(ans); uni=" kJ";
    }

    if(op===5)
    {
        while(1)
        {
            V1 = rndi(1,20)*100.0; //L
            V2 = rndi(1,20)*100.0; //L
            if(Math.abs(V2-V1)>=300) break;
        }

        while(1)
        {
            T = rndi(25,400); //°C
            if( T%2===0 ) break;        
        }
        R = 8.314; 
        w = -1*R*(T+273.15)*Math.log(V2/V1); //J
		w = w/1000.0; //J -> kJ
        
        if( coin()===1 ) { NAME = 'trabajo'; ans =  w; }
        else             { NAME = 'calor';   ans = -w; }

        QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible. ";
        QTN += "El volumen del gas cambia desde "+V1+" L hasta "+V2+" L. ";
        QTN += "El "+NAME+" asociado al proceso es igual a "+round4(ans)+" kJ. ";
        QTN += "Calcula la temperatura a la cual se llevó el proceso."
        
        //T = T - 273.15;

		ANS = T; uni=" °C";
    }

    if(op===6)
    {
        while(1)
        {
            V1 = rndi(1,20)*100.0; //m3
            V2 = rndi(1,20)*100.0; //m3
            if(Math.abs(V2-V1)>=300 && V2%2===0) break;
        }


        T = rndi(25,400); //°C

        R = 8.314; 
        w = -1*R*(T+273.15)*Math.log(V2/V1); //J
		w = w/1000.0; //J -> kJ
        
        if( coin()===1 ) { NAME = 'trabajo'; ans =  w; }
        else             { NAME = 'calor';   ans = -w; }

        QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
        QTN += "El volumen inicial del gas es igual a "+V1+" m<sup>3</sup>. ";
        QTN += "El "+NAME+" asociado al proceso es igual a "+round4(ans)+" kJ. ";
        QTN += "Calcula el volumen final del gas."

		ANS = V2; uni=" m<sup>3</sup>";
    }

    if(op===7)
    {
        while(1)
        {
            V1 = rndi(1,20)*100.0; //m3
            V2 = rndi(1,20)*100.0; //m3
            if(Math.abs(V2-V1)>=300 && V2%2===0) break;
        }


        T = rndi(25,400); //°C

        R = 8.314; 
        w = -1*R*(T+273.15)*Math.log(V2/V1); //J
		w = w/1000.0; //J -> kJ
        
        if( coin()===1 ) { NAME = 'trabajo'; ans =  w; }
        else             { NAME = 'calor';   ans = -w; }

        QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
        QTN += "El volumen final del gas es igual a "+V2+" m<sup>3</sup>. ";
        QTN += "El "+NAME+" asociado al proceso es igual a "+round4(ans)+" kJ. ";
        QTN += "Calcula el volumen inicial del gas."

		ANS = V1; uni=" m<sup>3</sup>";
    }

    if(op===8)
    {
        while(1)
        {
            P1 = rndi(1,10)*10.0; //kPa
            P2 = rndi(1,10)*10.0; //kPa
            if(Math.abs(P1-P2)>=20) break;
        }

        T = rndi(25,400); //°C

        R = 8.314; 
        w = -1*R*(T+273.15)*Math.log(P1/P2); //J
		w = w/1000.0; //J -> kJ

        if( coin()===1 ) { NAME = 'trabajo'; ans =  w; }
        else             { NAME = 'calor';   ans = -w; }
        
        QTN  = "Un mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
        QTN += "La presión inicial del gas es igual a "+P1+" kPa. ";
        QTN += "El "+NAME+" asociado al proceso es igual a "+round4(ans)+" kJ. ";
        QTN += "Calcula la presión final del gas."

		ANS = P2; uni=" kPa";
		
    }

	
}


//----------------------------------------------------- PROCESO ADIABATICO
function prob_trabajo_adiabatico(){
	
	let T1, T2;
	let P1, P2;
	let Cp, Cv, c, g;
	let deltaU, w;
	let V1, V2;
	let R = 8.314;
    
    let op = rndi(1,2);

    if(op===1)
    {

        T1 = rndi(10,500); //°C
        T2 = T1 - rndi(25,80);

        if( coin()===1 )
            Cv = (3/2)*R; //J/K
        else
            Cv = (5/2)*R;

        QTN  = "Un mol de gas ideal (C<sub>v</sub> = "+Cv+" J/K) se somete a un proceso adiabático y su temperatura cambia desde "+T1+" °C hasta "+T2+" °C. ";
        QTN += "Calcular el cambio en la energía interna del gas.";    
                
        T1 = T1 + 273.15;//K
        T2 = T2 + 273.15;//K
        
        deltaU = Cv*(T2-T1); //J
		deltaU = deltaU/1000.0; // J-> kJ
        
		ANS = round2(deltaU); uni=" kJ";
	}
	

    if(op===2)
    {
        T1 = rndi(10,500); //°C
        T2 = T1 - rndi(25,80);

        if( coin()===1 )
            Cv = (3/2)*R; //J/K
        else
            Cv = (5/2)*R;

        QTN  = "Un mol de gas ideal (C<sub>v</sub> = "+Cv+" J/K) se somete a un proceso adiabático y su temperatura cambia desde "+T1+" °C hasta "+T2+" °C. ";
        QTN += "Calcular el trabajo asociado al proceso.";      
                
        T1 = T1 + 273.15;//K
        T2 = T2 + 273.15;//K
        
        w = Cv*(T2-T1); //J
		w = w/1000.0; // J-> kJ
        
		ANS = round2(w); uni=" kJ";
	}


}

//------------------------------------------------------------------------------
function prob_ecs_adiabaticas(){

	let T1, T2;
	let P1, P2;
	let Cp, Cv, c, g;
	let deltaU, w;
	let V1, V2;
	let R = 8.314;
    
    let op = rndi(1,4);

    if(op===1)
    {
        while(1)
        {
            V1 = rndi(10,150); //dm**3, L
            V2 = rndi(10,150); //dm**3, L
            if(Math.abs(V1-V2) >= 50.0) break;
        }

        if( coin()===1 )
            Cv = (3/2)*R; //J/K
        else
            Cv = (5/2)*R;
        
        T1 = rndi(200,900); //K

        c = Cv/R;
        
        QTN  = "Un mol de gas ideal (C<sub>v</sub> = "+Cv+" J/K) ocupa "+V1+" L a "+T1+" K. ";
        QTN += "El gas se somete a un proceso adiabático y su volumen cambia a "+V2+" L. ";
        QTN += "Estima la temperatura final del gas.";      
                		
        T2 = T1 * Math.pow(V1/V2, 1.0/c); //K
        
        ANS = round2(T2); uni=" K";
				
	}

    if(op===2)
    {
        while(1)
        {
            T1 = rndi(200,900); //K
            T2 = rndi(200,900); //K
            if(Math.abs(T1 - T2) >= 50.0) break;
        }

        if( coin()===1 )
            Cv = (3/2)*R; //J/K
        else
            Cv = (5/2)*R;
        
        V1 = rndi(10,150); //dm**3, L

        c = Cv/R;
        
        QTN  = "Un mol de gas ideal (C<sub>v</sub> = "+Cv+" J/K) ocupa "+V1+" L a "+T1+" K. ";
        QTN += "El gas se somete a un proceso adiabático y su temperatura cambia a "+T2+" K. ";
        QTN += "Estima el volumen final del gas.";      
                		
        V2 = V1 * Math.pow(T1/T2, c); //L
        
        ANS = round2(V2); uni=" L";
				
	}

    if(op===3)
    {
        
        while(1)
        {
            V1 = rndi(10,150); //dm**3, L
            V2 = rndi(10,150); //dm**3, L
            if(Math.abs(V1-V2) >= 50.0) break;
        }

        R = 8.314; //J/mol/K

        if( coin()===1 )
            Cv = (3/2)*R; //J/K
        else
            Cv = (5/2)*R;        
        
        Cp = Cv + R;
                
		P1 = rndi(10,90)*10.0; //kPa		
        
        g = Cp/Cv;
        
        QTN  = "Un mol de gas ideal (C<sub>v</sub> = "+Cv+" J/K) ocupa "+V1+" L cuando la presión es igual a "+P1+" kPa. ";
        QTN += "El gas se somete a un proceso adiabático y su volumen cambia a "+V2+" L. ";
        QTN += "Calcular la presión final del gas.";  
		
		P2 = P1 * Math.pow(V1/V2, g); //K
		
		ANS = round2(P2); uni=" kPa";


	}	
	
    if(op===4)
    {
        
        while(1)
        {
            P1 = rndi(1,100)/10.0; //atm
            P2 = rndi(1,100)/10.0; //atm
            if(Math.abs(P1-P2) >= 2.0) break;
        }

        R = 8.314; // J/mol/K

        if( coin()===1 )
            Cv = (3/2)*R; //J/K
        else
            Cv = (5/2)*R;        
        
        Cp = Cv + R;
                
			
        V1 = rndi(10,150); //dm**3, L        
        
        g = Cp/Cv;
        
        QTN  = "Un mol de gas ideal (C<sub>v</sub> = "+Cv+" J/K) ocupa "+V1+" L cuando la presión es igual a "+P1+" atm. ";
        QTN += "El gas se somete a un proceso adiabático y su presión cambia a "+P2+" atm. ";
        QTN += "Estimar el volumen final del gas.";  
		
		V2 = V1 * Math.pow(P1/P2, 1.0/g); //K
		
		ANS = round2(V2); uni=" L";


	}		

}


//------------------------------------------------------------------------------
function prob_epsilon(){ 

	let eps, T_cold, T_hot, q_in, w_out, op;

    q_in =  rndi(60,90)*10;
    w_out = rndi(5,45)*10;  
    q_out = q_in - w_out;
    eps = (w_out/q_in)*100;
    
    op = rndi(1,9);
    
    if( op===1 ){
        QTN = "Una máquina térmica se alimenta con "+q_in+" kJ de calor "
        QTN += "produciendo "+w_out+" kJ de trabajo. Calcula la eficiencia de la máquina."; 
        
        ANS = round2(eps);
        uni = "%";   
        negativos='no';
    }
    
    if( op===2 ){
        QTN = "La eficiencia de una máquina térmica es igual a "+round2(eps)+"%; "
        QTN += "calcula el trabajo producido cuando se alimenta con "+q_in+" kJ de calor.";
        
        ANS = w_out;
        uni = "kJ"; 
        negativos='no';
    }

    if( op===3 ){
        QTN = "La eficiencia de una máquina térmica es igual a "+round2(eps)+"%; "
        QTN += "calcula el calor necesario para producir "+w_out+" kJ de trabajo.";
        
        ANS = q_in;
        uni = "kJ"; 
        negativos='no';
    }
    
    if( op===4 ){
        QTN = "Una máquina térmica se alimenta con "+q_in+" kJ de calor y "
        QTN += "desprende "+q_out+" kJ de calor. Calcula la eficiencia de la máquina."; 
        
        ANS = round2(eps);
        uni = "%";   
        negativos='no';
    }

    if( op===5 ){
        QTN =  "La eficiencia de una máquina térmica es igual a "+round2(eps)+"%; "
        QTN += "Calcula el calor que desprende cuando se alimenta con "+q_in+" kJ de calor."; 
        
        ANS = q_out;
        uni = "kJ";   
        negativos='no';
    }

    if( op===6 ){
        QTN =  "La eficiencia de una máquina térmica es igual a "+round2(eps)+"%; "
        QTN += "Calcula el calor que debe alimentarse para que desprenda "+q_out+" kJ de calor."; 
        
        ANS = q_in;
        uni = "kJ";   
        negativos='no';
    }

    if( op===7 ){
        

        T_hot =  rndi(50,100)*10;
        T_cold = rndi(10, 40)*10;
        
        eps = ( 1 - (T_cold+273.15)/(T_hot+273.15) )*100;
       
        
        QTN  = "Una máquina térmica opera entre las siguientes ";
        QTN += "temperaturas: "+T_hot+" °C y "+T_cold+" °C; "
        QTN += "calcula la eficiencia de la máquina."; 
        
        ANS = eps;
        uni = "%";  
        negativos='no';
    }


    if( op===8 ){
        

        T_hot =  rndi(50,100)*10;
        T_cold = rndi(10, 40)*10;
        
        eps = ( 1 - (T_cold+273.15)/(T_hot+273.15) )*100;
       
        QTN =  "La eficiencia de una máquina térmica es igual a "+round2(eps)+"%; "
        QTN += "Calcula a qué temperatura sale el calor de la máquina si entra a "+T_hot+" °C.";
        
        ANS = T_cold;
        uni = "°C";  
        negativos='no';
    }

    if( op===9 ){
        

        T_hot =  rndi(50,100)*10;
        T_cold = rndi(10, 40)*10;
        
        eps = ( 1 - (T_cold+273.15)/(T_hot+273.15) )*100;
       
        QTN =  "La eficiencia de una máquina térmica es igual a "+round2(eps)+"%; "
        QTN += "Calcula a qué temperatura ingresa el calor a la máquina si sale a "+T_cold+" °C.";
        
        ANS = T_hot;
        uni = "°C";  
        negativos='no';
    }
    
}


//------------------------------------------------------------------------------
function prob_entropia(){
    
    let dS, q, C, Cpv, n, R, T, T1, T2, dT, P, V1, V2, P1, P2;
    let PROCESO;
    let GAS;
    
    R = 8.314;
    
    let op = rndi(1,2);
    
    if( op === 1 ){
                    
        n = 1; //rndi(2,10);
        
        if( coin()===1 ){
            PROCESO = "isobárico";
			Cpv = "C<sub>p</sub>";
        }else{
            PROCESO = "isocórico";
			Cpv = "C<sub>v</sub>";
		}
        
        if( coin()===1 ){
            GAS = "monoatómico";
            if(PROCESO==="isocórico") C = n*3/2*R;
            if(PROCESO==="isobárico") C = n*5/2*R;
        }else{
            GAS = "diatómico";
            if(PROCESO==="isocórico") C = n*5/2*R;
            if(PROCESO==="isobárico") C = n*7/2*R;            
        }
        
        while(1){
            T1 = rndi(1, 300);
            T2 = rndi(1, 300);            
            if(Math.abs(T2-T1)>=20) break;
        }

        QTN  = "Durante un proceso "+PROCESO+" la temperatura de un mol de gas ideal ( "+Cpv+" = "+C+" J/mol K ) cambia desde "+T1+" °C hasta "+T2+" °C.";
        QTN += " Calcula el cambio de entropía del gas.";

        T1 = T1 + 273.15;
        T2 = T2 + 273.15;

        q = C * (T2 - T1);
        
        T = (T1 + T2)/2;
        
        dS = q/T;

        ANS = dS; uni = "J/K"                
        
    }

    if(op===2)
    {
        while(1)
        {
            V1 = rndi(1,20)*100.0; //L
            V2 = rndi(1,20)*100.0; //L
            if(Math.abs(V2-V1)>=300) break;
        }

        while(1)
        {
            P1 = rndi(1,20)*10.0; //atm
            P2 = rndi(1,20)*10.0; //atm
            if(Math.abs(P2-P1)>=10) break;
        }

        n = rndi(2,10);
        T = rndi(1,400); //°C
        R = 8.314; 
      
        if(coin()===1){
            QTN  =  n+" mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
            QTN += "El volumen del gas cambia desde "+V1+" L hasta "+V2+" L. ";
            QTN += "Calcula el cambio de entropía del gas.";
            dS = n * R * Math.log(V2/V1); 
        }else{
            QTN  =  n+" mol de gas ideal se somete a un proceso isotérmico reversible ("+T+" °C). ";
            QTN += "La presión del gas cambia desde "+P1+" atm hasta "+P2+" atm. ";
            QTN += "Calcula el cambio de entropía del gas.";
            dS = n * R * Math.log(P1/P2); 
        }

		ANS = round2(dS); uni=" J/K";
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
    
    if( negativos==='yes'){
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

	
    resumen +="Examen "+act+" (ejercicios).<br>";
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

//------------------------------------------------------------------------------
function pro_ley1_quim_01(){ 

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
function pro_ley1_quim_02(){ 

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
function pro_ley2_adia_01(){ 

	let P,V,n,R,T,w,q,Cv,Cp,dU,dH,gas,m,gamma;
    let P1,P2,V1,V2,T1,T2;

    n = 1;
    R = 0.08206;
    Cv = (3.0/2.0)*n*R;
    Cp = (5.0/2.0)*n*R;
    gamma = Cp/Cv;

    while(1){
        V1 = rndi(10,1000); //L
        V2 = rndi(10,1000); //L
        P1 = rndi(10,100); //atm
        P2 = P1*Math.pow( V1/V2, gamma );       
        if(Math.abs(V2-V1)>50 && P2 > 5.0) break;
    }
    
    QTN  = "";
    QTN += "Durante un proceso adiabático reversible, ";
    QTN += "1 mol de gas ideal cambia su volumen desde "+V1+" L hasta "+V2+" L. "; 
    QTN += "Calcula el cambio de entropía del gas."
    QTN += "<br><br>";
    
    ANS = 0;
    uni = " kJ";
    
}

//------------------------------------------------------------------------------
function pro_ley2_isot_01(){ 

	let P,V,n,R,T,w,q,dS;
    let P1,P2,V1,V2;

    n = 1;
    T = rndi(5,200); // °C
    R = 8.314;

    while(1){
        V1 = rndi(1,100); //L
        V2 = rndi(1,100); //L
        if(Math.abs(V2-V1)>10) break;
    }
    

    dS = n*R*Math.log(V2/V1);
    
    QTN  = "";
    QTN += "Durante un proceso isotérmico ("+T+" °C) reversible, "
    QTN += "1 mol de gas ideal cambia su volumen desde "+V1+" L hasta "+V2+" L. "; 
    QTN += "Calcula el cambio de entropía del gas."
    QTN += "<br><br>";
    

    ANS = dS;
    uni = " J/K";    
}

//------------------------------------------------------------------------------
function pro_ley2_isot_02(){ 

	let P,V,n,R,T,w,q,dS;
    let P1,P2,V1,V2;

    n = 1;
    T = rndi(5,200); // °C
    R = 8.314;

    while(1){
        P1 = rndi(1,10); //L
        P2 = rndi(1,10); //L
        if(Math.abs(P2-P1)>2) break;
    }
    

    dS = n*R*Math.log(P1/P2);
    
    QTN  = "";
    QTN += "Durante un proceso isotérmico ("+T+" °C) reversible, "
    QTN += "1 mol de gas ideal cambia su presión desde "+P1+" atm hasta "+P2+" atm. "; 
    QTN += "Calcula el cambio de entropía del gas."
    QTN += "<br><br>";
    

    ANS = dS;
    uni = " J/K";    
}

//------------------------------------------------------------------------------
function pro_ley2_isot_03(){ 

	let P,V,n,R,T,w,q,dS;
    let P1,P2,V1,V2;

    while(1){
        T = rndi(5,99)*10; // °C
        w = rndi(100,900)*10;
        if(coin()===1) w = -w;
        q = -w;        
        dS = q/(T+273.15);
        if(Math.abs(dS)>10) break;
    }
    
    QTN  = "";
    QTN += "El trabajo PV asociado a un proceso isotérmico reversible "
    QTN += "es igual a "+w+" kJ. "; 
    QTN += "La temperatura del gas ideal involucrado en el proceso es igual a "+T+ " °C; ";
    QTN += "estima el cambio de entropía del gas."
    QTN += "<br><br>";
    
    ANS = dS;
    uni = " kJ/K";    
}

//------------------------------------------------------------------------------
function pro_ley2_isob_01(){ 

	let P, T, T1, T2, dH, dU, dS;

    P = rndi(1,10);
    while(1){
        T1 = rndi(50,900);
        T2 = rndi(50,900);
        if(Math.abs(T2-T1)>50 && Math.abs(T2-T1)<100) break;
    }
    if(T2 > T1){
        dU = rndi(10,99)*100;
        dH = 2*dU;
    }else{
        dU = -rndi(10,99)*100;
        dH = 2*dU;
    }
    
    
    QTN  = "";
    QTN += "Un gas se somete a un proceso isobárico a "+P+" atm. "
    QTN += "Durante el proceso la temperatura del gas cambia desde "+T1+" °C hasta "+T2+" °C "; 
    QTN += "provocando un cambio de entalpía y de energía interna igual "+dH+" kJ y "+dU+" kJ, ";
    QTN += "respectivamente. Estima el cambio de entropía del gas.";
    QTN += "<br><br>";
    
    T = ( (T1+273.15) + (T2+273.15) )/2.0
    
    dS = dH/T;
    
    ANS = dS;
    uni = " kJ/K";
    
}

//------------------------------------------------------------------------------
function pro_ley2_isoc_01(){ 

	let P, V, T, T1, T2, dH, dU, dS;

    V = rndi(10,100);
    while(1){
        T1 = rndi(50,900);
        T2 = rndi(50,900);
        if(Math.abs(T2-T1)>50 && Math.abs(T2-T1)<100) break;
    }
    if(T2 > T1){
        dU = rndi(10,99)*100;
        dH = 2*dU;
    }else{
        dU = -rndi(10,99)*100;
        dH = 2*dU;
    }
    
    
    QTN  = "";
    QTN += "Un gas se somete a un proceso isocórico. "
    QTN += "Durante el proceso la temperatura del gas cambia desde "+T1+" °C hasta "+T2+" °C "; 
    QTN += "provocando un cambio de entalpía y de energía interna igual "+dH+" kJ y "+dU+" kJ, ";
    QTN += "respectivamente. Estima el cambio de entropía del gas.";
    QTN += "<br><br>";
    
    T = ( (T1+273.15) + (T2+273.15) )/2.0
    
    dS = dU/T;
    
    ANS = dS;
    uni = " kJ/K";
    
}


//------------------------------------------------------------------------------
function pro_p_vap_01(){ 

	let P1, P2, T1, T2, T1K, T2K, R, dH, sust, opc;
    
    R = 8.314; // J/mol K
    
    opc = rndi(1,3);
    
    if(opc===1){ sust = "agua";    dH = 40.79; } // dH en kJ/mol 
    if(opc===2){ sust = "benceno"; dH = 31.0;  } 
    if(opc===3){ sust = "etanol";  dH = 39.3;  } 
    
    while(1){
        T1 = rndi(10, 60); // °C
        T2 = rndi(10, 60);
        if( T2-T1 > 15 ) break;
    }
    
    T1K = T1+273.15; //K
    T2K = T2+273.15; //K

    P1 = rndi(100, 760);
    
    // console.log("-----------------");
    // console.log((-dH*1000/R));
    // console.log(( 1/T2K - 1/T1K));
    // console.log((-dH*1000/R)*( 1/T2K - 1/T1K));
    
    P2 = P1*Math.exp( (-dH*1000/R)*( 1/T2K - 1/T1K) );
    
    QTN  = "";
    QTN += "La presión de vapor del "+sust+" es de "+P1+" mmHg a "+T1+ " °C. ";
    QTN += "Calcula su presión de vapor a "+T2+" °C. NOTA: el calor de vaporización "; 
    QTN += "del "+sust+" es igual a "+dH+" kJ/mol.";
    QTN += "<br><br>";
    
    ANS = round2(P2);
    uni = "mmHg";
    
}


//------------------------------------------------------------------------------
function pro_p_vap_02(){ 

	let P1, P2, T1, T2, T1K, T2K, R, dH, sust, opc;
    
    R = 8.314; // J/mol K
    
    opc = rndi(1,3);
    
    if(opc===1){ sust = "agua";    dH = 40.79; } // dH en kJ/mol 
    if(opc===2){ sust = "benceno"; dH = 31.0;  } 
    if(opc===3){ sust = "etanol";  dH = 39.3;  } 
    
    while(1){
        T1 = rndi(10, 60); // °C
        T2 = rndi(10, 60);
        if( T2-T1 > 15 ) break;
    }
    
    T1K = T1+273.15; //K
    T2K = T2+273.15; //K

    P1 = rndi(100, 760);
    
    P2 = P1*Math.exp( (-dH*1000/R)*( 1/T2K - 1/T1K) );
    
    QTN  = "";
    QTN += "La presión de vapor del "+sust+" es de "+P1+" mmHg a "+T1+ " °C. ";
    QTN += "Calcula su temperatura cuando la presión de vapor es de "+round2(P2)+" mmHg. NOTA: el calor de vaporización "; 
    QTN += "del "+sust+" es igual a "+dH+" kJ/mol.";
    QTN += "<br><br>";
    
    ANS = T2;
    uni = "°C";
    
}

//------------------------------------------------------------------------------
function pro_p_vap_03(){ 

	let P1, P2, T1, T2, T1K, T2K, R, dH, sust, opc;
    
    R = 8.314; // J/mol K
    
    dH = rndi(20,60); // kJ/mol
    
    while(1){
        T1 = rndi(10, 60); // °C
        T2 = rndi(10, 60);
        if( T2-T1 > 15 ) break;
    }
    
    T1K = T1+273.15; //K
    T2K = T2+273.15; //K

    P1 = rndi(100, 760);
    
    P2 = P1*Math.exp( (-dH*1000/R)*( 1/T2K - 1/T1K) );
    
    QTN  = "";
    QTN += "La presión de vapor de una sustancia desconocida es ";
    QTN += +P1+" mmHg a "+T1+ " °C y "+round2(P2)+" mmHg a "+T2+ " °C. ";
    QTN += "Calcula el calor de vaporización de la sustancia.";
    QTN += "<br><br>";
    
    ANS = dH;
    uni = "kJ/mol";
    
}

//------------------------------------------------------------------------------
function pro_conc_01(){ 

    let moles, gramos;
    let litros, mililitros;
    let molaridad;
    let NOMBRE, FORMULA, PM;
    
    let opc = rndi(1,4);
    
    if(opc===1){NOMBRE = "etanol";  FORMULA = "C<sub>2</sub>H<sub>5</sub>OH";             PM = 46.08;}
    if(opc===2){NOMBRE = "metanol"; FORMULA = "CH<sub>3</sub>OH";                         PM = 32.05;} 
    if(opc===3){NOMBRE = "glucosa"; FORMULA = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>"; PM = 180.18;} 
    if(opc===4){NOMBRE = "sal";     FORMULA = "NaCl";                                     PM = 58.44;} 

    while(1){
        gramos = rndi(1,10)*10;
        moles = gramos/PM; //_gramos_ / _M_;
        mililitros = rndi(5,25)*100;
        litros = mililitros/1000;
        molaridad = moles/litros;
        if(molaridad >=1) break;
    }
    
    QTN  = "";
    QTN += "Despúes de disolver "+gramos+" g de "+NOMBRE+" ("+FORMULA+") en agua, ";
    QTN += "se obtienen "+mililitros+" mL de disolución. ";
    QTN += "¿Cuál es la molaridad de la disolución?<br><br>";

    ANS = molaridad;
    uni = " M";

    // console.log("moles: ", moles);
    // console.log("litros: ", litros);
    // console.log("molaridad :", molaridad);
    
}

//------------------------------------------------------------------------------
function pro_conc_02(){ 

    let moles, gramos;
    let litros, mililitros;
    let molaridad;
    let NOMBRE, FORMULA, PM;
    
    let opc = rndi(1,4);
    
    if(opc===1){NOMBRE = "etanol";  FORMULA = "C<sub>2</sub>H<sub>5</sub>OH";             PM = 46.08;}
    if(opc===2){NOMBRE = "metanol"; FORMULA = "CH<sub>3</sub>OH";                         PM = 32.05;} 
    if(opc===3){NOMBRE = "glucosa"; FORMULA = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>"; PM = 180.18;} 
    if(opc===4){NOMBRE = "sal";     FORMULA = "NaCl";                                     PM = 58.44;} 

    while(1){
        gramos = rndi(1,10)*10;
        moles = gramos/PM; //_gramos_ / _M_;
        mililitros = rndi(5,25)*100;
        litros = mililitros/1000;
        molaridad = moles/litros;
        if(molaridad >=1) break;
    }

    QTN  = "";
    QTN += "Se tienen "+litros+" L de una disolución "+round2(molaridad)+" M de ";
    QTN += NOMBRE+" ("+FORMULA+"). <br>";
    QTN += "¿Cuántos gramos de "+NOMBRE+" hay en la disolución?<br><br>";

    ANS = gramos;
    uni = " g";

    // console.log("moles: ", moles);
    // console.log("molaridad :", molaridad);
    
}

//------------------------------------------------------------------------------
function pro_ley_henry_01(){ 

    // c = kP

    let P, kh, c; 
    
    while(1){
        P = rndi(1,150)/10; // atm
        c = rndi(1,15)/10;
        kh = c/P;
        
        if(kh <= 0.1 && kh >= 0.001) break;        
    }

    QTN  = "";
    QTN += "A 20 °C, la constante de Henry de un gas desconocido disuelto en "
    QTN += "agua es de "+round4(kh)+" mol/(atm L). ";
    QTN += "Calcula la concentración molar de dicho gas disuelto en agua, ";
    QTN += "cuando la presión parcial del gas es de "+P+" atm.";

    ANS = c;
    uni = " mol/L";
    
    // console.log(c);
    
}

//------------------------------------------------------------------------------
function pro_ley_henry_02(){ 

    // c = kP

    let P, c, kh; 
    
    while(1){
        P = rndi(1,150)/10; // atm
        c = rndi(1,15)/10;
        kh = c/P;
        
        if(kh >= 0.1 && kh <= 0.9) break;        
    }

    QTN  = "";
    QTN += "En un sistema gas-líquido, el gas presenta una presión parcial de ";
    QTN += P+" atm a 25 °C. Si la concentración del gas en el líquido es de ";
    QTN += c+" mol/L, calcula la constante de Henry para dicho gas a 25 °C.";

    ANS = kh;
    uni = " mol/(atm L)";
    
}

//------------------------------------------------------------------------------
function pro_ley_henry_03(){ 

    // c = kP

    let P1, c1, kh; 
    let P2, c2;
    
    while(1){
        P1 = rndi(1,150)/10; // atm
        P2 = rndi(1,150)/10; // atm
        c1 = rndi(1,15)/10;
        kh = c1/P1;
        
        c2 = kh*P2;
        
        if(kh >= 0.1 && kh <= 0.9) break;        
    }

    QTN  = "";
    QTN += "En un sistema gas-líquido, el gas presenta una presión parcial de ";
    QTN += P1+" atm a 25 °C. Bajo esas condiciones, la concentración del gas en ";
    QTN += "el líquido es de "+c1+" mol/L. Calcula la solubilidad de dicho gas ";
    QTN += "a 25 °C pero cuando la presión del gas es de "+P2+ " atm.";

    ANS = c2;
    uni = " mol/L";
    
    // console.log("kh ", kh);
    
}


function pro_prop_colig_01(){ 

    // disminución de la presión de vapor

    let delta_P, Pv_agua;
    let X, X_, n_soluto, n_agua;
    let m_soluto, m_agua;
    let NOMBRE, FORMULA;
    let i; //van't Hoff
    
    let opc = rndi(1,2);
    
    if(opc===1){        
        NOMBRE = "glucosa"; 
        FORMULA = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>"; 
        PM = 180.18;
        i = 1;        
    }
    
    if(opc===2){        
        NOMBRE = "sal"; 
        FORMULA = "NaCl"; 
        PM = 58.44;
        i = 2;        
    }    
    
    Pv_agua = 31.82; // mmHg, agua, 30 °C
    
    while(1){
    
        m_soluto = rndi(100,250);
        m_agua = rndi(800,2000); //agua
        
        n_soluto = gramos_a_mol(PM, m_soluto);
        n_agua = gramos_a_mol(18.02, m_agua);        

        X = i*n_soluto/(i*n_soluto + n_agua);

        delta_P = X*Pv_agua;
        
        if(delta_P >= 0.5) break;
    }
    
    QTN  = "";
    QTN += "Se disuelven "+m_soluto+" gramos de "+NOMBRE+" ("+FORMULA+") en ";
    QTN += m_agua+" mL de agua a 30 °C. ";
    QTN += "Estima cuánto disminuye la presión de vapor del agua. ";
    QTN += "NOTA: La presión de vapor del agua a 30 °C es de 31.82 mmHg.";

    ANS = delta_P;
    uni = " mmHg";

    // console.log("X (i): ", X);
    // console.log("X: ", n_soluto/(n_soluto + n_agua));

    
}


//------------------------------------------------------------------------------
function pro_prop_colig_02(){ 

    // elevación del punto de ebullición

    let delta_T, Kb_agua;
    let n_soluto, n_agua;
    let m_soluto, m_agua;
    let NOMBRE, FORMULA;
    let i; //van't Hoff
    
    let opc = rndi(1,2);
    
    if(opc===1){        
        NOMBRE = "glucosa"; 
        FORMULA = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>"; 
        PM = 180.18;
        i = 1;        
    }
    
    if(opc===2){        
        NOMBRE = "sal"; 
        FORMULA = "NaCl"; 
        PM = 58.44;
        i = 2;        
    }    
    
    Kb_agua = 0.51; // K kg / mol
    
    while(1){
    
        m_soluto = rndi(100,250);
        m_agua = rndi(800,2000); //agua
        
        n_soluto = gramos_a_mol(PM, m_soluto);
        n_agua = gramos_a_mol(18.02, m_agua);        

        delta_T = Kb_agua*(i*n_soluto/(m_agua/1000));
        
        if(delta_T > 0.5) break;
    }
    
    QTN  = "";
    QTN += "Se disuelven "+m_soluto+" gramos de "+NOMBRE+" ("+FORMULA+") en ";
    QTN += m_agua+" mL de agua. ";
    QTN += "Estima cuánto se eleva la temperatura de ebullición del agua.";

    ANS = delta_T;
    uni = " K";

    // console.log("molalidad con i: ", i*n_soluto/(m_agua/1000));
    
}


//------------------------------------------------------------------------------
function pro_prop_colig_03(){ 

    // disminución del punto de congelación

    let delta_T, Kf_agua;
    let n_soluto, n_agua;
    let m_soluto, m_agua;
    let NOMBRE, FORMULA;
    let i; //van't Hoff
    
    let opc = rndi(1,2);
    
    if(opc===1){        
        NOMBRE = "glucosa"; 
        FORMULA = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>"; 
        PM = 180.18;
        i = 1;        
    }
    
    if(opc===2){        
        NOMBRE = "sal"; 
        FORMULA = "NaCl"; 
        PM = 58.44;
        i = 2;        
    }    
    
    Kf_agua = 1.86; // K kg / mol
    
    while(1){
    
        m_soluto = rndi(100,250);
        m_agua = rndi(800,2000); //agua
        
        n_soluto = gramos_a_mol(PM, m_soluto);
        n_agua = gramos_a_mol(18.02, m_agua);        

        delta_T = Kf_agua*(i*n_soluto/(m_agua/1000));
        
        if(delta_T > 1) break;
    }
    
    QTN  = "";
    QTN += "Se disuelven "+m_soluto+" gramos de "+NOMBRE+" ("+FORMULA+") en ";
    QTN += m_agua+" mL de agua. ";
    QTN += "Estima cuánto disminuye la temperatura de congelación del agua.";

    ANS = delta_T;
    uni = " K";

    // console.log("molalidad con i: ", i*n_soluto/(m_agua/1000));
    
}

//------------------------------------------------------------------------------
function pro_prop_colig_04(){ 

    // presión osmótica

    let P, R, T, M, V;
    let n_soluto, n_agua;
    let m_soluto, m_agua;
    let NOMBRE, FORMULA;
    let i; //van't Hoff
    
    let opc = rndi(1,2);
    
    if(opc===1){        
        NOMBRE = "glucosa"; 
        FORMULA = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>"; 
        PM = 180.18;
        i = 1;        
    }
    
    if(opc===2){        
        NOMBRE = "sal"; 
        FORMULA = "NaCl"; 
        PM = 58.44;
        i = 2;        
    }    
    
    R = 0.08206; // atm L / mol K
    
    while(1){
    
        T = rndi(10, 60); // °C
        V = rndi(800,2000); //mL
    
        m_soluto = rndi(10,50);        
        n_soluto = gramos_a_mol(PM, m_soluto);

        M = n_soluto/(V/1000.0);

        P = i*M*R*(T+273.15);
        
        if(P > 1) break;
    }
    
    QTN  = "";
    QTN += "A "+T+" °C, se disuelven "+m_soluto+" gramos de "+NOMBRE+" ("+FORMULA+") en ";
    QTN += "agua, resultando "+V+" mL de disolución. ";
    QTN += "Estima la presión osmótica de la disolución.";

    ANS = P;
    uni = " atm";

    // console.log("Molaridad con i: ", i*M);
    
}


//------------------------------------------------------------------------------
function pro_eq_quim_01(){ 

    let COMP1, COMP2, COMP3, REAC;
    let C1, C2, C3;
    let coef1, coef2, coef3;
    let Kc;
    let T;
    
    let opc = rndi(1,3);
    
    if(opc===1){      
        // A2 (g) + 3 B2 (g) -> 2 AB3 (g)    
        COMP1 = "A<sub>2</sub>"; 
        COMP2 = "B<sub>2</sub>"; 
        COMP3 = "AB<sub>3</sub>"; 
        coef1 = 1;
        coef2 = 3;
        coef3 = 2;
        REAC = "A<sub>2</sub> + 3B<sub>2</sub> &rarr; 2AB<sub>3</sub>";
    }

    if(opc===2){    
        // 2 AB2 (g) +   B2 (g) -> 2 AB3 (g)    
        COMP1 = "AB<sub>2</sub>"; 
        COMP2 = "B<sub>2</sub>"; 
        COMP3 = "AB<sub>3</sub>"; 
        coef1 = 2;
        coef2 = 1;
        coef3 = 2;
        REAC = "2AB<sub>2</sub> + B<sub>2</sub> &rarr; 2AB<sub>3</sub>";
    }    

    if(opc===3){    
        // A2 (g) +   B2 (g) -> 2 AB  (g)    
        COMP1 = "A<sub>2</sub>"; 
        COMP2 = "B<sub>2</sub>"; 
        COMP3 = "AB"; 
        coef1 = 1;
        coef2 = 1;
        coef3 = 2;
        REAC = "A<sub>2</sub> + B<sub>2</sub> &rarr; 2AB";
    } 

    while(1){
        
        T = rndi(5,95); //°C
        
        C1 = rndi(1,1000)/100;
        C2 = rndi(1,1000)/100;
        C3 = rndi(1,1000)/100;
        
        Kc = Math.pow(C3,coef3)/( Math.pow(C1,coef1)*Math.pow(C2,coef2) ); 
        
        if(Kc >= 0.1 && Kc <=10) break;
    }
        
    QTN  = "";
    QTN += "Considera la siguiente reacción química hipotética ("+T+" °C) en estado gaseoso: <br>";
    QTN += REAC+"<br>";
    QTN += "La concentración de "+COMP1+" es de "+C1+" mol/L, ";
    QTN += "la concentración de "+COMP2+" es de "+C2+" mol/L y ";
    QTN += "la concentración de "+COMP3+" es de "+C3+" mol/L. ";
    QTN += "Calcula la constante de equilibrio K<sub>c</sub>.";

    ANS = Kc;
    uni = "";
    
    // console.log(C1);
    // console.log(C2);
    // console.log(C3);
    
}

//------------------------------------------------------------------------------
function pro_eq_quim_02(){ 

    let COMP1, COMP2, COMP3, REAC;
    let C1, C2, C3;
    let coef1, coef2, coef3;
    let Kc;
    let T;
    
    let opc = rndi(1,3);
    
    if(opc===1){      
        // A2 (g) + 3 B2 (g) -> 2 AB3 (g)    
        COMP1 = "A<sub>2</sub>"; 
        COMP2 = "B<sub>2</sub>"; 
        COMP3 = "AB<sub>3</sub>"; 
        coef1 = 1;
        coef2 = 3;
        coef3 = 2;
        REAC = "A<sub>2</sub> + 3B<sub>2</sub> &rarr; 2AB<sub>3</sub>";
    }

    if(opc===2){    
        // 2 AB2 (g) +   B2 (g) -> 2 AB3 (g)    
        COMP1 = "AB<sub>2</sub>"; 
        COMP2 = "B<sub>2</sub>"; 
        COMP3 = "AB<sub>3</sub>"; 
        coef1 = 2;
        coef2 = 1;
        coef3 = 2;
        REAC = "2AB<sub>2</sub> + B<sub>2</sub> &rarr; 2AB<sub>3</sub>";
    }    

    if(opc===3){    
        // A2 (g) +   B2 (g) -> 2 AB  (g)    
        COMP1 = "A<sub>2</sub>"; 
        COMP2 = "B<sub>2</sub>"; 
        COMP3 = "AB"; 
        coef1 = 1;
        coef2 = 1;
        coef3 = 2;
        REAC = "A<sub>2</sub> + B<sub>2</sub> &rarr; 2AB";
    } 

    while(1){
        
        T = rndi(5,95); //°C
        
        C1 = rndi(1,1000)/100;
        C2 = rndi(1,1000)/100;
        C3 = rndi(1,1000)/100;
        
        Kc = Math.pow(C3,coef3)/( Math.pow(C1,coef1)*Math.pow(C2,coef2) ); 
        
        if(Kc >= 0.1 && Kc <=10) break;
    }
        
    QTN  = "";
    QTN += "Considera la siguiente reacción química hipotética  ("+T+" °C) en estado gaseoso: <br>";
    QTN += REAC+"<br>";
    QTN += "La presión parcial de "+COMP1+" es de "+C1+" atm, ";
    QTN += "la presión parcial de "+COMP2+" es de "+C2+" atm y ";
    QTN += "la presión parcial de "+COMP3+" es de "+C3+" atm. ";
    QTN += "Calcula la constante de equilibrio K<sub>p</sub>.";

    ANS = Kc;
    uni = "";
    
    // console.log(C1);
    // console.log(C2);
    // console.log(C3);
    
}

//------------------------------------------------------------------------------
function pro_eq_quim_03(){ 

    let COMP1, COMP2, COMP3, REAC;
    let C1, C2, C3;
    let coef1, coef2, coef3;
    let Kc;
    let T;
    
    let opc = rndi(1,3);
    
    if(opc===1){      
        // A2 (g) + 3 B2 (g) -> 2 AB3 (g)    
        COMP1 = "A<sub>2</sub>"; 
        COMP2 = "B<sub>2</sub>"; 
        COMP3 = "AB<sub>3</sub>"; 
        coef1 = 1;
        coef2 = 3;
        coef3 = 2;
        REAC = "A<sub>2</sub> + 3B<sub>2</sub> &rarr; 2AB<sub>3</sub>";
    }

    if(opc===2){    
        // 2 AB2 (g) +   B2 (g) -> 2 AB3 (g)    
        COMP1 = "AB<sub>2</sub>"; 
        COMP2 = "B<sub>2</sub>"; 
        COMP3 = "AB<sub>3</sub>"; 
        coef1 = 2;
        coef2 = 1;
        coef3 = 2;
        REAC = "2AB<sub>2</sub> + B<sub>2</sub> &rarr; 2AB<sub>3</sub>";
    }    

    if(opc===3){    
        // A2 (g) +   B2 (g) -> 2 AB  (g)    
        COMP1 = "A<sub>2</sub>"; 
        COMP2 = "B<sub>2</sub>"; 
        COMP3 = "AB"; 
        coef1 = 1;
        coef2 = 1;
        coef3 = 2;
        REAC = "A<sub>2</sub> + B<sub>2</sub> &rarr; 2AB";
    } 

    while(1){
        
        T = rndi(5,95); //°C
        
        C1 = rndi(1,1000)/100;
        C2 = rndi(1,1000)/100;
        C3 = rndi(1,1000)/100;
        
        Kc = Math.pow(C3,coef3)/( Math.pow(C1,coef1)*Math.pow(C2,coef2) ); 
        
        if(Kc >= 0.1 && Kc <=10) break;
    }
        
    QTN  = "";
    QTN += "Considera la siguiente reacción química hipotética ("+T+" °C) en estado gaseoso: <br>";
    QTN += REAC+"<br>";
    QTN += "La constante de equilibrio K<sub>c</sub> es igual a "+round2(Kc)+". ";
    QTN += "La concentración de "+COMP1+" es de "+C1+" mol/L y ";
    QTN += "la concentración de "+COMP2+" es de "+C2+" mol/L. ";
    QTN += "Calcula la concentración de "+COMP3+".";
    
    ANS = C3;
    uni = " mol/L";
    
    // console.log(C1);
    // console.log(C2);
    // console.log(C3);
    
}

//------------------------------------------------------------------------------
function pro_eq_quim_04(){ 

    let COMP1, COMP2, COMP3, REAC;
    let C1, C2, C3;
    let coef1, coef2, coef3;
    let Kc;
    let R, T;
    let delta_n;
    
    let opc = rndi(1,3);
    
    if(opc===1){      
        // A2 (g) + 3 B2 (g) -> 2 AB3 (g)    
        COMP1 = "A<sub>2</sub>"; 
        COMP2 = "B<sub>2</sub>"; 
        COMP3 = "AB<sub>3</sub>"; 
        coef1 = 1;
        coef2 = 3;
        coef3 = 2;
        REAC = "A<sub>2</sub> + 3B<sub>2</sub> &rarr; 2AB<sub>3</sub>";
    }

    if(opc===2){    
        // 2 AB2 (g) +   B2 (g) -> 2 AB3 (g)    
        COMP1 = "AB<sub>2</sub>"; 
        COMP2 = "B<sub>2</sub>"; 
        COMP3 = "AB<sub>3</sub>"; 
        coef1 = 2;
        coef2 = 1;
        coef3 = 2;
        REAC = "2AB<sub>2</sub> + B<sub>2</sub> &rarr; 2AB<sub>3</sub>";
    }    

    if(opc===3){    
        // A2 (g) +   B2 (g) -> 2 AB  (g)    
        COMP1 = "A<sub>2</sub>"; 
        COMP2 = "B<sub>2</sub>"; 
        COMP3 = "AB"; 
        coef1 = 1;
        coef2 = 1;
        coef3 = 2;
        REAC = "A<sub>2</sub> + B<sub>2</sub> &rarr; 2AB";
    } 

    while(1){
                
        R = 0.08206;
        
        T = rndi(5,800); //°C
        
        Kc = rndi(1,1000)/100;
        
        delta_n = coef3 - (coef1 + coef2);
        
        Kp = Kc*Math.pow(R*(T+273.15), delta_n);
        
        // console.log("---------");
        // console.log(  1/(R*(T+273.15)) );
        // console.log(  Math.log(R*(T+273.15),-1) );
        
        if(Kp >= 0.01 && Kp <=20) break;
    }

    if(coin()===1){
        
        QTN  = "";
        QTN += "Considera la siguiente reacción química hipotética  ("+T+" °C) en estado gaseoso: <br>";
        QTN += REAC+"<br>";
        QTN += "Su constante de equilibrio K<sub>c</sub> es igual a "+Kc+", ";
        QTN += "calcula la constante de equilibrio K<sub>p</sub>.";

        ANS = Kp;
        uni = "";
        
    }else{   
    
        QTN  = "";
        QTN += "Considera la siguiente reacción química hipotética  ("+T+" °C) en estado gaseoso: <br>";
        QTN += REAC+"<br>";
        QTN += "Su constante de equilibrio K<sub>p</sub> es igual a "+round2(Kp)+", ";
        QTN += "calcula la constante de equilibrio K<sub>c</sub>.";

        ANS = Kc;
        uni = "";
        
    }
    
    console.log("delta_n: ", delta_n);
    
}

*/