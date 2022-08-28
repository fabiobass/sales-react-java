import './App.css';
import { useState } from 'react';
import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/PieChartCard';
import SalesByDate from './components/SalesByDate';
import SalesSummary from './components/SalesSummary';
import SalesTable from './components/SalesTable';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['São Paulo', 'Uberlândia', 'Alagoas']}
            series={[40, 30, 30]}
          />
          <PieChartCard
            name="Pagamento"
            labels={['Crédito', 'Débito', 'Dinheiro']}
            series={[20, 50, 30]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
