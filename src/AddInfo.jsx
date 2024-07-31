import React from "react";
import { useState } from "react";

export function InfoContainer() {
    return (
        <div>
            <PersonalInfo />
        </div>
    );
}   

function PersonalInfo() {
    return (
        <div>
            <SectionTitle title={"Personal Information"} />

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