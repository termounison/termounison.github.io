/*

(C) 2024 Dr. Octavio Juárez
octavio.juarez@UNIson.mx

Todos los derechos reservados.

*/

/*

Ecuaciones para equilibrio físico
	Clausius-Clapeyron

*/



//--------------------------------------- Conversión de temperatura
function C_to_K(x){
	
	return x + 273.15;
}

function K_to_C(x){
	
	return x - 273.15;
}

function C_to_F(x){
	
	return (9.0/5.0)*x + 32.0;
}

function F_to_C(x){
	
	return (x - 32.0)*(5.0/9.0);
}

function K_to_F(x){
	
	return   C_to_F(K_to_C(x));
}

function F_to_K(x){
	
	return   C_to_K(F_to_C(x));
}

//--------------------------------------- Conversión de presión
function atm_to_Pa(x){
	
	return x*101325.0;
}

function Pa_to_atm(x){
	
	return x/101325.0;
}

function atm_to_mmHg(x){
	
	return x*760.0;
}

function mmHg_to_atm(x){
	
	return x/760.0;
}

function Pa_to_mmHg(x){
	
	return atm_to_mmHg(Pa_to_atm(x));
}

function mmHg_to_Pa(x){
	
	return atm_to_Pa(mmHg_to_atm(x));
}


//--------------------------------------- Conversión de energía
function cal_to_J(x){
	
	return x*4.186;
}

function J_to_cal(x){
	
	return x/4.186;
}

function atmL_to_J(x){
	
	return x*101.325;
}

function J_to_atmL(x){
	
	return x/101.325;
}

function atmL_to_cal(x){
	
	return x*24.217;
}

function cal_to_atmL(x){
	
	return x/24.217;
}



//------------------------------------------------------------------------------
function exe_conv_T(){

    let opc = rndi(1,4);
    let T;

    // °C -> K
	if(opc===1){
		T = rndi(-200,300);
		QTN = "Convierte "+T+" °C en K.<br>";
		ANS = T + 273.15;
        UNI = "K";
	}

	// K -> °C
	if(opc===2){
		T = rndi(10, 500);
		QTN = "Convierte "+T+" K en °C.<br>";
		ANS = T - 273.15;
        UNI = "°C";
	}

    // °C -> °F
	if(opc===3){
		T = rndi(-200,300);
		QTN = "Convierte "+T+" °C en °F.<br>";
		ANS = (9.0/5.0)*T + 32.0;
        UNI = "°F";
	}

    // °F -> °C
	if(opc===4){
		T = rndi(-100,300);
		QTN = "Convierte "+T+" °F en °C.<br>";
		ANS = (5.0/9.0)*(T - 32.0);
        UNI = "°C";
	}

}

//------------------------------------------------------------------------------
function exe_conv_P(){

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
		QTN = "Convierte "+P+" atm en mmHg.<br>";
		ANS = 760*P; UNI = "mmHg";
	}

	// mmHg -> atm
	if(opt===2){
		P = rndi(200,760*3);
		QTN = "Convierte "+P+" mmHg en atm.<br>";
		ANS = (1.0/760.0)*P; UNI = "atm";
	}

	// atm -> Pa
	if(opt===3){
		P = rndi(1,10);
		QTN = "Convierte "+P+" atm en kPa.<br>";
		ANS = 101.325*P; UNI = "kPa";
	}

	// Pa -> atm
	if(opt===4){
		P = rndi(100,999);
		QTN = "Convierte "+P+" kPa en atm.<br>";
		ANS = (1.0/101.325)*P; UNI = "atm";
	}

	// mmHg -> Pa
	if(opt===5){
		P = rndi(200,760*3);
		QTN = "Convierte "+P+" mmHg en kPa.<br>";
		ANS = (101.325/760.0)*P; UNI = "kPa";
	}

	// Pa -> mmHg
	if(opt===6){
		P = rndi(100,999);
		QTN = "Convierte "+P+" kPa en mmHg.<br>";
		ANS = (760.0/101.325)*P; UNI = "mmHg";
	}



}

//------------------------------------------------------------------------------
function exe_conv_V(){

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
		QTN = "Convierte "+V+" m<sup>3</sup> en L.<br>";
		ANS = 1000*V; UNI = "L";
	}

	// L -> m3
	if(opt===2){
		V = rndi(1000,10000);
		QTN = "Convierte "+V+" L en m<sup>3</sup>.<br>";
		ANS = (1.0/1000.0)*V; UNI = "m<sup>3</sup>";
	}

	// cm3 -> mL
	if(opt===3){
		V = rndi(10,90)*10;
		QTN = "Convierte "+V+" cm<sup>3</sup> en mL.<br>";
		ANS = V; UNI = "mL";
	}

}


//------------------------------------------------------------------------------
function exe_conv_E(){



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
		QTN = "Convierte "+E+" cal en kJ.<br>";

		E = E*(4.186/1); // J
		E = E/1000; // kJ

		ANS = E; UNI = "kJ";
	}

	// J -> cal
	if(opt===2){
		E = rndi(100,1000);
		QTN = "Convierte "+E+" J en cal.<br>";

		E = E*(1/4.186); // cal

		ANS = E; UNI = "cal";
	}

	// atmL -> J
	if(opt===3){
		E = rndi(10,100);
		QTN = "Convierte "+E+" atm L en J.<br>";

		E = E*(101.325/1); // J

		ANS = E; UNI = "J";
	}

	// J -> atm L
	if(opt===4){
		E = rndi(100,1000);
		QTN = "Convierte "+E+" J en atm L.<br>";

		E = E*(1/101.325); // atm L

		ANS = E; UNI = "atm L";
	}



}

//------------------------------------------------------------------------------
function exe_conv_n(){

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

        QTN  = "Convierte "+n+" mol de "+COMP+" a gramos.<br>";;
        ANS = m;
        UNI = "g";
    }

    // mol -> gramos
    if(opc===2){

        m = rndi(1,10)*100;
        n = m/M;

        QTN  = "Convierte "+m+" g de "+COMP+" a mol.<br>";;
        ANS = n;
        UNI = " mol";
    }
}


//------------------------------------------------------------------------------
function exe_conv_d(){

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
		QTN += "calcula el volumen que ocupan " + m + " gramos de " + COMP +".<br>"

		V = m/d;

		if(V<1000){
			ANS = V;
			UNI = "mL";
		}else{
			ANS = V/1000;
			UNI = "L";
		}

    }

    if(opc===2){

        n = rndi(1,10)*10;
        m = n*M;

        QTN  = "Si la densidad del "+COMP+" es igual a "+d+" g/mL, ";
		QTN += "calcula el volumen que ocupan " + n + " moles de " + COMP +".<br>"

		V = m/d;

		if(V<1000){
			ANS = V;
			UNI = "mL";
		}else{
			ANS = V/1000;
			UNI = "L";
		}
    }


    if(opc===3){

        V = rndi(1,1000);

        QTN  = "Si la densidad del "+COMP+" es igual a "+d+" g/mL, ";
		QTN += "calcula la masa de " + V + " L de " + COMP +".<br>"

		V = V*1000; //mL
		m = d*V;

		if(m<1000){
			ANS = m;
			UNI = "g";
		}else{
			ANS = m/1000;
			UNI = "kg";
		}
    }


}



//------------------------------------------------------------------------------
function exe_conv_Vm(){

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
	QTN += "calcula el volumen molar del " + COMP +".<br>"

	Vm = M/d;

	if(Vm<1000){
		ANS = Vm;
		UNI = "mL/mol";
	}else{
		ANS = Vm/1000;
		UNI = "L/mol";
	}


}


//------------------------------------------------------------------------------
function exe_ley_charles(){

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

		QTN = "Durante un proceso isobárico, el volumen de un gas cambia de "+V1+ " L a "+V2+" L. Si la temperatura inicial del gas era igual a "+T1+" K, estima la temperatura final del gas.<br>";

		T2 = V2*T1/V1;

		ANS = T2;
		UNI = "K";
	}

	if(opc===2){

		V1 = rndi(1,50); // L
		while(1){
            T1 = rndi(250,500); // K
			T2 = rndi(250,500); // K
			if(Math.abs(T1-T2)>10) break;
		}

        QTN = "Durante un proceso isobárico, la temperatura de un gas cambia de "+T1+ " K a "+T2+" K. Si el volumen inicial del gas era igual a "+V1+" L, estima el volumen final del gas.<br>";

		V2 = V1*T2/T1;

		ANS = V2;
		UNI = "L";
	}

	if(opc===3){

		let opc2 = rndi(1,3);

		T1 = rndi(250,500); // K

		if(opc2===1){
			QTN = "Durante un proceso isobárico, un gas disminuye su volumen a la mitad. Si la temperatura del gas al inicio del proceso es igual a "+T1+" K, estima la temperatura final del gas.<br>";
			T2 = T1/2;
		}

		if(opc2===2){
			QTN = "Durante un proceso isobárico, un gas duplica su volumen. Si la temperatura del gas al inicio del proceso es igual a "+T1+" K, estima la temperatura final del gas.<br>";
			T2 = 2*T1;
		}

		if(opc2===3){
			QTN = "Durante un proceso isobárico, un gas triplica su volumen. Si la temperatura del gas al inicio del proceso es igual a "+T1+" K, estima la temperatura final del gas.<br>";
			T2 = 3*T1;
		}

		ANS = T2;
		UNI = "K";
	}
}

//------------------------------------------------------------------------------
function exe_ley_boyle(){

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

		QTN = "Durante un proceso isotérmico, el volumen de un gas cambia de "+V1+ " L a "+V2+" L. Si la presión inicial del gas era igual a "+P1+" atm, estima la presión final del gas.<br>";

		P2 = P1*(V1/V2);

		ANS = P2;
		UNI = "atm";
	}

	if(opc===2){

		V1 = rndi(1,50); // L
		while(1){
            P1 = rndi(250,2*760); // mmHg
			P2 = rndi(250,2*760); // mmHg
			if(Math.abs(P1-P2)>250) break;
		}

        QTN = "Durante un proceso isotérmico, la presión de un gas cambia de "+P1+ " mmHg a "+P2+" mmHg. Si el volumen inicial del gas era igual a "+V1+" L, estima el volumen final del gas.<br>";

		V2 = V1*(P1/P2);

		ANS = V2;
		UNI = "L";
	}

	if(opc===3){

		let opc2 = rndi(1,3);

		P1 = rndi(100,1000); // kPa

		if(opc2===1){
			QTN = "Durante un proceso isotérmico, un gas disminuye su volumen a la mitad. Si la presión del gas al inicio del proceso es igual a "+P1+" kPa, estima la presión final del gas.<br>";
			P2 = 2*P1;
		}

		if(opc2===2){
			QTN = "Durante un proceso isotérmico, un gas duplica su volumen. Si la presión del gas al inicio del proceso es igual a "+P1+" kPa, estima la presión final del gas.<br>";
			P2 = P1/2;
		}

		if(opc2===3){
			QTN = "Durante un proceso isotérmico, un gas triplica su volumen. Si la presión del gas al inicio del proceso es igual a "+P1+" kPa, estima la presión final del gas.<br>";
			P2 = P1/3;
		}

		ANS = P2;
		UNI = "kPa";
	}


	if(opc===4){

		let opc2 = rndi(1,3);

		V1 = rndi(100,1000); // L

		if(opc2===1){
			QTN = "Durante un proceso isotérmico, un gas disminuye su presión a la mitad. Si volumen del gas al inicio del proceso es igual a "+V1+" L, estima el volumen final del gas.<br>";
			V2 = 2*V1;
		}

		if(opc2===2){
			QTN = "Durante un proceso isotérmico, un gas duplica su presión. Si el volumen del gas al inicio del proceso es igual a "+V1+" L, estima el volumen final del gas.<br>";
			V2 = V1/2;
		}

		if(opc2===3){
			QTN = "Durante un proceso isotérmico, un gas triplica su presión. Si el volumen del gas al inicio del proceso es igual a "+V1+" L, estima el volumen final del gas.<br>";
			V2 = V1/3;
		}

		ANS = V2;
		UNI = "L";
	}

}

//------------------------------------------------------------------------------
function exe_2a_ley_charles(){

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

		QTN = "Durante un proceso isocórico, la presión de un gas cambia de "+P1+ " atm a "+P2+" atm. Si la temperatura inicial del gas era igual a "+T1+" K, estima la temperatura final del gas.<br>";

		T2 = T1*(P2/P1);

		ANS = T2;
		UNI = "K";
	}

	if(opc===2){

		P1 = rndi(1,50); // atm
		while(1){
            T1 = rndi(250,500); // K
			T2 = rndi(250,500); // K
			if(Math.abs(T1-T2)>10) break;
		}

        QTN = "Durante un proceso isocórico, la temperatura de un gas cambia de "+T1+ " K a "+T2+" K. Si la presión inicial del gas era igual a "+P1+" atm, estima la presión final del gas.<br>";

		P2 = P1*(T2/T1);

		ANS = P2;
		UNI = "atm";
	}

	if(opc===3){

		let opc2 = rndi(1,3);

		T1 = rndi(250,500); // K

		if(opc2===1){
			QTN = "Durante un proceso isocórico, un gas disminuye su presión a la mitad. Si la temperatura del gas al inicio del proceso es igual a "+T1+" K, estima la temperatura final del gas.<br>";
			T2 = T1/2;
		}

		if(opc2===2){
			QTN = "Durante un proceso isocórico, un gas duplica su presión. Si la temperatura del gas al inicio del proceso es igual a "+T1+" K, estima la temperatura final del gas.<br>";
			T2 = 2*T1;
		}

		if(opc2===3){
			QTN = "Durante un proceso isocórico, un gas triplica su presión. Si la temperatura del gas al inicio del proceso es igual a "+T1+" K, estima la temperatura final del gas.<br>";
			T2 = 3*T1;
		}

		ANS = T2;
		UNI = "K";
	}
}

//------------------------------------------------------------------------------
function exe_ley_avogadro(){

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

		QTN = "A cierta temperatura y presión, "+n1+ " mol de gas ocupan un volumen igual a "+V1+" L. Calcula el volumen que ocuparán "+n2+" mol de gas a la misma temperatura y presión.<br>";

		V2 = V1*(n2/n1);

		ANS = V2;
		UNI = "L";
	}

	if(opc===2){

		n1 = rndi(1,20); // mol

		while(1){
            V1 = rndi(1,100); // L
			V2 = rndi(1,100);
			if(Math.abs(V1-V2)>15) break;
		}

		QTN = "A cierta temperatura y presión, "+n1+ " mol de gas ocupan un volumen igual a "+V1+" L. Calcula la cantidad de sustancia necesaria para un volumen igual a "+V2+" L de gas a la misma temperatura y presión.<br>";

		n2 = n1*(V2/V1);

		ANS = n2;
		UNI = "mol";
	}

}



