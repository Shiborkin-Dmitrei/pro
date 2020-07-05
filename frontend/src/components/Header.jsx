import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Header(props) {

    return (
        <div>
            <h2 className={'header__h1'}>Лестницы.pro</h2>
            <ul className={'menu'}>
                {
                    props.pages.map((page, i) => {
                        return (
                            <li key={i} className={'header__li'}>
                                <Link to={page.path}>{page.name}</Link>
                            </li>
                        );
                    })
                }
            </ul>
            
        </div>
    );
}