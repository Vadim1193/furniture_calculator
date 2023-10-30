import CromkaCounterCard from '../counting-card/cromkaCounterCard';
import MultiCounterData from '../counting-card/multiCounterCard';
import SheetsCounterCard from '../counting-card/sheetsCounterCard';
import SingleCounterData from '../counting-card/singleCounterCard';
import StickerCounterCard from '../counting-card/stickerCounterCadr';
import './style-main.css';
import { Modal } from '../UI-component/ui_component';
import { BtnCount } from '../other-components/components';
import { useDispatch, useSelector } from 'react-redux';
import { setIsActiveCheck } from '../../store/reducer';

export default function Main() {
    const dispatch = useDispatch();
    const isActiveCheck = useSelector((store) => store.data.isActiveCheck);
    const headerSetIsActiveCheck = () => dispatch(setIsActiveCheck());

    const WrapperFlex = (props) => {
        return (
            <div className='wrapper_flex'>
                {props.children}
            </div>
        )
    }

    const Separator = () => <div className='separator'></div>;
    
    return (
        <main className="main">
            <SheetsCounterCard/>
            <Separator />
            <WrapperFlex>
                <CromkaCounterCard/> 
            </WrapperFlex>   
            <StickerCounterCard/>
            <Separator />
            <WrapperFlex>
                <MultiCounterData/> 
            </WrapperFlex>
            <Separator />
            <WrapperFlex>
                <SingleCounterData/>
            </WrapperFlex>
            <BtnCount className='open_modal' onClick={headerSetIsActiveCheck}>Отримати чек</BtnCount>
            {isActiveCheck && <Modal />}
        </main>
    )
}