//------------------------------------------------------------------------------
function exe_gas_ideal(){

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
        UNI = "L";
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
        UNI = "m<sup>3</sup>";
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
        UNI = "atm";
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
        UNI = "kPa";
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
        UNI = "°C";
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
        UNI = "K";
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
        UNI = "g/mol";
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
        UNI = "g/L";
    }


}





//------------------------------------------------------------------------------
function exe_P_abs(){

    let Pabs, Pmano, Patm;
    let opc = rndi(1,2);



    QTN = "";
    ANS = 1;


    // manometro tubo U cerrado.
	if(opc===1){

		Pmano = rndi(10,720); // mmHg
        Patm = rndi(740,760); // mmHg
		Pabs = Pmano;

		QTN = "Se desea medir la presión absoluta de un gas confinado. La lectura del manómetro de tubo en U (cerrado) es igual a "+Pmano+ " mmHg. La lectura del barómetro es igual a "+Patm+" mmHg. Calcula la presión absoluta del gas confinado.<br>";

		ANS = Pabs;
		UNI = "mmHg";
	}

    // manometro tubo U abierto.
	if(opc===2){

        while(1){
            Pmano = rndi(300,2*760); // mmHg
            Patm = rndi(740,760); // mmHg
            Pabs = Pmano + Patm;
            if(Pabs > Patm) break;
        }


		QTN = "Se desea medir la presión absoluta de un gas confinado. La lectura del manómetro de tubo en U (abierto) es igual a "+Pmano+ " mmHg. La lectura del barómetro es igual a "+Patm+" mmHg. Calcula la presión absoluta del gas confinado.<br>";

		Pabs = Pmano + Patm;

		ANS = Pabs;
		UNI = "mmHg";
	}




}



//------------------------------------------------------------------------------
function exe_frac_molar(){

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
        ANS = X_A; UNI = "";
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
        ANS = X_C; UNI = "";

	}

}


//------------------------------------------------------------------------------
function exe_ley_Dalton(){

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

		ANS = P_total; UNI = " atm";

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

		ANS = P_total; UNI = " atm";

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

		ANS = P_B; UNI = " mmHg";

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

		ANS = P_A; UNI = " mmHg";

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

		ANS = P_A; UNI = " mmHg";

	}

}

//------------------------------------------------------------------------------
function exe_ley_Amagat(){

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

		ANS = V_total; UNI = " L";

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

		ANS = V_total; UNI = " L";

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

		ANS = V_B; UNI = " L";

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

		ANS = V_A; UNI = " L";

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

		ANS = V_A; UNI = " L";

	}

}

//------------------------------------------------------------------------------
function exe_Z(){

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
		UNI = "";
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
		UNI = " L";
	}

}

//------------------------------------------------------------------------------
function exe_Van_der_Waals(){



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

        ANS = P; UNI = " atm";
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

        ANS = T; UNI = " K";
	}
}

//------------------------------------------------------------------------------
function exe_Van_der_Waals_Newton(){



    let V, V_, P, P_, T, R, n;
    let UnGas, aa, bb;
    let A, B, C, D, V_ideal, Vold;
    let i, imax, f, fp;

    let chooseGas = rndi(1,3);


    if(chooseGas===1){ UnGas = "Cl<sub>2</sub>";  aa = 6.49;  bb = 0.0562;  }
    if(chooseGas===2){ UnGas = "CO<sub>2</sub>"; aa = 3.59;  bb = 0.0427; }
    if(chooseGas===3){ UnGas = "CCl<sub>4</sub>"; aa = 20.4; bb = 0.138; }

    T = rndi(500,800); //K
    n = rndi(10,20); //mol
    P = rndi(50, 100); // atm
    R = 0.08206;

    A = P;
    B = -n*bb*P - n*R*T;
    C = aa*n*n;
    D = -aa*bb*n*n*n;

    V_ideal = n*R*T/P;

    V_old = V_ideal;

	console.log(V_ideal);

    //Newton
    MIRAME = "<b>Método de Newton</b>";
    MIRAME+= "<center><table>";
    MIRAME+= "<style>table, th, td {border:1px solid black;}</style>";
    MIRAME+= "<tr><td>i</td><td>V</td><td>f(V)</td></tr>";

    i = 0;
    imax = 100;
    while(1){

        i++;

        let x = V_old;
        f = A*x*x*x + B*x*x + C*x + D;
        fp = 2*A*x*x + B*x + C;

        //MIRAME += i +" "+ x +" "+ round6(f) + "<br>";
        MIRAME += "<tr><td>"+i+"</td><td>"+V_old+"</td> <td>"+f+"</td></tr>";

        V = V_old - f/fp;

        //console.log(i, V_old);

        //if( Math.abs(V - V_old) <= 1e-4 ) break;
        if( f <= 1e-2 ) break;
        if( i >= imax ) break;

        V_old = V;

    }

    MIRAME += "</table></center>";

    console.log(i, V_old, V_ideal);

    QTN  = "Mediante la ecuación de Van der Waals, calcula el volumen de "+ n + " moles de "+ UnGas ;
    QTN += " a " + P + " atm y " + T ;
    QTN += " K (a = " + aa + " atm L<sup>2</sup> / mol<sup>2</sup> y b = " + bb + " L/mol).";

    ANS = V; UNI = " L";


}


//------------------------------------------------------------------------------
function exe_1a_ley(){

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



        ANS = dU; UNI=" kJ";

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

        ANS = dU; UNI=" kJ";

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

        ANS = q; UNI=" kJ";

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

        ANS = q; UNI=" kJ";

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

		ANS = w; UNI=" kJ";


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

		ANS = w; UNI=" kJ";

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

		ANS = q; UNI=" kJ";


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

		ANS = q; UNI=" kJ";


    }

}

//BORRAR el proximo semestre:
//------------------------------------------------------------------------------
function exe_Cp_Cv(){

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

        ANS = Cp; UNI=" J / K";

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

        ANS = Cv; UNI=" J / K";

    }

}

//-----------------------------------------------------------------------------------------
function exe_Cp_gas_ideal(){

    let Cp, Cv, dU, dH, T2, T1, dT, n, R, T;

    R = 8.314; // J / mol K



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

        ANS = Cp; UNI=" J / K";

}

//-----------------------------------------------------------------------------------------
function exe_Cv_gas_ideal(){

    let op = rndi(1,2);

    let Cp, Cv, dU, dH, T2, T1, dT, n, R, T;

    R = 8.314; // J / mol K


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

        ANS = Cv; UNI=" J / K";


}

//BORRAR para el siguiente semestre:
//------------------------------------------------------------------------------
function exe_calor(){

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
		QTN += " Calcula el calor específico de la sustancia. <br>";

        ANS = C; UNI = "cal / g °C"

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
		QTN += "desde "+ T1 + " °C hasta " + T2 + " °C.<br>";

		ANS = q; UNI = "kJ"

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
		QTN += "desde "+ T1 + " °C hasta " + T2 + " °C.<br>";

		ANS = q; UNI = "kcal"

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
		QTN += T1 + " °C ¿Cuál es la temperatura final? <br>";

		ANS = T2; UNI = "°C ";



	}

}

//BORRAR para el siguiente semestre:
//------------------------------------------------------------------------------
function exe_calor_c_variable(){



    /*

    dq = C dT  // debemos integrar

    caso 1:
    C = a + b*T
    q = a * (T2 - T1) + (b / 2) * (Math.pow(T2, 2) - Math.pow(T1, 2));

    caso 2:
    C = a + b*T + c*T**2
    q = a * (T2 - T1) + (b / 2) * (Math.pow(T2, 2) - Math.pow(T1, 2)) + (c / 3) * (Math.pow(T2, 3) - Math.pow(T1, 3));

    caso 3:
    C = a + b*T + c*T**-2
    q = a * (T2 - T1) + (b / 2) * (Math.pow(T2, 2) - Math.pow(T1, 2)) - c * ((1 / T2) - (1 / T1));

    caso 4:
    C = a*T**3
    q = (a / 4) * (Math.pow(T2, 4) - Math.pow(T1, 4));

    */

    let q, C, Cm, T1, T2, dT, m, M, n;
    let a,b,c, ecuacion;


        m = rndi(1,10)*10; //gramos
        a = rndi(1,20)/10;
        b = rndi(1,20)/10;
        c = rndi(1,20)/10;
        T1 = rndi(25,35);
        T2 = T1 + rndi(25,35);


    let op = rndi(1,4);

    if( op === 1 ){
        C = a+" + "+b+"T";
        q = a * (T2 - T1) + (b / 2) * (Math.pow(T2, 2) - Math.pow(T1, 2));
        q = m*q;
    }

    if( op === 2 ){
        C = a+" + "+b+"T + "+c+"T<sup>2</sup>";
        q = a * (T2 - T1) + (b / 2) * (Math.pow(T2, 2) - Math.pow(T1, 2)) + (c / 3) * (Math.pow(T2, 3) - Math.pow(T1, 3));
        q = m*q;
    }

    if( op === 3 ){
        C = a+" + "+b+"T + "+c+"T<sup>-2</sup>";
        q = a * (T2 - T1) + (b / 2) * (Math.pow(T2, 2) - Math.pow(T1, 2)) - c * ((1 / T2) - (1 / T1));
        q = m*q;
    }

    if( op === 4 ){
        C = a+"T<sup>3</sup>";
        q = (a / 4) * (Math.pow(T2, 4) - Math.pow(T1, 4));
        q = m*q;
    }


    QTN  = " El calor específico de cierta sustancia depende de la temperatura: <br>";
    QTN += "c(T) = "+ C + " en cal/g°C. <br>";
    QTN += "Calcula el calor necesario para calentar "+ m + " g de dicha sustancia desde ";
    QTN += T1+ " °C hasta " + T2 +" °C. <br>";


    if(q>1000){
        q = q/1000;
        ANS = q; UNI = " kcal";
    }else{
        ANS = q; UNI = " cal";
    }

}



//------------------------------------------------------------------------------
function exe_calor_Cp_variable(){



    /*

    dq = C dT  // debemos integrar

    caso 1:
    C = a + b*T
    q = a * (T2 - T1) + (b / 2) * (Math.pow(T2, 2) - Math.pow(T1, 2));

    caso 2:
    C = a + b*T + c*T**2
    q = a * (T2 - T1) + (b / 2) * (Math.pow(T2, 2) - Math.pow(T1, 2)) + (c / 3) * (Math.pow(T2, 3) - Math.pow(T1, 3));

    caso 3:
    C = a + b*T + c*T**-2
    q = a * (T2 - T1) + (b / 2) * (Math.pow(T2, 2) - Math.pow(T1, 2)) - c * ((1 / T2) - (1 / T1));

    caso 4:
    C = a*T**3
    q = (a / 4) * (Math.pow(T2, 4) - Math.pow(T1, 4));

    */

    let q, C, Cm, T1, T2, dT, m, M, n;
    let a,b,c, ecuacion;


        m = rndi(1,10)*10; //gramos
        a = rndi(1,20)/10;
        b = rndi(1,20)/10;
        c = rndi(1,20)/10;
        T1 = rndi(25,35);
        T2 = T1 + rndi(25,35);


    let op = rndi(1,4);

    if( op === 1 ){
        C = a+" + "+b+"T";
        q = a * (T2 - T1) + (b / 2) * (Math.pow(T2, 2) - Math.pow(T1, 2));
        q = m*q;
    }

    if( op === 2 ){
        C = a+" + "+b+"T + "+c+"T<sup>2</sup>";
        q = a * (T2 - T1) + (b / 2) * (Math.pow(T2, 2) - Math.pow(T1, 2)) + (c / 3) * (Math.pow(T2, 3) - Math.pow(T1, 3));
        q = m*q;
    }

    if( op === 3 ){
        C = a+" + "+b+"T + "+c+"T<sup>-2</sup>";
        q = a * (T2 - T1) + (b / 2) * (Math.pow(T2, 2) - Math.pow(T1, 2)) - c * ((1 / T2) - (1 / T1));
        q = m*q;
    }

    if( op === 4 ){
        a = rndi(1,9)/100;
        C = a+"T<sup>3</sup>";
        q = (a / 4) * (Math.pow(T2, 4) - Math.pow(T1, 4));
        q = m*q;
    }

    QTN  = " El calor específico de cierta sustancia depende de la temperatura: <br>";
    QTN += "c<sub>P</sub>(T) = "+ C + " en cal/g°C. <br>";
    QTN += "Calcula el calor necesario para calentar "+ m + " g de dicha sustancia desde ";
    QTN += T1+ " °C hasta " + T2 +" °C. <br>";


    if(q>1000){
        q = q/1000;
        ANS = q; UNI = " kcal";
    }else{
        ANS = q; UNI = " cal";
    }

}



//------------------------------------------------------------------------------
function exe_calor_isobarico(){

    let q_p, C_p, n, R, T1, T2, dT, P, V1, V2, m, TEXTO;

    R = 8.314;

    let op = rndi(1,3);

    if( op === 1 ){


        n = 1; //rndi(2,10);
        P = rndi(100,500); //kPa

        C_p = (5/2)*n*R;

        T1 = rndi( 5, 25);
        T2 = rndi(40, 80);

        q_p = C_p * (T2 - T1);
        
        if(coin()===1)
            TEXTO = "la cantidad de calor que absorbió el gas.";
        else
            TEXTO = "el cambio de entalpía del gas.";

        QTN  = n+" mol de gas ideal monoatómico se calienta desde "+T1+" °C hasta "+T2+" °C, manteniendo la presión constante. Calcula "+ TEXTO;

        ANS = q_p; UNI = " J"

    }

    if( op === 2 ){

        while(1){

            //console.log('calor isobárico, 2');

            n = 1;
            P = rndi(10,50); //kPa
            C_p = (5/2)*n*R;

            V1 = rndi( 1, 10);
            V2 = rndi(15, 20);
            q_p = ( C_p*P*1000/(n*R) )*(V2 - V1);
            q_p = q_p/1000;

            if ( q_p%2 === 0 || q_p%5 === 0 ) break;

        }
        
        if(coin()===1)
            TEXTO = "la cantidad de calor que absorbió el gas.";
        else
            TEXTO = "el cambio de entalpía del gas.";        

        QTN  = n+" mol de gas ideal monoatómico se somete a un proceso isobárico ("+P+" kPa). El volumen del gas cambia desde "+V1+" m<sup>3</sup> hasta "+V2+" m<sup>3</sup>.";
        QTN += " Calcula "+ TEXTO;


        ANS = q_p; UNI = " kJ"

    }
    
    if(op===3){
        
		 m = rndi(1,10)*10;
		 T1 = rndi(1,99);
		 T2 = T1 + rndi(2,8);

		 dT = T2 - T1;

		 q_p = rndi(50,100)*10;

		 C_p = q_p / (m * dT);

		QTN  = m+" g de cierta sustancia se calienta desde "+T1+" °C hasta "+T2+" °C, ";
		QTN += "absorbiendo " + q_p +" cal de calor. ";
		QTN += " Calcula el calor específico de la sustancia. <br>";

        ANS = C_p; UNI = "cal / g °C"        
        
    }

}

