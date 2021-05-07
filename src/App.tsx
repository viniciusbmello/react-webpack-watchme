import SideBar from './components/SideBar';
import Content from './components/Content';
import MoviesProvider from './contexts/MoviesContext';

import './styles/global.scss';

const App: React.FC = () => (
  <MoviesProvider>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar />
      <Content />
    </div>
  </MoviesProvider>
);

export default App;
