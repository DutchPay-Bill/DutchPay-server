# DutchPay-server test 12

## API Request Body Example (Postman testing)

**Users:**
<br>
PATCH/Update Profile (1 data):
```JSON
{
    "bio": "Hello World!"
}
```
PATCH/Update Profile (more than data):
```JSON
{
    "bio": "Hello World!(2)",
    "dob": "2024-01-01"
}
```
<br>

**Friends Order:**
<br>
POST/Create New
```JSON
{
    "orders_id": 1,
    "friends_ids": [1, 2, 3],
    "price": 10000
}
```
PUT/Update Status (Paid/Unpaid):
```JSON
{
    "friends_id": 1,
    "status": "paid"
}
```
<br>
