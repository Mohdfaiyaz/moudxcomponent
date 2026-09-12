/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import CapgeminiHrFlow360Timeline from './index';

import { configProps, operatorDetails } from './mock';

const meta: Meta<typeof CapgeminiHrFlow360Timeline> = {
  title: 'CapgeminiHrFlow360Timeline',
  component: CapgeminiHrFlow360Timeline,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof CapgeminiHrFlow360Timeline>;

if (!window.PCore) {
  window.PCore = {} as any;
}

window.PCore.getLocaleUtils = () => {
  return {
    getLocaleValue: (value: any) => {
      return value;
    }
  } as any;
};

window.PCore.getUserApi = () => {
  return {
    getOperatorDetails: () => {
      return new Promise(resolve => {
        // @ts-ignore
        resolve(operatorDetails);
      });
    }
  } as any;
};

export const BaseCapgeminiHrFlow360Timeline: Story = (args: any) => {

  const props = {
    label: configProps.label,
    createOperator: configProps.createOperator,
    updateOperator: configProps.updateOperator,
    createDateTime: configProps.createDateTime,
    updateDateTime: configProps.updateDateTime,

    getPConnect: () => {
      return {
        getActionsApi: () => {
          return {
            updateFieldValue: () => {/* nothing */},
            triggerFieldChange: () => {/* nothing */}
          };
        },
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      };
    }
};

return (
    <>
      <CapgeminiHrFlow360Timeline {...props} {...args} />
    </>
  );
};

BaseCapgeminiHrFlow360Timeline.args = {
  createLabel: configProps.createLabel,
  updateLabel: configProps.updateLabel,
  hideLabel: configProps.hideLabel
};
