const dishes = [
  {
    id: 1,
    title: "Carpaccio fresco",
    desc: "Entrada Carpaccio de salmón con cítricos",
    price: "U$S 65.50",
    img: "/images/Carpaccio-de-salmon.jpg",
  },
  {
    id: 2,
    title: "Risotto de berenjena",
    desc: "Risotto de berenjena y queso de cabra",
    price: "U$S 47.00",
    img: "/images/Risotto-berenjena-queso-cabra.jpg",
  },
  {
    id: 3,
    title: "Mousse de arroz",
    desc: "Mousse de arroz con leche y aroma de azahar",
    price: "U$S 27.50",
    img: "/images/Mousse-de-arroz-con-leche.jpg",
  },
  {
    id: 4,
    title: "Espárragos blancos",
    desc: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
    price: "U$S 37.50",
    img: "/images/esparragos.png",
  },
];

module.exports = {
  home: (req, res) => {
    res.render("index", { dishes: dishes });
  },
  dishDetail: (req, res) => {
    const pepito = dishes.find((dish) => {
      return dish.id == req.params.id;
    });

    res.render("detalle-menu", { dish: pepito });
  },
};
