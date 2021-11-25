const db = require('../../database/models');
const getURL = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`;

module.exports = {
    'list': (req, res) => {
         db.Genre.findAll()
            .then(genres => {
                let respuesta = {
                    meta: {
                        status : 200,
                        total: genres.length,
                        url: getURL(req)
                    },
                    data: genres
                }
                    res.json(respuesta);
            })
            .catch(error => res.json(error))
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
        .then(genre => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: genre.length,
                    url: getURL(req)
                },
                data: genre
            }
            res.json(respuesta);
        })
        .catch(error => res.json(error))
    }
}