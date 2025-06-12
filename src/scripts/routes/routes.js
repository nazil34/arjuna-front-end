import HomePage from '../pages/home/home-page';
import AboutPage from '../pages/about/about-page';
import RegisterPage from '../pages/register/register-page';
import LoginPage from '../pages/login/login-page';
import PredictPage from '../pages/predict/predict-page';
import ResultPredictPage from '../pages/resultpredic/resultpredict-page';

const routes = {
  '/': new HomePage(),
  '/about': new AboutPage(),
  '/register': new RegisterPage(),
  '/signin': new LoginPage(),
  '/predict': new PredictPage(),
  '/result': new ResultPredictPage(),
};

export default routes;
