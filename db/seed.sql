CREATE TABLE pkm_users (
pkm_user_id SERIAL PRIMARY KEY,
user_name VARCHAR(18),
hash TEXT
)

CREATE TABLE Pokemon_members (
Pokemon_team_id SERIAL PRIMARY KEY,
pokemon_1 INT,
pokemon_2 INT,
pokemon_3 INT,
pokemon_4 INT,
pokemon_5 INT,
pokemon_6 INT
)

CREATE TABLE Pokemon_team(
Pokemon_team_id INT REFERENCES pokemon_members(Pokemon_team_id),
pkm_user INT REFERENCES pkm_users(pkm_user_id)
);

INSERT INTO pkm_users
(user_name,hash)
VALUES
('AC','Ketchum')

INSERT INTO pkm_users
(user_name,hash)
VALUES
('Erika','grasspkm')

INSERT INTO pokemon_members
(pokemon_1,pokemon_2,pokemon_3,pokemon_4,pokemon_5,pokemon_6)
VALUES
('arcanine','cinccino','golem','venusaur','kabutops','furret');

INSERT INTO pokemon_members
(pokemon_1,pokemon_2,pokemon_3,pokemon_4,pokemon_5,pokemon_6)
VALUES
('feraligatr','nidoking','lilligant','lycanroc-midday','raichu-alola','pidgeot-mega');

INSERT INTO pokemon_team
(pokemon_team_id,pkm_user)
VALUES
(1,1)

INSERT INTO pokemon_team
(pokemon_team_id,pkm_user)
VALUES
(2,1)

INSERT INTO pokemon_members
(pokemon_1,pokemon_2,pokemon_3,pokemon_4,pokemon_5,pokemon_6)
VALUES
('vileplume','victreebel','tangela','gloom','bellossom','comfey');

INSERT INTO pokemon_team
(pokemon_team_id,pkm_user)
VALUES
(2,1)


