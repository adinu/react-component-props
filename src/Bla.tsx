import * as React from "react";
import { BarChart } from "recharts";

// implementation
export interface ButtonProps extends React.ComponentProps<typeof BarChart> {
  specialProp?: string;
}
export function Button(props: ButtonProps) {
  const { specialProp, ...rest } = props;
  console.log("rest", rest);
  // do something with specialProp
  return <button {...rest} />;
}

// usage
export default function Bla() {
  // Type '"foo"' is not assignable to type '"button" | "submit" | "reset" | undefined'.(2322)
  // return <Button type="foo"> sldkj </Button>

  // no error
  return <Button> text </Button>;
}
