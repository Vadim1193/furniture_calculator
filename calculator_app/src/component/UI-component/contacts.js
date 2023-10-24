import qrcode from "./img/qrcode.jpg";

export default function CompanyContacts() {
    const Pictire = <img src={qrcode}  width="130" height="130" alt="qrcode_company"></img>

    return (
        <div className="wrapper_contacts">
            <div className="contacts phones">
                <h2 className="phones_number">Контакти:</h2>
                <p className="phones_number">067-28-29-444 Олександр</p>
                <p className="phones_number">067-95-78-707 Микита</p>
            </div>
            <div className="contacts qr_code">
                {Pictire}
                <p className="link_ovner_company">@merkulov_mebel</p>
            </div>
        </div>
    )
}