create table multi_fruit_basket(
    id serial not null primary key,
    name text not null
);

create table fruit_basket_item(
    id serial not null primary key,
    type_of_fruit text not null,
    quantity int not null,
    unit_price int not null,
    name_id int not null,
    foreign key (name_id) references multi_fruit_basket(id)
);

INSERT INTO multi_fruit_basket(name) VALUES ('Seasonal');
INSERT INTO multi_fruit_basket(name) VALUES ('Off Season');
INSERT INTO multi_fruit_basket(name) VALUES ('All Seasons Long');