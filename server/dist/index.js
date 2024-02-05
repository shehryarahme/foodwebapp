"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boilded Egg",
            price: 10,
            text: "Indulge in simplicity with our Truffle Bliss Egg a perfect boil, velvety yolk, and tender white, adorned with radishes, microgreens, and a truffle-infused olive oil drizzle.",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 25,
            text: "Savor our Perfect Ramen Bowl tender noodles, rich savory broth, and vibrant veggies. A symphony of flavors in every delightful slur",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "Savor our Grilled Chicken Symphony succulent chicken marinated to perfection. A harmony of smoky flavors, tender texture, and a tantalizing blend of spices.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 18,
            text: "Indulge in our Velvet Cake Dream a slice of heavenly perfection. Moist layers of red velvet adorned with creamy frosting.A dessert masterpiece that lingers on the palate.",
            image: "/images/cake.png",
            type: "dinner",
        },
        {
            name: "BURGER",
            price: 23,
            text: "Sink your teeth into our Burger a symphony of flavors in every bite. Juicy, perfectly grilled patty, fresh veggies, and a special sauce on a toasted bun.",
            image: "/images/burger.png",
            
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 25,
            text: "Dive into our Fluffy Pancake Delight a stack of clouds on a plate. Light, airy pancakes drizzled with maple syrup. It's breakfast perfection.",
            image: "/images/pancake.png",
            type: "breakfast",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map