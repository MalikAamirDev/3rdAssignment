import React, {useState} from 'react'
import product_card from '../alldata/productCard'
import Menu from '../components/Menu'
import Categories from './Categories';




export default function MainContent() {
    const allCategory = [ 'All', ...new Set(product_card.map(item=>item.type))];
    const[menuItem, setMenuItem] = useState(product_card);
    const[categories, setCategories] = useState(allCategory);

    const filterOpt = (e)=>{
        let selectOpt = e.target.value
        let filteredData = product_card.filter(x=>x.type === selectOpt)
        if(selectOpt === 'All'){
            setMenuItem(product_card);
            return;
        } 
        setMenuItem(filteredData)
    }

    return (
        <> 
            <div className="header">
                <h3 style={{textTransform:'uppercase', fontSize:'2.5vw',textAlign:'center',marginTop:'5px',color:'#FE532E'}}
                 >Nike Shoes</h3>               
                <Categories filterOpt={filterOpt} categories={categories}/>
            </div>
            <div className="main_content">                    
                <Menu menuItem={menuItem}/>
            </div>
            
        </>
    )
}
