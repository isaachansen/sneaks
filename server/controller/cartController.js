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
        const {cart_id} = req.params
        console.log(req.session.user)
        const { user_id } = req.session.user
        const db = req.app.get("db");
        const results = await db.delete_from_cart([cart_id, user_id])
        console.log("these are the results: ", results)
            res.status(200).send(results)

    }
}