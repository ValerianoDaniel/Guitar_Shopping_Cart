import Header from './components/Header';
import Guitar from './components/Guitar';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header />
            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>
                <div className="row mt-5">
                    <Guitar />
                    <Guitar />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default App;


