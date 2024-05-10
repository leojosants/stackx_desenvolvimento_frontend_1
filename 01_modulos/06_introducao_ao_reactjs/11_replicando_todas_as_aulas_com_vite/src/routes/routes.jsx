import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/HomeComponent.jsx';
import About from '../components/About/AboutComponent.jsx';
import PlansAndPrices from '../components/PlansAndPrices/PlansAndPricesComponent.jsx';

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'}
                    exact
                    element={<Home />}
                />

                <Route path={'/about'}
                    exact
                    element={<About />}
                />

                <Route path={'/plansAndPrices'}
                    exact
                    element={<PlansAndPrices />}
                />
            </Routes>
        </BrowserRouter >
    );
};

export default RoutesComponent;