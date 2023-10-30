import './style-table.css';
import FooterCheck from './footerCheck';
import HeaderCheck from './headerCheck';
import FirstLevelTable from './firsrLevelTable';
import MiddleLevelTable from './middleLevelTable';

export default function TableCheck() {
    const { FirstItemQuantityData, resultFilteredItemQuantityData } = FirstLevelTable();
    const { MiddleItemQuantityData, resultQuantityDataServies, companyProcent } = MiddleLevelTable();

    function FinalyResultCalc() {
        const resultValue = resultFilteredItemQuantityData + resultQuantityDataServies;
        const valueProcent = (resultValue.toFixed(0) * companyProcent) / 100;
        const resultValueAndCompProcent = resultValue + valueProcent;

        return (
            <>  {resultValue !== 0 ? 
                    <div className='check service finaly_calc'>
                        <p className='service_name'>Товари та послуги</p>
                        <p className='service_price'><span className='item_prise'>{resultValue}</span> грн.</p>
                    </div>
                    : ''
                }   
                {companyProcent !== 0 ? 
                    <div className='check service finaly_calc'>
                        <p className='service_name'>Вартiсть з працею</p>
                        <p className='service_price'><span className='item_prise'>{resultValueAndCompProcent.toFixed(0)}</span> грн.</p>
                    </div>
                    : ''
                }
            </>
        )
    }

    return (
        <div className='wrapper_table'>
            <HeaderCheck />
            {FirstItemQuantityData}
            {MiddleItemQuantityData}
            <FinalyResultCalc />
            <FooterCheck />
        </div>
    )
}