//------------------------------------------------------------------------------
function exe_calor_isocorico(){

    //let q_p, C_p, n, R, T1, T2, dT, P, V1, V2, m, TEXTO;
    let q_v, C_v, n, R, P1, P2, V, T1, T2, dT, m, TEXTO;

    R = 8.314;

    let op = rndi(1,3);

    if( op === 1 ){


        n = 1; //rndi(2,10);
  
        C_v = (3/2)*n*R;

        T1 = rndi( 5, 25);
        T2 = rndi(40, 80);

        q_v = C_v * (T2 - T1);
        
        if(coin()===1)
            TEXTO = "la cantidad de calor que absorbió el gas.";
        else
            TEXTO = "el cambio de la energía interna del gas.";

        QTN  = n+" mol de gas ideal monoatómico se calienta desde "+T1+" °C hasta "+T2+" °C, manteniendo la presión constante. Calcula "+ TEXTO;

        ANS = q_v; UNI = " J"

    }


    if( op === 2 ){


            
        n = 1;
        V = rndi(10,50); // m3
        C_v = (3/2)*n*R;

        P1 = rndi( 10, 100);
        P2 = rndi(150, 200); //kPa

        q_v = ( C_v*V/(n*R) )*(P2*1000 - P1*1000);

        q_v = q_v/1000;            
       
        if(coin()===1)
            TEXTO = "la cantidad de calor que absorbió el gas.";
        else
            TEXTO = "el cambio de la energía interna del gas.";        


        QTN  = n+" mol de gas ideal monoatómico se somete a un proceso isocórico ("+V+" m<sup>3</sup>). La presión del gas cambia desde "+P1+" kPa hasta "+P2+" kPa.";
        QTN += " Calcula "+ TEXTO;


        ANS = q_v; UNI = " kJ"

    }
    

    if(op===3){
        
		 m = rndi(1,10)*10;
		 T1 = rndi(1,99);
		 T2 = T1 + rndi(2,8);

		 dT = T2 - T1;

		 q_v = rndi(50,100)*10;

		 C_v = q_v / (m * dT);

		QTN  = m+" g de cierta sustancia se calienta desde "+T1+" °C hasta "+T2+" °C, ";
		QTN += "absorbiendo " + q_v +" cal de calor. ";
		QTN += " Calcula el calor específico de la sustancia. <br>";

        ANS = C_v; UNI = "cal / g °C"        
        
    }
    


}

//------------------------------------------------------------------------------
function exe_delta_H(){
    
    let dH, dU, P, dV, V1, V2;
    
    dU = rndi(10,90)*10; // J
    P = rndi(10,90)*1000; // Pa
    V1 = rndi(1,10); // m3
    V2 = V1 + rndi(1,10);
    dV = V2 - V1;
    
    dH = dU + P*dV;
    
    if( coin()===1 ){

        QTN  = "En un proceso isobárico ("+P/1000+" kPa), el sistema cambia su volumen desde "+V1+" m<sup>3</sup> hasta "+V2+" m<sup>3</sup>. ";
        QTN += "Si el cambio en la energía interna es igual a "+dU+" J, calcula el cambio de entalpía. <br>";
        
        if(dH > 1000){
            ANS = dH/1000; UNI = "kJ";
        }else{
            ANS = dH; UNI = "J";
        }
               
    }else{
        
        QTN  = "En un proceso isobárico ("+P/1000+" kPa), el sistema cambia su volumen desde "+V1+" m<sup>3</sup> hasta "+V2+" m<sup>3</sup>. ";
        QTN += "Si el cambio en la entalpía es igual a "+dH/1000+" kJ, calcula el cambio de la energía interna. <br>";
        
        if(dU > 1000){
            ANS = dU/1000; UNI = "kJ";
        }else{
            ANS = dU; UNI = "J";
        }       
        
    }
    


}


//------------------------------------------------------------------------------
function exe_rx_quim_calor_1(){

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
    UNI = " kJ";

}

//------------------------------------------------------------------------------
function exe_rx_quim_calor_2(){

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
        UNI = " mol";
    }else{
        n = -q*fact/dH;
        m = n*M;
        ANS = m;
        UNI = " g";
    }

}

//------------------------------------------------------------------------------
function exe_calor_cambio_de_fase(){

	let q_total, q1, q2, q3;
    let dH_fus, dH_vap;
    let T1, T2, m, n;
    let c_agua, c_hielo, c_vap;
    let UNIdad, x;

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
            UNIdad = "gramos";

            m = x;

        }else{

            x = rndi(10,100)*10; // moles
            UNIdad = "moles";

            m = x*18; //gramos

        }


		if(rndi(1,2)===1){


			q_total = m*dH_fus; // cambio de fase, fusion

			QTN  = x+" " + UNIdad + " de agua sólida (hielo) se derriten completamente a 0 °C y 1 atm. ";
			QTN += " Calcula el calor total del proceso. ";
            QTN += "Emplea los siguientes datos: ";
            QTN += " &Delta;H<sub>fus</sub> = 80 cal/g";

		}else{

			q_total = m*dH_vap; // cambio de fase, evaporacion

			QTN  = x+" " + UNIdad + " de agua líquida se evaporan completamente a 100 °C y 1 atm. ";
			QTN += " Calcula el calor total del proceso. ";
            QTN += "Emplea los siguientes datos: ";
            QTN += " &Delta;H<sub>vap</sub> = 540 cal/g";

		}


		if(q_total<1000){
			ANS = q_total;
			UNI = " cal";
		}else{
			ANS = q_total/1000;
			UNI = " kcal";
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
		QTN += " Calcula el calor total del proceso. ";
        QTN += "Emplea los siguientes datos: <br>";
        QTN += "c<sub>liq</sub> = 1 cal/g °C, c<sub>sol</sub> = 0.5 cal/g °C,";
        QTN += " &Delta;H<sub>fus</sub> = 80 cal/g";


		if(q_total<1000){
			ANS = q_total;
			UNI = " cal";
		}else{
			ANS = q_total/1000;
			UNI = " kcal";
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
        QTN += "Emplea los siguientes datos: <br>";
        QTN += "c<sub>liq</sub> = 1 cal/g °C, c<sub>gas</sub> = 0.5 cal/g °C,";
        QTN += " &Delta;H<sub>vap</sub> = 540 cal/g";


		if(q_total<1000){
			ANS = q_total;
			UNI = " cal";
		}else{
			ANS = q_total/1000;
			UNI = " kcal";
		}


    }

}

//------------------------------------------------------------------------------
function exe_suma_dH(){

    let opc = rndi(1,3);

    let dH_sbl, dH_fus, dH_vap;

    dH_fus = rndi(20,60); //kJ
    dH_vap = rndi(30,50);

    dH_sbl = dH_fus + dH_vap;

    if(opc===1){

        QTN  = "El calor de fusión y evaporación de cierta sustancia es igual a ";
        QTN += dH_fus + " kJ/mol y " + dH_vap + " kJ/mol, respectivamente. ";
        QTN += "Calcula el calor de sublimación.";
        RespuestaEspecial = 'yes'
        ANS = dH_sbl;
        UNI = "kJ / mol";
    }

    if(opc===2){

        QTN  = "El calor de fusión y sublimación de cierta sustancia es igual a ";
        QTN += dH_fus + " kJ/mol y " + dH_sbl + " kJ/mol, respectivamente. ";
        QTN += "Calcula el calor de evaporación.";
        RespuestaEspecial = 'yes'
        ANS = dH_vap;
        UNI = "kJ / mol";
    }

    if(opc===3){

        QTN  = "El calor de evaporación y sublimación de cierta sustancia es igual a ";
        QTN += dH_vap + " kJ/mol y " + dH_sbl + " kJ/mol, respectivamente. ";
        QTN += "Calcula el calor de fusión.";
        RespuestaEspecial = 'yes'
        ANS = dH_fus;
        UNI = "kJ / mol";
    }



}



//------------------------------------------------------------------------------
function exe_trabajo_isobarico(){

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

        ANS = w; UNI = " kJ";

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

        ANS = w; UNI = " J";

    }
}


//----------------------------------------------------- PROCESO ISOTERMICO
function exe_trabajo_calor_isotermico(){

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

		ANS = round4(ans); UNI=" kJ";
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

		ANS = round4(ans); UNI=" kJ";

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

		ANS = round4(ans); UNI=" kJ";
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

		ANS = round4(ans); UNI=" kJ";
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

		ANS = T; UNI=" °C";
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

		ANS = V2; UNI=" m<sup>3</sup>";
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

		ANS = V1; UNI=" m<sup>3</sup>";
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

		ANS = P2; UNI=" kPa";

    }


}


//----------------------------------------------------- PROCESO ADIABATICO
function exe_trabajo_adiabatico(){

	let T1, T2;
	let P1, P2;
	let Cp, Cv, c, g;
	let deltaU, w;
	let V1, V2;
	let R = 8.314;

    let op = rndi(1,2);

    if(op===1)
    {
        while(1)
        {
            T1 = rndi(10,500); //°C
            T2 = rndi(10,500); //°C
            if(Math.abs(T1-T2) >= 50.0) break;
        }

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

		ANS = round2(deltaU); UNI=" kJ";
	}


    if(op===2)
    {
        while(1)
        {
            T1 = rndi(10,500); //°C
            T2 = rndi(10,500); //°C
            if(Math.abs(T1-T2) >= 50.0) break;
        }

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

		ANS = round2(w); UNI=" kJ";
	}


}

//------------------------------------------------------------------------------
function exe_ecs_adiabaticas(){

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

        ANS = round2(T2); UNI=" K";

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

        ANS = round2(V2); UNI=" L";

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

		ANS = round2(P2); UNI=" kPa";


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

		ANS = round2(V2); UNI=" L";


	}

}


//------------------------------------------------------------------------------
function exe_epsilon(){

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
        UNI = "%";
        negativos='no';
    }

    if( op===2 ){
        QTN = "La eficiencia de una máquina térmica es igual a "+round2(eps)+"%; "
        QTN += "calcula el trabajo producido cuando se alimenta con "+q_in+" kJ de calor.";

        ANS = w_out;
        UNI = "kJ";
        negativos='no';
    }

    if( op===3 ){
        QTN = "La eficiencia de una máquina térmica es igual a "+round2(eps)+"%; "
        QTN += "calcula el calor necesario para producir "+w_out+" kJ de trabajo.";

        ANS = q_in;
        UNI = "kJ";
        negativos='no';
    }

    if( op===4 ){
        QTN = "Una máquina térmica se alimenta con "+q_in+" kJ de calor y "
        QTN += "desprende "+q_out+" kJ de calor. Calcula la eficiencia de la máquina.";

        ANS = round2(eps);
        UNI = "%";
        negativos='no';
    }

    if( op===5 ){
        QTN =  "La eficiencia de una máquina térmica es igual a "+round2(eps)+"%; "
        QTN += "Calcula el calor que desprende cuando se alimenta con "+q_in+" kJ de calor.";

        ANS = q_out;
        UNI = "kJ";
        negativos='no';
    }

    if( op===6 ){
        QTN =  "La eficiencia de una máquina térmica es igual a "+round2(eps)+"%; "
        QTN += "Calcula el calor que debe alimentarse para que desprenda "+q_out+" kJ de calor.";

        ANS = q_in;
        UNI = "kJ";
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
        UNI = "%";
        negativos='no';
    }


    if( op===8 ){


        T_hot =  rndi(50,100)*10;
        T_cold = rndi(10, 40)*10;

        eps = ( 1 - (T_cold+273.15)/(T_hot+273.15) )*100;

        QTN =  "La eficiencia de una máquina térmica es igual a "+round2(eps)+"%; "
        QTN += "Calcula a qué temperatura sale el calor de la máquina si entra a "+T_hot+" °C.";

        ANS = T_cold;
        UNI = "°C";
        negativos='no';
    }

    if( op===9 ){


        T_hot =  rndi(50,100)*10;
        T_cold = rndi(10, 40)*10;

        eps = ( 1 - (T_cold+273.15)/(T_hot+273.15) )*100;

        QTN =  "La eficiencia de una máquina térmica es igual a "+round2(eps)+"%; "
        QTN += "Calcula a qué temperatura ingresa el calor a la máquina si sale a "+T_cold+" °C.";

        ANS = T_hot;
        UNI = "°C";
        negativos='no';
    }

}


function exe_dS_isobarico(){

    let dS, P, V1, V2, T1, T2, Cp, n;

    let R = 8.314; // J / mol K

    let op2 = rndi(1,7);

    if( op2 === 1 ){ GAS = "H<sub>2</sub>"; Cp = (7/2)*R; }
    if( op2 === 2 ){ GAS = "N<sub>2</sub>"; Cp = (7/2)*R; }
    if( op2 === 3 ){ GAS = "O<sub>2</sub>"; Cp = (7/2)*R; }
    if( op2 === 4 ){ GAS = "CO";            Cp = (7/2)*R; }

    if( op2 === 5 ){ GAS = "He";            Cp = (5/2)*R; }
    if( op2 === 6 ){ GAS = "Ar";            Cp = (5/2)*R; }
    if( op2 === 7 ){ GAS = "Ne";            Cp = (5/2)*R; }

    P = rndi(1,25);

    T1 = rndi(1,25);
    T2 = T1 + rndi(10,50)*10;

    V1 = rndi(25,50);
    V2 = V1 + rndi(10,50)*10;

    if(coin()===1){

        QTN = " 1 mol de "+GAS+" se somete a un proceso isobárico a "+P+" atm. ";
        QTN += "La temperatura cambia desde "+T1+" °C hasta "+T2+" °C. ";
        QTN += "Calcula el cambio de entropía de dicho gas, considerando un comportamiento ideal.";

        T1 += 273.15;
        T2 += 273.15;

        dS = Cp*Math.log(T2/T1);

    }else{

        QTN = " 1 mol de "+GAS+" se somete a un proceso isobárico a "+P+" atm. ";
        QTN += "El volumen del gas cambia desde "+V1+ " L hasta "+V2+" L. ";
        QTN += "Calcula el cambio de entropía de dicho gas, considerando un comportamiento ideal.";

        dS = Cp*Math.log(V2/V1);

    }

    ANS = dS;
    UNI = "J/K";

}

