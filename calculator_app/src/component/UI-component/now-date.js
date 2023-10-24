import { useState } from "react";

export default function NowDate() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const formatOptions  = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    const uaDateTimeFormat = new Intl.DateTimeFormat('uk-UA', formatOptions);
    const formattedDate = uaDateTimeFormat.format(currentDate);

    return (
        <>
            <p className="title_date">Дата: {formattedDate}</p>
        </>
    )
}
