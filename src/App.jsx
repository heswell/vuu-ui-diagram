import { useState } from 'react';
import { SvgTable } from './svg-components/svg-table';
import { SvgDataflow, SvgDatasource } from './svg-components';
import { SvgSingleton } from './svg-components/svg-singleton';
import { SvgDataflowCompact } from './svg-components/svg-dataflow-compact';
import { DataTable, RemoteDataSource } from './components';

import './App.css';

const stages = [
  'vuu-stage-1',
  'vuu-stage-2',
  'vuu-stage-3',
  'vuu-stage-4',
  'vuu-stage-5',
  'vuu-stage-6',
  'vuu-stage-7',
  'vuu-stage-8',
  'vuu-stage-9',
  'vuu-stage-10',
];

function App() {
  const [index, setIndex] = useState(0);
  const stage = stages[index];

  const nextStage = () => {
    console.log('next stage');
    if (index < stages.length - 1) {
      setIndex((i) => i + 1);
    }
  };
  const prevStage = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
    }
  };

  return (
    <div className={`vuu-presentation ${stage}`}>
      <div className="vuu-main">
        <div className="vuu-section vuu-browser">
          <header>Browser</header>
          <div className="vuu-section vuu-client">
            <div className="vuu-section vuu-tables">
              <div className="vuu-section vuu-table vuu-table-instruments">
                <header>Instruments</header>
                <DataTable />
                <RemoteDataSource />
              </div>
              <div className="vuu-section vuu-table vuu-table-prices">
                <header>Prices</header>
                <DataTable />
                <RemoteDataSource />
              </div>
            </div>
            <div className="vuu-section vuu-client-connectionManager">
              <header data-align="vertical">Connection Manager</header>
              <SvgSingleton />
            </div>
          </div>
          <div className="vuu-section vuu-worker">
            <header>WebWorker</header>
            <div className="vuu-worker-main">
              <div className="vuu-worker-main-dataflow">
                <SvgDataflowCompact />
              </div>
              <div className="vuu-worker-main-content">
                <div className=" vuu-section  vuu-worker-serverproxy">
                  <header data-align="vertical">Server Proxy</header>
                  <SvgSingleton />
                  <SvgDataflowCompact />
                </div>
                <div className="vuu-worker-viewports">
                  <div className="vuu-worker-main-dataflow">
                    <SvgDataflowCompact />
                  </div>
                  <div className="vuu-worker-viewport">
                    <header>Instruments</header>
                    <SvgDatasource />
                    <SvgDataflowCompact />
                  </div>
                  <div className="vuu-worker-viewport">
                    <header>Prices</header>
                    <SvgDatasource />
                    <SvgDataflowCompact />
                  </div>
                </div>
              </div>
            </div>

            <div className="vuu-section vuu-websocket">
              <header data-align="vertical">WebSocket</header>
              <SvgSingleton />
            </div>
          </div>
        </div>
        <div className="vuu-section vuu-server">
          <header data-align="center">Vuu Server</header>
          <SvgDatasource />
          <div className="vuu-dataflow">
            <SvgDataflow />
          </div>
        </div>
      </div>
      <div className="vuu-buttonbar">
        <button className="vuu-button" onClick={prevStage}>
          previous
        </button>
        <div className="vuu-stage-buttons">
          {stages.map((stage, i) => (
            <button
              className={`${index === i ? 'vuu-button-active' : 'vuu-button'}`}
              onClick={() => setIndex(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button className="vuu-button" onClick={nextStage}>
          next
        </button>
      </div>
    </div>
  );
}

export default App;
