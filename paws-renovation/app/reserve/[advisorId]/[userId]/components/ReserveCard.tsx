"use client";

import { format } from "date-fns";
import { getTimeString } from "../../../../../functions/convertToDisplayTime";
import { useState } from "react";
import { Advisor } from "@prisma/client";
import useReservation from "../../../../../hooks/useReservation";
import { CircularProgress } from "@mui/material";

interface Props {
  user: {
    id: number;
    first_name: string;
    last_name: string;
    image: string;
    email: string;
    phone: string;
    address: string;
    major: string;
    minor: string | null;
  };

  advisor: Advisor;

  date: string;
}

export default function ReserveCard({ user, advisor, date }: Props) {
  const [day, time] = date.split("T");
  const [didBook, setDidBook] = useState(false);
  const [inputs, setInputs] = useState({
    bookerLocation: "",
    bookerDescription: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const { error, loading, createReservation } = useReservation();

  const handleClick = async () => {
    const booking = await createReservation({
      userId: user.id,
      advisorId: advisor.id,
      day,
      time,
      partySize: 1,
      bookerLocation: inputs.bookerLocation,
      bookerDescription: inputs.bookerDescription,
      setDidBook,
    });
  };
  return (
    <div className="boarder-t h-screen">
      {didBook ? (
        <div>
          <h1 className="font-bold text-black">You are all booked up!</h1>
          <p className="text-black">Look forward to seeing you soon!</p>
        </div>
      ) : (
        <div className="py-9 w-3/5 m-auto">
          <div>
            <h3 className="font-bold text-black">You're almost done!</h3>
            <div className="mt-5 flex">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA51BMVEUAAAD////MzMz/vQDPz8/S0tLV1dX/wAD/xQD/wwD/vwDLy8vGxsbUnQC6urr/xgBubm6goKCurq6Wlpa0tLS+vr7c3NyAgICqqqqcnJx4eHhpaWmPj49bW1t6enpxcXGHh4ft7e1AQEAuLi5RUVEdHR1hYWENDQ1FRUUpKSk2NjZMTEwsLCwaGhrvsQDk5ORuUgDJlQDkqQClegAuIgBdRQCnfABRPAC2hwCRawCAXwD0tQAbFAA9LQBqTgB6WwBGNAAkGgAPCwCXcAA2KADbogBCMQC+jABOOgAvIwAmDwAgFwAVDwD+b+a7AAAgAElEQVR4nMV9d2PiuNa3DJIwwSH0ZgOmtyEEMqnstJ3NZu9z9/t/nle9uGAyk9z3/JPQbP18dPqRBJyPp12pXA0G8+l4tV0swGKxXY2n/WHYbXi7/8HdwUdefNfs+hMAxn67Xm2UPYQwJwS9cqMatP3xAqz8evNDgX4UwlG5PQaTYdDwWi2CiFLOJPoGQdzCXi2orMG63fgomB+BcFTzwXZY9XYtRHGVcieJIMWtZreyAvPOR6B8d4SlNli0a5iAy4Jm40QYdXor0PPee0Dvi7A5B/0qeis6A2Wu2wf9xruO6R0RenPg13Y4AR1EMAlRCsqOD/rN9xvWeyHctUG/1sIwzjuImp1e42yIHGQf9FrvNLL3QdiYzLoEnjVOqio9LwerAICBdwYwCySsr2a1dxnbOyAcBcD3dhEmwUZ9MF2AKszB1qaCU2EpI1Kq23MZ4vIchKPfH95vI9wNQYCxIXt8zMhfA7Bo0f8xaKbh88KwgQTCIfA7CFmMzLWB/9sG5DcR7vqg2jKHhXC9ziHiHgAd8i+srVNYCMugW6dsZoT7ZDpPy9Y3yNXA5jcF8rcQEnw1c3pC3CSwgDFkDxJuBilqBvWXGCklhNoAdGtMYI1HBnH1NzH+BsJRBXR2WnkSMeqOx2GnCupyzBMwQTkEbMYhJW5o0SMfq1dtsGLKCnq+NVkJxvno/wfCgMxPjQ/hBjFjJUxUaLMiBgg9AOat6sYcL+5UKnX+BoTqWbArDMCSfYAnfZQzjSjEAWj/zxGWQVvjg9hrz3zKA84l9fhrZOL1qyaMzSaHKjP2YXUI6ob5RD0wpb/EFTAnf+GgUsYSJCTwf9V2/BrC3WSDsJ6f9SUY5BACoBaROBQQhWoCbFMhxbM5ewiEMz3NXzRkyFB1AdgshQPwaaA8BeRtZr8mjr+EMATllokDgCYdmw/m5oRkM24ONoYmxYspZtxiPwuBaR0IQjK9oTercoQ5CMbtUD8e3AGD/xFCDAYtJSJ8ftFxEyOv1KgiMk8XpmZkgyfQqMpE/so0IwThkCiebbnOEaJwjG0fgHwj979A2AaemqCoQY05bI6FigAxw1ACwPDY8FbwkF4AjaeWJa2ANsL9gKgVihA2tQ5WU7UMKh+OcEcYqG4Mh4BZaMhBEKmLGXe8YGZfDpHIISRyyFUK5ZmFMMD1KYYcIZ5pb72OlcYZAvyxCKuagRDVAShbPPOib5CBLkHF8MnRdOyV5it6CcKkwJqlPqiXt0QSGULcD7VK7q+b8gVqgOAjES6nWgI7CwBM/uSYFzO0dQ0moMFs0VVfw51er8pUZXey2Fr2cA66C+IDMYQomBroWwsQKsMBp+sPQ9gC3ZY2EZ1yaQbG1qykkZKFEK7BclivmbGT8mkgRp4ZNqK+8GNDUMG1rXkd+piU/5ojgoo+BmENlJBhoUng0zDuy28efaOJEYJR7WNcw/gfbUCbPi+iaQcl6tDqq84J9kZbT3XisX8Ewt7atIH81hVgPWuqJdcYRY3ieYQn3HISbRROTObSB9m1nhPMrefvj3Bd2SUMCxANb7ykblq/t/kliLAuNDKJMeqWKzsB05iK9lfvjHBkiKApO3XL3OVIGABW7cSAl2WAFcUyxPq6ZB70LB0b2PcQdwrAmbHxeQhboCyMBMThwHTD1qCvX1LHq4EjHGQJm1KzVg3Cdq/i+35l2A6Daq1ZwgglJOFo1Gi+JmomNN0i+SA6Z+qbsxDmiI6Rj268JEKh79cw3W1Yz0X8LIS9TuAvqWER9F3/u1j6YcfDEZiwYXEMT8FEI4aw0xHMJvrmrJzjOQibQJps5FcwLk1MP6wPVgZgm3WNsG9g4/Qt+gbohzVoKhILL+oCoNUOfbWRUkrCz3MiqjMQNoBUorDBfGVrGpJJNMDRyQYRbgbTGBZKj4nvboJm7CIMK/FrdaaO2Ns1xHgq/AxYAtX3QFgD2hENY+ERlT3QHw/sbFS5PUkEQugy7YPVICrCsAHxxoxX0IzxEy2l45hb1H8fYW2hzSBxN1idDGGkBkMlcdUxJir2wk9pKAjlT3w2azfNtDK5HaFAX9vjWhWPJWoIt5kQsxDqKZpj6b9xrVkL5+vtStpBEhLUDc8adZInp6Kr/578eFk1HAbk9S1L4XGXyQNNrdwWWe5NBsImsBwZOiUlcSsB6/2SGhKCwew0PvDH1V3GNxZtQ9BJYD+UeSsaUVHbD4OqqdtA53cQ5kDEU8Ns4oyH7bn0QHXeCZUGGYMn9HAVV6YxGno6coJzHoKWiV+KBoyllrNA1E351xG2QCxbjZDnESFE5OHaWgeVetlDJ8bi6uc5X6tojOIfFnd4ES+RQfQA/FWEI1BKDwvwZmx6GtSbPId+usnmIkY9aKnnNTP7RLV+ij10oh1OOXCnEILyCRcazXWWBeLuecMG4LWYai6iFGgDiQarPs9ORQJQ/mntJIr0j9ZdLBlkGWOPchYioAJ3XB6fO2pwWbg++7ufatrW4wXzNchMSSjzoGD2Kwh7FRFN4Ko/D7V0E8eiibG3nir8w+zBKrrOF9/wbV/dFg2HmPh2C1BRhhhpxx1X+m9HWFtzgLDE3JOtNktkqqzXIBQAcW37hiEDN+9+fsv3O5JlcLWsB1swVlm3znC6nAfCVOF1quVPQ9hSdmLVhV5IzJ9hpPqbkvBp3sZAAL64+eLXN/1iLtkI2zMwlg4OrrLnOlnIJw1Tk8VpCIFw/fCYqhtkp65LUgRR85SDlkA3xXzx6W0/2Up9R31FOSvpc502EMbNpfA8ymD0JoRLEQPiOVc3uD+zshXiRmerUEk/i/nCmeZCUxBVLtTygyovNmKfW0hU//QWhNUpF0LcBluWjEVtIujc69YCif23jhXsC/mLlzf/qh+Nkcl7ypJhoSLwNDwf4Q5wgDQNQ2J4mmOf1mu1RrlcbtYnsv5ZOsdGPNhSd7jI5/OnvpBMn8zkIsus6qgYhiLPCJPTGokIZbbSW8PmGtDYoaxutpC3acbC9yTa23gKBKD7w8J8OOcyoGEICbJ8N9gQ9TvC2nMRtlWuCRFlSR5YuzTx5/3lerUAEjzRPWfR/dWN8eq7SxAWzXf+uXo970I6noBNq4oHmzM5pp5/HkIMWmbvFu0aATmaF8OsUZS/WT1vXMQPNXn0XKQIb4139uf6qVrfkAllOv20lCB0A14kdDYmIIxmJzGRxrGd3sT1M4cFnoquERC+0llaMDzTv9zC/bmXakuInpVexOOVlFKC/RyEVj6Uc78DAL2K0mg4OHdUhGsXBhOZojFVzb5QPCuasiDimVHhgt214aH3htkId/Yc5T+kiqaDh6IY9gaA4Fsx72ptWWQA3S/y9Zer/BsQAvHsYbA1mGBl2FG8gBpDOInWONk1vRVQjhsKwEPqIH4WYggvVDRxwxFqr+alEHNxjuly+f3/BBfRNkiJ62BtkYWwvOH+aDQBCleyqQIRyf56mzaKhys7/qO6xZUgHgsMoRLEG6JaIzx8TM9yPH2T6oZo0w5mhRC7DY7Or2k0hRpFKAJMWPNsaUSDrWkmnq//SBnHwU5TPFG2FYQFPOY5yQCKwbU0zberYxrAF3ZdbjSgt+13mo02CGMTzoshsl8GYh6Uom2CnjCE1Bixkac9a1t5UkeUoODK5s6VCJ/Z60umWc1Z+XexmKJav7riA+7MQFwnrghztyJE/MtTCEfSXfPHnbolwrIgXZKezP1VSjrCzRf+0q/4xCzuFSJKXL3eu9aUJfRnPn/1BSTRq3YMhGmAreVE+XLmeg4UydrYCCsiQ9icodgSED7NtS+6v8rfJA3m8uIir7O+L9w+UIhfJQu5ZL6Kl0ZW47pwkZjjuDteaXd9JY1fVyoLiJvdoCvT5bA+TUcoLQVeEoXabPAJ6xlax4omXopX+z/jwyGSd3FUrqfEVCgcinlNxUNeMrT4rwaYT7T/r1dWckcWLJV1rq7Z+2uR1sG2xbAQ9nlRB9bm5Ltl4NMUAawDlRBCdjx4fVHIP8fG84Pw5iL/t3j6mm8XeZP0KyGU4MeRYHbjduhrnjwaS6+FlvTBPmftBIjaMayu0xAqFn6izwey9CukMaIv+N+MYKHz7eUHiND1RUSZnCbh89xw0DGAe2pR/rbfs5pUlpStHUic5tqMQ8RblIJQsrALpk1Mub3e0K4uPBGeKoqmLB7I3eNuF3M+CXSiUm8VCy8KhaLruoUC+cd1i8WChl4kSuTh8iqqdhg90++5UXlfGABJuD8pY6Fg16weDavjZIQ7sOOKlKpL38Mk7uKPZMOrgziedHpm0dC1XWx54gJ3QR++QOcWr/e3z3dfOL9/fLl7vt9fF90Cn6sUhPAFbE/i7wO9vht3L+baWJsZAOjxgjhe4ESEQ65I0WDZ3ZCrhKoOCYR0xm5EjEGRYdn/a7xnyB4ddNF9uU2uN93dvrhFaxoXLSP76LL5vk/4qexLIlrCbMvCY+Zzwu40CeFI5A/RECLcIFZhUWcPBw14SyVKzIu+FDgM4zn/ZSAsFi/jusik58uioWNNZ+GJz4Bk+yE7M1HPqCXSUgMfKzZsokYYSG+W9dXhKvG1V1UMUZP3uSbMUUZHYfCOCslnifDCvf6ZYE4i9O/Pa1dqVq1Kb67FVS5imoyRmKfIt/o98ZoLFAp7CQgjBQFIO3XAslrj3SRGpsam75IF7rWYYv/wsV1cvZyb+705CIwywfFVvpG/SrsG14poWDHDfU8lcEAcYcOPBb45xjZuYHFqYu1Zs+zIgohbrksPWcVek+4O3IVjvtnzQTM1NYjh+VvYNRMauC/LRcivxhCKJhm7mYVm2jx+pfTR7Q3FX7i8ZQCLx0SP7gR9O7IczuPPfb6o3IHCidyqsPsLzRhiuWWqnpjuKMLdjJkKWLaSNBCJMjo6NbhjXlOBKscL9+zki0FMdRZs5XpKjLlpq8gSESuhqNU2eAIjCNucvfiT3XYHxXVOVngfLPNADeTfp76eSv8ci/aFYqbeoopYsxBi1gzYnQGw1QOv+xGEwlSUoh2wXMGWTg/t3hqZe2YGNIFebVOacSFmJ6hz6Ydt5pxujdQ4BDZCT/aOgEjtXiyoyBjZ0XCr3dMG8DQ9WxAzvswtBizJDh7fDPhQv2YhnPMGQzTpti0TmsudwULTjbnIf/8NgGSm6qjDzexLESPFjcF00w89O+TojC2EYpLCBkKNWG4AZffJyBiicH265SmbPh/FpS6yCxpSr5gFbz1qMDIQNis6qoTeohsx/gkXjySihJV/QxtCKv15XUhUM0lqNWUBNZ+PfsdAOLc6x+E6NCGipATw9fGnBZIFhe8BELBYn5CddHu6LiR8c5CYNi0xfwfWxgZCETdJwtOhAREl9ard5V335UmDpGb/nQByxWUWUol77hYTLUdiR1OJewGYT1OGsCRSH+qJYF9HYLCTOIofx8JFsXi4537jDZtYaTnUt9IPNuO5TiYhFouXk3Nw9RhECLHHZy/qlxXCtogMp2pe455aAIDT2ikP1HspFK/yh0OeRcK/ZueTiIl1kVz4eMXC5MIx5eHJyEL2LyLUDPpb7p0Sn1UhFIluBMSCAYwRbstVE17qOA5S612cp9zfQNwuXlzksxQYr7J4a7oAGZeDPlj4dSmfJSARjrYsA0Wm47o9GM6nyxVL+y45Y8P0cRwMH7L45haLk/RquEmn5Jsvs8WrYTWcEnRdD7fGMo+DP7UEwpro14i2VrDABJ/qmLlWEFNC8V+na2X5L46n/G++kohYbIqOpgbnaokgGnQFQl84NOT7k+l8GAbVTqPpeTzYT4t8Gf2rfbVkTfDr9F25SWaRIE7cMlSBx00+NW1yPQjsbARCIBKpqzLC0SU7GX2jD1dijqZGqr9M0p2/Oh1p8gjD26p+DKAtHfO+gRbDelJtFKcuK7DGQeZouNu1CO12uzn7xG7mRRX25qqlRWEse5BEollEQaglMkLHswKMhYj1ReEImLk3PGkxhGWjVzxK0TR3nNg4aCFbN5RzNzaynoX3NrQdrZp1FYy/VsvtRdryhuvTrAGIchuHRLRMSWNBlQ5D2K4megYcYWbJ/rYo/I+1z3Pp9T73gRZLumC3JAbt87nQlHAI6X5JznT1UoYytK8huwvOmCs0H9jgplBYRJ8hHJ/YAAhlrJ7gxvnqO1BjxMZnVacFmNUdyXeIH6VSWrrFnjXn6B7YnfgCFfJkZ80kPStp/Z2viUIiQUWzNSDmlNoIs65PdZ6qNlA/0JzWA/pqZCBcq+lKSGfeEX8ckVnLio/ZCIFaF0lu5mO2/1t58km4phThbiJ6ZZPEsJF5fRIZqkx1FGHFIbaG7U0m8uWhyeSRDckoNazEN76650SJcj05pAuvuWMDtsI1XWOCsCmyaX6COCY4NN+fDcv3xzOx+XoQiQgrWvkAz+SQoYbG9su+/Aox+4Xjk5H1/utbPAsrQii8AbNOewnGvSpxbPosvY/8GkHYFbse9QNsLgIUb8aud3t1VTweLvev+/3L0WU5TpWYSUTIht7QX3CEvTDLmKEphuwlJ1bGKrrHF3q/y8OxcHUV1zx8ySmi6moTNvjCAlhm/IJBmyD0ubolirbSLUOxuhx2WNMmTuiwfNi7xYsCJeFXaX2ejHCnBHHi0P9r8kNN5EfmAi0drwmrL+5XuLpMSqTzbUdm7YaxMh6KetmGIBTJbiEes2mvXvMgXDIuJ8cVPx7NtK1hkpMRMsPIHlXo9LTaMZvrR5YYOjrztTdv5O6T/TdeUUtYocm6a4BIQhFFtNmsjJ81YGrwS+Tv1VW3NvIpyQhZapa5NB4P1ri9tHZHXEQ6JiR9UyHGhbv/T8pouun2HHGEzGfrzlsIw2YnqCzZz/g0TrkmEfkX6Rkb+ZNkhGzwbGo6vNeFu7pWw4S/NF9prwCoytbhn9SxJGdr+Mzc7sCOW0zY4QEG3wywOuGLcE61qj9zOTRL7ykIW4ItK6fLOOepL9MJyiWvbbxQxgXQ7hzu2Z/qYJymI0QbBEp+gleKamvWob88cV3wmUWHZm9hCsKOYEvoTEFPsUiA4RoGc3svfVutwlnX2MXxZIJkFa0LGkD8MjB21NAEGywoSVKlJtEo1TVunoKQOW5zJoaALcGiD24iwAScb7xSJHe7CNUlWNXnaLYJJJDu25fGXyFsV0E1nq6iXzmnIAN+UCYar0dqCloIGbuIz8jcGfodWoyUpaFByZQ/8dfQcOQWxe8Z4+DWoOQ1G8zyIVj25BYxQQCCE5FFZuj0WrDWh0QRDgVCKoiYcI0iazrccZM7Bc0NQ6jqRcZFDhcXmSsWmQqhJn9CuzFZEWIlgqrqEJzYPDWxv8SifcGKbqII28KX4YJIxRDwzfOANhZTQ4sGQKgabS7oQ8x0TUW/IWjQziHae9evD4WVrPXBPCmyFwgzlhz8uY+s0xoxPmgKhf/CxGvcZBqG7bpCBiFLtCvDEk5Uk4i+Bl0p9ZKxoE/4oCw/Q9nSwxB3mIaFzQ0QWeBmwpYrp8Pfu1fq2VjRzc5+/IR3ovzPVQpWj6GmIwsS/UiAxLORDWlaxVGbXyjuT7Z1sJK+2IGSeJ9sVyDEVy95K8DXK8O6XLklcifsqYSp17x5PHKvxlSl3Igbr3OOKK0yiyjgljkWpVz03l0NEXw4prngVa2Cm39NzzizpClv3aLxHqtbIw7MW4idSYh/1ikTajRqtU61HgzZ/hPJebav90azVtGsF5b5VFOkXnBrt2H/s/TMSm4RNDKCDF8nd/Sz/Y/ynYru4f4m0W7wPfpmZJZCvGTGA+K62ByPxIpYKpXZZD1ebqZT6sis2bZ/seL2w9OrbriLBBaAB7iGph+o2L5vChfjkbR8dFLrCasCfdtcqJsRlNf7n3fRDDFLWRCZqua8OZuzsDoX+RsEwEIiLGHMaxZTuXRDZAAZfb75ub8uEN7ZjbB2rX1hy5CRsXAMHUSldSunJk1giI10sHxGjqWRozckKGmn440RZ/CFIIgntNas7bfeKYsON4VQLhcpL+jyTP4/5eaf/3y73R8KtCU0eq8YQj5NJeN2hkxSCZVwqZ1Q07HJeM2IiqlsRzP0VdJN87RbtXjY3z/f/aEQ5nB1CWZD4V7LJWhArm8viSiRGIiFWnjrPzy/vhzzVySsN1te0xEK/RGuAFtbrRN11KxLJ3dAAUhj0dG/oqkMtUnZaYS0H7foXl0V8tcvr88PchU2pFUz2x5ohOJ1SEVQ9fXL0OLH3befj5dEAt04UBuh1WFtTPKpMegJ3VFEyl5dcFt8rpp7dagaZ55buL58vX3+quZp/0T4JGepeAR9a82tKYcC6dPj5bFotb1GvqJ3p7LrAa2dTtvhXQBa/CwPnuSvk1ct5l6sxPs7HdVI2aBqpnBNJ2ZMn55GqJeBwdLaWOSXs3ejMejPO6J0JMp40n0WNGklNqPecT6JFl33+vUpbUFZfG8njQHonbpMHcOXGp6qO/33ec96eIvvVbtPI9qPW3Avn0/dh4e4yTCB2oaBrq3XOqZH06ynyr+UvpEQ+B3rhg+3l9fulXtVvL40GsO/u9nlZebToF4SQOLTTPVuheMcEnv/4U9sn83MsszlhbkHxP7yXIp7mXeveS3ehYIuGt4Us4szzC/FwMral3iyn/ilc2UZx41qt14P24NeZcV3Es1czvxcNGOLfOFccu059+fPa9fW0dqh/1ksZrZA8NgC+E1W4WW2EPV4ZE9iCxEf4u12s9z055Vhrx22fRZyZceH/7jmAz7mzyXXTHx+u3SL0S9ohK8F93vWMHh+m/63Xc57QbdW9pqizEbiw5CHj3jRwHprSsx2+88uj4KimWo7H6EsBPxxd/sS6QqOIny5SGr3sqmWNFjevU1i/K5coWBaflhjBZ3MrktaxPwVhPni9eFwuM4T05roChoIz6k+UTAkOqo1G516OOyPWTKSx0xBABqihhrZ0E8wNuvaZA7pCfcGhLQbKBlbBOF394y9UNh8DNuIH5NFTwZr9hdiQ9sqsI9asOl0vpQSUTW6JTgJIQHClUuRkcso2cWlTot7kacLvwqqVPB0hqKZYUN5Cg55PIlK86W78al8atbF/70q6GVJ+aKF48rNH6+vDy+X+/3r4+3Pn0/PN1/vHr78+Fct/jKIxbffWMLgz+/f7uXqFHBZuMoaQ2LO2+NroNEGAmcR2wBZIwwzr24K4uPj/e3T0/M3guOf/5xM4j7aXLxIXx5VKGSLYS9pForgabYD0dVA1rfSak+abu2l26fp8993355v71/3Rwuee3hK6+v66p6x50Ld6DeJ8ojWnlYnWjHS+xIlfTmtCf74fvft6efj6/7lcKQSRgLpoq6t0sl5dbgVuurh5/7AFNBh/1P6gkSTpdXUNHHLl5j3ZfVDP3rsBmsM1xFyBh0KdgD15193N88/70VRWmMyNefh4DJpJcGQLNLf7PMqRUKbVoWmyZ8xSQHvv1snzFVYWxKEMinlcRNJa2vtYZsv5E6o40fpqagaSy9tPqVag4tLcPPt27evymmnTmnEa+Oeq+0VphBTlTBY4TgTeR2/KU4ECQYY4Vx1OAObHnHb1D6FWVRQy6/yKYmOmN605vWdTL0mIDwUMpu+ZGQxBZN6SVe6Rf9lpUP7aUQnsQeG/gosQ+694SXt9M72TJmoiKzwefgIQmVg/nnaR7lnInw4x9yLqgVoB316FCYXsBKXSjRGrCeKmwu8Bn5HbwIJubeXfYPPyiRmY+MZJNc97Pf7y5dIPiSOcF+wd81KJuazdSuYjL02IMFSt4RxnTdl8p4oZ81LFmzvRT2FUUgNaXZfGxvH59MIBbAroiUffz7f/bs3m1XSEX4x3YlUElMQSi1S74NxW3QsehyhWJgHq+aCU9ocjM4JgtleT/tEhAJYIX+4fKRr1dUvrtMeBGMwzcyyfYkuC+fsIhnpU4C4RTcb5bqlynsTyxKZbRg9+hzOCKCYJP5jIJRT8ciBJfTAJHGv4BZeHp9u7h7ubp4eD9Ra3LlZ3bOMLGNH99qmiUiRuRlWGcJdYqWf8JCKMF5l3gL8KVyrPDVyZCrSZGYSMEn/cWPwrq7vLdfo38+0S+AMRWrtSYtwjZm3aUfu+YlFn3eSN4AHDOEZ69bopmxsoyR7KqbTV8vvvii41/cJPxMXzSIVGkFUCmkv0iz01NFCos/bmXdiECEmLik7yym7/xLQVQmFjHYJk541QpoHvU/sBfpRNN2ZTerFxNgJ+1hhpm+cEkk9Go6wI51zpJqGOoTbfOcrnLUHOSUSp75hR8u/qDJhM/q4f0qbzYeCTlSuzYJihLhV4NJnsI/BadcFwt1M1Jo2ZcRXDtGfrnSaMZmqRnxMptQb9l376+n29vbp+VRQcl80LoiDetpzZlqyRD9d+LVIWQavkSPXPQmuButqMOcdV311TEeqNh2b5d6XwhuiqGz66poprhOrWnhc0WlvQL+aEw2yaidwte7J6YnuPhEsrQc141xXnJrKGJmFzPzFuy3Oo61IZoYLsBCnh3ZerJAiji8hlp7YPrAO6SkZsNwT1rCvEHqyxLgmuqlaihxZl5IXDhwHGqbke/HdFlgCcCxYS/1o6bE7ao4cZxQp+Bgn2dEG9vZqMew01pxhaN5QCGWcjyrjhLNtUFLGbbmz6oOAbib3Fm1zkg4FexFw1SEahd4Uy+ZUSRELgLjKEZOPFyk5QrV/UlLiLUnXNFTrtqanq+L7QHwpXkUsoTMCXCBCJ2e+P4wPF2KfN37DBm8O5AgbApmX2MZnXpTxk3h7uwTpvHXP3zT/NECtRsfcyjkjUUJum/06iWu5aeKUT8iqgVClo5LTOYaAN0KwyNEOtCS6fQ8uHkyAYMinykA1L4wM2Z8nupudsjlJJcJ+3K0xyExIjTyiYVQPb303Mmfrz6tC6paR59F/jwVrisoFKLSFgUlLy/gwuSVP9F3WRAerQNg8UQq3C/pTtWAC0CaSxnQwMu75TGKl3+Se7lwAAA5jSURBVLGLdySCMnPcOz1baINAI8gZSqGfngfVGw7ovU3irmkKE5t6M56ANYu0TYP8QMKgN3g3EbolD8gs1ufMVsdVN9fyzNSYycK4BZDtHhJhL6JjYNPcHcPq/9I8azHd7ZtMBH8ciu5L9v5XSfTHi1s8mD+dOmxOBq1Wkk02pRB1vMj4u3IRjkTYsoNEmu22tpQ2ruwzKdwOhoAruF0kq/roFgq/soPLU6EQ3ZvIp5PHG9H2ovg+VYYiRRMQ2ZIFj70IQmdmiS1LlJrPKKo8aV/aiHX5eE60we/uWHQP39+I75+DWzzG2kl8RKSN3cSJfmRuy14G0VW58X2inJp9oDndw9t8A9nuUsUZTWmvJG5ZfYSSHt2iuz8jTabo8578ImlzqTk9EhvQW0USmwvLswT2dpHEwNVjCB3bA0IdWzAjkfCOyV7dCafDxLjmLyJS7uvJZeYGfXkl3760ChSrnDNqUNM3FWtodxEm2g34XmBbDij1jIkwjGwLGtFO9lEPvCmvblr++doawd3hioz6nD3Nbi7d4tVLxMag1aLKHYsNr7X3bYTRczvt4cJA77Bv7pt4yrxEksMj5r154vkS6u6caPb47pJgPD6m7/1N6eExT/DFFt31qPIcW86vjfBEwYyyQy8MN/e+9JOdUoXQlLcgZI9V2Ilps9l2LJvB6S8yfNfNvz4ni+SP51f2+WN8NneZBf4kFkHTxzmzNHb9lINCAj5jiYOBMOEMMvUT1nRkztNSp9IQKjzMVWkmJREEq5rR3On+/vlBp3c/PzzfXx7pB/l94kQe8vZLn/e0Q2e4xqYQTI08dxILZzARobNJWz6DeH0KmkolbLVq5NluGzTwXjlO+gYhd/cHV3UoHK+PeVaCo8ntw32Ch8ejUeFo79jU2IwisYxoSkg5Uwx2zKN0TYQpTESwxx2IhF1AhjwiFX34s+aolFytenh6vLyWyAjS68vHlF5Kn3uIAV/CXmonhTE8TCBzqp44YLzyUhAmMhGKsyyopk3YE6tOn/GIh/tTZ7QF/qk2o89fvn///uVkMaIl1lo0ndEGzCDAcfkWffZURPsJWwnYLLQRJjARN+T8pw8Ox2vCQ2fR4s95y2XRyWwzOkUQm+uEdyuiUKPXEyE857UXn6h4lktF6MwDm4nI9OWp44firb9jofCI7WBfdtLz09k0DkFVeS9L9nBHkacqdn/kI6nBedRw2ztBx/fVt1w3aGVoWLtivDuDhGFDlnXngUCY4CO/jUaOpVW8SAmTe9iYycWgNQWzSBxs2sI4Qqetq3FQnG0myRf5Het2c9wgwEb0OU95DD5KMRvn01ibVsqnlv0pLysh3ve+C+mfhnmaOwojx65HEOpjdKKHGn6StQ07VBsqQ7hkJqztZPfgZFHHkfcYOd2crd2EqRc3Yeztt4bGAoMS+dFJhB1xEklO+WNgymY8mRwQ0Z0/Iwp1ozKYdHqOHSez2y9CCU9k5Aj1Nm3t7NBMHsNiyPqMHfQjo0M8jx4TGEXozMQmywphnd0jQBDXpixE4efJKlpKV2ezCztOAgtnqXsQb9q1VjQqYsCsVYwG6S2gtPpp8mSnEK34uV2xN1pC2YjNn8cec0f7LVhnrKTJAhxPEc+Z6PhhzHmbjtQmEPOO5H7Y5CJO18ok7oDTSE5XGttV6/OK5oyfVdnEVcpE6AxEIrlEBxFg9oRWniwFs96qOMScXGMfV6Q9MdoWrnTYFF6MqssGsylekNZzRZcFhScA0uUhpg8pdidFYfy0zjhCR+Sw6BHVTcRtvDEQlv+JQewwHo6chOaUBkfdoN8o0wfBuh9a9GVtHf+6uAuxXNGywdB2RyDUoxLn+Rl7XJ9EmJPnBZURTCg8sRgrdqjVrrqsOzhp630RnDP9OKSPgG3Hw8xmmL4/sdOKuvLtWDyhz0YTiTa8apyF0KnI7c2Setkn4upR6L1GN9nUi6w1W5o/pG4PS+wMqLqcd0Ftp3WapvUoJofCyUZmPIHKPMUvqrko3CSgSULoqKyO0ZsoxrGQW0Wjs1oY6Hzjz4ItuKtRfo4o+2p0ln4qtwb9nRPGfrSJmRzZP1IF5v64ENJhCflMnKMpCLE6f15I8yz0hMgY57Z7Z7Ta0NoffzaB46zX7P+249S33OKxTUzMrUxSiB8VKgxV1fQsyUyVa9MQSDgbMAWhE8ggmlm3eQfnBFR7v+Hs7lNa2hD/1Oj+hRKsYCwzFWrVfiotZdc2L4LZmd2GeIn9+Ll56QidtTjsAtZmQQkhTzzlqh2rRGx/Iknj3d8pd2C8qzmOdjcrTkZrmTyuULQRtu1WWRFbEG8yGUrK29JkEP8b0v2v+a20CMjLNrIm2FikyypOCLYjtih24/hgttOwls7JHUTlsc4wxwWl2+qF8dCezLbR2xAinSBW3XvaIKF6Te7bk6AJTQpFzn9ENcuMuTwtYTvJY2OS3Cfg02kqVBtsckGpteaxucSEsJmCJA2h05WbEKvsjC7X0bfksaAZJ5J6wjHnrPQoLO6oBVTrMHHsnoq3VCZGGpUKm6rR7nu8aacBSUXozKWTJOaoUcZgx8v1pb7NpbKx3wmko8qrG8xacBEcUpvBOBur7GiaGkkKc4nSqlmyNyBvj1NxpCN0ZlLbMCbOzAfGbyPvjmspdmPW60CH1x55CW5HwTUYaObnrUe72i66YlzRomrJm+7eGSNvZqb1U7VMBkJHmlkW9OoKpHRKdYocnurpnzL3ZE19tZBbwVGLBkj8MX1KX/Pdjp7eJwOzaYv5R1poGmD0awh3UqHigWGDZHa/Ynn6pVROSIY0c+TJ8/+7uFTOanmcywmqTwJXGoH7ozJrRpDHjlc9EyFRCfI4xZrhyvC7rCMaG3kZWvVN1C+rLeEbK5XFRWbpZCwPzSmlqtFshMRmSV2tkQj3zTg/Uo6l+faz1pNpXpZGnaUztSOF9EnLqnkEGjsYvx2hUwOR8ocsz6j+G1hvqyUayDunZzqLhroNlvdgGxV6FZj2lBVZRRMzb0PodK1qsnqIenMJuADbrh4SrP9eunQSqPW6ZHLwBmWzVoiFH68ATsIMBFkISRhg7tsqZH2jvRv2UNfGcfW43PvlvH6loZ4VxN0q5Fve26aPmsWO2upinWrpz0bo1Bd6ogrjv9WYhd6xmncQrlV+AaTfMVo/abp2hvn+KJElIyugomA0yQR4BkIS26gDkrxNBI9YKRw9sw0i1Gi/ZbquBzWrs5Ur5joriy4i+ZmmlEsIV1lT9DyExOFSipNJui4xS6c8oapOOFnqDM5JD7OtjSONu3xqLFhKM21rS2ImguzBn4WQRDdqXuCO2W0lzi9px1x9hRKXu4NpWjKAbunbQEnb44qu3YDOmW0tYe0kM8ynzcRbEDpQnwEFjc355PJEYwDlKDvYlq/Qq1WDsOfP+5Tmfi8MqjVPbstsPBE9O5ggb7lUjBMwosZpQ/9GhMSBCxLmisiLG0e5k2e/qnSTJi2EyKTokdFUeZa6vopKYd3idgwjCdpOuWpvR+g420oMokimrow5Ks5JxIwfSYctJBJBT9uy6S+VJxE9dmJsnSRG9MHozIGfjdDpr6PdHWLBkFn85275FtMK1bweP8EtCR7bKB4J5aJ2DxASMNXBo+6VhGizzB7wmxE6dWB3d4gy26plImQuAdF+UPESx3hpy16DdXN6Od4w80nNFKHFGk3hCGtZQB7INoO/gtDJ2d0dMh++reKIB7DGXBdSXrZBPzCeDPmm12wYgiqCsToU6wDVR8ISrTBL3vfUUh8qgufpmLcjdEafpsbzbypjtzaCKyYzuCRGJ1cyyHGLhODGDNDFFFRQ1QcVwTtUajeNGeovRm8Z9JsQ0kVyDc0P3JGGTu+KzoozmxYf3CfBS20wZXefYXIEaCQ+MzuT1dMxlHUTJCd+3wshCYp7ek5CXF9wnmnU1IBMVZTMeTmRn6tSlrE8WSymbkAOdWGgCdkbRl4N4jA5df+OCB3HXxhihVhDipHrZ7WcuViCsm5xTaj8WLXhjYFDyFuIBFTDiaen9oWGA4Gaq2n2AH8boeMRlW7cteRbaS8Kbk44u5jS3e4iDNOLxAwTw43OEovQzFyO1vVLxqMgDCxnD+8dENIOoZoJyuoHl0F4ha6zZdNsprUESwu3I7pGMJYgsGU2l9NrJemDaIB4CfujEDrYytWapLwtj2ha7nIbaRZmEGoTW9cI4WyL7HmYvPaqNI83IXwgQlodayedmKF0ybwla/RG+Z17Ynwl6CCmMwUl7aRDJ2hGOubdETpOj9j/hGZNkefw5FYFRj5A6JRWJ6ozzTrkJu7hQ8Ld+ehXx/nrCJ3dFFTjGKV7KbsWTF3PlOWq50d0jbk1xSrWMApxZzZuZQ/nAxAScVwvYhhhj1rEktzNzsxv2GumTV2jMr29mA9L3IpVLnsoH4SQOADjRRfZOofEux3CH64Y7VykJW9mGhR6g/FsPK9Hd1kl83O2equJf1+EhI9TEOYiSoedp9RmaT8z7lDl+q2YyeZzods4R/hHfYAlzB7CByMk8tgDfjkhzUB4GVggWP5shSFs8dzA6TUTmOhc/zfk7x0ROtR2TOowbj0iS3W4GaH7+tQ3fX84LKfDQ6g7BvXRe4ztfRA6DvTZtiKngvpS0/NK3EvhOZtUeLhGrvab4qfovRASaiyB30k8OesNROA1hmDSGb3bsN4RIYmQO2PQ75Z+FSWk+8XNwaQ6es9BvStCSuU5semd5FPQTqODtfYa9Bujdx7QuyMk1OpOwaTSbUYTvinY+ClhwzUY11H2xd9MH4GQUqtToYevBjVP70AdAcY2xEVeLagQ4zGvnpngfTN9FEJGuNbe0NT8vB1Ua+yUaHYsAMp5XrNWrbf9DQl+l4POR7BO0Yci5LTD5Wow7G9Wuqa4WG36w6Bahrvsn/8u/T9/v53EYER7zQAAAABJRU5ErkJggg=="
                alt="ooga booga text"
                className="w-32 h-18 rounded"
              />
              <div className="ml-4">
                <h1 className="text-3xl font-bold text-black">
                  Appointment With{" "}
                  {advisor.first_name + " " + advisor.last_name}
                </h1>
                <div className="flex mt-3">
                  <p className="mr-6 text-black">
                    {format(new Date(date), "ccc, LLL d")}
                  </p>
                  <p className="mr-6 text-black">{getTimeString(time)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-between w-[660px]">
            <label
              htmlFor="firstName"
              className="border border-black text-black rounded p-3 w-80 mb-4"
            >
              {user.first_name}
            </label>
            <label
              htmlFor="lastName"
              className="border border-black text-black rounded p-3 w-80 mb-4"
            >
              {user.last_name}
            </label>
            <label
              htmlFor="phone"
              className="border border-black text-black rounded p-3 w-80 mb-4"
            >
              {user.phone}
            </label>
            <label
              htmlFor="email"
              className="border border-black text-black rounded p-3 w-80 mb-4"
            >
              {user.email}
            </label>
            <input
              type="text"
              name="bookerLocation"
              className="border border-black text-black rounded p-3 w-80 mb-4"
              placeholder="Location (IN-PERSON or ONLINE)"
              onChange={handleChangeInput}
              value={inputs.bookerLocation}
            ></input>
            <input
              type="text"
              name="bookerDescription"
              className="border border-black text-black rounded p-3 w-80 mb-4"
              placeholder="Description (Optional)"
              onChange={handleChangeInput}
              value={inputs.bookerDescription}
            ></input>
            <button
              className="bg-yellow-600 hover:bg-yellow-500 w-full p-3 text-white font bold rounded disabled bg:gray-300"
              onClick={handleClick}
            >
              {loading ? (
                <CircularProgress color="inherit" />
              ) : (
                "Book Appointment"
              )}
            </button>
            <p className="mt-4 text-sm text-black">
              By clicking "Book Appointment" you agree to the PAWs Terms of Use
              and Privacy Policay. Standard text message rates may apply. You
              may opt out of receiving text messages at any time
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
