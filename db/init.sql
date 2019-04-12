drop table if exists houses;

create table houses(
    id serial primary key,
    name varchar(100),
    address varchar(100),
    city varchar(50),
    state varchar(20),
    zip integer
);

-- insert into houses (name, address, city, state, zip)
-- values("Humble abode", "6 Waterway Way", "Colts Neck", 07722);

insert into houses(name, address, city, state, zip)
values ('Humble abode', '6 Armistead', 'Colts Neck', 'NJ', 07722 ),
('Cool Ranch (not doritos a house)', '6 Nacho Way', 'Toldeo', 'Ohio', 18845);