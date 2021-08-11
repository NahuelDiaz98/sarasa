function mostrar() {
  let tipo;
  let origen;
  let precio;
  //a
  let contMuñeca=0;
  let contpelota=0;
  let contrompecabeza=0;
  let tipoMasVendido;
  //b
  let acumPrecioImportados=0;
  //c
  let recaudacionTotal=0;
  //d
  let precioRompeCabezasMasBarato=0;
  let flagPrecioRompecabezas=1;
  let contproductosImportados=0;
  //e
  let iva;
  
do{
  tipo=prompt("Tipo de juguete (muñeca/rompecabezas/pelota):");
  while(tipo !="muñeca" && tipo !="rompecabezas" && tipo!="pelota"){
    
    tipo=prompt("error, reingrese Tipo de juguete (muñeca/rompecabezas/pelota):");
    }
    origen=prompt("origen (nacional/importado):");
    while(origen !="nacional" && origen !="importado" ){
      
      origen=prompt("error, reingrese origen (nacional/importado):");
        
      }
      precio=parseInt(prompt("ingrese precio(rango 1000/5000): "));
      while(!(precio>=1000 && precio<=5000)){
        precio=parseInt(prompt("reingrese precio(rango 1000/5000): "));
      
        
      }
      //a
      if(tipo=="muñeca"){    
        contMuñeca++;
        
        

      }else if(tipo=="pelota"){
        contpelota++;

      }else{
        contrompecabeza++;
        precioRompeCabezas=precio;
      }

      if(origen=="importado"){
        acumPrecioImportados+=precio;
        contproductosImportados++;

      }

      recaudacionTotal+=precio;


      if(origen=="nacional"){
        if(tipo=="rompecabezas"){

          if(flagPrecioRompecabezas || precio < precioRompeCabezasMasBarato){
            precioRompeCabezasMasBarato=precio;
          
            flagPrecioRompecabezas=0;
          }
        }
      }


  seguir=prompt("deseas seguir?(si/no)");

}while(seguir=="si")



  if(contrompecabeza> contpelota && contrompecabeza >contMuñeca){
    tipoMasVendido="rompecabeza";
    
  
}else if(contpelota>=contrompecabeza &&contpelota>contMuñeca){
  tipoMasVendido="pelota";
}else{
  tipoMasVendido="muñeca";
}

if(acumPrecioImportados!=0){
  acumPrecioImportados=acumPrecioImportados/contproductosImportados;
}

iva=recaudacionTotal-(recaudacionTotal*21/100)
document.write("El tipo mas vendido fue :"+tipoMasVendido+ "<br>");//a

document.write(" El promedio de precio de los juguetes importados "+acumPrecioImportados+"<br>");

document.write("La recaudacion total:"+recaudacionTotal+"<br>");

document.write("el rompecabezas nacional mas barato es de: "+precioRompeCabezasMasBarato+"<br>");

document.write("El total de todo con iva 21%: "+iva);



}//fin
