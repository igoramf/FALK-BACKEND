function normalizeUsername(username){
    return username.normalize('NFD')
    // Remover acentos
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._]/g, '')
    .toLowerCase();
}



//const user = "Gy guará"
//const textoNormalizado = normalizeUsername(user);
//result = "gyguara"


module.exports = normalizeUsername;