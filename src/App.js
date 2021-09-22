import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import {Fragment, useEffect} from "react";
import SearchBar from "./components/layout/search-bar.component";
import Logs from "./components/logs/logs.component";
import AddBtn from "./components/layout/add-btn.component";
import AddLogModal from "./components/logs/add-log-modal.component";
import EditLogModal from "./components/logs/edit-log-modal.component";
import AddTechModal from "./components/techs/add-tech-modal.component";
import TechListModal from "./components/techs/tech-list-modal.component";
import store from "./redux/store";
import {Provider} from "react-redux";

function App() {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
    })
    return (
        <Provider store={store}>
            <Fragment>
                <SearchBar/>
                <div className='container'>
                    <AddBtn/>
                    <AddLogModal/>
                    <EditLogModal/>
                    <AddTechModal/>
                    <TechListModal/>
                    <Logs/>
                </div>
            </Fragment>
        </Provider>
    );
}

export default App;
