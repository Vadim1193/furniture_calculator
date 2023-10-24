import { useSelector, useDispatch } from "react-redux";
import { NumberInputProduct, MySpan } from "../other-components/components";
import { useState } from 'react';
import { addCountBlock, addValue, removeCountBlock } from "../../store/reducer";

export default function MultiCounterData() {
    const multiData = useSelector((store) => store.data.multiCounterData);
    const dispatch = useDispatch();

    function BlockCount({ idBlock, parentId }) {
        const [valuesMultiData, setValuesMultiData] = useState([]);
        const currBlock = multiData[parentId].countBlocks.find(sheet => sheet.id === idBlock);

        const handleValueBlurMultiData = (idInput, newValue) => {
            let newValuesArrayMultiData = [...valuesMultiData];
            newValuesArrayMultiData[idInput - 1] = newValue;
            setValuesMultiData(newValuesArrayMultiData);
            if (newValuesArrayMultiData.length === 2) {
                dispatch(addValue({ idBlock, value: newValuesArrayMultiData, parentId, data: "multiCounterData"}))
            }
        }

        return (
            <div className="unit_count">
                <NumberInputProduct idInput={1} onValueBlur={handleValueBlurMultiData} placeholderValue={'кiлькiсть.'}/>
                <MySpan/>    
                <NumberInputProduct idInput={2} onValueBlur={handleValueBlurMultiData} placeholderValue={'грн.'}/>    
                <MySpan value={`= ${currBlock.price} грн.`} nameClass='result'/>       
            </div>
        )
    }
    const onClickRemoveHandle = (id) => dispatch(removeCountBlock({ id, data: "multiCounterData" }));
    const onClickAddHandle = (id) => dispatch(addCountBlock({ id, data: "multiCounterData" }));

    return (
        <>
            {multiData.map((item, id) => (
                <div className="wrapper_flex_container" key={id}>
                    <h2 className="title_count title_in_flex">{item.title}</h2>
                    {item.countBlocks.map((countBlockItem) => (
                       <BlockCount key={countBlockItem.id} idBlock={countBlockItem.id} parentId={item.id} />
                    ))}
                    <div className='buttons_block'>
                        {item.countBlocks.length > 1 && (
                            <button onClick={() => onClickRemoveHandle(item.id, multiData)} className='btn btn_minus'>-</button>
                        )}
                        <button onClick={() => onClickAddHandle(item.id, multiData)} className='btn btn_plus'>+</button>
                    </div>
                </div>
            ))}
        </>
    )
}
