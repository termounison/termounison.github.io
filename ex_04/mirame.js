



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

