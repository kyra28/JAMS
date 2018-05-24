var sequelize = require("./config").sequelize;

var bilan_session = sequelize.import("./bilan_session");
var classe = sequelize.import("./classe");
var etudiant = sequelize.import("./etudiant");
var etudiant_classe = sequelize.import("./etudiant_classe");
var professeur = sequelize.import("./professeur");
var qcm = sequelize.import("./qcm");
var question = sequelize.import("./question");
var reponse = sequelize.import("./reponse");
var session_qcm = sequelize.import("./session_qcm");


exports.bilan_session = bilan_session;
exports.classe = classe;
exports.etudiant = etudiant;
exports.etudiant_classe = etudiant_classe;
exports.professeur = professeur;
exports.qcm = qcm;
exports.question=question;
exports.reponse=reponse;
exports.session_qcm=session_qcm;