import { useEffect, useState } from "react";

export default function CountDownBtn(props: any) {
  const [text, setText] = useState("00:00");
  const { time, setExp } = props;
  const [Hour, setHour] = useState(Math.floor(time / 60 / 60 / 1000));
  const [Min, setMin] = useState(
    Math.floor((time % (60 * 60 * 1000)) / 60 / 1000)
  );
  const [Sec, setSec] = useState(
    Math.floor(((time % (60 * 60 * 1000)) % (60 * 1000)) / 1000)
  );
  useEffect(() => {
    setText(Min + ":" + Sec);
    let myInterval = setInterval(() => {
      if (Sec > 0) {
        setSec(Sec - 1);
      }
      if (Sec === 0) {
        if (Min === 0) {
          setExp(undefined);
          clearInterval(myInterval);
        } else {
          setMin(Min - 1);
          setSec(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [Sec, Min, setExp]);
  return (
    <button type="button" className="forgot ml-3">
      {text}
    </button>
  );
}
