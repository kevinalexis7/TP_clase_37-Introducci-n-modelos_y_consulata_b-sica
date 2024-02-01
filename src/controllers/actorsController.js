const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    list : (req,res) => {
        db.Actor.findAll({
            order : [
                ['first_name']
            ]
        })
            .then(actors =>{
                return res.render('actorsList', {
                    actors
                })
            })
            .catch(error => console.log(error))
    },
    detail : (req,res) => {
        const {id} = req.params;
        db.Actor.findByPk(id)
        .then(actor => {
            if(actor.favorite_movie_id){

                db.Movie.findOne({
                    where : {
                        id : {[Op.eq]: actor.favorite_movie_id}                        
                    }
                }
                )
                .then(movie => {
                    return res.render('actorsDetail', {
                        movie,
                        actor
                    }) 
                })
            }else{
                return res.render('actorsDetail', {
                    movie : null,
                    actor
                }) 
            }
            })
            .catch(error => console.log(error))
        },
}