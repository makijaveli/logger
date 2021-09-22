import React, {useEffect} from 'react';
import LogItem from "./log-item.component";
import Preloader from "../layout/preloader.component";
import {connect} from "react-redux";
import {getLogs} from "../../redux/actions/logActions";
import logReducer from "../../redux/reducers/logReducer";

function Logs({logReducer: { logs, loading }, getLogs}) {

    useEffect(() => {
        getLogs()
        // eslint-disable-next-line
    }, [])

    if (loading || logs === null) {
        return <Preloader/>
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System logs</h4>
            </li>
            {!loading && logs.length === 0
                ? (<p className='center'> No logs to show</p>)
                : logs.map(log => {
                    return <LogItem key={log.id} log={log}/>
                })
            }
        </ul>
    );
}

const mapStateToProps = (state) => ({
    logReducer: state.logReducer
})


export default connect(mapStateToProps, {getLogs})(Logs);