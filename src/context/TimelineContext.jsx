"use client";

import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {

const [timeline, setTimeline] = useState([]);

const addTimeline = (item) => {

setTimeline(prev => [...prev, item])

}

return (

<TimelineContext.Provider
value={{
timeline,
addTimeline
}}
>

{children}

</TimelineContext.Provider>

);

};

export default TimelineProvider;