var app = new Vue({
    el: ".content",
    data: {
      products: [
        {
          id: 1,
          title: "Russet Burbank Seeds",
          short_text:
            "Plant the Roots of Deliciousness: Grow Your Own Potatoes from Scratch!",
          image: "russet-burbank.jpg",
          desc: "<div class='additional-info'><div class='list-title'>Characteristics</div><ul class='characteristics-list'><li><strong>Resistance</strong></li><li>HR: ToMV:0-2; Fol: 1,2; Ve/Vd;</li><li>IR: TYLCV</li></ul></div><div class='additional-info'><div class='list-title'>Plant</div><ul class='plant-list'><li>Strong vigor providing extensive leaf coverage.</li><li>Very high productivity with consistent fruit setting.</li><li>Early-maturing variety, ensuring a timely harvest.</li></ul></div><div class='additional-info'><div class='list-title'>Fruit</div><ul class='fruit-list'><li>Boasts long shelf life both on the plant and post-harvest.</li><li>Exhibits a beautiful, shiny, and appealing deep red color.</li><li>Produces potatoes with an average size ranging from 140 to 160 grams.</li></ul></div><div class='additional-info'><div class='list-title'>Cycle</div><ul class='cycle-list'><li>Suitable for both spring and fall planting.</li><li>Fall</li></ul></div><div class='additional-info'><div class='list-title'>Color</div><ul class='color-list'><li>Yellow</li></ul></div>",
        },
        {
          id: 2,
          title: "Yukon Gold Seeds",
          short_text: "Sow the Seeds of Satisfaction: Cultivate Your Own Custom Potato Patch!",
          image: "Yukon-gold.jpg",
          desc: "<div class='additional-info'><div class='list-title'>Characteristics</div><ul class='characteristics-list'><li><strong>Resistance</strong></li><li>HR: ToMV:0-2; Fol: 1,2; Ve/Vd;</li><li>IR: TYLCV</li></ul></div><div class='additional-info'><div class='list-title'>Plant</div><ul class='plant-list'><li>Displays robust vigor, ensuring ample leaf cover for optimal growth.</li><li>Achieves exceptional productivity with reliable fruit setting.</li><li>Early-maturing, allowing for a swift harvest.</li></ul></div><div class='additional-info'><div class='list-title'>Fruit</div><ul class='fruit-list'><li>Offers extended shelf life both on the plant and after harvest.</li><li>Showcases a glossy, attractive deep red skin color.</li><li>Yields potatoes of uniform size, averaging between 140 to 160 grams.</li></ul></div><div class='additional-info'><div class='list-title'>Cycle</div><ul class='cycle-list'><li>Flourishes in both spring and fall seasons.</li></ul></div><div class='additional-info'><div class='list-title'>Color</div><ul class='color-list'><li>Gold</li></ul></div>",
        },
        {
          id: 3,
          title: "Red Pontiac Seeds",
          short_text: "From Tiny Seeds to Tasty Tubers: Start Your Potato Adventure Today!",
          image: "Red-pontiac.jpg",
          desc: "<div class='additional-info'><div class='list-title'>Characteristics</div><ul class='characteristics-list'><li><strong>Resistance</strong></li><li>HR: ToMV:0-2; Fol: 1,2; Ve/Vd;</li><li>IR: TYLCV</li></ul></div><div class='additional-info'><div class='list-title'>Plant</div><ul class='plant-list'><li>Demonstrates vigorous growth, providing excellent leaf coverage.</li><li>Delivers outstanding productivity with abundant fruit setting.</li><li>Known for early maturation, ensuring timely yields.</li></ul></div><div class='additional-info'><div class='list-title'>Fruit</div><ul class='fruit-list'><li>Maintains prolonged shelf life on the plant and post-harvest.</li><li>Presents a lustrous, enticing deep red hue.</li><li>Produces potatoes of consistent size, averaging 140 to 160 grams.</li></ul></div><div class='additional-info'><div class='list-title'>Cycle</div><ul class='cycle-list'><li>Thrives in both spring and fall planting conditions.</li></ul></div><div class='additional-info'><div class='list-title'>Color</div><ul class='color-list'><li>Red</li></ul></div>",
        },
        {
          id: 4,
          title: "Kennebec Seeds",
          short_text: "Harvest Homegrown Happiness: Potato Seeds for Your Garden Glory!",
          image: "Kennebec.jpeg",
          desc: "<div class='additional-info'><div class='list-title'>Characteristics</div><ul class='characteristics-list'><li><strong>Resistance</strong></li><li>HR: ToMV:0-2; Fol: 1,2; Ve/Vd;</li><li>IR: TYLCV</li></ul></div><div class='additional-info'><div class='list-title'>Plant</div><ul class='plant-list'><li>Exhibits robust vigor, forming a dense canopy of leaves.</li><li>Yields exceptionally high productivity with reliable fruit set.</li><li>Noted for its early maturity, facilitating prompt harvesting.</li></ul></div><div class='additional-info'><div class='list-title'>Fruit</div><ul class='fruit-list'><li>Offers extended shelf life during growth and after harvest.</li><li>Showcases an alluring, shiny deep red coloration.</li><li>Generates potatoes of uniform size, typically ranging from 140 to 160 grams.</li></ul></div><div class='additional-info'><div class='list-title'>Cycle</div><ul class='cycle-list'><li>Suitable for both spring and fall cultivation.</li></ul></div><div class='additional-info'><div class='list-title'>Color</div><ul class='color-list'><li>White</li></ul></div>",
        },
        {
          id: 5,
          title: "Fingerling Seeds",
          short_text:
            "Unlock Flavor from the Ground Up: Plant Potato Seeds for a Bountiful Bounty!",
          image: "Fingerling.jpg",
          desc: "<div class='additional-info'><div class='list-title'>Characteristics</div><ul class='characteristics-list'><li><strong>Resistance</strong></li><li>HR: ToMV:0-2; Fol: 1,2; Ve/Vd;</li><li>IR: TYLCV</li></ul></div><div class='additional-info'><div class='list-title'>Plant</div><ul class='plant-list'><li>Displays vigorous growth, ensuring ample foliage for coverage.</li><li>Exhibits very high productivity, setting fruit abundantly.</li><li>Recognized for its early maturation, enabling a swift harvest.</li></ul></div><div class='additional-info'><div class='list-title'>Fruit</div><ul class='fruit-list'><li>Possesses a long shelf life, retaining quality on the plant and post-harvest.</li><li>Features an attractive, glossy deep red coloration.</li><li>Yields fingerling potatoes with an average size of 140 to 160 grams.</li></ul></div><div class='additional-info'><div class='list-title'>Cycle</div><ul class='cycle-list'><li>Well-suited for both spring and fall planting.</li></ul></div><div class='additional-info'><div class='list-title'>Color</div><ul class='color-list'><li>Yellow</li></ul></div>",
        },
      ],
      product: [],
      btnVisible: 0,
      cart: [],
      contactFields: {
        name: "",
        company: "",
        position: "",
        city: "",
        country: "",
        telephone: "",
        email: "",
        profession: "",
        other_profession: "",
        interests: "",
      },
      orderMade: false,
    },
    mounted: function () {
      this.getProduct();
      this.checkInCart();
      this.getCart();
    },
    methods: {
      getProduct: function () {
        if (window.location.hash) {
          var id = window.location.hash.replace("#", "");
          if (this.products && this.products.length > 0) {
            for (i in this.products) {
              if (
                this.products[i] &&
                this.products[i].id &&
                id == this.products[i].id
              )
                this.product = this.products[i];
            }
          }
        }
      },
      addToCart: function (id) {
        var cart = [];
        if (window.localStorage.getItem("cart")) {
          cart = window.localStorage.getItem("cart").split(",");
        }
        if (cart.indexOf(String(id)) == -1) {
          cart.push(id);
          window.localStorage.setItem("cart", cart.join());
          this.btnVisible = 1;
        }
      },
      checkInCart: function () {
        if (
          this.product &&
          this.product.id &&
          window.localStorage
            .getItem("cart")
            .split(",")
            .indexOf(String(this.product.id)) != -1
        )
          this.btnVisible = 1;
      },
      getCart: function () {
        var storedCart = window.localStorage.getItem("cart");
        if (storedCart) {
          var cartIds = storedCart.split(",");
          this.cart = this.products.filter(product => cartIds.includes(String(product.id)));
        }
      },
      removeFromCart: function (id) {
        this.cart = this.cart.filter((item) => item.id !== id);
        window.localStorage.setItem(
          "cart",
          this.cart.map((item) => item.id).join()
        );
      },
      makeOrder: function () {
        this.orderMade = true;
        this.cart = [];
        window.localStorage.removeItem("cart");
      },
    },
  });
