/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import CapgeminiHrFlow360ListCardView from './index';

import { configProps, operatorDetails } from './mock';

const meta: Meta<typeof CapgeminiHrFlow360ListCardView> = {
  title: 'CapgeminiHrFlow360ListCardView',
  component: CapgeminiHrFlow360ListCardView,
  excludeStories: /.*Data$/
};

export default meta;
type Story = StoryObj<typeof CapgeminiHrFlow360ListCardView>;

export const BaseCapgeminiHrFlow360ListCardView: Story = (args: any) => {
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
            updateFieldValue: () => {
              /* nothing */
            },
            triggerFieldChange: () => {
              /* nothing */
            }
          };
        },
        ignoreSuggestion: () => {
          /* nothing */
        },
        acceptSuggestion: () => {
          /* nothing */
        },
        setInheritedProps: () => {
          /* nothing */
        },
        resolveConfigProps: () => {
          /* nothing */
        }
      };
    }
  };

  return (
    <>
      <CapgeminiHrFlow360ListCardView {...props} {...args} />
    </>
  );
};

BaseCapgeminiHrFlow360ListCardView.args = {
  label: configProps.label
};
