import React from "react"

const JobCard =({data})=>{

    return (
        <div className="jobCard">
            <h1>Title: {data.title}</h1>
            <p>Description: {data.description}</p>
            <p>remote: {data.remote? "true":"false" }</p>
            <small>City: {data.city}</small>
        </div>
    )
}

export default JobCard

