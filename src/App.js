import './App.css'
import 'antd/dist/antd.css'

import TopMenu from './components/TopMenu'
import Routes from './Routes'

const App = () => {
    return (
        <div className="App ">
            <TopMenu />
            <main className="App-header">
                <Routes />
            </main>
        </div>
    )
}

export default App
