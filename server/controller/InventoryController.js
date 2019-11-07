module.exports = {
    getInventory: async (req, res) => {
        const db = req.app.get('db')
        await db.get_all_inventory().then(inventory => {
            res.status(200).send(inventory)
        })
    },
    getSingleItem: async (req, res) => {
        const { id } = req.params;
        console.log(id);
        const db = req.app.get('db')
        await db.get_single_item(id).then(item => {
            res.status(200).send(item)
        })
    }

}