function exe_dS_isocorico(){

    let dS, V, P1, P2, T1, T2, Cv, n;
    
    let R = 8.314; // J / mol K

    let op2 = rndi(1,7);

    if( op2 === 1 ){ GAS = "H<sub>2</sub>"; Cv = (5/2)*R; }
    if( op2 === 2 ){ GAS = "N<sub>2</sub>"; Cv = (5/2)*R; }
    if( op2 === 3 ){ GAS = "O<sub>2</sub>"; Cv = (5/2)*R; }
    if( op2 === 4 ){ GAS = "CO";            Cv = (5/2)*R; }

    if( op2 === 5 ){ GAS = "He";            Cv = (3/2)*R; }
    if( op2 === 6 ){ GAS = "Ar";            Cv = (3/2)*R; }
    if( op2 === 7 ){ GAS = "Ne";            Cv = (3/2)*R; }

    T1 = rndi(1,25);
    T2 = T1 + rndi(10,50)*10;

    P1 = rndi(1,10);
    P2 = P1 + rndi(10,50)*10;

    if(coin()===1){

        QTN = " 1 mol de "+GAS+" se somete a un proceso isocórico. ";
        QTN += "La temperatura cambia desde "+T1+" °C hasta "+T2+" °C. ";
        QTN += "Calcula el cambio de entropía de dicho gas, considerando un comportamiento ideal.";

        T1 += 273.15;
        T2 += 273.15;

        dS = Cv*Math.log(T2/T1);

    }else{

        QTN = " 1 mol de "+GAS+" se somete a un proceso isocórico. ";
        QTN += "La presión del gas cambia desde "+P1+ " atm hasta "+P2+" atm. ";
        QTN += "Calcula el cambio de entropía de dicho gas, considerando un comportamiento ideal.";

        dS = Cv*Math.log(P2/P1);

    }

    ANS = dS;
    UNI = "J/K";


}

function exe_dS_isotermico(){

    let dS, T, V1, V2, P1, P2, Cv, n, GAS;
    

    let R = 8.314; // J / mol K
    
    let op2 = rndi(1,7);

    if( op2 === 1 ){ GAS = "H<sub>2</sub>";}
    if( op2 === 2 ){ GAS = "N<sub>2</sub>";}
    if( op2 === 3 ){ GAS = "O<sub>2</sub>";}
    if( op2 === 4 ){ GAS = "CO";           }

    if( op2 === 5 ){ GAS = "He";           }
    if( op2 === 6 ){ GAS = "Ar";           }
    if( op2 === 7 ){ GAS = "Ne";           }    

    T = rndi(25,100)// °C

    V1 = rndi(25,50);
    V2 = V1 + rndi(10,50)*10;
    
    P1 = rndi(1,10);
    P2 = P1 + rndi(10,50)*10;    
    
    if(coin()===1){

        QTN = " 1 mol de "+GAS+" se somete a un proceso isotérmico reversible. ";
        QTN += "El volumen del gas cambia desde "+V1+" L hasta "+V2+" L. ";
        QTN += "Calcula el cambio de entropía de dicho gas, considerando un comportamiento ideal.";

        dS = R*Math.log(V2/V1);

    }else{

        QTN = " 1 mol de "+GAS+" se somete a un isotérmico reversible. ";
        QTN += "La presión del gas cambia desde "+P1+ " atm hasta "+P2+" atm. ";
        QTN += "Calcula el cambio de entropía de dicho gas, considerando un comportamiento ideal.";

        dS = R*Math.log(P1/P2);

    }    

    ANS = dS;
    UNI = "J/K";



}

//----------------------------------------------------------------------------------------
function exe_dS_isobarico_Cp_variable(){
    
    let q, Cp, T1, T2, dT, n;
    let a, b;

    if( coin()===1 ){
        
        n = rndi(2,10);
        a = rndi(1,20)/10;
        b = rndi(1,20)/10;
        T1 = 300;
        T2 = T1 + rndi(1,5)*100;        
        
        Cp = a+" + "+b+" T";
        dS = n*( a*Math.log(T2/T1) + b*(T2 - T1) );
        
    }else{
        
        n = rndi(2,5);
        a = rndi(1,9)/1000;
        T1 = 200;
        T2 = T1 + rndi(10,50);        
        
        Cp = a+" T<sup>4</sup>";
        dS = n*( a/4*(T2*T2*T2*T2 - T1*T1*T1*T1) );
        
    }
    
    QTN  = "La capacidad calorífica molar de cierta sustancia es: <br>";
    QTN += "C<sub>p</sub>(T) = "+ Cp + " en J mol<sup>-1</sup> K<sup>-1</sup> <br>";
    QTN += "Calcula el cambio de entropía de "+ n + " moles de dicha sustancia en un calentamiento isobárico ";
    QTN += "desde "+T1+ " K hasta " + T2 +" K. <br>";


    if(dS>1000){
        dS = dS/1000;
        ANS = dS; UNI = " kJ/K";
    }else{
        ANS = dS; UNI = " J/K";
    }


}

//------------------------------------------------------------------------------
function exe_delta_G(){
         
    
    let dH, dU, P, dV, V1, V2, T, dS, dG;
    
    while(1){
        dU = rndi(10,90)*10; // J
        P = rndi(10,90)*1000; // Pa
        V1 = rndi(1,10); // m3
        V2 = V1 + rndi(1,10);
        dV = V2 - V1;
        T = rndi(25,800); // °C
        dS = rndi(10,100)*10; // J/K
        
        dH = dU + P*dV;
        
        dG = dH - (T+273.15)*dS;
        dA = dU - (T+273.15)*dS; 
        
        //console.log("delta A: ", dA);
        //console.log("delta G: ", dG);
        
        if(dG < 0) break;
    }

    
    
    if( coin()===1 ){

        QTN  = "En un proceso a presión y temperatura constantes ";
        QTN += "("+P/1000+" kPa y "+T+" °C) ";
        QTN += "el sistema cambia su volumen desde "+V1+" m<sup>3</sup> hasta "+V2+" m<sup>3</sup> ";
        QTN += "experimentando un cambio en la energía interna igual a "+dU+" J ";
        QTN += "y un cambio de entropía igual a "+dS+" J. ";
        QTN += "Calcula el cambio en la energía libre de Gibbs. <br>";
        
        if(Math.abs(dG) > 1000){
            ANS = dG/1000; UNI = "kJ";
        }else{
            ANS = dG; UNI = "J";
        }
               
    }else{
        
        QTN  = "En un proceso a presión y temperatura constantes ";
        QTN += "("+P/1000+" kPa y "+T+" °C) ";
        QTN += "el sistema cambia su volumen desde "+V1+" m<sup>3</sup> hasta "+V2+" m<sup>3</sup> ";
        QTN += "experimentando un cambio de entalpía igual a "+dH+" J ";
        QTN += "y un cambio de entropía igual a "+dS+" J. ";
        QTN += "Calcula el cambio en la energía libre de Helmholtz. <br>";
        
        if(Math.abs(dA) > 1000){
            ANS = dA/1000; UNI = "kJ";
        }else{
            ANS = dA; UNI = "J";
        }        
        
    }
    


}


//------------------------------------------------------------------------------
function exe_ec_clapeyron_fusion(){

    let dH,dP,dV,dT,T1,T2,P1,P2,V1,V2,d1,d2;

    let op = rndi(1,2);

    if(op===1){

        T1 = 273.15;
        T2 = T1 - rndi(10,80)/10;
        dT = T2- T1;
        P1 = 101325

        V1 = 0.000020;  // m3/mol  volumen molar hielo
        V2 = 0.000018;  // m3/mol  volumen molar agua

        dH = 6025; // J/mol
        dV = V2 - V1;
		dV = -2e-6;


        QTN  = "Mediante la ecuación de Clapeyron, ";
        QTN += "calcula la presión necesaria para fundir agua a " + round2(T2-273.15) + " °C. ";
        QTN += "Utiliza los siguientes datos: <br>";
        QTN += "&Delta;V =  -2 &micro;m<sup>3</sup>/mol, ";
        QTN += "&Delta;H<sub>fus</sub> =  6.025 kJ/mol";

        P2 = P1 + dH/dV * Math.log(T2/T1);

        negativos="no";

        ANS = P2/101325; UNI = "atm";

    }
    
    if(op===2){

        T1 = 273.15;
        T2 = T1 - rndi(10,80)/10;
        dT = T2 - T1;
        P1 = 101325

        V1 = 0.000020;  // m3/mol  volumen molar hielo
        V2 = 0.000018;  // m3/mol  volumen molar agua

        dH = 6025; // J/mol
        dV = V2 - V1;
        dV = -2e-6;

        P2 = P1 + dH/dV * Math.log(T2/T1);

        P2 = P2/101325;



        QTN  = "Mediante la ecuación de Clapeyron, ";
        QTN += "calcula el punto de fusión del agua a " + round2(P2) + " atm. ";
        QTN += "Utiliza los siguientes datos: <br>";
        QTN += "&Delta;V =  -2 &micro;m<sup>3</sup>/mol, ";
        QTN += "&Delta;H<sub>fus</sub> =  6.025 kJ/mol";

        ANS = T2-273.15; UNI = " °C";

        RespuestaEspecial = "yes";

    }


}



//------------------------------------------------------------------------------
function exe_ec_clapeyron_fusion_(){

    let dH,dP,dV,dT,T1,T2,P1,P2,V1,V2,d1,d2;

    let op = rndi(1,2);

    if(op===1){

        T1 = 273.15;
        T2 = T1 - rndi(10,80)/10;
        dT = T2- T1;
        P1 = 101325

        V1 = 0.000020;  // m3/mol  volumen molar hielo
        V2 = 0.000018;  // m3/mol  volumen molar agua

        dH = 6025; // J/mol
        dV = V2 - V1;
		dV = -2e-6;


        QTN  = "Mediante la ecuación de Clapeyron, ";
        QTN += "calcula la presión necesaria para fundir agua a " + round2(T2-273.15) + " °C. ";
        QTN += "Utiliza los siguientes datos: <br>";
        QTN += "&Delta;V =  -2 &micro;m<sup>3</sup>/mol, ";
        QTN += "&Delta;H<sub>fus</sub> =  6.025 kJ/mol";

        P2 = P1 + dH/dV * Math.log(T2/T1);

        negativos="no";

        ANS = P2/101325; UNI = "atm";




    }else{

        T1 = 273.15;
        T2 = T1 - rndi(10,80)/10;
        dT = T2 - T1;
        P1 = 101325

        V1 = 0.000020;  // m3/mol  volumen molar hielo
        V2 = 0.000018;  // m3/mol  volumen molar agua

        dH = 6025; // J/mol
        dV = V2 - V1;

        P2 = P1 + dH/dV * Math.log(T2/T1);

        P2 = P2/101325;



        QTN  = "Mediante la ecuación de Clapeyron, ";
        QTN += "calcula el punto de fusión del agua a " + round2(P2) + " atm. ";
        QTN += "Utiliza los siguientes datos: <br>";
        QTN += "&Delta;V =  -2 &micro;m<sup>3</sup>/mol, ";
        QTN += "&Delta;H<sub>fus</sub> =  6.025 kJ/mol";

        ANS = T2-273.15; UNI = " °C";

        RespuestaEspecial = "yes";




    }


}




//------------------------------------------------------------------------------
function exe_ec_clausius_clapeyron(){
	
    let dH,dP,dT,T1,T2,P1,P2,R;

    let op = rndi(1,6);

    if(op===1){


        dH = 40668; // J/mol
        T1 = 373.15;

        if(coin()==1)
            T2 = T1 + rndi(1,100);
        else
            T2 = T1 - rndi(1,25);

        P1 = 101325;
        R = 8.314;

		P2 = P1*Math.exp( -(dH/R)*( 1/T2 - 1/T1 ) );


		QTN = "Si la entalpía de evaporación del agua es 40.668 kJ/mol, ";
		QTN+= "estima la presión necesaria para evaporar agua a " + (T2-273.15) + " °C. ";

		


        ANS = P2; UNI = "Pa";

	}
	
	if(op===2){


		dH = 46693; // J/mol

		T1 = 273.16;

		T2 = -rndi(1,20);

		T2 = T2 + 273.15;

		P1 = 611.657;
		R = 8.314;

		P2 = P1*Math.exp( -(dH/R)*( 1/T2 - 1/T1 ) );
		
		QTN = "Si la entalpía de sublimación del agua es 46.639 kJ, ";
		QTN+= "estima la presión necesaria para sublimar agua a " + (T2-273.15) + " °C. ";		


		ANS = P2; UNI = "Pa";


	}	

    if(op===3){


        dH = 40668; // J/mol

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

		QTN = "Si la entalpía de evaporación del agua es 40.668 kJ/mol, ";
		QTN+= "estima la temperatura de ebullición del agua a " + round2(P2) + " mmHg. ";



        ANS = T2 - 273.15; UNI = " °C";

	}

	if(op===4){


		dH = 46693.44; // J/mol

		T1 = 273.16;

		T2 = -rndi(1,20);

		T2 = T2 + 273.15;

		P1 = 611.657;
		R = 8.314;

		P2 = P1*Math.exp( -(dH/R)*( 1/T2 - 1/T1 ) );

		//despeje:
		//T2 = 1/(  1/T1 - R*Math.log(P2/P1)/dH );


		QTN = "Si la entalpía de sublimación del agua es 46.639 kJ, ";
		QTN+= "estima la temperatura de sublimación del agua a " + round2(P2) + " Pa. ";


		ANS = T2 - 273.15; UNI = " °C";

	}


    if(op===5){

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
        QTN += "se evapora a " + T2 + " °C. Estima ";
        QTN += "el calor de evaporación de dicha sustancia desconocida.";


        ANS = dH; UNI = " J/mol";

    }
	
	if(op===6){



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


		ANS = dH; UNI = " J/mol";

	}	

}

//-----------------------------------------------------------------SELECCIONAR
function seleccionar(listaDePalabras) {
  // Genera un índice aleatorio basado en la longitud de la lista.
  const indiceAleatorio = Math.floor(Math.random() * listaDePalabras.length);

  // Retorna la palabra que se encuentra en el índice aleatorio.
  return listaDePalabras[indiceAleatorio];
}

