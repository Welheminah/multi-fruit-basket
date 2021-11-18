module.exports = function MultiFruitBasket(pool){

    async function addFruit(fruit, quantity, price, basket_name){
        await pool.query("INSERT INTO fruit_basket_item(type_of_fruit, quantity, unit_price, name_id) VALUES($1, $2, $3, $4)", [fruit, quantity, price, basket_name])
     }


     async function getBasket(){
         var fruits = await pool.query("SELECT type_of_fruit, quantity, unit_price, name_id FROM fruit_basket_item");
        return fruits.rows;
     }

    return {
        addFruit,
        getBasket
    }
}