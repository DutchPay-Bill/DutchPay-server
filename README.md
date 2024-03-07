# DutchPay-server test 12

## API Request Body Example (Postman testing)

**Users:**
```JSON
PATCH/Update Profile (1 data):
{
    "bio": "Hello World!"
}
```
```JSON
PATCH/Update Profile (more than data):
{
    "bio": "Hello World!(2)",
    "dob": "2024-01-01"
}
```
<br>

**Friends Order:**
```JSON
POST/Create New
{
    "orders_id": 1,
    "friends_ids": [1, 2, 3],
    "price": 10000
}
```
<br>