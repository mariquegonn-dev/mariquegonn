import React from "react";

export type PersonalType = {
  text: string | React.ReactNode;
}[];

export type PersonalProps = {
  config: PersonalType;
};
