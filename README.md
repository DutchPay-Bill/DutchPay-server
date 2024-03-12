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
    "menu_name": "Contoh Menu ke4",
    "qty": 2,
    "price": 20000,
    "friends_id": [4,5]
}
```
PUT/Update Status (true/false): /:friendsId
```JSON
{
    "is_paid": true
}
```
<br>

**New Payment:**
<br>
```
{
    "card_number": 1233420123456743,
    "card_name":"test1235678",
    "payment_method_id": 1
}
```
<br>

**Bill:**
<br>
POST/Create New
```JSON
{
    "description": "Contoh Bill 1",
    "payment_method_id": 46,
    "discount": null,
    "tax": 10,
    "service": 5,
    "orderDetails": [
        {
            "menu_name": "Item 1",
            "qty": 1,
            "price": 5000,
            "friends_id": [4]
        },
        {
            "menu_name": "Item 2",
            "qty": 2,
            "price": 25000,
            "friends_id": [5,6]
        },
        {
            "menu_name": "Item 3",
            "qty": 4,
            "price": 10000,
            "friends_id": [4,5,6]
        }
    ]
}
```
<br>
