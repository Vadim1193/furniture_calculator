import { BtnCount, MySpan, NumberInputProduct, NumberInputCash, NumberInputSheet } from '../other-components/components';
import { useSelector, useDispatch } from 'react-redux';
import { CalcContainer } from '../other-components/components';
import { calcTotalValue, addValue, addCountBlock, removeCountBlock } from '../../store/reducer';
import { useState } from 'react';

export default function SheetsCounterCard() {
    const sheetsData = useSelector((store) => store.data.sheetsCounterData);
    const dispatch = useDispatch();

    function CountBlock({ idBlock, parentId }) {
        const [valuesArray, setValuesArray] = useState([]);
        const block = sheetsData[parentId].countBlocks.find(sheet => sheet.id === idBlock);

        const handleValueBlur = (inputId, newValue) => {
            let newValuesArray = [...valuesArray];
            newValuesArray[inputId - 1] = newValue;
            setValuesArray(newValuesArray);
            if (newValuesArray.length === 3) {
                dispatch(addValue({ idBlock, value: newValuesArray, parentId, data: "sheetsCounterData" }));
            }
        };

        return (
            <div className='unit_count'>
                <NumberInputProduct idInput={1} placeholderValue={'мм.'} onValueBlur={handleValueBlur}/>
                <MySpan/>
                <NumberInputProduct idInput={2} placeholderValue={'мм.'} onValueBlur={handleValueBlur}/>
                <MySpan/>
                <NumberInputProduct idInput={3} placeholderValue={'шт.'} onValueBlur={handleValueBlur}/>
                <MySpan nameClass='result'value={`= ${block.value} м².`}/>
            </div>
        );
    }

    const onClickCountDSPHandler = (idParentBlock) => dispatch(calcTotalValue(idParentBlock));
    const onClickRemoveHandler = (id) => dispatch(removeCountBlock({ id, data: "sheetsCounterData" }));
    const onClickAddHandler = (id) => dispatch(addCountBlock({ id, data: "sheetsCounterData" }));

    return (
        <>
            {sheetsData.map((item) => (
                <CalcContainer key={item.id}>
                    <h2 className='title_count'>{item.title}</h2>
                    {item.countBlocks.map((countBlockItem) => (
                        <CountBlock key={countBlockItem.id} idBlock={countBlockItem.id} parentId={item.id}/>
                    ))}
                    <div className='unit_count_result_total'>
                        <MySpan nameClass='result' value={`${item.totalSheetAndProcent} м²`}/>
                        <MySpan nameClass='result' value={'~'}/>
                        <MySpan nameClass='result' value={`${item.totalAmountOfMaterial} л.`}/>
                        <NumberInputSheet id={item.id} />
                        <MySpan/>
                        <NumberInputCash id={item.id}/>
                        <MySpan value={`= ${item.result} грн.`} nameClass='result'/>
                    </div>
                    <div className='buttons_block'>
                        {item.countBlocks.length > 1 && (
                            <button onClick={() => onClickRemoveHandler(item.id, sheetsData)} className='btn btn_minus'>-</button>
                        )}
                        <BtnCount onClick={() => onClickCountDSPHandler(item.id)}>Пiдрахувати</BtnCount>
                        <button onClick={() => onClickAddHandler(item.id, sheetsData)} className='btn btn_plus'>+</button>
                    </div>
                </CalcContainer>
            ))}
        </>
    )
}
