import React from 'react';
import './style.css';
import gallery__foto__1 from './foto/gallery__foto__1.jpg';
import gallery__foto__2 from './foto/gallery__foto__2.jpg';
import gallery__foto__3 from './foto/gallery__foto__3.jpg';
import gallery__foto__4 from './foto/gallery__foto__4.jpg';
import gallery__foto__5 from './foto/gallery__foto__5.jpg';
import gallery__foto__6 from './foto/gallery__foto__6.jpg';

export default function Articles() {
    
    return (
        <article>
            
            <h1 className={'content__h1'}>Примеры наших работ:</h1>

            <p className={'content__p'}>Деревянная лестница - конструктор с площадкой на 180 градусов</p>

            <img src={gallery__foto__1} className={'gallery__foto'} />
            <img src={gallery__foto__2} className={'gallery__foto'} />
            <img src={gallery__foto__3} className={'gallery__foto'} />

            <p className={'content__p'}>Деревянная лестница - конструктор прямая</p>

            <img src={gallery__foto__4} className={'gallery__foto'} />
            <img src={gallery__foto__5} className={'gallery__foto'} />
            <img src={gallery__foto__6} className={'gallery__foto'} />

        </article>
    );
}
