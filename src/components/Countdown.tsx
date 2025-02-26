import { useEffect, useState } from 'react';

function Header({ date }: { date: string }) {
    const countDownDate = new Date(date).getTime();
    const [countdown, setCountdown] = useState<string>();

    useEffect(() => {
        count(countDownDate);
    }, [countDownDate]);


    const count = (countDownDate: number) => {
        const now = new Date().getTime();

        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let output = '';

        ////// Days
        const totDays = new String(days);
        output = output + '<div class="number">';
        output = output + '<div class="digits">';
        for (let i = 0; i < totDays.length; i++) {
            output = output + '<div class="digit">' + totDays.charAt(i) + '</div>';
        }
        output = output + '</div>'; // digits
        output = output + '<div class="etichetta">Giorni</div>';
        output = output + '</div>';

        ////// Hours
        const totHours = new String(hours);
        output = output + '<div class="number">';
        output = output + '<div class="digits">';
        const zeroH = (totHours.length == 1 ? '<div class="digit">0</div>' : '');
        for (let i = 0; i < totHours.length; i++) {
            output = output + zeroH + '<div class="digit">' + totHours.charAt(i) + '</div>';
        }
        output = output + '</div>'; // digits
        output = output + '<div class="etichetta">Ore</div>';
        output = output + '</div>';

        ////// Minutes
        const totMinutes = new String(minutes);
        output = output + '<div class="number">';
        output = output + '<div class="digits">';
        const zeroM = (totMinutes.length == 1 ? '<div class="digit">0</div>' : '');
        for (let i = 0; i < totMinutes.length; i++) {
            output = output + zeroM + '<div class="digit">' + totMinutes.charAt(i) + '</div>';
        }
        output = output + '</div>'; // digits
        output = output + '<div class="etichetta">Minuti</div>';
        output = output + '</div>';

        setCountdown(output);

        // if (distance < 0) {
        //     // clearInterval(x);
        //     setCountdown("L'evento del secolo è terminato!");
        // }
    }

    // var x = setInterval(function () {
    //     conta(date, countDownDate)
    //     // clearInterval(x); /////////////// TO REMOVE
    // }, 1000);


    return (
        <div className="countdown">
            <div className="date" dangerouslySetInnerHTML={{ __html: countdown || '' }} />
        </div>
    );
}

export default Header;