import { StoreProvider } from './providers/StoreProvider';
import './styles/index.scss';
import { ChatPage } from '@/pages';

const App = () => {
    return (
        <StoreProvider>
            <ChatPage />
        </StoreProvider>
    );
};

export default App;
