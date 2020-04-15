export class Product {
    name: string;
    category: string;
    price: number;
    brand: string;
    model: string;
    color: string;
    manuDate: string;
    expiryDate: string;
    weight: number;
    description: string;
    tags: string;
    discountedItem: boolean;
    discountType: string;
    discount: string;
    warrentyStatus: boolean;
    warrentyPeriod: string;
    image: string;
    origin: string;
    user: string;
    _id: string;

    constructor(details: any) {
        for (let key in details) {
            this[key] = details[key] || void (0);
        }
    }
}