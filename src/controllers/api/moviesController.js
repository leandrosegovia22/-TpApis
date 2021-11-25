const db = require('../../database/models');
const getURLBase = req => `${req.protocol}://${req.get('host')}`;


module.exports = {
    'create': (req, res) => {
         db.Movie.create(
             {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
             }
         )
            .then(Movie => {
                let respuesta = {
                    meta: {
                        status : 201,
                        url: getURLBase(req) + '/api/movies/' + Movie.id,
                        message : "Pelicula agregada con éxito"
                    },
                    data: Movie
                }
                res.status(201).json(respuesta);
            })
            .catch(error => res.json(error))
    },
    'destroy': (req, res) => {
        db.Movie.destroy(
            {
            where: {id: req.params.id}
            })
            .then(() => {
                let respuesta = {
                    meta: {
                        status: 200,
                        message: "Pelicula eliminada"
                    }
                }
                res.status(200).json(respuesta)
            })
        .catch(error => res.json(error))
    }
}