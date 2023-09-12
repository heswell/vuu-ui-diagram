import { useState } from 'react';
import { SvgTable } from './svg-components/svg-table';
import { SvgDatasource } from './svg-components/svg-datasource';
import { SvgSingleton } from './svg-components/svg-singleton';
import { SvgDataflow } from './svg-components/svg-dataflow';
import { SvgDataflowCompact } from './svg-components/svg-dataflow-compact';
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
                <div className="vuu-section vuu-table-ui">
                  <SvgTable />
                </div>
                <div className="vuu-section vuu-table-ds">
                  <header data-align="center">
                    <em>Remote</em> Datasource
                  </header>
                  <SvgDatasource />
                  <div className="vuu-dataflow">
                    <SvgDataflow />
                  </div>
                  <div className="vuu-dataflow" data-align="right">
                    <SvgDataflow />
                  </div>
                </div>
              </div>
              <div className="vuu-section vuu-table vuu-table-prices">
                <header>Prices</header>
                <div className="vuu-section vuu-table-ui">
                  <SvgTable />
                </div>
                <div className="vuu-section vuu-table-ds">
                  <header data-align="center">
                    <em>Remote</em> Datasource
                  </header>
                  <SvgDatasource />
                  <div className="vuu-dataflow">
                    <SvgDataflow />
                  </div>
                  <div className="vuu-dataflow" data-align="right">
                    <SvgDataflow />
                  </div>
                </div>
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
          <button
            className={`${index === 0 ? 'vuu-button-active' : 'vuu-button'}`}
            onClick={() => setIndex(0)}
          >
            1
          </button>
          <button
            className={`${index === 1 ? 'vuu-button-active' : 'vuu-button'}`}
            onClick={() => setIndex(1)}
          >
            2
          </button>
          <button
            className={`${index === 2 ? 'vuu-button-active' : 'vuu-button'}`}
            onClick={() => setIndex(2)}
          >
            3
          </button>
          <button
            className={`${index === 3 ? 'vuu-button-active' : 'vuu-button'}`}
            onClick={() => setIndex(3)}
          >
            4
          </button>
          <button
            className={`${index === 4 ? 'vuu-button-active' : 'vuu-button'}`}
            onClick={() => setIndex(4)}
          >
            5
          </button>
          <button
            className={`${index === 5 ? 'vuu-button-active' : 'vuu-button'}`}
            onClick={() => setIndex(5)}
          >
            6
          </button>
          <button
            className={`${index === 6 ? 'vuu-button-active' : 'vuu-button'}`}
            onClick={() => setIndex(6)}
          >
            7
          </button>
          <button
            className={`${index === 7 ? 'vuu-button-active' : 'vuu-button'}`}
            onClick={() => setIndex(7)}
          >
            8
          </button>
          <button
            className={`${index === 8 ? 'vuu-button-active' : 'vuu-button'}`}
            onClick={() => setIndex(8)}
          >
            9
          </button>
        </div>
        <button className="vuu-button" onClick={nextStage}>
          next
        </button>
      </div>
    </div>
  );
}

export default App;
