import NowDate from './now-date';
import CompanyContacts from './contacts';
import { useDispatch } from 'react-redux';
import { setIsActiveCheck } from '../../store/reducer';

export default function HeaderCheck() {
    const dispatch = useDispatch();
    const headerIsActiveCheck = () => dispatch(setIsActiveCheck());

    return (
        <>
        <button className='close_button' onClick={headerIsActiveCheck}></button>
        <CompanyContacts />
        <div className='check'>
            <NowDate/>
            <p className='title_check'>Вартiсть</p>
        </div>
        </>
    )
}