import React from 'react';
import {observer} from 'mobx-react-lite';

export interface TestViewProps {}

export const TestView = observer((props: TestViewProps) => {
  return <div>Hello, TestView!</div>;
});
