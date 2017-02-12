# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique


## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
has_one image

## concepts
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
title        | string    | not null
description  | string    | not null
equations    | string    | not null
user_id      | integer   | not null, foreign key (references users), indexed
category_id  | integer   | not null, foreign key (references categories), indexed
has_many steps, comments


## steps
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
order       | integer   | not null
concept_id  | integer   | not null, foreign key (references concepts)

## imageable
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
url         | string    | not null
imageable_id| integer   | not null, foreign key (references polymorphic association)

## videoable
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
url         | string    | not null
videoable_id| integer   | not null, foreign key (references polymorphic association)

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
content     | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
concept_id  | integer   | not null, foreign key (references concepts), indexed
has_one image
