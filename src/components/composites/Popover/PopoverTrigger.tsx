import React from 'react';
import { PopoverContext } from './popover';

const PopoverTrigger = ({ children }: any) => {
  const { setPopoverTrigger } = React.useContext(PopoverContext);
  React.useEffect(() => {
    setPopoverTrigger(
      React.Children.map(children, (child) => {
        return React.cloneElement(
          child,
          {
            isDisabled: true,
            disabled: true,
            cursor: 'pointer',
            opacity: 0.8,
          },
          child.props.children
        );
      })
    );
  }, [setPopoverTrigger, children]);

  return null;
};

export default React.memo(PopoverTrigger);