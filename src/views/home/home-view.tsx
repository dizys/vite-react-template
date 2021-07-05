import classNames from 'classnames';
import React, {useCallback} from 'react';
import {observer} from 'mobx-react-lite';
import {Button} from 'antd';
import {useEntrances} from 'hooks';
import {runInAction} from 'mobx';
import styled from 'styled-components';

const Wrapper = styled.div``;

export interface HomeViewProps {
  className: string;
}

export const HomeView: React.FC<HomeViewProps> = observer(props => {
  const {className} = props;
  const {countService} = useEntrances();

  const onPlusOneButtonClick = useCallback(() => {
    runInAction(() => {
      countService.count += 1;
    });
  }, [countService]);

  const onResetButtonClick = useCallback(() => {
    runInAction(() => {
      countService.count = 0;
    });
  }, [countService]);

  return (
    <Wrapper className={classNames('home-view', className)}>
      Hello, App!
      <div>
        {countService.count}
        <Button type="primary" onClick={onPlusOneButtonClick}>
          +1
        </Button>
        <Button onClick={onResetButtonClick}>Reset</Button>
      </div>
    </Wrapper>
  );
});

HomeView.Wrapper = Wrapper;
