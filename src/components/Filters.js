import React from 'react';

const Filters = ({ filterList, onClick }) => {
    return (
        <div>
            { filterList.map((filter, index)=>(
                <button onClick={()=>onClick(filter.label)}>{filter.value}</button>
            )) }
        </div>
    )
}

export default Filters