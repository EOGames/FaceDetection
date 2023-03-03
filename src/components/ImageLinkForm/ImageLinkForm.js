import React from "react";
import '../../Custom.css';

const ImageLinkForm = function()
{
    return (
        <div id="linkFormBG">
            <p id="textMsg">
                {'Please Enter A Photo Link To Detect Faces'}
            </p>
            

            <div id="">
                <input id="pic_link"  type={"text"} placeholder ={'Please enter A Link To Photo'} />
                <button id="btn" >Detect Faces</button>
            </div>
        </div>
    );
}
export default ImageLinkForm;
