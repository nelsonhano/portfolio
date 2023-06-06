import React from 'react';


const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
                {['home', 'about', 'work', 'skill', 'testimonials', 'contact'].map((item, index) =>(
                    <a
                       stlye={active === item ? {backgroundColor: '#313BAC'} : { }}
                       href={`#${item}`}
                       key={item + index}
                       className='app__navigation-dot'
                    />
                ))}
        </div>
    )
}

export default NavigationDots; 