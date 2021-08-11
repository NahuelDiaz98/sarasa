function mostrar() {
  let nombre;
  let tipo;
  let sangre;
  let seguir;
  let edad;
  let sexo;
  //a
  let acumEdadReptil=0;
  let contReptil=0;
  let promEdadReptil=0;
  //b
  let edadMasJoven
  let sexoMasJoven;
  let tipoMasJoven;
  let flaghjoven=1;
  let acumEdadAve=0
  let contAve=0
  let acumEdadMamifero=0;
  let contMamifero=0;

  //c
  let contAnimalGeneral=0;
  let porcentajeAves=0;

  //d
  let tipoMax;

  
  do{
    nombre=prompt("Nombre del animal");
    while(!(nombre.length >=3 && nombre.length <=8)){
      nombre=prompt("Nombre fuera de rango(3-8). Reingrese nombre:");
    }
    tipo=prompt("Tipo de animal (mamifero/ave/reptil):");
    while(tipo !="mamifero" && tipo !="ave" && tipo!="reptil"){
      tipo=prompt("error, reingrese Tipo de animal (mamifero/ave/reptil):");
    }
    if(tipo =="reptil"){
      sangre=prompt("tipo de sangre (fria/calida):");
      while(sangre!="fria"){
        
        sangre=prompt("error, los reptiles son de sangre fria tipo de sangre (fria/calida):");
      }
      

    }else{
      
        sangre=prompt("tipo de sangre (fria/calida):");
        while(sangre!="calida"){
          
          sangre=prompt("error, ese tipo de animal no es de sangre fria (fria/calida):");
        }
    }
    edad=parseInt(prompt("ingrese Edad del animal:"));
      while(!(edad>0)){
        edad=parseInt(prompt("error, reingrese edad del animal:"));

      }
      if(edad>0){
        if(tipo=="reptil"){

          acumEdadReptil+=edad;
          contReptil++;
        }else if(tipo=="ave"){
          acumEdadAve+=edad;
           contAve++;

        }else{
          acumEdadMamifero+=edad;
          contMamifero++;
        }
      }
      sexo=prompt("sexo del animal(m/h):");
      while(sexo !="m" && sexo !="h" ){
        sexo=prompt("reingrese,sexo del animal(m/h):");
        
      }

      
        if(flaghjoven || edad<edadMasJoven ){
            edadMasJoven=edad;
            tipoMasJoven=tipo;
            sexoMasJoven=sexo;
        }
      
        contAnimalGeneral++; //c
        seguir=prompt("Deseas seguir?(si/no)");
  }while(seguir=="si");

  if(contReptil!=0){
    promEdadReptil=acumEdadReptil/contReptil; //promedio de edad reptiles
  }
  if(contAnimalGeneral !=0){
    porcentajeAves=contAve*100/contAnimalGeneral;  //c
  }

  if(contAve> contMamifero && contAve >contReptil){
    tipoMax="Ave";
    
  }else if(contMamifero>=contAve &&contMamifero>contReptil){
    tipoMax="Mamifero";
  }else{
    tipoMax="reptil";
  }

  document.write("el promedio de edad de reptiles es: "+promEdadReptil+"<br>");

  document.write("El tipo de animal mas joven es "+tipoMasJoven+ " y tiene "+edadMasJoven+ " y es "+sexo+"<br>");

  document.write("El porcentaje de aves es: "+porcentajeAves+"<br>");

  document.write("El tipo de animal que mas hay es "+tipoMax+"<br>");


  


}