//------------------------------------------------------------------------------
function exe_ec_clausius_clapeyron_nuevo(){
	

    let dH,dP,dT,T1,T2,P1,P2,R;
	
	let PROCESO1, PROCESO2, SUSTANCIA

    let op = 1; //rndi(1,6);

    if(op===1){
		
		let PROCESO = seleccionar(["evaporación", "sublimación"]);
		
		console.log(PROCESO);
		
		/*
		let op3 = rndi(1,2);
		
		if(op2===1){ PROCESO1 = "evapora"; PROCESO2 = "evaporación"; P1 = 101325;  T1 = 100; T2 = rndi(75,125)}
		if(op2===2){ PROCESO1 = "sublima"; PROCESO2 = "sublimación"; P1 = 611.657; T1 =0.01; T2 = rndi(-20,-1)}
		
		if(op3===1) {SUSTANCIA = "agua";    dH= 40668;}
		if(op3===2) {SUSTANCIA = "agüita";  dH= 40668;}
        
        R = 8.314;

		P2 = P1*Math.exp( -(dH/R)*( 1/T2 - 1/T1 ) );
		
		*/


/*
		QTN = "Si la entalpía de evaporación del agua es 40.668 kJ/mol, ";
		QTN+= "estima la presión necesaria para evaporar agua a " + T2 + " °C. ";
*/
        RespuestaEspecial = 'yes';
        ANS = 1; UNI = "mmHg";

	}
	
	if(op===2){


		dH = 46693; // J/mol

		T1 = 273.16;

		T2 = -rndi(1,20);

		T2 = T2 + 273.15;

		
		R = 8.314;

		P2 = P1*Math.exp( -(dH/R)*( 1/T2 - 1/T1 ) );
		
		QTN = "Si la entalpía de sublimación del agua es 46.639 kJ, ";
		QTN+= "estima la presión necesaria para sublimar agua a " + (T2-273.15) + " °C. ";		

		RespuestaEspecial = 'yes';
		ANS = P2; UNI = "Pa";


	}	

    if(op===3){


        dH = 40668; // J/mol

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

		QTN = "Si la entalpía de evaporación del agua es 40.668 kJ/mol, ";
		QTN+= "estima la temperatura de ebullición del agua a " + round2(P2) + " mmHg. ";


        RespuestaEspecial = 'yes';
        ANS = T2 - 273.15; UNI = " °C";

	}

	if(op===4){


		dH = 46693.44; // J/mol

		T1 = 273.16;

		T2 = -rndi(1,20);

		T2 = T2 + 273.15;

		P1 = 611.657;
		R = 8.314;

		P2 = P1*Math.exp( -(dH/R)*( 1/T2 - 1/T1 ) );

		//despeje:
		//T2 = 1/(  1/T1 - R*Math.log(P2/P1)/dH );


		QTN = "Si la entalpía de sublimación del agua es 46.639 kJ, ";
		QTN+= "estima la temperatura de sublimación del agua a " + round2(P2) + " Pa. ";

		RespuestaEspecial = 'yes';
		ANS = T2 - 273.15; UNI = " °C";

	}


    if(op===5){

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
        QTN += "se evapora a " + T2 + " °C. Estima ";
        QTN += "el calor de evaporación de dicha sustancia desconocida.";

        //RespuestaEspecial = 'yes';
        ANS = dH; UNI = " J/mol";

    }
	
	if(op===6){



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
		ANS = dH; UNI = " J/mol";

	}	

}




//------------------------------------------------------------------------------
function exe_ec_antonie_evaporacion(){

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
		QTN += "Emplea los siguientes parámetros de ajuste: <br>";
        QTN += "A = " + A + ", B = " + B + " y C = " + C;

        RespuestaEspecial = 'yes';
        ANS = P; UNI = "mmHg";



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
		QTN += "Emplea los siguientes parámetros de ajuste: <br>";
        QTN += "A = " + A + ", B = " + B + " y C = " + C;


        RespuestaEspecial = 'yes';
        ANS = T; UNI = " °C";

	}

}

//------------------------------------------------------------------------------
function exe_ec_clausius_clapeyron_sublimacion(){

	let dH,dP,dV,dT,T1,T2,P1,P2,V1,V2,d1,d2,R;

	let op = rndi(1,3);

	if(op===1){


		dH = 46693; // J/mol

		T1 = 273.16;

		T2 = -rndi(1,20);

		T2 = T2 + 273.15;

		P1 = 611.657;
		R = 8.314;

		P2 = P1*Math.exp( -(dH/R)*( 1/T2 - 1/T1 ) );

		QTN  = "Mediante la ecuación de Clausius-Clapeyron,";
		QTN += "calcula la presión necesaria para sublimar agua a " + (T2-273.15) + " °C. ";
		QTN += "Emplea los siguientes datos: ";
		QTN += " &Delta;H<sub>sub</sub> = 46.639 kJ";

		RespuestaEspecial = 'yes';
		ANS = P2; UNI = "Pa";


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

		QTN  = "Mediante la ecuación de Clausius-Clapeyron,";
		QTN += "calcula el punto de sublimación del agua a " + round2(P2) + " Pa. ";
		QTN += "Emplea los siguientes datos: ";
		QTN += " &Delta;H<sub>sub</sub> = 46.639 kJ";

		RespuestaEspecial = 'yes';
		ANS = T2 - 273.15; UNI = " °C";

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
		ANS = dH; UNI = " J/mol";

	}

}

//------------------------------------------------------------------------------
function exe_ec_goff_gratch_sublimacion(){
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
		P = P*(100/1);




		QTN  = "Utiliza la ecuación de Goff-Gratch para ";
		QTN += "calcular la presión necesaria para sublimar agua a " + (T-273.15) + " °C. <br>";


		RespuestaEspecial = 'yes';
		ANS = P; UNI = "Pa";

	}


}

//------------------------------------------------------------------------------
function exe_ec_Trouton(){

    let opc = rndi(1,3);

    let Tr, Tb, dH;

    Tb = rndi(80,120);
    Tr = rndi(80,90);
    dH = Tr * (Tb+273.15);
    dH = round2(dH);

    if(opc===1){

        QTN  = "El calor de evaporación de cierta sustancia es igual a " + dH + " J/mol. ";
        QTN += "Si el punto de ebullición de dicha sustancia es igual a " + Tb + " °C, ";
        QTN += "calcula su constante de Trouton. ";
        RespuestaEspecial = 'yes'
        ANS = Tr;
        UNI = "J / mol K";
    }

    if(opc===2){

        QTN  = "La constante de Trouton de cierta sustancia es igual a " + Tr + " J /mol K. ";
        QTN += "Si el calor de evaporación de dicha sustancia es igual a " + dH + " J/mol, ";
        QTN += "calcula su punto de ebullición. ";
        RespuestaEspecial = 'yes'
        ANS = Tb;
        UNI = " °C";
    }

    if(opc===3){

        QTN  = "La constante de Trouton de cierta sustancia es igual a " + Tr + " J /mol K. ";
        QTN += "Si el punto de ebullición de dicha sustancia es igual a " + Tb + " °C, ";
        QTN += "calcula su calor de evaporación. ";

        ANS = dH;
        UNI = " J/mol";
    }


}




//------------------------------------------------------------------------------
function exe_ec_Raoult(){

    let n_A, n_B, P_A, P_B, P_T, P_A0, P_B0, X_A, X_B, Y_A, Y_B;

    while(1){

        n_A = rndi(10,100); //mol
        n_B = rndi(10,100);

        P_A0 = rndi(50,100)*10 // mmHg
        P_B0 = rndi(50,100)*10 // mmHg

        X_A = n_A/(n_A+n_B);
        X_B = 1 - X_A;

        P_A = X_A * P_A0;
        P_B = X_B * P_B0;

        P_T = P_A + P_B;

        Y_A = P_A/P_T; // en el vapor
        Y_B = 1 - Y_A;

        if(Math.abs(X_A - Y_A) >= 0.12) break
    }

    let opc = rndi(1,3);

    if(opc===1){

        QTN  = "Una mezcla de líquidos volátiles se compone de " + n_A + " moles de A y ";
        QTN += n_B + " moles de B. Si la presión de vapor de A (puro) es igual a " + P_A0;
        QTN += " mmHg, calcula la presión de vapor de A en dicha solución ideal.";

        ANS = P_A;
        UNI = "mmHg";
    }


    if(opc===2){

        QTN  = "Una mezcla de líquidos volátiles se compone de " + n_A + " moles de A y ";
        QTN += n_B + " moles de B. Las presiones de vapor de los componentes puros son " + P_A0;
        QTN += " mmHg y "+ P_B0 + " mmHg, respectivamente.";
        QTN += " Calcula la fracción molar de A en la fase vapor de dicha solución ideal.";

        ANS = Y_A;
        UNI = "";
    }


    if(opc===3){

        QTN  = "Una solución de líquidos volatiles se compone de A y B. ";
        QTN += " Si la presión de vapor de A puro es igual a " + P_A0 + " mmHg y";
        QTN += " la presión de vapor de A en la solución es " + round2(P_A) + " mmHg, ";
        QTN += " calcula la fracción molar de B en dicha solución ideal."

        ANS = X_B;
        UNI = "";
    }

}

//------------------------------------------------------------------------------
function exe_ec_Henry(){

    let c, k, P;

	k = rndi(10,100)/10;
	k = round4( k/1000 ); // mol/ atm L

	P = rndi(10,20)*1000; //Pa

	c = k * (P/101325);
	c = round4( c );

	let opc = rndi(1,3);

    if(opc===1){

        QTN  = "Se quiere estudiar la solubilidad de cierto gas en agua. ";
		QTN  += "La constante de Henry del gas es " + k + " mol / atm L. ";
		QTN  += "Si la presión del gas sobre el agua es " + (P/1000) + " kPa. ";
		QTN  += "Calcula la solubilidad de dicho gas en agua.";


        RespuestaEspecial = 'yes'
        ANS = c*1000;
        UNI = "x10<sup>-3</sup> mol/L";
    }


    if(opc===2){

        QTN  = "La solubilidad de cierto gas en agua es " + (c*1000) + " x10<sup>-3</sup> mol/L. ";
		QTN  += "Si la presión del gas sobre el agua es " + (P/1000) + " kPa, ";
		QTN  += "calcula la constante de Henry de dicho gas en agua.";


        RespuestaEspecial = 'yes'
        ANS = k*1000;
        UNI = "x10<sup>-3</sup> mol / atm L";




    }


    if(opc===3){

        QTN  = "La solubilidad de cierto gas en agua es " + (c*1000) + " x10<sup>-3</sup> mol/L. ";
		QTN  += "Si la constante de Henry del gas es " + k + " mol / atm L, ";
		QTN  += "calcula la presión de dicho gas sobre el agua.";


        RespuestaEspecial = 'yes'
        ANS = P/1000;
        UNI = "kPa";
    }




}


//------------------------------------------------------------------------------
function exe_concentracion(){

	let opc = rndi(1,3);

	if( opc === 1 ) exe_molalidad();
	if( opc === 2 ) exe_molaridad();
	if( opc === 3 ) exe_frac_molar();


}

//------------------------------------------------------------------------------
function exe_frac_molar(){

	//Fracción molar

    let m_B, m_A;
    let n_B, n_A, n_total;
    let X_B, X_A;
	let M_B, M_A;
	let opc;

	M_B = 78; //benceno
	M_A = 92; //tolueno

	n_B = rndi(1,10);
	n_A = rndi(1,10);

	m_B = M_B * n_B;
	m_A = M_A * n_A;

	X_B = round2( n_B/(n_B + n_A) );
	X_A = round2( n_A/(n_B + n_A) );



	opc = rndi(1,4);

	if(opc===1){
		QTN  = "Se mezclan "+m_B+" g de Benceno (M=78 g/mol) y "+m_A+" g de Tolueno (M=92 g/mol). ";
		QTN += "Calcula la fracción molar del Benceno. ";
		ANS = X_B;
		//console.log(ANS);
		UNI = "";
	}

	if(opc===2){
		QTN  = "Se mezclan "+m_B+" g de Benceno (M=78 g/mol) y "+m_A+" g de Tolueno (M=92 g/mol). ";
		QTN += "Calcula la fracción molar del Tolueno. ";
		ANS = X_A;
		UNI = "";
	}

	if(opc===3){
		QTN  = "En una mezcla de dos componentes (A + B), la fracción molar de A es igual a "+ X_A+ "; ";
		QTN += "Calcula la fracción molar de B. ";
		ANS = X_B;
		UNI = "";
	}

	if(opc===4){
		QTN  = "En una mezcla de dos componentes (A + B), se mezclan "+ n_A+ " moles de A con ";
		QTN += n_B + " moles de B. Calcula la fracción molar de B. ";
		ANS = X_B;
		UNI = "";
	}



}




//------------------------------------------------------------------------------
function exe_molaridad(){

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

        //console.log("gramos: ", gramos);
        //console.log("moles: ", moles);
        //console.log("litros: ", litros);
        //console.log("molaridad :", molaridad);

    if( coin()===1 ){

        QTN  = "";
        QTN += "Despúes de disolver "+gramos+" g de "+NOMBRE+" ("+PM+" g/mol) en agua, ";
        QTN += "se obtienen "+mililitros+" mL de disolución. ";
        QTN += "¿Cuál es la molaridad de la disolución?<br>";

        ANS = molaridad;
        UNI = " mol/L";

    }else{

        QTN  = "";
        QTN += "Se tienen "+litros+" L de una disolución "+round2(molaridad)+" molar de ";
        QTN += NOMBRE+" ("+PM+" g/mol). ";
        QTN += "¿Cuántos gramos de "+NOMBRE+" hay en la disolución?<br>";

        ANS = gramos;
        UNI = " g";

    }

}

