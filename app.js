// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = ["Alvaro", "Seba", "Claudio", "Dani"];

function agregarAmigo() {
  let nuevoAmigo = document.getElementById("amigo").value;
  //console.log(nuevoAmigo);

  if (nuevoAmigo === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  if (amigos.includes(nuevoAmigo)) {
    alert("Este amigo ya está en la lista.");
    document.getElementById("amigo").value = ""; //Lo agrego para volver a limpiar el campo una vez el usuario ha recibio el alert de amigo duplicado.
    return;
  }

  // Formatear el nombre a (primera letra mayúscula, el resto minúsculas)
  nuevoAmigo = nuevoAmigo.charAt(0).toUpperCase() + nuevoAmigo.slice(1).toLowerCase();

  if (nuevoAmigo) {
    // Verifica que no esté vacío
    amigos.push(nuevoAmigo);
    console.log(amigos);
    document.getElementById("amigo").value = "";
  }
}

function sortearAmigo() {
  
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
  
    //alert(`🎉 El amigo sorteado es: ${amigoSorteado} 🎉`);
    document.getElementById("resultado").innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong> 🎉`;
    
  }
