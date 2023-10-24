import { useSelector, useDispatch } from "react-redux";
import { NumberInputProduct } from "../other-components/components";
import { addValueSingleCounter } from "../../store/reducer";
import '../main/style-main.css';

export default function SingleCounterData() {
    const singleData = useSelector((store) => store.data.singleCounterData);
    const dispatch = useDispatch();

    const handleValueBlurSingle = ( idInput = null, newValueSingle, idParent) => {
        if (newValueSingle) dispatch(addValueSingleCounter({ idParent, value: newValueSingle }));
    }

    return (
        <>  
            {singleData.map((item, id) =>(
                <div className="wrapper_flex_container multi_flex" key={id}>
                    <h2 className="title_count multi_flex_title">{item.title}</h2>
                    <div className="unit_count">
                        <NumberInputProduct 
                            onValueBlur={(inputId, newValueSingle) => handleValueBlurSingle(null, newValueSingle, item.id)}  
                            placeholderValue="грн."
                            className="input_numbermulti_flex"
                        />
                    </div>
                </div>
            ))}
        </>
    )
}