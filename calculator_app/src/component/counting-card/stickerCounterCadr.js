import { useSelector, useDispatch } from "react-redux";
import { CalcContainer, NumberInputProduct, MySpan } from "../other-components/components";
import { useState } from "react";
import { addValueSticker } from "../../store/reducer";

export default function StickerCounterCard() {
    const stickerData = useSelector((store) => store.data.stickerData);
    const dispatch = useDispatch();
    const [valuesStickerArray, setValuesStickeArray] = useState([]);

    const handleValueStickerCromka = (inputId, newValueSticker) => {
        let newValuesStickerArray = [...valuesStickerArray];
        newValuesStickerArray[inputId - 1] = newValueSticker;
        setValuesStickeArray(newValuesStickerArray);
        if (newValuesStickerArray.length === 3) dispatch(addValueSticker({ value: newValuesStickerArray}))
    }

    return (
        <>
            {stickerData.map((item, id) =>(
                <CalcContainer key={id}>
                    <h2 className="title_count">{item.title}</h2>
                    <div className="unit_count">
                        <NumberInputProduct idInput={1} onValueBlur={handleValueStickerCromka} placeholderValue="м.п"/>
                        <MySpan value='+'/>
                        <NumberInputProduct idInput={2} onValueBlur={handleValueStickerCromka} placeholderValue="м.п"/>
                        <MySpan/>
                        <NumberInputProduct idInput={3} onValueBlur={handleValueStickerCromka} placeholderValue="грн."/>
                    </div>
                </CalcContainer>
            ))}
        </>
    )
}