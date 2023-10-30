import { useSelector } from 'react-redux';

export default function MiddleLevelTable() {
    const {sheetsCounterData, singleCounterData, stickerData} = useSelector((store) => store.data);
    
    const companyProcentage = singleCounterData.find((data) => data.title === '% з суми');
    const companyProcent = Number(companyProcentage.total);

    const sticker = stickerData[0].total;
    const singleData = singleCounterData.slice(0, -1);

    const calcCutting = (data) => data.reduce((acc, curr) => acc + curr.cutting, 0);
    const sheetsCutting = calcCutting(sheetsCounterData);

    function createNewData() {
        const stickerCuttingData = [
            {titleCheck: 'Послуги крайкування', total: sticker, id: 3},
            {titleCheck: 'Послуги порiзки', total: sheetsCutting, id: 4},
        ]
        const dataServies = [...singleData, ...stickerCuttingData];
        return dataServies;
    }
    const dataServies = createNewData();

    const tranformDataServies = dataServies.map(item => ({
        ...item,
        total: parseFloat(item.total)
    }));

    const quantityDataServies = tranformDataServies.filter((item) => item.total !== 0);
    const resultQuantityDataServies = quantityDataServies.reduce((acc, curr) => acc + curr.total, 0);

    return {
        MiddleItemQuantityData: (
            <>
                {quantityDataServies.map((item, index) => (
                    <div className='check service' key={index}>
                        <p className='service_name'>{item.titleCheck}</p>
                        <p className='service_price'><span className='item_prise'>{item.total}</span> грн.</p>
                    </div>
                ))}
            </>
        ),
        resultQuantityDataServies,
        companyProcent,
    }
}