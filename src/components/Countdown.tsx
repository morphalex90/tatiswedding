import { useEffect, useState } from 'react';

function Header({ date }: { date: string }) {
    var countDownDate = new Date(date).getTime();
    const [countdown, setCountdown] = useState<string>();

    useEffect(() => {
        count(countDownDate);
    }, [countDownDate]);


    const count = (countDownDate: number) => {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var output = '';

        ////// Days
        const totDays = new String(days);
        output = output + '<div class="number">';
        output = output + '<div class="digits">';
        for (var i = 0; i < totDays.length; i++) {
            output = output + '<div class="digit">' + totDays.charAt(i) + '</div>';
        }
        output = output + '</div>'; // digits
        output = output + '<div class="etichetta">Giorni</div>';
        output = output + '</div>';

        ////// Hours
        const totHours = new String(hours);
        output = output + '<div class="number">';
        output = output + '<div class="digits">';
        var zero = (totHours.length == 1 ? '<div class="digit">0</div>' : '');
        for (var i = 0; i < totHours.length; i++) {
            output = output + zero + '<div class="digit">' + totHours.charAt(i) + '</div>';
        }
        output = output + '</div>'; // digits
        output = output + '<div class="etichetta">Ore</div>';
        output = output + '</div>';

        ////// Minutes
        const totMinutes = new String(minutes);
        output = output + '<div class="number">';
        output = output + '<div class="digits">';
        var zero = (totMinutes.length == 1 ? '<div class="digit">0</div>' : '');
        for (var i = 0; i < totMinutes.length; i++) {
            output = output + zero + '<div class="digit">' + totMinutes.charAt(i) + '</div>';
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