/*

(C) 2024 Dr. Octavio Juárez
octavio.juarez@unison.mx

Todos los derechos reservados.

*/

//------------------------------------------------------------------------------
function prob_ec_cinetica(){

	/*
	orden 0, k [=] mol/(L s)
	orden 1, k [=] 1/s
	orden 2, k [=] L/(mol s)	
	*/
    
	let C0, Ct, t, k, tmp, kuni;
	
	RespuestaEspecial = 'no';
	MostrarRespuestaCorrecta ="no";
	
	let orden = rndi(1,3); orden--;	
	let opcion = rndi(1,3);


	
	if(orden===0){
		while(1){
			kuni = " mol/(L s)";
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
			kuni = " 1/s";
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
			kuni = " L/(mol s)";
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
		QTN += "<br>A &rarr; B, k = "+k+kuni+"<br>";
		QTN += "La concentración inicial de A es "+C0+" mol/L. ";
		QTN += "Determina la concentración de A despues de "+t+" s.";
		ANS = C; 
        uni = "mol/L";
	}
	
	if(opcion===2){
		QTN  = "Considera la siguiente reacción de orden "+orden+":";
		QTN += "<br>A &rarr; B, k = "+k+kuni+"<br>";
		QTN += "La concentración inicial de A es "+C0+" mol/L. ";
		QTN += "Determina el tiempo necesario para que la concentración de A sea "+C+" mol/L."
		ANS = t; 
        uni = "s";
	}	
	
	if(opcion===3){
		QTN  = "Considera la siguiente reacción de orden "+orden+":";
		QTN += "<br>A &rarr; B, k = "+k+kuni+"<br>";
		QTN += "En "+t+" segundos, la concentración de A es "+C+" mol/L. ";
		QTN += "Determina la concentración inicial de A.";
		ANS = C0; 
        uni = "mol/L";
		RespuestaEspecial = 'yes';
	}

    
}

//------------------------------------------------------------------------------
function prob_ec_cinetica_tabla(){

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
	
	let k, kuni;
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
			kuni = " mol/(L s)";
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
			kuni = " 1/s";
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
			kuni = " L/(mol s)";
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
	uni = "x10<sup>-3</sup>";

	


	//console.log(T1, T2, K1, K2, dH);
    
}


//------------------------------------------------------------------------------
function prob_ec_cinetica_vida_media(){

	/*
	orden 0, k [=] mol/(L s)
	orden 1, k [=] 1/s
	orden 2, k [=] L/(mol s)	
	*/
    
	let C, C0, t, k, kuni;
	
	RespuestaEspecial = 'no';
	MostrarRespuestaCorrecta ="no";
	
	let orden = rndi(1,3); orden--;	

	
	if(orden===0){
		while(1){
			kuni = " mol/(L s)";			
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
			kuni = " 1/s";			
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
			kuni = " L/(mol s)";
			C0 = rndi(5,20); // mol/L
			k = rndi(1,100)/1000.0;		
			t = 1/(k*C0);
			//C = round4( 1/(k*t + 1/C0) );
			//console.log(orden, C0, C0/2, C, t, k);
			if(t >=2) break;		
		}				
	}	


	QTN  = "Considera la siguiente reacción de orden "+orden+":";
	QTN += "<br>A &rarr; B, k = "+k+kuni+"<br>";
	QTN += "La concentración inicial de A es "+C0+" mol/L. <br>";
	QTN += "Determina el tiempo de vida media de A.";
	ANS = t; 
	uni = "s";

	

    
}

//------------------------------------------------------------------------------
function prob_ec_cinetica_tabla_2(){

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
	QTN += "Determina la Energía de Activación<br>";	

	
	ANS = E/1000; 
	uni = " kJ/mol";

	


	//console.log(T1, T2, K1, K2, dH);
    
}

//------------------------------------------------------------------------------
function prob_ec_Arrhenius(){

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
        uni = "x10<sup>-3</sup> 1/s";
	}
	
	if(ejercicio===2){
		QTN  = "La constante de rapidez de cierta reacción química es "+k1+" 1/s a ";
		QTN += T1+" °C y "+k2+" 1/s a "+T2+" °C. ";
		QTN += "Calcula la energía de activación de la reacción."
		
		ANS = E/1000; 
        uni = " kJ/mol";
	}	
	
	if(ejercicio===3){
		QTN  = "La constante de rapidez de cierta reacción química es "+k1+" 1/s a ";
		QTN += T1+" °C. Calcula la temperatura necesaria para que la constante sea "+k2;
		QTN += " 1/s, si la energía de activación es "+(E/1000)+" kJ/mol."
		
		ANS = T2; 
        uni = " °C";
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


