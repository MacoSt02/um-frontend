import MainContext from './context/context';
import Router from './router/Router';
import { MainService } from './services/main';
import ThemeContextProvider from './theme/Theme';

function App() {
    const mainController = new MainService();

    return (
        <MainContext.Provider value={mainController}>
            <ThemeContextProvider>
                <Router />
            </ThemeContextProvider>
        </MainContext.Provider>
    );
}

export default App;
