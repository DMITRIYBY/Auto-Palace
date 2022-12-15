import React from "react";
import "./css/comp7.css"
import copart from "./css/images/copart-inc-logo-vector.svg";
import iaa from "./css/images/iaa-insurance.svg";
import manheim from "./css/images/manheim.svg";

function Component7(){
    return(
        <div className="comp7">
            <div className="flow">
                <p className="top6">АУКЦИОНЫ С КОТОРЫМИ <br/>МЫ РАБОТАЕМ</p>
            </div>
            <div className="auctions">
                    <div className="aucts">
                        <img src={copart} />
                    </div>
                    <div className="aucts">
                        <img src={iaa} />
                    </div>
                    <div className="aucts">
                        <img src={manheim} />
                    </div>
            </div>
        </div>
    );
}

export default Component7;