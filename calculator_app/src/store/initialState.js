
const initialState = {
    isActiveMenu: false,
    isActiveCheck: false,
    sheetsCounterData: [
        {
            title: 'ДСП',
            titleCheck: 'ДСП',
            quantityElem: 'лист.',
            totalSheet: 0,
            totalSheetAndProcent: 0,
            totalAmountOfMaterial: 0,
            cutting: 0,
            prise: 0,
            id: 0,
            result: 0,
            countBlocks: [
                { id: 1, value: 0},
            ],
        },
        {
            title: 'ХДФ',
            titleCheck: 'Задня стiнка',
            quantityElem: 'лист.',
            totalSheet: 0,
            totalSheetAndProcent: 0,
            totalAmountOfMaterial: 0,
            cutting: 0,
            prise: 0,
            id: 1,
            result: 0,
            countBlocks: [
                { id: 1, value: 0 },
            ],
        },
    ],
    cromkaData: [
        {
            title: 'Крайка 0.4',
            titleCheck: 'Крайка 0.4',
            quantityElem: 'м.п.',
            id: 0,
            result: 0,
            totalAmountOfMaterial: 0,
        },
        {
            title: 'Крайка 2.0',
            titleCheck: 'Крайка 2.0',
            quantityElem: 'м.п.',
            id: 1,
            result: 0,
            totalAmountOfMaterial: 0,
        },
    ],
    stickerData: [
        {
            title: 'Крайкування',
            total: 0,
            id: 1,
        },
    ],
    multiCounterData: [
        {
            title: 'Петлі',
            titleCheck: 'Петлі',
            quantityElem: 'одиниць.',
            result: 0,
            totalAmountOfMaterial: 0,
            id: 0,
            countBlocks: [
                { id: 1, price: 0, amountElements: 0},
            ],
        },
        {
            title: 'Направляючі',
            titleCheck: 'Направляючі',
            quantityElem: 'одиниць.',
            result: 0,
            totalAmountOfMaterial: 0,
            id: 1, 
            countBlocks: [
                { id: 1, price: 0, amountElements: 0},
            ],
        },
        {
            title: 'Підйомники', 
            titleCheck: 'Підйомники',
            quantityElem: 'одиниць.',
            result: 0,
            totalAmountOfMaterial: 0,
            id: 2,
            countBlocks: [
                { id: 1, price: 0, amountElements: 0},
            ],
        },
        {
            title: 'Стiльниця', 
            titleCheck: 'Стiльниця',
            quantityElem: 'одиниць.',
            result: 0,
            totalAmountOfMaterial: 0,
            id: 3,
            countBlocks: [
                { id: 1, price: 0, amountElements: 0},
            ],
        },
        {
            title: 'Ручки', 
            titleCheck: 'Ручки',
            quantityElem: 'одиниць.',
            result: 0,
            totalAmountOfMaterial: 0,
            id: 4,
            countBlocks: [
                { id: 1, price: 0, amountElements: 0},
            ],
        },
        {
            title: 'Нiжки',
            titleCheck: 'Нiжки',
            quantityElem: 'одиниць.',
            result: 0,
            totalAmountOfMaterial: 0,
            id: 5,
            countBlocks: [
                { id: 1, price: 0, amountElements: 0},
            ],
        },
    ],
    singleCounterData: [
        {
            title: 'Фасади',
            total: 0,
            id: 0,
            titleCheck: 'Фасади',
        },
        {
            title: 'Cистема',
            total: 0,
            id: 1,
            titleCheck: 'Cистема',
        },
        {
            title: 'Сушка',
            total: 0,
            id: 2,
            titleCheck: 'Сушка',
        },
        {
            title: 'Пiдвiси',
            total: 0,
            id: 3,
            titleCheck: 'Пiдвiси',
        },
        {
            title: 'Витратнi матерiали',
            total: 0,
            id: 4,
            titleCheck: 'Витратнi матерiали',
        },
        {
            title: '% з суми',
            total: 0,
            id: 5,
        },
    ]
}

export default initialState;