//------------------------------------------------------------------------------
function exe_molalidad(){

    // B, soluto
    // A, Agua, solvente

    let nB, mB;
    let mA;
    let m;
    let NOMBRE, FORMULA, PM;

    let opc = rndi(1,4);

    if(opc===1){NOMBRE = "etanol";  FORMULA = "C<sub>2</sub>H<sub>5</sub>OH";             PM = 46.08;}
    if(opc===2){NOMBRE = "metanol"; FORMULA = "CH<sub>3</sub>OH";                         PM = 32.05;}
    if(opc===3){NOMBRE = "glucosa"; FORMULA = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>"; PM = 180.18;}
    if(opc===4){NOMBRE = "sal";     FORMULA = "NaCl";                                     PM = 58.44;}

    while(1){
        mB = rndi(1,10)*10; // soluto
        nB = mB/PM;
        mA = rndi(5,25)*100;
        m = nB/(mA/1000); // molalidad
        if(m >=1) break;
    }

        //console.log("gramos soluto: ", mB);
        //console.log("moles soluto: ", nB);
        //console.log("Kg solvente: ", mA);
        //console.log("molalidad :", m);

        QTN  = "";
        QTN += "Se disuelven "+mB+" g de "+NOMBRE+" ("+PM+" g/mol) en ";
        QTN += mA + " mL de Agua. ";
        QTN += "¿Cuál es la molalidad de la disolución?<br>";

        ANS = m;
        UNI = " mol/Kg";

}

//------------------------------------------------------------
function exe_colig_01(){

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
        PM_soluto = 180.18;
        i = 1;
    }

    if(opc===2){
        NOMBRE = "sal";
        FORMULA = "NaCl";
        PM_soluto = 58.44;
        i = 2;
    }

    Pv_agua = 23.76 ; // mmHg, agua, 25 °C
    PM_agua = 18.02;

    while(1){

        m_soluto = rndi(100,250);
        m_agua = rndi(800,2000); //agua

        n_soluto = m_soluto/PM_soluto;
        n_agua = m_agua/PM_agua;

        X = n_soluto/(n_soluto + n_agua);
        delta_P = i*X*Pv_agua;

        if(delta_P >= 0.5) break;
    }

    let Pv_soln = round4(Pv_agua - delta_P);




    if( coin()===1 ){
        QTN  = "";
        QTN += "Se disuelven "+m_soluto+" gramos de "+NOMBRE+" ("+PM_soluto+" g/mol, i="+i+") en ";
        QTN += m_agua+" g de agua (18.02 g/mol) a 25 °C. ";
        QTN += "Si la presión de vapor del agua es igual a 23.76 mmHg, ";
        QTN += "estima cuánto disminuye la presión de vapor. ";

        RespuestasNegativas='no'
        ANS = delta_P;
        UNI = " mmHg";
    }else{
        QTN  = "";
        QTN += "Se disuelve cierta cantidad de "+NOMBRE+" ("+PM_soluto+" g/mol, i="+i+") en ";
        QTN += m_agua+" g de agua (18.02 g/mol) a 25 °C. ";
        QTN += "Antes de la mezcla, la presión de vapor del agua es igual a 23.76 mmHg; ";
        QTN += "después de la mezcla, la presión de vapor de la solución es igual a " + Pv_soln + " mmHg. "
        QTN += "¿Cuántos gramos de "+NOMBRE+" se disolvieron?";

        RespuestaEspecial = 'yes'
        ANS = m_soluto;
        UNI = " g";
    }



}


//------------------------------------------------------------------------------
function exe_colig_02(){

    // elevación del punto de ebullición

    let delta_T, Kb_agua;
    let n_soluto, n_agua;
    let m_soluto, m_agua;
    let NOMBRE, FORMULA;
    let PM_soluto, PM_agua;
    let Tb_agua, Tb_soln;
    let i; //van't Hoff

    let opc = rndi(1,2);

    if(opc===1){
        NOMBRE = "glucosa";
        FORMULA = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>";
        PM_soluto = 180.18;
        i = 1;
    }

    if(opc===2){
        NOMBRE = "sal";
        FORMULA = "NaCl";
        PM_soluto = 58.44;
        i = 2;
    }

    Kb_agua = 0.51; // K kg / mol
    PM_agua = 18.02;

    while(1){

        m_soluto = rndi(100,250);
        m_agua = rndi(800,2000); //agua

        n_soluto = m_soluto/PM_soluto;
        n_agua = m_agua/PM_agua;

        delta_T = i * ( n_soluto/(m_agua/1000) ) * Kb_agua;

        if(delta_T > 0.5) break;
    }

    Tb_soln = 373.15 + delta_T;
    Tb_soln = round4(Tb_soln - 273.15);



    if( coin()===1){
        QTN  = "";
        QTN += "Se disuelven "+m_soluto+" gramos de "+NOMBRE+" ("+PM_soluto+" g/mol, i="+i+") en ";
        QTN += m_agua+" g de agua (18.02 g/mol). ";
        QTN += "Si la temperatura de ebullición del agua (Kb = 0.51 K kg / mol) es igual a 100 °C, ";
        QTN += "estima cuánto aumenta la temperatura de ebullición. ";

        RespuestasNegativas='no'
        ANS = delta_T;
        UNI = " K";
    }else{

        QTN  = "";
        QTN += "Se disuelve cierta cantidad de "+NOMBRE+" ("+PM_soluto+" g/mol, i="+i+") en ";
        QTN += m_agua+" g de agua (18.02 g/mol). ";
        QTN += "Antes de la mezcla, la temperatura de ebullición del agua (Kb = 0.51 K kg / mol) es igual a 100 °C; ";
        QTN += "después de la mezcla, la temperatura de ebullición de la solución es igual a " + Tb_soln + " °C. "
        QTN += "¿Cuántos gramos de "+NOMBRE+" se disolvieron?";

        RespuestaEspecial = 'yes'
        ANS = m_soluto;
        UNI = " g";
    }





}


//------------------------------------------------------------------------------
function exe_colig_03(){

    // disminución del punto de congelación

    let delta_T, Kf_agua;
    let n_soluto, n_agua;
    let m_soluto, m_agua;
    let NOMBRE, FORMULA;
    let PM_soluto, PM_agua;
    let Tf_agua, Tf_soln;
    let i; //van't Hoff

    let opc = rndi(1,2);

    if(opc===1){
        NOMBRE = "glucosa";
        FORMULA = "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>";
        PM_soluto = 180.18;
        i = 1;
    }

    if(opc===2){
        NOMBRE = "sal";
        FORMULA = "NaCl";
        PM_soluto = 58.44;
        i = 2;
    }

    Kf_agua = 1.86; // K kg / mol
    PM_agua = 18.02;

    while(1){

        m_soluto = rndi(100,250);
        m_agua = rndi(800,2000); //agua

        n_soluto = m_soluto/PM_soluto;
        n_agua = m_agua/PM_agua;

        delta_T = i * ( n_soluto/(m_agua/1000) ) * Kf_agua;

        if(delta_T > 0.5) break;
    }

    Tf_soln = 273.15 - delta_T;
    Tf_soln = round4(Tf_soln - 273.15);



    if( coin()===1){
        QTN  = "";
        QTN += "Se disuelven "+m_soluto+" gramos de "+NOMBRE+" ("+PM_soluto+" g/mol, i="+i+") en ";
        QTN += m_agua+" g de agua (18.02 g/mol). ";
        QTN += "Si la temperatura de fusión del agua (Kf = " +Kf_agua+" K kg / mol) es igual a 0 °C, ";
        QTN += "estima cuánto disminuye la temperatura de fusión. ";

        RespuestasNegativas='no'
        ANS = delta_T;
        UNI = " K";
    }else{

        QTN  = "";
        QTN += "Se disuelve cierta cantidad de "+NOMBRE+" ("+PM_soluto+" g/mol, i="+i+") en ";
        QTN += m_agua+" g de agua (18.02 g/mol). ";
        QTN += "Antes de la mezcla, la temperatura de fusión del agua (Kf = " +Kf_agua+" K kg / mol) es igual a 0 °C; ";
        QTN += "después de la mezcla, la temperatura de fusión de la solución es igual a " + Tf_soln + " °C. "
        QTN += "¿Cuántos gramos de "+NOMBRE+" se disolvieron?";

        RespuestaEspecial = 'yes'
        ANS = m_soluto;
        UNI = " g";
    }




}

//------------------------------------------------------------------------------
function exe_colig_04(){

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
        PM_soluto = 180.18;
        i = 1;
    }

    if(opc===2){
        NOMBRE = "sal";
        FORMULA = "NaCl";
        PM_soluto = 58.44;
        i = 2;
    }

    R = 0.08206; // atm L / mol K

    while(1){

        T = rndi(10, 60); // °C
        V = rndi(800,2000); //mL

        m_soluto = rndi(10,50);
        n_soluto = m_soluto/PM_soluto;

        M = n_soluto/(V/1000.0);

        P = round4( i*M*R*(T+273.15) );

        if(P > 1) break;
    }

    if( coin()===1 ){

        QTN  = "";
        QTN += "A "+T+" °C, se disuelven "+m_soluto+" gramos de "+NOMBRE+" ("+PM_soluto+" g/mol, i="+i+") en ";
        QTN += "agua, resultando "+V+" mL de disolución. ";
        QTN += "Calcula la presión osmótica de la disolución.";

        ANS = P;
        UNI = " atm";

    }else{

        QTN  = "";
        QTN += "A "+T+" °C, se disuelve cierta cantidad de "+NOMBRE+" ("+PM_soluto+" g/mol, i="+i+") en ";
        QTN += "agua, resultando "+V+" mL de disolución. ";
        QTN += "La presión osmótica de la disolución es igual a "+ P +" atm. ";
        QTN += "¿Cuántos gramos de "+NOMBRE+" se disolvieron?";

        RespuestaEspecial = 'yes'
        ANS = m_soluto;
        UNI = " g";

    }



}

//------------------------------------------------------------------------------
function exe_Kc(){

    let COMP1, COMP2, COMP3, COMP4, REAC;
    let C1, C2, C3, C4;
    let coef1, coef2, coef3;
    let Kc;
    let T;

    let opc = rndi(1,8);
	C4 = 0;

    if(opc===1){
        // A2 (g) + 3 B2 (g) -> 2 AB3 (g)
        COMP1 = "A<sub>2</sub>";
        COMP2 = "B<sub>2</sub>";
        COMP3 = "AB<sub>3</sub>";
        coef1 = 1;
        coef2 = 3;
        coef3 = 2;
        REAC = "A<sub>2</sub> (g) + 3B<sub>2</sub> (g) &harr; 2AB<sub>3</sub> (g)";

        while(1){

            T = rndi(5,95); //°C

            C1 = rndi(10,1000)/10;
            C2 = rndi(10,1000)/10;
            C3 = rndi(10,1000)/10;

            Kc = Math.pow(C3,coef3)/( Math.pow(C1,coef1)*Math.pow(C2,coef2) );

            if(Kc >= 10 && Kc <=1000) break;
        }
    }

    if(opc===2){
        // 2 AB2 (g) +   B2 (g) -> 2 AB3 (g)
        COMP1 = "AB<sub>2</sub>";
        COMP2 = "B<sub>2</sub>";
        COMP3 = "AB<sub>3</sub>";
        coef1 = 2;
        coef2 = 1;
        coef3 = 2;
        REAC = "2AB<sub>2</sub> (g) + B<sub>2</sub> (g) &harr; 2AB<sub>3</sub> (g)";

        while(1){

            T = rndi(5,95); //°C

            C1 = rndi(10,1000)/10;
            C2 = rndi(10,1000)/10;
            C3 = rndi(10,1000)/10;

            Kc = Math.pow(C3,coef3)/( Math.pow(C1,coef1)*Math.pow(C2,coef2) );

            if(Kc >= 10 && Kc <=1000) break;
        }
    }

    if(opc===3){
        // A2 (g) +   B2 (g) -> 2 AB  (g)
        COMP1 = "A<sub>2</sub>";
        COMP2 = "B<sub>2</sub>";
        COMP3 = "AB";
        coef1 = 1;
        coef2 = 1;
        coef3 = 2;
        REAC = "A<sub>2</sub> (g) + B<sub>2</sub> (g) &harr; 2AB (g)";

        while(1){

            T = rndi(5,95); //°C

            C1 = rndi(10,1000)/10;
            C2 = rndi(10,1000)/10;
            C3 = rndi(10,1000)/10;

            Kc = Math.pow(C3,coef3)/( Math.pow(C1,coef1)*Math.pow(C2,coef2) );

            if(Kc >= 10 && Kc <=1000) break;
        }
    }

    if(opc===4){
        // CaCO_3 ( s ) -> CaO ( s) + CO_2 ( g )

        COMP1 = "CaCO<sub>3</sub>";
        COMP2 = "CaO";
        COMP3 = "CO<sub>2</sub>";

        REAC = "CaCO<sub>3</sub> (s) &harr; CaO (s) + CO<sub>2</sub> (g)";

        while(1){

            T = rndi(5,95); //°C

            C1 = rndi(10,1000)/10;
            C2 = rndi(10,1000)/10;
            C3 = rndi(10,1000)/10;

            Kc = C3;

            if(Kc >= 10 && Kc <=1000) break;
        }
    }

    if(opc===5){
        // 2 N_2 O_5 ( g ) -> 4 NO_2 ( g ) + O_2 ( g )

        COMP1 = "N<sub>2</sub>O<sub>5</sub>";
        COMP2 = "NO<sub>2</sub>";
        COMP3 = "O<sub>2</sub>";

        REAC = "2N<sub>2</sub>O<sub>5</sub> (g) &harr; 4NO<sub>2</sub> (g) + O<sub>2</sub> (g)";

        while(1){

            T = rndi(5,95); //°C

            C1 = rndi(10,1000)/10;
            C2 = rndi(10,1000)/10;
            C3 = rndi(10,1000)/10;

            Kc = ( C2*C2*C2*C2 * C3 )/ ( C1*C1 );

            if(Kc >= 10 && Kc <=1000) break;
        }
    }

    if(opc===6){
        //( NH_4 )_2 Se ( s ) -> 2NH_3 ( g ) + H_2 Se ( g )

        COMP1 = "(NH<sub>4</sub>)<sub>2</sub>Se";
        COMP2 = "NH<sub>3</sub>";
        COMP3 = "H<sub>2</sub>Se";

        REAC = "(NH<sub>4</sub>)<sub>2</sub>Se (s) &harr; 2NH<sub>3</sub> (g) + H<sub>2</sub>Se (g)";

        while(1){

            T = rndi(5,95); //°C

            C1 = rndi(10,1000)/10;
            C2 = rndi(10,1000)/10;
            C3 = rndi(10,1000)/10;

            Kc = ( C2*C2 * C3 )/ ( 1 );

            if(Kc >= 10 && Kc <=1000) break;
        }
    }

    if(opc===7){
        // 2 Ni_2 ( s ) + 4 CO ( g ) -> Ni( CO )_4 ( g )

        COMP1 = "Ni<sub>2</sub>";
        COMP2 = "CO";
        COMP3 = "Ni(CO)<sub>4</sub>";

        REAC = "2 Ni<sub>2</sub> (s) + 4 CO (g) &harr; Ni(CO)<sub>4</sub> (g)";

        while(1){

            T = rndi(5,95); //°C

            C1 = rndi(10,1000)/10;
            C2 = rndi(10,1000)/10;
            C3 = rndi(10,1000)/10;

            Kc = ( C3 ) / ( C2*C2*C2*C2 );

            if(Kc >= 10 && Kc <=1000) break;
        }
    }


    if(opc===8){
        // 4 NH_3 (g) + 5O_2 (g) -> 4 NO (g) + 6 H2O(g)

        COMP1 = "NH<sub>3</sub>";
        COMP2 = "O<sub>2</sub>";
        COMP3 = "NO";
		COMP4 = "H<sub>2</sub>O";

        REAC = "4 NH<sub>3</sub> (g) + 5 O<sub>2</sub> (g) &harr; 4 NO (g) + 6 H<sub>2</sub>O (g)";

        while(1){

            T = rndi(5,95); //°C

            C1 = rndi(10,1000)/10;
            C2 = rndi(10,1000)/10;
            C3 = rndi(10,1000)/10;
			C4 = rndi(10,1000)/10;

            Kc = ( C3*C3*C3*C3 * C4*C4*C4*C4*C4*C4  ) / ( C1*C1*C1*C1 * C2*C2*C2*C2*C2 );

            if(Kc >= 10 && Kc <=1000) break;
        }
    }

	if( C4 > 0){
		QTN  = "";
		QTN += "Considera la siguiente reacción química ("+T+" °C) <br>";
		QTN += REAC+"<br>";
		QTN += "La concentración de "+COMP1+" es "+C1+" mol/L, ";
		QTN += "la concentración de "+COMP2+" es "+C2+" mol/L, ";
		QTN += "la concentración de "+COMP3+" es "+C3+" mol/L y  ";
		QTN += "la concentración de "+COMP4+" es "+C4+" mol/L. ";
		QTN += "Calcula la constante de equilibrio K<sub>c</sub>.";

		ANS = Kc;
		UNI = "";

	}else{

		QTN  = "";
		QTN += "Considera la siguiente reacción química ("+T+" °C) <br>";
		QTN += REAC+"<br>";
		QTN += "La concentración de "+COMP1+" es "+C1+" mol/L, ";
		QTN += "la concentración de "+COMP2+" es "+C2+" mol/L y ";
		QTN += "la concentración de "+COMP3+" es "+C3+" mol/L. ";
		QTN += "Calcula la constante de equilibrio K<sub>c</sub>.";

		ANS = Kc;
		UNI = "";
	}



}


