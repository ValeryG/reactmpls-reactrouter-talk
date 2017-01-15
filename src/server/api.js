export const places = (req, res) => {
    res
        .set("Content-Type", "application/json")
        .send(require('../../data/places.json').slice(0, req.query.n));
}

export const home = (req, res)  => {
    res.set("Content-Type", "application/json");
    let places = require('../../data/places.json');
    let songs = require('../../data/songs.json');

    res.send({
        "places": {"total": places.length, "next": places[0]},
        "songs": {"total": songs.length, "next": songs[0]["Title"]}
    });
}
