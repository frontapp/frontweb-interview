import { Baggu } from './Baggu';
import { Better } from './Better';
import { Bombas } from './Bombas';
import { BostonConsultingGroup } from './BostonConsultingGroup';
import { Branch } from './Branch';
import { Clickup } from './Clickup';
import { CultureAmp } from './CultureAmp';
import { Echo } from './Echo';
import { Essentialist } from './Essentialist';
import { GoDaddy } from './GoDaddy';
import { Hootsuite } from './Hootsuite';
import { IHG } from './IHG';
import { MongoDb } from './MongoDb';
import { Navan } from './Navan';
import { Reddit } from './Reddit';
import { Spruce } from './Spruce';
import { Stripe } from './Stripe';
import { UberFreight } from './UberFreight';
import { YCombinator } from './YCombinator';
import { Zoom } from './Zoom';

export const LogoNames = {
  Baggu: Baggu,
  Better: Better,
  Bombas: Bombas,
  BostonConsultingGroup: BostonConsultingGroup,
  Branch: Branch,
  Clickup: Clickup,
  CultureAmp: CultureAmp,
  Echo: Echo,
  Essentialist: Essentialist,
  GoDaddy: GoDaddy,
  Hootsuite: Hootsuite,
  IHG: IHG,
  MongoDb: MongoDb,
  Navan: Navan,
  Reddit: Reddit,
  Spruce: Spruce,
  Stripe: Stripe,
  UberFreight: UberFreight,
  YCombinator: YCombinator,
  Zoom: Zoom,
} as const;

export type LogoNameType = keyof typeof LogoNames;

export type LogoProps = {
  type: LogoNameType,
  width?: number,
  height?: number,
} & React.SVGProps<SVGSVGElement>;

const Logo: React.FC<LogoProps> = ({ type, ...props }) => {
  const LogoComponent = LogoNames[type];

  return (
    <LogoComponent {...props} />
  );
};

export default Logo;
