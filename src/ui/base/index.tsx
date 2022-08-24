import { ReactNode } from 'react';

import { AppConfig } from '../../utils/app-config';
import { Footer } from './footer';
import { Meta } from './meta';

type IBaseProps = {
  children?: ReactNode;
};

const Base = (props: IBaseProps) => (
  <div className="antialiased text-gray-400">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {props.children}
    <Footer />
  </div>
);

export { Base };
