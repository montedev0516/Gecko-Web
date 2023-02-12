import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffectOnce } from "../../../hook/useEffectOnce";
import useToken from "../../../hook/useToken";

function TrendingTokens() {
  const { getTrendingTokens } = useToken();
  const [tokens, setTokens] = useState([]);

  useEffectOnce(() => {
    async function getTrendingTokensData() {
      const res = await getTrendingTokens();
      setTokens(res);
    }
    getTrendingTokensData();
  });

  return (
    <div className="TredingTokenBG text-white p-8">
      <div className="rounded-[18px] dark:bg-gradient-to-r to-[#BA4DF9]/0 from-[#BA4DF9] p-[1px]">
        <div className="bg-[#F6F6F6] dark:bg-[#21232C] rounded-[18px] p-5">
          <div className="flex justify-between w-full items-center mb-6">
            <div className="flex justify-start items-center gap-3">
              <img src="/img/icons/star.png" alt="" className="h-8 w-8" />
              <p className="text-[#101115] dark:text-white text-lg font-bold">
                New Tokens
              </p>
            </div>
            {/* <p className="text-[#BA4DF9] text-lg cursor-pointer flex items-center">
              View More <ChevronRightIcon />
            </p> */}
          </div>
          <div className="flex justify-between items-center gap-3">
            {tokens.map((row, key) => {
              return (
                <div
                  className="flex w-full gap-2 items-center bg-[#E9E9E9] dark:bg-[#121318] rounded-[15px] px-4 py-2 text-[#101115] dark:text-white"
                  key={key}
                >
                  <img src={row?.logo} alt="" className="h-10 w-10" />
                  <div>
                    <p className="text-[20px] font-[400]">
                      {row?.name}
                      <span className="text-[16px] text-[#9B9B9B] font-[400] pl-2">
                        {row?.symbol}
                      </span>
                    </p>
                    <p className="text-[#16C784] text-md font-normal flex justify-start items-center">
                      <KeyboardArrowDownIcon />
                      {row?.volume_change_24h?.toFixed(2)}%
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingTokens;
