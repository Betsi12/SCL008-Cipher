window.cipher={
  encode:(offset, text)=> { /* MENSAJE RECIBIDO*/
    let msgCipher="";
    let ascii1=0;
    let ascii2=0;
    let numOffset= parseInt(offset);

    for (let i =  0; i < text.length; i++ ) {     //recorriendo el texto//
      ascii1=text.charCodeAt(i);
      if( ascii1>= 32 && ascii1<=64) {
        ascii2=(ascii1-32+numOffset)%33+32;
        msgCipher+=String.fromCharCode(ascii2)   
      }
      else if (ascii1>=65 && ascii1<=90){
        ascii2=(ascii1-65+numOffset)%26+65;
        msgCipher+=String.fromCharCode(ascii2);
      }        
      else if (ascii1>=97 && ascii1 <= 122){
        ascii2=(ascii1-97+numOffset)%26+97; 
        msgCipher+=String.fromCharCode(ascii2);
      }
    }
  return msgCipher;
  },

  decode:(offset, text)=> { /* MENSAJE RECIBIDO*/
    let msgCipher="";
    let ascii1= 0;
    let ascii2=0;
    let numOffset= parseInt(offset);

    for (let i =  0; i < text.length; i++ ) {     //recorriendo el texto//
      ascii1=text.charCodeAt(i);
      if( ascii1>= 32 && ascii1<=64) {
        ascii2=(ascii1-64-numOffset)%33+64;
        msgCipher+=String.fromCharCode(ascii2)   //encontrando codigo ascii//
      }
      else if (ascii1>=65 && ascii1<=90){
        ascii2=(ascii1-90-numOffset)%26+90;
        msgCipher+=String.fromCharCode(ascii2);
      }        
      else if (ascii1>=97 && ascii1 <= 122){
        ascii2=(ascii1-122-numOffset)%26+122; 
        msgCipher+=String.fromCharCode(ascii2);
      }
    }
  return msgCipher;
  }
}
