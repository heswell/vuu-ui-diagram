import { SvgDataflowCompact, SvgDatasource } from '../svg-components';
import './RemoteDataSource.css';

export const RemoteDataSource = () => {
  return (
    <div className="vuu-section vuu-table-ds">
      <header data-align="center">
        <em>Remote</em> Datasource
      </header>
      <SvgDatasource />
      <div className="vuu-dataflow vuu-dataflow-right">
        <SvgDataflowCompact />
      </div>
    </div>
  );
};
