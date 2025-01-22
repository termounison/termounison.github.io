
/*

(C) 2024 Dr. Octavio Juárez
octavio.juarez@UNIson.mx

Todos los derechos reservados.

*/





//------------------------------------------------------------------------------
var downloadTimer = setInterval(function(){
    
    //console.log("timer");
  if(TIMELEFT <= 0 && !GAMEOVER){
    //clearInterval(downloadTimer);
    document.getElementById("info2").innerHTML = "0";
	gameover();
  } else {
    document.getElementById("info2").innerHTML = TIMELEFT;
  }
  TIMELEFT -= 1;
}, 1000);

//------------------------------------------------------------------------------
function start(){
	
	CTD = 1;
	OKS = 0;
	TIMELEFT = MAXTIME;
	GAMEOVER = false;

	USRNAME = document.getElementById("student_name").value;


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





//------------------------------------------------------------------------------
function bR()  { start(); start();}
function b1()  { if(TIMELEFT>0) { USRANS = 1; checkAns();} }
function b2()  { if(TIMELEFT>0) { USRANS = 2; checkAns();} }
function b3()  { if(TIMELEFT>0) { USRANS = 3; checkAns();} }
function b4()  { if(TIMELEFT>0) { USRANS = 4; checkAns();} }
function b0()  { if(TIMELEFT>0) { USRANS = 5; checkAns();} }
function reload()  { location.reload(); }

//------------------------------------------------------------------------------
function checkAns(){
	
	CTD +=1 ;

	if(CTD <= (NPREGUNTAS+1) )
	{
		if(USRANS === TRUEOPTION)
		{
			SCORE+=PUNTOS;
			OKS++;
			updateScore();
			test();
		}else{
			FAILS += 1;
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
		document.getElementById("info1").innerHTML = NPREGUNTAS + " / " + NPREGUNTAS;
	}

	if(CTD >= NPREGUNTAS)
	{
		document.getElementById("info1").innerHTML = NPREGUNTAS + " / " + NPREGUNTAS;
	}

	if(CTD > NPREGUNTAS)
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
	SCORE = 0;
	FAILS = 0;
	updateScore();
}

//------------------------------------------------------------------------------
function updateScore(){

	document.getElementById("info1").innerHTML = CTD + " / " + NPREGUNTAS;
	document.getElementById("info3").innerHTML = SCORE;
	
	if(CTD >= NPREGUNTAS)
	{
		document.getElementById("info1").innerHTML = NPREGUNTAS + " / " + NPREGUNTAS;
	}
	
}


//------------------------------------------------------------------------------
function showAns(){
	
	//console.log("ANS: ", ANS);    

	TRUEANS = "";
    
    if( ANS%2 === 0){
        FAKEANS[0] = round2( ANS / 2) +" "+ UNI;	
        FAKEANS[1] = round2( ANS / 4) +" "+ UNI;
        FAKEANS[2] = round2( ANS * 2) +" "+ UNI;
        FAKEANS[3] = round2( ANS * 4   ) +" "+ UNI;
        TRUEANS =  round2( ANS       ) +" "+ UNI;   
    }else if(ANS%5 === 0){        
        FAKEANS[0] = round2( ANS / 5) +" "+ UNI;	
        FAKEANS[1] = round2( ANS / 10) +" "+ UNI;
        FAKEANS[2] = round2( ANS * 2) +" "+ UNI;
        FAKEANS[3] = round2( ANS * 4   ) +" "+ UNI;
        TRUEANS =  round2( ANS       ) +" "+ UNI;         
    
    }else{
        FAKEANS[0] = round2( ANS * 0.50 + rndi(1,10)/10.0 ) +" "+ UNI;		
        FAKEANS[1] = round2( ANS * 0.75 + rndi(1,10)/10.0 ) +" "+ UNI;
        FAKEANS[2] = round2( ANS * 1.50 + rndi(1,10)/10.0 ) +" "+ UNI;
        FAKEANS[3] = round2( ANS * 2.0  + rndi(1,10)/10.0 ) +" "+ UNI;
        TRUEANS =  round2( ANS       ) +" "+ UNI;  
    } 
    


	TRUEOPTION = rndi(1,4);
    

	if(TRUEOPTION === 1){
		if(coin()===1){
			document.getElementById("b1").innerHTML = TRUEANS;
			document.getElementById("b2").innerHTML = FAKEANS[2];
			document.getElementById("b3").innerHTML = FAKEANS[1];
			document.getElementById("b4").innerHTML = FAKEANS[0];
		}else{
			document.getElementById("b1").innerHTML = TRUEANS;
			document.getElementById("b2").innerHTML = FAKEANS[0];
			document.getElementById("b3").innerHTML = FAKEANS[1];
			document.getElementById("b4").innerHTML = FAKEANS[2];
		}		
	}
	if(TRUEOPTION === 2){
		if(coin()===1){
			document.getElementById("b1").innerHTML = FAKEANS[3];
			document.getElementById("b2").innerHTML = TRUEANS;
			document.getElementById("b3").innerHTML = FAKEANS[0];
			document.getElementById("b4").innerHTML = FAKEANS[1];
		}else{
			document.getElementById("b1").innerHTML = FAKEANS[0];
			document.getElementById("b2").innerHTML = TRUEANS;
			document.getElementById("b3").innerHTML = FAKEANS[1];
			document.getElementById("b4").innerHTML = FAKEANS[2];
		}
	}
	if(TRUEOPTION === 3){
		if(coin()===1){
			document.getElementById("b1").innerHTML = FAKEANS[3];
			document.getElementById("b2").innerHTML = FAKEANS[2];
			document.getElementById("b3").innerHTML = TRUEANS;
			document.getElementById("b4").innerHTML = FAKEANS[0];
		}else{
			document.getElementById("b1").innerHTML = FAKEANS[0];
			document.getElementById("b2").innerHTML = FAKEANS[1];
			document.getElementById("b3").innerHTML = TRUEANS;
			document.getElementById("b4").innerHTML = FAKEANS[2];
		}
	}
	if(TRUEOPTION === 4){
		if(coin()===1){
			document.getElementById("b1").innerHTML = FAKEANS[2];
			document.getElementById("b2").innerHTML = FAKEANS[1];
			document.getElementById("b3").innerHTML = FAKEANS[3];
			document.getElementById("b4").innerHTML = TRUEANS;

		}else{
			document.getElementById("b1").innerHTML = FAKEANS[0];
			document.getElementById("b2").innerHTML = FAKEANS[1];
			document.getElementById("b3").innerHTML = FAKEANS[2];
			document.getElementById("b4").innerHTML = TRUEANS;
		}
	}
    
	
	if(CTD > NPREGUNTAS){
		document.getElementById("b1").innerHTML = "...";
		document.getElementById("b2").innerHTML = "...";
		document.getElementById("b3").innerHTML = "...";
		document.getElementById("b4").innerHTML = "...";
	}

	if(TIMELEFT <= 0){
		document.getElementById("b1").innerHTML = "...";
		document.getElementById("b2").innerHTML = "...";
		document.getElementById("b3").innerHTML = "...";
		document.getElementById("b4").innerHTML = "...";
	}
    
   
	
}








//------------------------------------------------------------------------------
function gameover(){
	
	GAMEOVER = true;
	
	let dddd = new Date();
	let yy = dddd.getFullYear();
	let mh = dddd.getMonth();
	let dd = dddd.getDate();
	let hhutc = dddd.getUTCHours();
	let hh = 1;
	let mm = dddd.getUTCMinutes();
	
	let resumen = "";
	let _tleft_ = TIMELEFT;
	let _counter_ = CTD -1;
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
	
	firma[0] = USRNAME.length;firma[1] = R[1];firma[2] = R[0];
	firma[3] = R[2];firma[4] = R[3];firma[5]=hh+mm;firma[6]=NEXAMEN+dd;;firma[7]=NEXAMEN+OKS;
	

	document.getElementById("questionpanel").style.display = "none";
	document.getElementById("resumen").style.display = "block";
    document.getElementById("resumenpanel").style.display = "block";
    document.getElementById("restart").style.display = "block";

	resumen +=CURSO+"<br>";
    resumen +="Examen "+NEXAMEN+"<br>";
	resumen +="Estudiante: "+USRNAME+"<br>";
	resumen +="Calificación: "+SCORE+"<br>";
	resumen +="Aciertos: "+OKS+" de "+ NPREGUNTAS+  "<br>";
	resumen +="Fecha: "+dd+"/"+mh+"/"+yy+"<br>";
	resumen +="Hora: "+hh+":"+mm+"<br>";
	resumen +="Tiempo restante: "+TIMELEFT+" segundos.<br>";
	resumen +="Firma: "+firma[6]+","+firma[0]+","+firma[5]+","+firma[3]+","+firma[1]+","+firma[4]+","+firma[2]+","+firma[7]+".<br>";
	
	document.getElementById("resumen").innerHTML = resumen;

}



