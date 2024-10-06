import React, { useState } from 'react'
import Filter_menu from './Filter_menu'
import Products from './Products';
const Body = () => {
    const [filterdisplay, usefilterdisplay] = useState(false);
    const [sort, setsort] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const items = ['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE : HIGH TO LOW', 'PRICE : LOW TO HIGH']
    const handlefilterdisplay = () => {
        usefilterdisplay(!filterdisplay);
    }
    const handleItemClick = (index) => {
        setActiveIndex(index);
        setsort(!sort);
    };
    return (
        <div className='body-container'>
            <ul>
                <li><h3><span>1</span> ITEM(S)</h3></li>
                <li style={{ marginLeft: "30px", fontSize: '20px', fontWeight: '600' }}>{
                    filterdisplay ?
                        <span onClick={handlefilterdisplay} className='filter-show'> &lt; HIDE FILTER</span> :
                        <span onClick={handlefilterdisplay} className='filter-show'> &gt; SHOW FILTER</span>
                }
                </li>
                <li>
                    <div className="filters-head" style={{ marginLeft: "600px", paddingRight: '0', fontWeight: '700' }} onClick={() => { setsort(!sort); }}>{items[activeIndex]} &#11167;</div>
                    {sort ?
                        <div className="filters-body" style={{ marginLeft: "600px" }} >
                            <div className="sort-container" onClick={()=>{setsort(!sort)}}></div>
                            <ul className='filters-content'>
                                {items.map((item, index) => (
                                    <li
                                        key={index}
                                        className={activeIndex === index ? 'active' : ''}
                                        onClick={() => handleItemClick(index)}
                                    >
                                        {activeIndex === index ? <span>&#10004;</span> : ''}
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            
                        </div>
                        :
                        ""}
                    
                </li>
            </ul>
            <hr id='sub-heading' style={{ marginTop: '-10px' }} />
            <ul className='body-space'>
                <li>
                    {filterdisplay ?
                        <div className="filter-space">
                            <Filter_menu />
                        </div>
                        :
                    ""}

                </li>
                <li>
                    <div className={filterdisplay ? "product-space three-columns" : "product-space four-columns"}>
                        <Products />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Body