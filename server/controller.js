module.exports = {
    getAllHouses: async  (req, res) => { 
        const db = req.app.get('db')
        const houses = await db.get_all_houses()
        res.status(200).send(houses)
    },
    addHouse: async (req, res) => { 
        const { name, address, state, city, zip } = req.body
        const db = req.app.get('db')
        const houses = await db.add_house([name, address, state, city, zip])
        res.status(200).send(houses)
    }
}