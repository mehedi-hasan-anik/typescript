export interface PersonProps {
  name: {
    first: string;
    last: string;
  };
  names: {
    first: string;
    last: string;
  }[];
}

export type accountType = "basic" | "premium";
