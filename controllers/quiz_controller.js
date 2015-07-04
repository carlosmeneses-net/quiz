//En las nuevas versiones de Sequelize el interfaz ha cambiado para usar "Promesas".
//A grandes rasgos hay que cambiar .success por .then, .error por .catch y .done por .finally.

var models = require('../models/models.js');

//GET /quizes/question
exports.question = function(req, res){
	//res.render('quizes/question', {pregunta: 'Capital de Italia'});
	models.Quiz.findAll().then(function(quiz){
		res.render('quizes/question', {pregunta: quiz[0].pregunta});
	})
};

//GET /quizes/answer
exports.answer = function(req, res){
	models.Quiz.findAll().then(function(quiz) {
		if(req.query.respuesta === quiz[0].respuesta){
			res.render('quizes/answer', {respuesta: 'Correcto'});
		}else{
			res.render('quizes/answer', {respuesta: 'Incorrecto'});
		}
	})
};
