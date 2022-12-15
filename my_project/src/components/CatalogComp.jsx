import React, { useState , useEffect} from 'react';
import './css/catalog.css'
import topview from "./css/images/copsartimg.jpeg"
import GoodsList from "./GoodsList";
import Modal from './Form';
import Footer from './footer';


function Catalog(){
    
    const [isModal, setModal] = React.useState(false);

    return(
            <>
                <div className="top-view" style={{backgroundImage: `url(${topview})`}}></div>
                <div className="assort">
                    <p>Доступные автомобили</p>
                </div>
                <GoodsList/> 
                <Modal
                    isVisible={isModal}
                    title="Modal Title"
                    content={<p>Add your content here</p>}
                    footer={<button>Cancel</button>}
                    onClose={() => setModal(false)}
                />
                <button className={"buttons"} id={"catalogButton"} onClick={() => setModal(true)}>Заполнить заявку</button>
                <Footer />
            </>
    );
}

export default Catalog;