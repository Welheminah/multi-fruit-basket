let assert = require("assert");
let MultiFruitBasket = require("../multi-fruit-basket");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postresql://wecode:pg123@localhost:5432/multi_fruit_basket';

const pool = new Pool({connectionString : connectionString, ssl:{ rejectUnauthorized: false}
});

describe('The multi fruit basket function', function () {


    beforeEach(async function () {
        await pool.query("delete from fruit_basket_item;");

 
    });

    it('should add the fruit type with its quantity, price and basket name id into the fruit_basket_item table', async function () {
        const multiFruitBasket = MultiFruitBasket(pool);
        
        await multiFruitBasket.addFruit('Apples', 20, 5, 1);

        let results = await multiFruitBasket.getBasket();

        // console.log(results)

        assert.deepEqual([ { type_of_fruit: 'Apples', quantity: 20, unit_price: 5, name_id: 1 }],results)
        
    });

    

    after(function () {
        pool.end();
    })
});