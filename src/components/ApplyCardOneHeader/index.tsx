import React from "react";

import { Text } from "components";

type ApplyCardOneHeaderProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "usertitle"
> &
  Partial<{ usertitle: string }>;

const ApplyCardOneHeader: React.FC<ApplyCardOneHeaderProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[156px] py-8 w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-blue_gray-800 text-xl w-auto"
                    size="txtOpenSansBold20"
                  >
                    {props?.usertitle}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ApplyCardOneHeader.defaultProps = { usertitle: "Make this Card yours" };

export default ApplyCardOneHeader;
