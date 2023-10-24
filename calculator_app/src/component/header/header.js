import { useDispatch, useSelector } from 'react-redux';
import './header-style.css';
import { setIsActiveMenu } from '../../store/reducer';

export default function Header() {
    const dispatch = useDispatch();
    const isActiveMenu = useSelector((store) => store.data.isActiveMenu)
    const handleSetActiveMenu = () => dispatch(setIsActiveMenu());
    const link = "https://www.google.com/";

    return (
        <header className="header">
            <div className="header_container">
                <a href={link} target="_blank" rel="noreferrer" className="header_logo">MERIBEL</a>
                <div className="header_menu menu">
                    <div className={`menu_icon ${isActiveMenu ? 'active_icon' : ''}`} onClick={handleSetActiveMenu}>
                        <span></span>
                    </div>
                    <nav className={`menu_body ${isActiveMenu ? 'active_menu' : ''}`}>
                        <ul className="menu_list ">
                            <li><a href={link} target="_blank" rel="noreferrer" className="menu_link">Наші можливості</a></li>
                            <li><a href={link} target="_blank" rel="noreferrer" className="menu_link active_link">Вартість</a></li>
                            <li><a href={link} target="_blank" rel="noreferrer" className="menu_link">Блог</a></li>
                            <li><a href={link} target="_blank" rel="noreferrer" className="menu_link">Контакти</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
