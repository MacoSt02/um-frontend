export interface IBasket {
    onProductAdded?(): void;
    onTip?(value: number): void;
}

export class Basket {
    // private subscribers: IBasket[] = [];
    // // TODO: Add types when basket is done
    // private products: BasketProduct[] = [];

    // initBasket = () => {
    //     const productsLS = localStorage.getItem(LS_PRODUCTS);
    //     if(productsLS) this.products = JSON.parse(productsLS);
    // };

    // getProducts = () => this.products;

    // getTotalProducts = () => this.products.length;

    // addProduct = (product: BasketProduct) => {
    //     this.products.push(product);
    //     localStorage.setItem(LS_PRODUCTS, JSON.stringify(this.products));
    //     this.publishOnAddProduct();
    // };

    // onTip = (value: number) => {
    //     this.publishOnTip(value);
    // };

    // subscribeToEvents = (callback: IBasket): void => {
    //     this.subscribers.push(callback);
    // };

    // unsubscribeToEvents = (callback: IBasket): void => {
    //     const index = this.subscribers.indexOf(callback);
    //     if(index !== -1) this.subscribers.splice(index, 1);
    // };

    // protected publishOnAddProduct = () => {
    //     this.subscribers.forEach(listener => listener.onProductAdded?.());
    // };

    // protected publishOnTip = (value: number) => {
    //     this.subscribers.forEach(listener => listener.onTip?.(value));
    // };
}
