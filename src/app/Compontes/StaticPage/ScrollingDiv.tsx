import { useEffect, useRef } from "react";

export const ScrollingDiv = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let frame: number;
    const speed = 0.1; // Lower = slower (pixels per frame)

    function animateScroll() {
      if (scrollContainer) {
        // If reached bottom, scroll back to top
        if (
          scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight
        ) {
          scrollContainer.scrollTop = 0;
        } else {
          scrollContainer.scrollTop += speed;
        }
      }
      frame = requestAnimationFrame(animateScroll);
    }

    frame = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="max-w-full mx-auto p-2">
      <div
        ref={scrollRef}
        className="max-h-[30vh] overflow-y-scroll border-[2px] border-[#ff0020] rounded-[14px] overflow-hidden scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="bg-[#ffcaa6] border-t border-[#c20094] text-center font-semibold text-[14px] m-1 text-black">
          <h4 className="text-[#0013a5] font-bold italic text-lg">
            WHAT IS MUMBAI MATKA?
          </h4>
          <p>
            The variant of the Matka gambling game which originated in Mumbai,
            India is known as Mumbai Matka. The game is specifically associated
            with the city of Mumbai and hence is known as the Mumbai Matka. As
            other Matka games Mumbai Matka also revolves around the number and
            combinations.
          </p>
        </div>
        <div className="bg-[#ffcaa6] border-t border-[#c20094] text-center font-semibold text-[14px] m-1 text-black">
          <h4 className="text-[#0013a5] font-bold italic text-lg">
            WHAT IS RAJDHANI MATKA?
          </h4>
          <p>
            Rajdhani Matka is a very popular matka game and variant of Matka
            gambling in India. The game involves betting on number and
            combinations in Rajdhani market as player places the bets on various
            options such as single number or pair or even the three-digit number
            before the result gets declared. The games revolve on the similar
            format of other Matka games where two sets of number are drawn at a
            random. Even if you want to know how the result is declared so the
            winning number are determined based on the combination of two sets
            as the last digit of their products is determined as the winning
            number. Also, while playing the game, it is that you follow the
            local laws and regulations while participating in the Rajdhani Matka
            or any other Format of games.
          </p>
        </div>
        <div className="bg-[#ffcaa6] border-t border-[#c20094] text-center font-semibold text-[14px] m-1 text-black">
          <h4 className="text-[#0013a5] font-bold italic text-lg">
            WHAT IS SATTA CHART ANALYSIS?
          </h4>
          <p>
            The Satta Chart Analysis is the study of historical Satta Matka to
            identify the patterns along with trends and number of frequencies.
            By using this it helps in making decisions when you select a number
            or the combination for future bets. Although it is very to remember
            that the outcomes are totally based on chances and analysis does not
            guarantee any accurate predictions. Also, you need to make sure you
            gamble responsibility within legal boundaries
          </p>
        </div>
        <div className="bg-[#ffcaa6] border-t border-[#c20094] text-center font-semibold text-[14px] m-1 text-black">
          <h4 className="text-[#0013a5] font-bold italic text-lg">
            WHAT IS MATKA OPEN AND MATKA CLOSE?
          </h4>
          <p>
            {"Matka Open"} is the first set of numbers that are announced or
            declared at the beginning of a specific Matka game. It represents
            the opening result or the initial set of winning numbers.{" "}
            {"Matka Close"} is the second set of numbers that are announced or
            declared at the end of the Matka game. It represents the closing
            result or the final set of winning numbers. The time interval
            between the Matka Open and Matka Close varies depending on the
            specific Matka game being played. It can range from a few minutes to
            several hours, depending on the rules and regulations of the Matka
            market or game. Players place their bets on different numbers or
            combinations before the Matka Open, and the winning numbers are
            determined by the Matka Close
          </p>
        </div>
        <div className="bg-[#ffcaa6] border-t border-[#c20094] text-center font-semibold text-[14px] m-1 text-black">
          <h4 className="text-[#0013a5] font-bold italic text-lg">
            MATKA JODI ONdpbossnet.online: COMBINING NUMBERS FOR WINNING BETS
          </h4>
          <p>
            Matka Jodi is a term which is often used in Matka gambling to refer
            a combination of two mars that the player selected for their bets.
            The Jodi officially refers to the number which are combined to form
            single outcome. Below are few of the key points about the Matka
            Jodi:
          </p>
          <p>
            Number Combination: Players need to choose a number from 0 to 9 and
            combine them to create any pair as for example if they select 3 and
            7 the Jodi would be 37.
          </p>
          <p>
            Betting Process: Players have full right to place bet on different
            Jodi available in the Matka game. They can select the Jodi bases on
            previous games and strategies and its analysis.
          </p>
          <p>
            Result Declaration: If talking about the result declaration then the
            Jodi is compared to the winning numbers and if the Jodi outcome
            matches the player who placed the bet wins the potential amount. As
            for example if the winning number is declared as 3 and 7 and the
            Jodi combination was 37 then it would be the winning combination.
          </p>
          <p>
            Payouts: The payouts totally depend on the specific Matka Market and
            their associated odds with chosen Jodi. As different Jodi
            combinations may have various payout rates.
          </p>
        </div>
        <div className="bg-[#ffcaa6] border-t border-[#c20094] text-center font-semibold text-[14px] m-1 text-black">
          <h4 className="text-[#0013a5] font-bold italic text-lg">
            BOMBAY SATTA GUESSING AND TIPS
          </h4>
          <p>
            Bombay Satta which is also known as the Mumbai Satta or Mumbai Matka
            refers to various and historical Matka gambling scenes in Mumbai
            city. The Matka game was originally originated in 1960s and was
            centred around the cotton exchange market of the Mumbai which later
            became a very popular form of gambling.
          </p>
          <p>
            In Bombay Satta players need to place bets on various combination of
            numbers which can range from single digit to three-digit numbers.
            And if you predict the right number, you can win a potential winning
            at the time of result declaration. These numbers are then declared
            as the {"open"} and {"close"} for the day.
          </p>
          <p>
            Mumbai has been a great hub for Matka gambling since a long time now
            and has various Matka markets operating in different area of the
            city. Some of the most known matka market are Kalyan Matka, Worli
            Matka. Milan Day and Rajdhani Night. And it is to know that every
            Market has their own sets of rules and timing for the declaration of
            results.
          </p>
        </div>
      </div>
    </div>
  );
};
