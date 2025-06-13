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
  '/predict/:id': new PredictPage(), // Untuk predict dengan ID
  '/result': new ResultPredictPage(),
  '/result/:id': new ResultPredictPage(), // Untuk result dengan ID
  '/dashboard': new DashboardPage(),
  '/dashboard/:id': new DashboardPage(), // Untuk dashboard dengan ID
  '/game': new GamePage(),
  '/game/:id': new GamePage(), // Untuk game dengan ID
  '/play': new PlayGamePage(),
  '/play/:id': new PlayGamePage(), // Untuk play dengan ID
};

export default routes;