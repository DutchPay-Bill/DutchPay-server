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

![Screenshot 2024-03-14 200227](https://github.com/DutchPay-Bill/DutchPay-server/assets/130155172/3c70af03-7179-4721-9398-9e7c042e7916)


**Get Payment:**

![Screenshot 2024-03-14 195157](https://github.com/DutchPay-Bill/DutchPay-server/assets/130155172/95657345-58a7-4b0e-827e-678486d4f179)


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
    "date": "2024-03-10T15:00:00+00:00",
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
