import { useDispatch, useSelector } from "react-redux";
import { NumberInputProduct, MySpan } from "../other-components/components";
import { useState } from "react";
import { addValueCromka } from "../../store/reducer";

export default function CromkaCounterCard() {
    const companyPercentage = '20%';
    const cromkaData = useSelector((store) => store.data.cromkaData);
    const dispatch = useDispatch();
    const [valuesCromkaArray, setValuesCromkaArray] = useState([]);

    const handleValueBlurCromka = (inputId, newValueCromka, idParent) => {
        let newValuesArrayCromka = [...valuesCromkaArray];
        newValuesArrayCromka[inputId - 1] = newValueCromka;
        setValuesCromkaArray(newValuesArrayCromka);
        if (newValuesArrayCromka.length === 2) dispatch(addValueCromka({ idParent, value: newValuesArrayCromka}));
    }

    return(
        <>
            {cromkaData.map((item, id) => (
                <div className="wrapper_flex_container" key={id}>
                    <h2 className="title_count title_in_flex">{item.title}</h2>
                    <div className="unit_count">
                        <NumberInputProduct 
                            idInput={1} 
                            onValueBlur={(inputId, newValueCromka) => handleValueBlurCromka(inputId, newValueCromka, item.id)} 
                            placeholderValue="м.п"
                        />
                        <MySpan value='+'/>
                        {companyPercentage}
                        <MySpan/>
                        <NumberInputProduct 
                            idInput={2} 
                            onValueBlur={(inputId, newValueCromka) => handleValueBlurCromka(inputId, newValueCromka, item.id)} 
                            placeholderValue="грн."
                        />
                    </div>
                </div>
            ))}
        </>
    )
}