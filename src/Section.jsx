import React from "react";


export function Section({title, inputLabelArr}) {
    return (
        <div className="section-container">
            <SectionTitle title={title}/>
            <SectionInput labelArr={inputLabelArr}/>
        </div>
    );
}


function SectionTitle({title}) {
    return (
        <>
            <div className="section-title">{title}</div>
        </>
    );
}

function SectionInput({labelArr}) {

    let inputs = labelArr.map((label) =>
        <>
            <div className="section-label">{label}</div>
            <input type="text" className="section-input"></input>
        </> 
    );

    return (
        <form className="input-container">
            {inputs}
        </form>
    );
}