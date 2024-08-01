import React from "react";
import { Section } from "./Section";
import { useState } from "react";
import './InputSections.css';

let personalLabels = ["Full Name: ", "Phone Number: ", "Email Address: "];
let educationLabels = ["School Name: ", "Years Attended: ", "Degree Type: ", "Major: "];
let experienceLabels = ["Employer Name: ", "Years Employed: ", "Job Description: "];

export default function SectionContainer() {
    return (
        <div className="input-sections">
            <Section title={"Personal Information"} inputLabelArr={personalLabels}/>
            <Section title={"Education"} inputLabelArr={educationLabels}/>
            <Section title={"Experience"} inputLabelArr={experienceLabels} />
        </div>
    );
}   
