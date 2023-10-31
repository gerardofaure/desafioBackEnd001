        class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }
    

    addProduct(productData) {
        // Para validar que el campo "code" no esté repetido
        const codigoUnico = this.products.some((producto) => producto.code === productData.code);
        if (codigoUnico) {
            console.log(`El código del producto ${productData.title} ya existe.`);
            return;
        }

        // Para verificar que todos los campos obligatorios estén presentes y no sean nulos ni cadenas vacías
        if (!productData.title || !productData.description || !productData.price || !productData.thumbnail || !productData.code || !productData.stock) {
            console.log(`Error en ingreso del producto ${productData.title}: Todos los campos son obligatorios.`);
            return;
        }

        // Crear un nuevo producto con un ID autoincrementable
        const newProduct = {
            id: this.nextId,
            title: productData.title,
            description: productData.description,
            price: productData.price,
            thumbnail: productData.thumbnail,
            code: productData.code,
            stock: productData.stock,
        };

        this.products.push(newProduct);
        this.nextId++;

        console.log(`Producto ${productData.title} agregado exitosamente.`);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (product) {
            return product;
        } else {
            return `Not Found (producto con id:${id})`;
        }
    }
}

// Ejemplo de uso
const manager = new ProductManager();

//creando nuevo producto con código nuevo n°1
manager.addProduct({
    title: "Arroz",
    description: "Descripción del Producto 1",
    price: 50,
    thumbnail: "imagen1.jpg",
    code: "P001", 
    stock: 10,
});
//creando otro nuevo producto con código nuevo n°2
manager.addProduct({
    title: "Lentejas",
    description: "Descripción del Producto 2",
    price: 510,
    thumbnail: "imagen2.jpg",
    code: "P002", 
    stock: 110,
});

 // creando nuevo producto con código repetido
manager.addProduct({
    title: "Aceite",
    description: "Descripción del Producto 3",
    price: 310,
    thumbnail: "imagen3.jpg",
    code: "P001",// codigo repetido
    stock: 45,
});
//creando producto con una key faltante
manager.addProduct({
    title: "Galleta",
    description: "Descripción del Producto 4",
    price: 230,
    thumbnail: "imagen4.jpg",
    code: "P004", 
    // stock: 832, <---- key faltante
});
//creando otro nuevo producto con código nuevo n°5
manager.addProduct({
    title: "Leche",
    description: "Descripción del Producto 5",
    price: 150,
    thumbnail: "imagen5.jpg",
    code: "P005",
    stock: 120,
});

console.log(manager.getProducts());
console.log(manager.getProductById(1));
console.log(manager.getProductById(2));
console.log(manager.getProductById(3));
console.log(manager.getProductById(4));
console.log(manager.getProductById(5));

