import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addValue: (store, action) => {
            const { idBlock, value, parentId, data } = action.payload;
            const { sheetsCounterData, multiCounterData} = store;
            
            const currentBlock = store[data][parentId].countBlocks.find(item => item.id === idBlock);
            let actionNext = data === "sheetsCounterData";
            actionNext ? updateSheetsCounterData() : updateMultiCounterData();

            function updateSheetsCounterData() {
                const [firstValue, twoValue, lastValue] = value;
                const validValue = firstValue && twoValue && lastValue;
                if (validValue) {
                    updateSheetsBlockValue(currentBlock, firstValue, twoValue, lastValue);
                }
                updateTotalSheet(sheetsCounterData[parentId]);
            }

            function updateMultiCounterData() {
                const [firstValue, twoValue] = value;
                const validValue = firstValue && twoValue;
                if (validValue) {
                    updateMultiBlockValue(currentBlock, firstValue, twoValue);
                }
                updateTotalMultiData(multiCounterData[parentId]);
            }

        },
        addCountBlock: (store, action) => {
            const {id, data} = action.payload;
            const currentData = store[data][id].countBlocks;
            let maxId = Math.max(...currentData.map(item => item.id));
            addBlock();
            
            function addBlock() {
                const newBlock = data === "sheetsCounterData" ? {
                    id: maxId + 1,
                    value: 0,
                } : {
                    id: maxId + 1,
                    price: 0,
                    amountElements: 0,
                }
                currentData.push(newBlock);
            }
        },
        removeCountBlock: (store, action) => {
            const {id, data} = action.payload;
            const currentData = store[data][id].countBlocks;
            currentData.pop();
            if (currentData.length === 1) return;
        },    
        calcTotalValue: (store, action) => {
            const idParent = action.payload;  
            const resultCalc = store.sheetsCounterData[idParent].totalAmountOfMaterial * store.sheetsCounterData[idParent].prise;
            store.sheetsCounterData[idParent].result = resultCalc;
        },
        updateCash: (store, action) => {
            const { newValueNumInput, id } = action.payload;
            store.sheetsCounterData[id].prise = newValueNumInput;
        },
        updateSheet: (store, action) => {
            const { newValueNumInput, id } = action.payload;
            store.sheetsCounterData[id].totalAmountOfMaterial = newValueNumInput;
        },
        addValueCromka: (store, action) => {
            const { idParent, value } = action.payload;
            const [firstValueCromka, twoValueCromka] = value;
            const { cromkaData } = store;
            const currentBlockCromka = cromkaData[idParent];
            updateCromkaData(firstValueCromka, twoValueCromka, currentBlockCromka);
        },
        addValueSticker: (store, action) => {
            const { value } = action.payload;
            const [firstValueSticker, twoValueSticker, lastValueSticker] = value;
            const { stickerData } = store;
            
            stickerData[0].total = Math.round((Number(firstValueSticker) + Number(twoValueSticker)) * Number(lastValueSticker));
        },
        addValueSingleCounter: (store, action) => {
            const { idParent ,value } = action.payload;
            const { singleCounterData } = store;
            singleCounterData[idParent].total = value;
        },
        setIsActiveMenu: (store) => {
            store.isActiveMenu = !store.isActiveMenu;
            setBodyClassToggled();
        },
        setIsActiveCheck: (store) => {
            store.isActiveCheck = !store.isActiveCheck;
            setBodyClassToggled();
        },
    },
});
//-----------------------------sheetsCounterData
function updateSheetsBlockValue(block, firstValue, twoValue, lastValue) {
    const resultValuecountBlock = (firstValue * twoValue * lastValue) / 1000000;
    block.value = resultValuecountBlock.toFixed(2);
}

function calcCutting(currData) {
    const cuttingServices = 47;
    currData.cutting = currData.totalSheetAndProcent;
    const total = currData.cutting * cuttingServices;
    currData.cutting = Number(total.toFixed(0));
}

function updateTotalSheet(data) {
    const companyValueProcent = 5.7;
    const wastePercentage = 1.1;
    data.totalSheet = data.countBlocks.reduce((acc, curr) => acc + Number(curr.value), 0);
    data.totalSheetAndProcent = (data.totalSheet * wastePercentage).toFixed(1);
    calcCutting(data);
    data.totalAmountOfMaterial = (data.totalSheetAndProcent / companyValueProcent).toFixed(1);
}
//-----------------------------sheetsCounterData
//-----------------------------cromkaData
function updateCromkaData(firstValue, twoValue, currentData) {
    const compProcent = 1.2;
    currentData.totalAmountOfMaterial = firstValue;
    const result = firstValue * compProcent * twoValue;
    currentData.result = result.toFixed(2);
}
//-----------------------------cromkaData
//-----------------------------multiCounterData
function updateMultiBlockValue(block, firstValue, twoValue,) {
    const resultCurrentBlock = firstValue * twoValue;
    block.amountElements = firstValue;
    block.price = resultCurrentBlock;
}

function updateTotalMultiData(data) {
    data.result = data.countBlocks.reduce((acc, curr) => acc + curr.price, 0);
    data.totalAmountOfMaterial = data.countBlocks.reduce((acc, curr) => acc + Number(curr.amountElements), 0)
}
//-----------------------------multiCounterData

function setBodyClassToggled() {
    return document.body.classList.toggle('_lock');
}

export const { 
    calcTotalValue, 
    addValue, 
    addCountBlock, 
    removeCountBlock,
    updateCash,
    updateSheet,
    addValueCromka,
    addValueSticker,
    addValueSingleCounter,
    setIsActiveMenu,
    setIsActiveCheck,
} = dataSlice.actions;

export default dataSlice.reducer;