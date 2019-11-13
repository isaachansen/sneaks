module.exports = {
  getInventory:  async (req, res) => {
    const db = req.app.get("db");
    const inventory = await db.get_all_inventory()
      res.status(200).send(inventory)
  },
  getSingleItem: (req, res) => {
    const { id } = req.params;
    console.log(id);
    const db = req.app.get("db");
    db.get_single_item(id).then(item => {
      res.status(200).send(item);
    });
  },
  getNikeItem: async (req, res) => {
    const db = req.app.get("db");
    const nike = await db.get_nike();
    res.status(200).send(nike);
  },
  getVansItem: async (req, res) => {
    const db = req.app.get("db");
    const vans = await db.get_vans();
    res.status(200).send(vans);
  },
  getAdidasItem: async (req, res) => {
    const db = req.app.get("db");
    const adidas = await db.get_adidas();
    res.status(200).send(adidas);
  },
  getConverseItem: async (req, res) => {
    const db = req.app.get("db");
    const converse = await db.get_converse();
    res.status(200).send(converse);
  },
  getAirJordanItem: async (req, res) => {
    const db = req.app.get("db");
    const aj = await db.get_air_jordan();
    res.status(200).send(aj);
  },
  getOtherItem: async (req, res) => {
    const db = req.app.get("db");
    const other = await db.get_other();
    res.status(200).send(other);
  }
};
