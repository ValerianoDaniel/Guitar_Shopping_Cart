import Header from './components/Header';
import Guitar from './components/Guitar';
import Footer from './components/Footer';
import { db } from './data/db';
import { useState } from 'react';

const App = () => {
    const [data, setData] = useState(db)
    const [cart, setCart] = useState([])

    const addtoCart = (item) => {
        const itemExits = cart.findIndex(guitar => guitar.id === item.id)
        if (itemExits >= 0) {
            const updateCart = [...cart]
            updateCart[itemExits].quantity++
            setCart(updateCart)
        } else {
            item.quantity = 1
            setCart([...cart, item])
        }
    }

    return (
        <>
            <Header 
                cart={cart}

            />
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5">
                    {data.map((guitar) => (
                        <Guitar
                            key={guitar.id}
                            guitar={guitar}
                            setCart={setCart}
                            addtoCart={addtoCart}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default App;


