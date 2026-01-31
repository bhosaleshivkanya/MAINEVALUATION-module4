# User Table Schema

## Table Name
users

## Columns

| Column Name | Data Type | Description |
|------------|-----------|-------------|
| id | UUID | Primary Key |
| name | TEXT | User full name |
| email | TEXT | User email |
| password | TEXT | Encrypted password |
| created_at | TIMESTAMP | Account creation time |

## Constraints
- id is PRIMARY KEY
- email must be UNIQUE
- email cannot be NULL
- password cannot be NULL

## Relationships
- One user can have many trips
- users.id → trips.user_id (One-to-Many)
