module.exports = {
    getCart: async (req, res) => {
        const {id} = req.params;
        const db = req.app.get("db");
        const results = await db.join_cart_items([id])
            res.status(200).send(results);
    },
    addToCart: async (req, res) => {
        const {user_id, shoe_id} = req.body;
        const db = req.app.get("db");
        const results = await db.add_to_cart([user_id, shoe_id])
            res.status(200).send(results)
    },
    deleteFromCart: async (req, res) => {
        const {cart_id} = req.body
        const db = req.app.get("db");
        const results = await db.delete_from_cart([cart_id])
            res.status(200).send(results)

    }
}