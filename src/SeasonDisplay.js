import './SeasonDisplay.css'
import React from 'react'


const seasonConfig = {
    winter: {
        text: "Burr!! Its chilly.",
        iconName: 'snowflake'
    },
    summer: {
        text: "Let's hit the beach.",
        iconName: 'sun'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat < 0 ? 'summer' : 'winter'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    // const text = season === 'winter' ? 'Burr!!! Its chilly' : 'Lets hit the beach'
    // const icon = season === 'winter' ? 'snowflake' : 'sun'
    const {text, iconName} = seasonConfig[season]
    return <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`}></i>
            <h1>
                {text} 
            </h1>
            <i className={`${iconName} icon massive icon-right`}></i>
        </div>

}

export default SeasonDisplay