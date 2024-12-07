export const ENV = {
    API_URL : 'https://api.sharanonline.com/api',
    ENDPOINTS : {
        AUTH : {
            REGISTER: 'user/register',
            LOGIN: 'user/login'
        },
        USER_ME: 'user/me',
        ADDRESS: 'addresses',
        CART: {
            CART: 'cart',
            REMOVE: 'cart/remove',
            CLEAR: 'cart/clear'
        },
        PRODUCT: 'products',
        PAYMENT: 'checkout',
        ORDER: 'order',
        CONFIRM_ORDER: 'confirm-order'
    },
    TOKEN: "token",
    STRIPE_KEY: "pk_test_51QSiKEG86FB5i2mS1S2wU0Fsy0bdrepUpwKl9PinvHqRsj3KDKafdu0kZ9tL5VSQsLMvTCIQHo2r7XJYIpJURRGj005djDcZeC"
}