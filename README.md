# bp-produc-card-fts

Este es un paquete de pruebas en NPM.


### Bryan Paz


## Ejemplo

```
    import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'bp-produc=card-fts';

```

```
     <ProductCard 
            product={ product } 
            initialValues={{
                count: 4,
                maxCount: 10,
            }}
        >
            {
                ({ reset, count, increaseBy, isMaxCountReached }) => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </>
                )
            }
        </ProductCard>

```