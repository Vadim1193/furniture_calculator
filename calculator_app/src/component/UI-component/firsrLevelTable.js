import { useSelector } from 'react-redux';

export default function FirstLevelTable() {
    const { sheetsCounterData, cromkaData, multiCounterData } = useSelector((store) => store.data);

    const doItTranformForTableFirstLever = () => {
        const itemQuantityData = [...sheetsCounterData, ...cromkaData, ...multiCounterData];
        const tranformQuantityData = itemQuantityData.map((item) => ({
            ...item,
            result: parseFloat(item.result)
        }));
    
        return tranformQuantityData;
    }
    const tranformItemQuantityData = doItTranformForTableFirstLever();
    const filteredItemQuantityData = tranformItemQuantityData.filter((item) => item.result !== 0);
    const resultFilteredItemQuantityData = filteredItemQuantityData.reduce((acc, curr) => acc + Number(curr.result), 0);

    return {
        FirstItemQuantityData: (
            <>
                <table>
                    <tbody>
                        {filteredItemQuantityData.map((item, index) => (
                            <tr key={index}>
                                <td className='info info_table_left'>{item.titleCheck}</td>
                                <td className='info info_table_left'>{item.quantityElem}</td>
                                <td className='info info_table_right'>{item.totalAmountOfMaterial}</td>
                                <td className='info info_table_right'><span className='item_prise'>{item.result}</span> грн.</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        ),
        resultFilteredItemQuantityData,
    }
}
