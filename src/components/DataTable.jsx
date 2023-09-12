import { SvgDataflowCompact, SvgFilterbar, SvgTable } from '../svg-components';
import './DataTable.css';

export const DataTable = () => {
  return (
    <div className="vuu-section vuu-table-ui">
      <div className="vuu-section vuu-table-filterbar">
        <SvgFilterbar />
        <div className="vuu-dataflow">
          <SvgDataflowCompact />
        </div>
      </div>
      <div className="vuu-section vuu-table-main">
      <SvgTable />
      <div className="vuu-dataflow">
        <SvgDataflowCompact />
      </div>
      </div>
    </div>
  );
};
