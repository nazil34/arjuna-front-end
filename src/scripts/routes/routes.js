import HomePage from '../pages/home/home-page';
import RegisterPage from '../pages/register/register-page';
import LoginPage from '../pages/login/login-page';
import PredictPage from '../pages/predict/predict-page';
import ResultPredictPage from '../pages/resultpredic/resultpredict-page';
import DashboardPage from '../pages/dashboard/dashboard-page';
import GamePage from '../pages/game/game-page';
import PlayGamePage from '../pages/game/playgame-page';

const routes = {
  '/': new HomePage(),
  '/register': new RegisterPage(),
  '/signin': new LoginPage(),
  '/predict': new PredictPage(),
  '/result': new ResultPredictPage(),
  '/dashboard': new DashboardPage(),
  '/game': new GamePage(),
  '/play': new PlayGamePage(),
};

export default routes;
