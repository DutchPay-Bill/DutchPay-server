interface RegisterInput {
    email: string;
    password: string;
}

interface LoginInput{
    phone_number: string,
    password: string
}

interface FriendOrderInput {
    id: number;
    orders_id: number | null;
    friends_id: number | null;
    friend_order_price: bigint;
    status: Order_status_Enum;
    created_at: Date;
    update_at: Date;
}