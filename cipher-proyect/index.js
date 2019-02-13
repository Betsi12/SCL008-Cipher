
const inputActive=document.getElementById("bEncode");
inputActive.addEventListener("click", () => {
    const textActive= document.getElementById("box-message");
    let textValue= textActive.value;    
    let boxActive=document.getElementById("numberOffset");
    let boxValue=boxActive.value;
    let result= cipher.encode(boxValue,textValue);
    document.getElementById("box-resp").value=result;
})

const boxActive=document.getElementById("btndecode");
    boxActive.addEventListener("click", () => {
    const textActive= document.getElementById("box-message");
    let textValue= textActive.value;    
    let boxActive=document.getElementById("numberOffset");
    let boxValue=boxActive.value;
    let result= cipher.decode(boxValue,textValue);
    document.getElementById("box-resp").value=result;
})









    