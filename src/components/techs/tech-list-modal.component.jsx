import React, {useEffect, useState} from 'react';
import Preloader from "../layout/preloader.component";
import TechItem from "./tech-item.component";

function TechListModal() {

    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, [])

    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('/techs');
        const data = await res.json();
        setTechs(data);
        setLoading(false);
    }

    // if (loading) {
    //     return <Preloader/>
    // }

    return (
        <div id='tech-list-modal' className='modal'>
            <div className='modal-content'>
                <h4>Tech list</h4>
                <ul className='collection'>
                    {!loading && techs.map(tech => {
                        return <TechItem key={tech.id} tech={tech} />
                    })}
                </ul>
            </div>
        </div>
    );
}

export default TechListModal;