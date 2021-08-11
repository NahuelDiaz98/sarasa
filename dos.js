function mostrar() {
  let nombre;
  let carrera; // quimica fisica sistemas
  let sexo;
  let cantidadM; // 1 y 5
  let PromNotaAlumno=0;
  let edad;
  //a
  let nota;
  let promNota=0;

  //b
  let alumnaMasJoven=0;
  let nombreAlumnaMasJoven;
  let flagAlumna=1;



  for (let i=0; i<500 ; i++){

    nombre=prompt("Nombre del animal");

    carrera= prompt(" ingrese nombre de la carrera (quimica/fisica/sistemas):");
		while( !(carrera=="quimica" ||carrera=="fisica" || carrera=="sistemas")){ 
      carrera= prompt("error , reingrese nombre de la carrera (quimica/fisica/sistemas):");
			
		}
    sexo=prompt("sexo (m/f):");
      while(sexo !="m" && sexo !="f" ){

        sexo=prompt("reingrese,sexo (m/f):");
      }

      edad=parseInt(prompt("ingrese edad(mayores de 18): "));
      while(!(edad>=18)){
        edad=parseInt(prompt("Lo siento, edad no apta. reingrese edad(mayor de 18 años): "));

      }
      nota=parseInt(prompt("ingrese nota:"));
      if(carrera=="fisica"){
        
      }

    if(sexo=="f"){
      if(flagAlumna || edad<alumnaMasJoven){
        alumnaMasJoven=edad;
        nombreAlumnaMasJoven=nombre;
        flagAlumna=0;
      }

    }

  }
    
    
}
