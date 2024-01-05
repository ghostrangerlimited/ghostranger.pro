import { ReactNode } from 'react';

import { AppConfig } from '../../utils/app-config';
import { Footer } from './footer';
import { Meta } from './meta';

type IBaseProps = {
  children?: ReactNode;
};

const Base = (props: IBaseProps) => {
  return (
    <div className="antialiased text-neutral-200">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {props.children}
      <Footer />
    </div>
  )
};

export { Base };
