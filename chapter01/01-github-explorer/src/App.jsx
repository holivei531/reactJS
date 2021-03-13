import { Counter } from './components/Counter.jsx';
import { RepositoryList } from './components/RepositoryList.jsx';
import './styles/global.scss';

export function App() {
    return (
        <>
            <RepositoryList />
            <Counter />
        </>
    );
}