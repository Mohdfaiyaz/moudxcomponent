import React from 'react';
import { withConfiguration } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from '../shared/PConnProps';

import StyledCapgeminiHrFlow360TimelineWrapper from './styles';

type StageInfoDisplay = 'all' | 'active' | 'none';

interface TimelineItem {
  pyHeaderText?: string;
  pyLabel?: string;
  pyStatusValue?: string;
  pyNote?: string;
  pyGUID?: string;
}

interface CapgeminiHrFlow360TimelineProps extends PConnFieldProps {
  showStatus?: boolean;
  stageInfoDisplay?: StageInfoDisplay;
}

function CapgeminiHrFlow360Timeline(props: CapgeminiHrFlow360TimelineProps) {
  const { getPConnect, showStatus = true, stageInfoDisplay = 'all' } = props;

  const timelineValue = getPConnect?.().getValue('.TimelineData');

  const timelineData: TimelineItem[] = Array.isArray(timelineValue) ? timelineValue : [];

  const getStatusClass = (status = ''): string => {
    const normalizedStatus = status.trim().toLowerCase();

    switch (normalizedStatus) {
      case 'completed':
        return 'completed';

      case 'in progress':
      case 'inprogress':
        return 'inProgress';

      case 'pending':
      default:
        return 'pending';
    }
  };

  /*
   * Apply the appropriate layout class.
   *
   * active: 45% timeline and 55% information panel
   * all: information displayed inline
   * none: timeline only
   */
  const getLayoutClass = (): string => {
    switch (stageInfoDisplay) {
      case 'active':
        return 'active-layout';

      case 'none':
        return 'timeline-only-layout';

      case 'all':
      default:
        return 'inline-layout';
    }
  };

  /*
   * Find the current active stage.
   * Only this stage appears in the right-side panel.
   */
  const activeStage = timelineData.find(
    item => getStatusClass(item.pyStatusValue) === 'inProgress'
  );

  return (
    <StyledCapgeminiHrFlow360TimelineWrapper>
      <div className={`timeline-layout ${getLayoutClass()}`}>
        <div className='timeline-section'>
          {timelineData.map((item: TimelineItem, index: number) => {
            const statusClass = getStatusClass(item.pyStatusValue);

            const showHeader =
              index === 0 || item.pyHeaderText !== timelineData[index - 1]?.pyHeaderText;

            const itemKey = item.pyGUID || `${item.pyHeaderText}-${item.pyLabel}-${index}`;

            /*
             * In "all" mode, stage information is shown
             * inline under the corresponding stage.
             */
            const showInlineStageInformation = stageInfoDisplay === 'all' && Boolean(item.pyNote);

            return (
              <div className='timeline-row' key={itemKey}>
                <div className='header-column'>{showHeader ? item.pyHeaderText : ''}</div>

                <div className='timeline-column'>
                  {index !== timelineData.length - 1 && <div className='vertical-line' />}

                  <div
                    className={`circle ${statusClass}`}
                    role='img'
                    aria-label={`${item.pyLabel}: ${item.pyStatusValue || 'Pending'}`}
                  />
                </div>

                <div className='content-column'>
                  <div className='label'>{item.pyLabel}</div>

                  {showStatus && item.pyStatusValue && (
                    <div className={`status-badge ${statusClass}`}>{item.pyStatusValue}</div>
                  )}

                  {showInlineStageInformation && (
                    <div
                      className='note inline-stage-information'
                      dangerouslySetInnerHTML={{
                        __html: item.pyNote || ''
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {stageInfoDisplay === 'active' && (
          <aside className='stage-information-section' aria-label='Active stage information'>
            {activeStage?.pyNote ? (
              <div className='stage-information-card'>
                <div
                  className='note'
                  dangerouslySetInnerHTML={{
                    __html: activeStage.pyNote
                  }}
                />
              </div>
            ) : (
              <div className='stage-information-card'>
                <h3 className='stage-information-heading'>About this stage</h3>

                <p className='note'>No information is available for the active stage.</p>
              </div>
            )}
          </aside>
        )}
      </div>
    </StyledCapgeminiHrFlow360TimelineWrapper>
  );
}

export default withConfiguration(CapgeminiHrFlow360Timeline);