//------------------------------------------------------------------------------
function exe_Kc_plus(){

    let COMP1, COMP2, COMP3, COMP4, REAC;
    let C1, C2, C3, C4;
    let coef1, coef2, coef3;
    let Kc;
    let T;

	if( coin()===1){

		C4 = 0;

		let opc = rndi(1,5);

		if(opc===1){
			// A2 (g) + 3 B2 (g) -> 2 AB3 (g)
			COMP1 = "A<sub>2</sub>";
			COMP2 = "B<sub>2</sub>";
			COMP3 = "AB<sub>3</sub>";
			coef1 = 1;
			coef2 = 3;
			coef3 = 2;
			REAC = "A<sub>2</sub> (g) + 3B<sub>2</sub> (g) &harr; 2AB<sub>3</sub> (g)";

			while(1){

				T = rndi(5,95); //°C

				C1 = rndi(10,1000)/10;
				C2 = rndi(10,1000)/10;
				C3 = rndi(10,1000)/10;

				Kc = Math.pow(C3,coef3)/( Math.pow(C1,coef1)*Math.pow(C2,coef2) );

				if(Kc >= 10 && Kc <=1000) break;
			}
		}

		if(opc===2){
			// 2 AB2 (g) +   B2 (g) -> 2 AB3 (g)
			COMP1 = "AB<sub>2</sub>";
			COMP2 = "B<sub>2</sub>";
			COMP3 = "AB<sub>3</sub>";
			coef1 = 2;
			coef2 = 1;
			coef3 = 2;
			REAC = "2AB<sub>2</sub> (g) + B<sub>2</sub> (g) &harr; 2AB<sub>3</sub> (g)";

			while(1){

				T = rndi(5,95); //°C

				C1 = rndi(10,1000)/10;
				C2 = rndi(10,1000)/10;
				C3 = rndi(10,1000)/10;

				Kc = Math.pow(C3,coef3)/( Math.pow(C1,coef1)*Math.pow(C2,coef2) );

				if(Kc >= 10 && Kc <=1000) break;
			}
		}

		if(opc===3){
			// A2 (g) +   B2 (g) -> 2 AB  (g)
			COMP1 = "A<sub>2</sub>";
			COMP2 = "B<sub>2</sub>";
			COMP3 = "AB";
			coef1 = 1;
			coef2 = 1;
			coef3 = 2;
			REAC = "A<sub>2</sub> (g) + B<sub>2</sub> (g) &harr; 2AB (g)";

			while(1){

				T = rndi(5,95); //°C

				C1 = rndi(10,1000)/10;
				C2 = rndi(10,1000)/10;
				C3 = rndi(10,1000)/10;

				Kc = Math.pow(C3,coef3)/( Math.pow(C1,coef1)*Math.pow(C2,coef2) );

				if(Kc >= 10 && Kc <=1000) break;
			}
		}

		if(opc===4){
			// 2 N_2 O_5 ( g ) -> 4 NO_2 ( g ) + O_2 ( g )

			COMP1 = "N<sub>2</sub>O<sub>5</sub>";
			COMP2 = "NO<sub>2</sub>";
			COMP3 = "O<sub>2</sub>";

			REAC = "2N<sub>2</sub>O<sub>5</sub> (g) &harr; 4NO<sub>2</sub> (g) + O<sub>2</sub> (g)";

			while(1){

				T = rndi(5,95); //°C

				C1 = rndi(10,1000)/10;
				C2 = rndi(10,1000)/10;
				C3 = rndi(10,1000)/10;

				Kc = ( C2*C2*C2*C2 * C3 )/ ( C1*C1 );

				if(Kc >= 10 && Kc <=1000) break;
			}
		}

		if(opc===5){
			// 4 NH_3 (g) + 5O_2 (g) -> 4 NO (g) + 6 H2O(g)

			COMP1 = "NH<sub>3</sub>";
			COMP2 = "O<sub>2</sub>";
			COMP3 = "NO";
			COMP4 = "H<sub>2</sub>O";

			REAC = "4 NH<sub>3</sub> (g) + 5 O<sub>2</sub> (g) &harr; 4 NO (g) + 6 H<sub>2</sub>O (g)";

			while(1){

				T = rndi(5,95); //°C

				C1 = rndi(10,1000)/10;
				C2 = rndi(10,1000)/10;
				C3 = rndi(10,1000)/10;
				C4 = rndi(10,1000)/10;

				Kc = ( C3*C3*C3*C3 * C4*C4*C4*C4*C4*C4  ) / ( C1*C1*C1*C1 * C2*C2*C2*C2*C2 );

				if(Kc >= 10 && Kc <=1000) break;
			}
		}

		if( C4 > 0){

			QTN  = "";
			QTN += "Considera la siguiente reacción química ("+T+" °C) <br>";
			QTN += REAC+"<br>";
			QTN += "La constante de equilibrio Kc es igual a "+round2(Kc)+", "
			QTN += "la concentración de "+COMP1+" es "+C1+" mol/L, ";
			QTN += "la concentración de "+COMP3+" es "+C3+" mol/L, ";
			QTN += "la concentración de "+COMP4+" es "+C4+" mol/L. ";
			QTN += "Calcula la concentración de "+COMP2+". ";

			ANS = C2;
			UNI = "";

		}else{

			QTN  = "";
			QTN += "Considera la siguiente reacción química ("+T+" °C) <br>";
			QTN += REAC+"<br>";
			QTN += "La constante de equilibrio Kc es "+round2(Kc)+", "
			QTN += "la concentración de "+COMP1+" es "+C1+" mol/L, ";
			QTN += "la concentración de "+COMP3+" es "+C3+" mol/L. ";
			QTN += "Calcula la concentración de "+COMP2+". ";

			ANS = C2;
			UNI = "";
		}

	}else{

		let opc = rndi(1,3);

		if(opc===1){
			// CaCO_3 ( s ) -> CaO ( s) + CO_2 ( g )

			COMP1 = "CaCO<sub>3</sub>";
			COMP2 = "CaO";
			COMP3 = "CO<sub>2</sub>";

			REAC = "CaCO<sub>3</sub> (s) &harr; CaO (s) + CO<sub>2</sub> (g)";

			while(1){

				T = rndi(5,95); //°C

				C1 = rndi(10,1000)/10;
				C2 = rndi(10,1000)/10;
				C3 = rndi(10,1000)/10;

				Kc = C3;

				if(Kc >= 10 && Kc <=1000) break;
			}
		}

		if(opc===2){
			//( NH_4 )_2 Se ( s ) -> 2NH_3 ( g ) + H_2 Se ( g )

			COMP1 = "(NH<sub>4</sub>)<sub>2</sub>Se";
			COMP2 = "NH<sub>3</sub>";
			COMP3 = "H<sub>2</sub>Se";

			REAC = "(NH<sub>4</sub>)<sub>2</sub>Se (s) &harr; 2NH<sub>3</sub> (g) + H<sub>2</sub>Se (g)";

			while(1){

				T = rndi(5,95); //°C

				C1 = rndi(10,1000)/10;
				C2 = rndi(10,1000)/10;
				C3 = rndi(10,1000)/10;

				Kc = ( C2*C2 * C3 )/ ( 1 );

				if(Kc >= 10 && Kc <=1000) break;
			}
		}

		if(opc===3){
			// 2 Ni_2 ( s ) + 4 CO ( g ) -> Ni( CO )_4 ( g )

			COMP1 = "Ni<sub>2</sub>";
			COMP2 = "CO";
			COMP3 = "Ni(CO)<sub>4</sub>";

			REAC = "2 Ni<sub>2</sub> (s) + 4 CO (g) &harr; Ni(CO)<sub>4</sub> (g)";

			while(1){

				T = rndi(5,95); //°C

				C1 = rndi(10,1000)/10;
				C2 = rndi(10,1000)/10;
				C3 = rndi(10,1000)/10;

				Kc = ( C3 ) / ( C2*C2*C2*C2 );

				if(Kc >= 10 && Kc <=1000) break;
			}
		}

		QTN  = "";
		QTN += "Considera la siguiente reacción química ("+T+" °C) <br>";
		QTN += REAC+"<br>";
		QTN += "La constante de equilibrio Kc es "+round2(Kc)+", "
		QTN += "la concentración de "+COMP1+" es "+C1+" mol/L, ";
		QTN += "la concentración de "+COMP2+" es  "+C2+" mol/L. ";
		QTN += "Calcula la concentración de "+COMP3+". ";

		ANS = C3;
		UNI = "";

	}


}


//------------------------------------------------------------------------------
function exe_Kp_Kc(){

    let COMP1, COMP2, COMP3, REAC;
    let C1, C2, C3;
    let coef1, coef2, coef3;
    let Kc;
    let R, T;
    let delta_n,a,b;
    let opc;

	R = 0.08206;

	if(coin()===1){
		// A2 (g) + 3 B2 (g) -> 2 AB3 (g)
		COMP1 = "A<sub>2</sub>";
		COMP2 = "B<sub>2</sub>";
		COMP3 = "AB<sub>3</sub>";
		coef1 = 1;
		coef2 = 3;
		coef3 = 2;
		REAC = "A<sub>2</sub> + 3B<sub>2</sub> &harr; 2AB<sub>3</sub>";
	}else{
		// 2 AB2 (g) +   B2 (g) -> 2 AB3 (g)
		COMP1 = "AB<sub>2</sub>";
		COMP2 = "B<sub>2</sub>";
		COMP3 = "AB<sub>3</sub>";
		coef1 = 2;
		coef2 = 1;
		coef3 = 2;
		REAC = "2AB<sub>2</sub> + B<sub>2</sub> &harr; 2AB<sub>3</sub>";
	}

	while(1){

		T = rndi(25,800); //°C
		Kc = rndi(10,10000)/10;
		delta_n = coef3 - (coef1 + coef2);
		Kp = Kc*Math.pow(R*(T+273.15), delta_n);
		if(Kp >= 0.0001) break;
	}

	opc = rndi(1,3);

    if(opc===1){

        QTN  = "";
        QTN += "Considera la siguiente reacción química hipotética  ("+T+" °C) en estado gaseoso: <br>";
        QTN += REAC+"<br>";
        QTN += "Su constante de equilibrio K<sub>c</sub> es igual a "+Kc+", ";
        QTN += "calcula la constante de equilibrio K<sub>p</sub>.";

        if(Kp < 1){
            ANS = Kp*1000;
            UNI = " x10<sup>-3</sup>";
        }else{
            ANS = Kp;
            UNI = "";
        }

    }

	if(opc===2){

        QTN  = "";
        QTN += "Considera la siguiente reacción química hipotética  ("+T+" °C) en estado gaseoso: <br>";
        QTN += REAC+"<br>";
        QTN += "Su constante de equilibrio K<sub>p</sub> es igual a "+round2(Kp)+", ";
        QTN += "calcula la constante de equilibrio K<sub>c</sub>.";

        ANS = Kc;
        UNI = "";

    }

    if(opc===3){

		while(1){

			T = rndi(25,800); //°C
			Kc = rndi(1,9999);
			a = rndi(2,10);
			b = rndi(1,10);
			delta_n = b - a;
			Kp = round4( Kc*Math.pow(R*(T+273.15), delta_n) );
			if(Kp >= 1 && Kp <=9999 && a!=b) break;
		}

        QTN  = "";
        QTN += a + " moles de gas reaccionan a "+T+" °C para convertirse en cierto producto.  ";
        QTN += "Si Kc = "+Kc+" y Kp = "+Kp+" ¿Cuántos moles de gas se formaron?";

		ANS = b;
		UNI = " mol";

		RespuestaEspecial='yes';


    }

}

//------------------------------------------------------------------------------
function exe_ec_vantHoff(){

	let R, K1,K2,T1,T2,dH;

	RespuestaEspecial = 'no';

	R = 8.314;

	T1 = rndi(25,50); // °C
	T2 = T1 + rndi(25,50);

	K1 = rndi(10,1000);
	K2 = rndi(10,1000);

	dH = round4( ( -R*Math.log(K2/K1) ) / ( 1/(T2+273.15) - 1/(T1+273.15)   ) );


    let opc = rndi(1,3);

	if(opc===1){
		QTN = "En cierto proceso químico, la constante de equilibrio a " + T1 + " °C ";
		QTN +="es "+ K1 +", mientras que a "+ T2+ " °C es "+ K2+ ". Determina el calor de la rección química."
		ANS = dH;
        UNI = "J/mol";
	}

	if(opc===2){
		QTN = "La constante de equilibrio de cierta reacción química es " + K1 + " a "+T1+" °C. ";
		QTN +="Si el calor de la rección es "+dH+" J/mol, determina el valor de la constante de equilibrio "
		QTN +="a "+T2+"°C.";
		ANS = K2;
        UNI = "";
	}

	if(opc===3){
		QTN = "La constante de equilibrio de cierta reacción química es " + K1 + " a "+T1+" °C. ";
		QTN +="Si el calor de la rección es "+dH+" J/mol, determina la temperatura necesaria "
		QTN +="para que la constante de equilibrio sea "+K2+".";
		ANS = T2;
        UNI = "°C";
	}

	//console.log(T1, T2, K1, K2, dH);

}


