/*
 * Storage
 */
var Storage = function() {
  this.myJSON = [];
};

Storage.prototype = {
  //se almacena objeto
  almacenarObjeto: function(objeto) {
    this.myJSON.push({"idpregunta": objeto.id, "pregunta": objeto.pregunta});
    localStorage.setItem('preguntas', JSON.stringify(myJSON));
  },

  obtenerObjeto: function() {
    var retrievedObject = localStorage.getItem('testObject');
    return JSON.parse(retrievedObject);
  },
};
