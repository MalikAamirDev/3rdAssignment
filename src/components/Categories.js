import React from 'react'


function Categories({filterOpt ,categories}) {
    return (
        <>  
            <select onChange={(e)=>filterOpt(e)} className='Select' >
                {
                    categories.map((cat, i)=>{
                        return <option>{cat}</option>
                    })
                }
                
            </select>
        </>
    )
}

export default Categories;
