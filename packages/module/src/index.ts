import colorNamed from '@tinyfe/color-keywords';
export interface IOptions {
  test: boolean;
}

export default function getSomethings(options: IOptions) {
  console.log(options, colorNamed);
}