//------------------------------------------------------------------------------
function exe_ec_cinetica(){

	/*
	orden 0, k [=] mol/(L s)
	orden 1, k [=] 1/s
	orden 2, k [=] L/(mol s)
	*/

	let C0, Ct, t, k, tmp, kUNI;

	RespuestaEspecial = 'no';
	MostrarRespuestaCorrecta ="no";

	let orden = rndi(1,3); orden--;
	let opcion = rndi(1,3);



	if(orden===0){
		while(1){
			kUNI = " mol/(L s)";
			t = rndi(10,1000);  // s
			C0 = rndi(10,1000); // mol/L
			k = rndi(1,100)/1000.0;
			C = -k*t + C0;
			C = round4( C );
			//console.log(orden, C0, C, t, k);
			if(C >=10) break;
		}
	}

	if(orden===1){
		while(1){
			kUNI = " 1/s";
			t = rndi(5,300);  // s
			C0 = rndi(10,1000); // mol/L
			k = rndi(1,100)/1000.0;
			C =  Math.exp(-k*t + Math.log(C0) );
			C = round4( C );
			//console.log(orden, C0, C, t, k);
			if(C >=1) break;
		}
	}

	if(orden===2){
		while(1){
			kUNI = " L/(mol s)";
			t = rndi(5,300);  // s
			C0 = rndi(10,1000); // mol/L
			k = rndi(1,100)/1000.0;
			tmp = k*t + 1/C0;
			C = 1/tmp;
			C = round4( C );
			//console.log(orden, C0, C, t, k);
			if(C >=1) break;
		}
	}

	if(opcion===1){
		QTN  = "Considera la siguiente reacción de orden "+orden+":";
		QTN += "<br>A &rarr; B, k = "+k+kUNI+"<br>";
		QTN += "La concentración inicial de A es "+C0+" mol/L. ";
		QTN += "Determina la concentración de A despues de "+t+" s.";
		ANS = C;
        UNI = "mol/L";
	}

	if(opcion===2){
		QTN  = "Considera la siguiente reacción de orden "+orden+":";
		QTN += "<br>A &rarr; B, k = "+k+kUNI+"<br>";
		QTN += "La concentración inicial de A es "+C0+" mol/L. ";
		QTN += "Determina el tiempo necesario para que la concentración de A sea "+C+" mol/L."
		ANS = t;
        UNI = "s";
	}

	if(opcion===3){
		QTN  = "Considera la siguiente reacción de orden "+orden+":";
		QTN += "<br>A &rarr; B, k = "+k+kUNI+"<br>";
		QTN += "En "+t+" segundos, la concentración de A es "+C+" mol/L. ";
		QTN += "Determina la concentración inicial de A.";
		ANS = C0;
        UNI = "mol/L";
		RespuestaEspecial = 'yes';
	}


}

//------------------------------------------------------------------------------
function exe_ec_cinetica_tabla(){

	/*
	orden 0, k [=] mol/(L s)
	orden 1, k [=] 1/s
	orden 2, k [=] L/(mol s)
	*/

	let t0, C0;
	let t1, C1;
	let t2, C2;
	let dt;

	t0 = 10.0;
	C2 = 0.2;

	let k, kUNI;
	let orden,noesorden;

	RespuestaEspecial = 'no';
	MostrarRespuestaCorrecta = "no";

	orden = rndi(1,3); orden--;
	while(1){
		noesorden = rndi(1,3); noesorden--;
		if( orden !== noesorden ) break;
	}
	//console.log(orden, noesorden);



	if(orden===0){
		while(1){
			kUNI = " mol/(L s)";
			k = rndi(100,999)/10000.0;
			dt = rndi(1,40);

			t0 = 0;
			C0 = rndi(10,1000); // mol/L
			t1 = dt;
			C1 = round4(-k*t1 + C0);
			t2 = t1 + dt;
			C2 = round4(-k*t2 + C0);
			//console.log(orden, C0, C2, t2, k);
			if(C2 >=1 && Math.abs(C1-C0)>=2 ) break;
		}
	}
	//console.log("...");

	if(orden===1){
		while(1){
			kUNI = " 1/s";
			k = rndi(100,999)/100000.0;
			dt = rndi(1,10);

			t0 = 0;
			C0 = rndi(10,1000); // mol/L
			t1 = dt;
			C1 = round4( Math.exp(-k*t1 + Math.log(C0) ) );
			t2 = t1 + dt;
			C2 = round4( Math.exp(-k*t2 + Math.log(C0) ) );
			//console.log(orden, C0, C2, t2, k);
			if(C2 >=1 && Math.abs(C1-C0)>=5 ) break;
		}
	}
	//console.log("...");

	if(orden===2){
		while(1){
			kUNI = " L/(mol s)";
			k = rndi(100,999)/1000.0;
			k = rndi(1,100)/1000.0;
			dt = rndi(1,10);

			t0 = 0;
			C0 = rndi(1,100); // mol/L
			t1 = dt;
			C1 = round4( 1/(k*t1 + 1/C0) );
			t2 = 2*dt;
			C2 = round4( 1/(k*t2 + 1/C0) );
			//console.log(orden, C0, C1, C2, dt, k);
			if( C2>= 0.1 && Math.abs(C1-C0)>=2 ) break;
		}
	}
	//console.log("...");

	QTN  = "Datos de una reacción de orden desconocido:";
	QTN += "<br><br>";
	QTN += "<style>table, th, td {border:1px solid black;}</style>";
	QTN += "<center><table>";
	QTN += "";
	QTN += "<tr><td>t, s</td> <td>[A], mol/L</td> </tr>";
	QTN += "<tr><td>"+t0+"</td> <td>"+C0+"</td> </tr>";
	QTN += "<tr><td>"+t1+"</td> <td>"+C1+"</td> </tr>";
	QTN += "<tr><td>"+t2+"</td> <td>"+C2+"</td> </tr>";
	QTN += "</table></center>";
	QTN += "<br>";
	QTN += "Determina el valor numérico de la constante de rapidez, k.<br>";
	QTN += "NOTA: La reacción no es orden "+noesorden+".";

	ANS = k*1000;
	UNI = "x10<sup>-3</sup>";




	//console.log(T1, T2, K1, K2, dH);

}


//------------------------------------------------------------------------------
function exe_ec_cinetica_vida_media(){

	/*
	orden 0, k [=] mol/(L s)
	orden 1, k [=] 1/s
	orden 2, k [=] L/(mol s)
	*/

	let C, C0, t, k, kUNI;

	RespuestaEspecial = 'no';
	MostrarRespuestaCorrecta ="no";

	let orden = rndi(1,3); orden--;


	if(orden===0){
		while(1){
			kUNI = " mol/(L s)";
			C0 = rndi(10,1000); // mol/L
			k = rndi(1,100)/1000.0;
			t = C0/(2*k);
			//C = -k*t + C0;
			//console.log(orden, C0, C0/2, C, t, k);
			if(t >=5) break;
		}
	}

	if(orden===1){
		while(1){
			kUNI = " 1/s";
			C0 = rndi(10,1000); // mol/L
			k = rndi(1,100)/1000.0;
			t = 0.693/k;
			//C =  round4( Math.exp(-k*t + Math.log(C0) ));
			//console.log(orden, C0, C0/2, C, t, k);
			if(t >=5) break;
		}
	}

	if(orden===2){
		while(1){
			kUNI = " L/(mol s)";
			C0 = rndi(5,20); // mol/L
			k = rndi(1,100)/1000.0;
			t = 1/(k*C0);
			//C = round4( 1/(k*t + 1/C0) );
			//console.log(orden, C0, C0/2, C, t, k);
			if(t >=2) break;
		}
	}


	QTN  = "Considera la siguiente reacción de orden "+orden+":";
	QTN += "<br>A &rarr; B, k = "+k+kUNI+"<br>";
	QTN += "La concentración inicial de A es "+C0+" mol/L. <br>";
	QTN += "Determina el tiempo de vida media de A.";
	ANS = t;
	UNI = "s";




}

//------------------------------------------------------------------------------
function exe_ec_cinetica_tabla_2(){

	/*
	orden 0, k [=] mol/(L s)
	orden 1, k [=] 1/s
	orden 2, k [=] L/(mol s)
	*/

	let T0, k0;
	let T1, k1;
	let T2, k2;
	let T3, k3;
	let dT;
	let R = 8.314;
	let E; //J/mol

	RespuestaEspecial = 'no';
	MostrarRespuestaCorrecta = "no";


	while(1){

		k0 = rndi(100,999)/100000;
		T0 = rndi(30,50)*10;
		E  = rndi(10,99)*1000;
		dT = rndi(1,5)*10;

		T1 = T0 + dT;
		k1 = round4( k0/Math.exp( (E/R)*(1/T1 - 1/T0) ) );

		T2 = T1 + dT;
		k2 = round4( k1/Math.exp( (E/R)*(1/T2 - 1/T1) ) );

		//console.log(k0, T0, E);
		if( k2 > 0 && k2 < 1 ) break;
	}

	console.log("...");

	QTN  = "La constante de rapidez de cierta reacción química varía con la temperatura:";
	QTN += "<br><br>";
	QTN += "<style>table, th, td {border:1px solid black;}</style>";
	QTN += "<center><table>";
	QTN += "";
	QTN += "<tr><td>T, K</td> <td><center>k, 1/s</center></td> </tr>";
	QTN += "<tr><td>"+T0+"</td> <td>"+k0+"</td> </tr>";
	QTN += "<tr><td>"+T1+"</td> <td>"+k1+"</td> </tr>";
	QTN += "<tr><td>"+T2+"</td> <td>"+k2+"</td> </tr>";
	QTN += "</table></center>";
	QTN += "<br>";
	QTN += "Determina la Energía de activación<br>";


	ANS = E/1000;
	UNI = " kJ/mol";




	//console.log(T1, T2, K1, K2, dH);

}

//------------------------------------------------------------------------------
function exe_ec_Arrhenius(){

	/*
	orden 0, k [=] mol/(L s)
	orden 1, k [=] 1/s
	orden 2, k [=] L/(mol s)
	*/

	let T1, T2, k1, k2, R, E;

	RespuestaEspecial = 'no';
	MostrarRespuestaCorrecta ="no";

	let ejercicio = rndi(1,3);

	while(1){

		k1 = rndi(100,999)/100000;
		T1 = rndi(10,90); //°C
		T2 = T1 + rndi(20,300);
		E  = rndi(10,99)*1000;
		R = 8.314;

		k2 = round4( k1/Math.exp( (E/R)*(1/(T2+273.15) - 1/(T1+273.15)) ) );

		//console.log(k1, k2, T1, T2, E);
		if( k2 > 0 && k2 < 1 ) break;
	}


	if(ejercicio===1){
		QTN  = "La constante de rapidez de cierta reacción química es "+k1+" 1/s a ";
		QTN += T1+" °C. Calcula dicha constante a "+T2;
		QTN += " °C, si la energía de activación es "+(E/1000)+" kJ/mol."

		ANS = k2*1000;
        UNI = "x10<sup>-3</sup> 1/s";
	}

	if(ejercicio===2){
		QTN  = "La constante de rapidez de cierta reacción química es "+k1+" 1/s a ";
		QTN += T1+" °C y "+k2+" 1/s a "+T2+" °C. ";
		QTN += "Calcula la energía de activación de la reacción."

		ANS = E/1000;
        UNI = " kJ/mol";
	}

	if(ejercicio===3){
		QTN  = "La constante de rapidez de cierta reacción química es "+k1+" 1/s a ";
		QTN += T1+" °C. Calcula la temperatura necesaria para que la constante sea "+k2;
		QTN += " 1/s, si la energía de activación es "+(E/1000)+" kJ/mol."

		ANS = T2;
        UNI = " °C";
	}



}


//------------------------------------------------------------------------------
function rndi0(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;;
}

function rndi(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;;
}

function coin(){
	return rndi(1,2);
}

function round2(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function round4(num) {
    return +(Math.round(num + "e+4")  + "e-4");
}

function round6(num) {
    return +(Math.round(num + "e+4")  + "e-6");
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
	names[89]="NEXAMENinio"
	names[90]="Torio"
	names[91]="ProtNEXAMENinio"
	names[92]="Uranio"
	names[93]="NeptUNIo"
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
	names[89]="NEXAMENinium"
	names[90]="Thorium"
	names[91]="ProtNEXAMENinium"
	names[92]="Uranium"
	names[93]="NeptUNIum"
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



/*
function prob_ex2_vanderwaals2()
{

    var rnd = irand(1,4);
    var NAME;
    var a;
    var b;
    var T;
    var P;
    var R=0.08206;
    var n;
    var Vi;
    var V;


    if(rnd===1)
    {
        NAME = "CO<sub>2</sub>";
        a = 3.61;
        b = 4.29e-2;
    }

    if(rnd===2)
    {
        NAME = "Cl<sub>2</sub>";
        a = 6.49;
        b = 0.0562;
    }


    if(rnd===3)
    {
        NAME = "CCl<sub>4</sub>";
        a = 20.4;
        b = 0.138;
    }

    if(rnd===4)
    {
        NAME = "NH<sub>3</sub>";
        a = 4.17;
        b = 0.0371;
    }



    P = rand(5,10)*10;
    T = rand(50,100)*10;
    n = irand(1,5);

    QUESTION += "Calcular el volumen (mediante la ecuación de van der Waals) de "+n+" mol de "+NAME+" a "+P+" atm y "+T+" K. <br>";
    QUESTION += "a = "+a+" atm L<sup>2</sup> / mol<sup>2</sup>. <br>";
    QUESTION += "b = "+b+" L / mol. ";
    QUESTION += "<br>";

    Vi = n*R*T/P;

    var F,FP;
    var iter = 0;;
    var imax = 100;
    var tol = 0.001;
    V = Vi;

    console.log("......................");

    ANSWER += "V ; f(V) ; f'(V) <br>";

    while(1)
    {

        F = P*V*V*V + (-P*n*b-n*R*T)*V*V + a*n*n*V - a*n*n*n*b;

        FP = 3*P*V*V + 2*(-P*n*b-n*R*T)*V + a*n*n;

        console.log(iter,V, F, FP);

        ANSWER += V+" ; "+F+" ; "+FP+"<br>";

        if(Math.abs(F) <= tol || iter >= imax) break;

        V = V - F/FP;
        iter += 1;

    }

    ANSWER += "<br><br>";
    ANSWER += "V <sub>ideal</sub> = "+Vi + " L.<br>";
    ANSWER += "V <sub>real</sub> = "+V + " L.<br>";
    ANSWER += "<br>";
}

*/